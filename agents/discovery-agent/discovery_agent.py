#!/usr/bin/env python3
import json
import os
import random
import re
import subprocess
import sys
from pathlib import Path
from typing import Dict, List, Optional
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen


def _secret_values() -> List[str]:
    secrets = []
    token = os.getenv("GITHUB_TOKEN", "").strip()
    if token:
        secrets.append(token)
    return secrets


def _sanitize(text: str) -> str:
    result = text
    for secret in _secret_values():
        if secret:
            result = result.replace(secret, "***REDACTED***")
    return result


def run_cmd(args: List[str], cwd: Path, check: bool = True) -> subprocess.CompletedProcess:
    env = os.environ.copy()
    # Avoid inherited git env vars breaking repo detection inside containers.
    env.pop("GIT_DIR", None)
    env.pop("GIT_WORK_TREE", None)
    try:
        return subprocess.run(
            args,
            cwd=str(cwd),
            check=check,
            text=True,
            capture_output=True,
            env=env,
        )
    except subprocess.CalledProcessError as err:
        cmd = " ".join(args)
        stderr = (err.stderr or "").strip()
        stdout = (err.stdout or "").strip()
        detail = stderr or stdout or "no command output"
        raise RuntimeError(
            f"Command failed (exit {err.returncode}): {_sanitize(cmd)} | {_sanitize(detail)}"
        ) from None


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_text(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")


def parse_city_slugs(cities_ts: str) -> set:
    return {m.group(1).strip().lower() for m in re.finditer(r'slug:\s*"([^"]+)"', cities_ts)}


def escape_ts_string(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def pick_new_destinations(candidates: List[Dict], existing_slugs: set, max_count: int) -> List[Dict]:
    picked = []
    seen = set(existing_slugs)
    for city in candidates:
        slug = str(city.get("slug", "")).strip().lower()
        if not slug or slug in seen:
            continue
        picked.append(city)
        seen.add(slug)
        if len(picked) >= max_count:
            break
    return picked


def build_tours(city_name: str, city_slug: str) -> List[Dict[str, str]]:
    templates = [
        {
            "title": f"{city_name} Food and Markets Walk",
            "duration": "3 hours",
            "description": f"Discover local flavors and market culture in {city_name} with curated tasting stops.",
        },
        {
            "title": f"Hidden Corners of {city_name}",
            "duration": "2.5 hours",
            "description": f"Explore lesser-known neighborhoods and stories that show the local side of {city_name}.",
        },
        {
            "title": f"{city_name} History Highlights",
            "duration": "2 hours",
            "description": f"Walk through key landmarks and historical moments that shaped {city_name}.",
        },
        {
            "title": f"{city_name} Sunset Viewpoints",
            "duration": "2 hours",
            "description": f"Visit scenic viewpoints and photogenic routes around {city_name} at golden hour.",
        },
        {
            "title": f"{city_name} Culture and Street Life",
            "duration": "3.5 hours",
            "description": f"Experience neighborhood rhythms, architecture, and local culture in {city_name}.",
        },
        {
            "title": f"{city_name} Private Discovery Route",
            "duration": "3 hours",
            "description": f"A curated route through signature areas and hidden gems in {city_name}.",
        },
    ]

    seed = sum(ord(ch) for ch in city_slug)
    random.seed(seed)
    count = random.randint(3, 5)
    random.shuffle(templates)
    return templates[:count]


def insert_before_anchor(content: str, anchor: str, snippet: str) -> str:
    idx = content.find(anchor)
    if idx == -1:
        fn_match = re.search(r"export function [A-Za-z0-9_]+", anchor)
        if fn_match:
            fn_idx = content.find(fn_match.group(0))
            if fn_idx != -1:
                close_idx = content.rfind("};", 0, fn_idx)
                if close_idx != -1:
                    idx = close_idx
                else:
                    close_idx = content.rfind("}", 0, fn_idx)
                    if close_idx != -1:
                        idx = close_idx
                    else:
                        idx = fn_idx
    if idx == -1:
        raise RuntimeError(f"Could not find anchor '{anchor}'")
    return content[:idx] + snippet + "\n" + content[idx:]


def update_cities_ts(path: Path, destination: Dict) -> bool:
    content = read_text(path)
    if destination["slug"] in parse_city_slugs(content):
        return False

    city_line = (
        f'  {{ slug: "{escape_ts_string(destination["slug"])}", name: "{escape_ts_string(destination["name"])}", '
        f'country: "{escape_ts_string(destination["country"])}", latitude: {destination["latitude"]}, '
        f'longitude: {destination["longitude"]} }},'
    )
    updated = insert_before_anchor(content, "];\n\nexport function getCityBySlug", city_line)
    write_text(path, updated)
    return True


def render_ai_tour_block(slug: str, tours: List[Dict[str, str]]) -> str:
    rows = []
    for tour in tours:
        rows.append(
            "    {\n"
            f'      title: "{escape_ts_string(tour["title"])}",\n'
            f'      duration: "{escape_ts_string(tour["duration"])}",\n'
            f'      description: "{escape_ts_string(tour["description"])}",\n'
            "    },"
        )
    body = "\n".join(rows)
    return f'  "{escape_ts_string(slug)}": [\n{body}\n  ],'


def update_ai_tours_ts(path: Path, destination_slug: str, tours: List[Dict[str, str]]) -> bool:
    content = read_text(path)
    existing = {m.group(1).strip().lower() for m in re.finditer(r'^\s*"([^"]+)":\s*\[', content, re.M)}
    if destination_slug in existing:
        return False

    block = render_ai_tour_block(destination_slug, tours)
    updated = insert_before_anchor(content, "};\n\nexport function getAiToursByCity", block)
    write_text(path, updated)
    return True


def update_city_seo_intro_ts(path: Path, destination: Dict) -> bool:
    if not path.exists():
        return False

    content = read_text(path)
    existing = {m.group(1).strip().lower() for m in re.finditer(r'^\s*"([^"]+)":\s*"', content, re.M)}
    if destination["slug"] in existing:
        return False

    intro = (
        f'Discover the best tours in {destination["name"]}, '
        "from food walks to historical explorations led by local guides."
    )
    line = f'  "{escape_ts_string(destination["slug"])}": "{escape_ts_string(intro)}",'
    updated = insert_before_anchor(content, "};\n\nexport function getCitySeoIntro", line)
    write_text(path, updated)
    return True


def ensure_city_images_file(path: Path) -> None:
    if path.exists():
        return

    template = """export type CityImageSource = "unsplash" | "placeholder" | "legacy";

export type CityImageRecord = {
  city_image_url?: string;
  image_author?: string;
  image_source: CityImageSource;
};

export const CITY_IMAGE_MAP: Record<string, CityImageRecord> = {
};

export function getCityImage(citySlug: string): CityImageRecord | undefined {
  return CITY_IMAGE_MAP[citySlug];
}

export function getCityImageUrl(citySlug: string): string | undefined {
  return CITY_IMAGE_MAP[citySlug]?.city_image_url;
}
"""
    write_text(path, template)


def parse_city_image_slugs(city_images_ts: str) -> set:
    return {
        m.group(1).strip().lower()
        for m in re.finditer(r'^\s*"([^"]+)":\s*\{', city_images_ts, re.M)
    }


def fetch_unsplash_city_image(city_name: str, country_name: str) -> Optional[Dict[str, str]]:
    access_key = os.getenv("UNSPLASH_ACCESS_KEY", "").strip()
    if not access_key:
        return None

    queries = [
        f"{city_name} skyline",
        f"{city_name} cityscape",
        f"{city_name} downtown",
        f"{country_name} city skyline",
    ]

    base_url = "https://api.unsplash.com/search/photos"
    for query in queries:
        params = urlencode(
            {
                "query": query,
                "orientation": "landscape",
                "per_page": "5",
            }
        )
        request = Request(
            f"{base_url}?{params}",
            headers={
                "Authorization": f"Client-ID {access_key}",
                "Accept-Version": "v1",
                "User-Agent": "GuideAtlasDiscoveryAgent/1.0",
            },
        )

        try:
            with urlopen(request, timeout=20) as response:
                payload = json.loads(response.read().decode("utf-8"))
        except Exception:
            continue

        results = payload.get("results") or []
        if not results:
            continue

        candidate = results[0]
        urls = candidate.get("urls") or {}
        user = candidate.get("user") or {}
        image_url = (
            urls.get("regular")
            or urls.get("full")
            or urls.get("raw")
            or urls.get("small")
        )
        if not image_url:
            continue

        return {
            "city_image_url": str(image_url),
            "image_author": str(user.get("name", "")).strip(),
            "image_source": "unsplash",
        }

    return {
        "image_source": "placeholder",
    }


def render_city_image_entry(slug: str, image_data: Dict[str, str]) -> str:
    lines = [f'  "{escape_ts_string(slug)}": {{']
    if image_data.get("city_image_url"):
        lines.append(f'    city_image_url: "{escape_ts_string(image_data["city_image_url"])}",')
    if image_data.get("image_author"):
        lines.append(f'    image_author: "{escape_ts_string(image_data["image_author"])}",')
    source = image_data.get("image_source", "placeholder")
    lines.append(f'    image_source: "{escape_ts_string(source)}",')
    lines.append("  },")
    return "\n".join(lines)


def update_city_images_ts(path: Path, destination: Dict) -> bool:
    ensure_city_images_file(path)
    content = read_text(path)
    slug = destination["slug"]
    existing = parse_city_image_slugs(content)
    if slug in existing:
        return False

    image_data = fetch_unsplash_city_image(destination["name"], destination["country"]) or {
        "image_source": "placeholder"
    }
    block = render_city_image_entry(slug, image_data)
    updated = insert_before_anchor(content, "};\n\nexport function getCityImage", block)
    write_text(path, updated)
    return True


def ensure_required_env(name: str) -> str:
    value = os.getenv(name, "").strip()
    if not value:
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value


def parse_positive_int_env(name: str, default: int) -> int:
    raw = os.getenv(name, "").strip()
    if not raw:
        return default
    try:
        value = int(raw)
    except ValueError as exc:
        raise RuntimeError(f"Invalid integer for {name}: {raw}") from exc
    if value < 1:
        raise RuntimeError(f"{name} must be >= 1")
    return value


def resolve_repo_root() -> Path:
    configured = os.getenv("REPO_ROOT", "").strip()
    script_dir = Path(__file__).resolve().parent
    candidates = []
    if configured:
        candidates.append(Path(configured))
    candidates.extend(
        [
            Path.cwd(),
            script_dir,
            script_dir.parent,
            script_dir.parent.parent,
            Path("/workspace"),
            Path("/workspace/guideatlas"),
        ]
    )

    seen = set()
    for candidate in candidates:
        normalized = str(candidate.resolve())
        if normalized in seen:
            continue
        seen.add(normalized)

        cities_path = candidate / "site" / "data" / "cities.ts"
        ai_tours_path = candidate / "site" / "data" / "aiTours.ts"
        git_dir = candidate / ".git"
        if cities_path.exists() and ai_tours_path.exists() and git_dir.exists():
            return candidate

    checked = ", ".join(str(p) for p in candidates)
    raise RuntimeError(
        f"Expected project files or git metadata not found. Checked: {checked}. Ensure repository is mounted correctly."
    )


def git_commit_and_push(repo_root: Path, changed_files: List[Path], city_names: List[str]) -> None:
    github_token = ensure_required_env("GITHUB_TOKEN")
    github_repo = ensure_required_env("GITHUB_REPO")

    git_name = os.getenv("GIT_AUTHOR_NAME", "GuideAtlas AI Agent")
    git_email = os.getenv("GIT_AUTHOR_EMAIL", "bot@guideatlas.local")

    # Synology/Docker bind mounts often have different ownership than container user.
    # Mark repository as safe for this runtime to avoid "dubious ownership" failures.
    run_cmd(["git", "config", "--global", "--add", "safe.directory", str(repo_root)], cwd=repo_root)

    # Validate repository context before any write operations.
    run_cmd(["git", "-C", str(repo_root), "rev-parse", "--is-inside-work-tree"], cwd=repo_root)

    run_cmd(["git", "-C", str(repo_root), "config", "user.name", git_name], cwd=repo_root)
    run_cmd(["git", "-C", str(repo_root), "config", "user.email", git_email], cwd=repo_root)

    rel_paths = [str(path.relative_to(repo_root)).replace("\\", "/") for path in changed_files]
    run_cmd(["git", "-C", str(repo_root), "add", *rel_paths], cwd=repo_root)

    diff_check = run_cmd(["git", "-C", str(repo_root), "diff", "--cached", "--quiet"], cwd=repo_root, check=False)
    if diff_check.returncode == 0:
        print("No staged changes to commit.")
        return

    if len(city_names) == 1:
        commit_message = f"chore(ai): add curated tours for {city_names[0]}"
    else:
        joined = ", ".join(city_names[:2])
        suffix = " and others" if len(city_names) > 2 else ""
        commit_message = f"chore(ai): add curated tours for {joined}{suffix}"
    run_cmd(["git", "-C", str(repo_root), "commit", "-m", commit_message], cwd=repo_root)

    safe_token = quote(github_token, safe="")
    remote_url = f"https://x-access-token:{safe_token}@github.com/{github_repo}.git"
    
    branch_result = run_cmd(["git", "-C", str(repo_root), "rev-parse", "--abbrev-ref", "HEAD"], cwd=repo_root)
    github_branch = branch_result.stdout.strip()
    
    run_cmd(["git", "-C", str(repo_root), "push", remote_url, f"HEAD:{github_branch}"], cwd=repo_root)


def main() -> int:
    repo_root = resolve_repo_root().resolve()
    script_dir = Path(__file__).resolve().parent

    cities_path = repo_root / "site" / "data" / "cities.ts"
    ai_tours_path = repo_root / "site" / "data" / "aiTours.ts"
    city_images_path = repo_root / "site" / "data" / "cityImages.ts"
    seo_intro_path = repo_root / "site" / "data" / "citySeoIntros.ts"
    candidates_path = repo_root / "agents" / "discovery-agent" / "cities.json"
    if not candidates_path.exists():
        candidates_path = script_dir / "cities.json"

    if not cities_path.exists() or not ai_tours_path.exists() or not candidates_path.exists():
        raise RuntimeError("Expected project files not found. Ensure repository path is configured correctly.")

    min_new = parse_positive_int_env("MIN_NEW_CITIES_PER_RUN", 1)
    max_new = parse_positive_int_env("MAX_NEW_CITIES_PER_RUN", 1)
    if min_new > max_new:
        raise RuntimeError("MIN_NEW_CITIES_PER_RUN cannot be greater than MAX_NEW_CITIES_PER_RUN")

    existing_city_slugs = parse_city_slugs(read_text(cities_path))
    candidates = json.loads(read_text(candidates_path))
    requested_count = random.randint(min_new, max_new)
    destinations = pick_new_destinations(candidates, existing_city_slugs, requested_count)

    if not destinations:
        print("No new destination available. Exiting.")
        return 0

    changed = []
    changed_set = set()
    added_names: List[str] = []
    for destination in destinations:
        tours = build_tours(destination["name"], destination["slug"])
        was_added = False
        if update_cities_ts(cities_path, destination):
            changed_set.add(cities_path)
            was_added = True
        if update_ai_tours_ts(ai_tours_path, destination["slug"], tours):
            changed_set.add(ai_tours_path)
            was_added = True
        if update_city_images_ts(city_images_path, destination):
            changed_set.add(city_images_path)
        if update_city_seo_intro_ts(seo_intro_path, destination):
            changed_set.add(seo_intro_path)
        if was_added:
            added_names.append(destination["name"])

    changed = list(changed_set)

    if not changed or not added_names:
        print("Nothing changed. Exiting.")
        return 0

    git_commit_and_push(repo_root, changed, added_names)
    print(f"Added cities: {', '.join(added_names)}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"Agent failed: {_sanitize(str(exc))}", file=sys.stderr)
        raise SystemExit(1)
