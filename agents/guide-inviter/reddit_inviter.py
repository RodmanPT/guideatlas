from __future__ import annotations

import json
import logging
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import praw
from praw.exceptions import RedditAPIException
from prawcore.exceptions import BadRequest, Forbidden, NotFound, RequestException, ServerError

from config import Settings


@dataclass
class RedditLead:
    username: str
    city: str
    country: str
    profile_url: str
    score: float
    discovered_at: str


def load_reddit_leads(
    leads_file: Path,
    target_cities: list[str],
    logger: logging.Logger,
) -> list[RedditLead]:
    if not leads_file.exists():
        logger.warning("Leads file not found: %s", leads_file)
        return []

    try:
        payload = json.loads(leads_file.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        logger.error("Leads file is not valid JSON: %s", leads_file)
        return []

    if not isinstance(payload, list):
        logger.error("Leads payload is not a list: %s", leads_file)
        return []

    allowed_cities = {city.lower() for city in target_cities}
    by_username: dict[str, RedditLead] = {}

    for item in payload:
        if not isinstance(item, dict):
            continue
        if str(item.get("platform", "")).strip().lower() != "reddit":
            continue

        username = _extract_username(item)
        if not username:
            continue

        city = str(item.get("city", "")).strip()
        if not city:
            continue
        if allowed_cities and city.lower() not in allowed_cities:
            continue

        lead = RedditLead(
            username=username,
            city=city,
            country=str(item.get("country", "unknown")).strip() or "unknown",
            profile_url=f"https://www.reddit.com/user/{username}",
            score=_to_float(item.get("score", 0)),
            discovered_at=str(item.get("discovered_at", "")).strip(),
        )

        existing = by_username.get(username.lower())
        if not existing or (lead.score, lead.discovered_at) > (existing.score, existing.discovered_at):
            by_username[username.lower()] = lead

    sorted_leads = sorted(
        by_username.values(),
        key=lambda lead: (lead.score, lead.discovered_at),
        reverse=True,
    )
    logger.info("Loaded %d unique Reddit leads from %s", len(sorted_leads), leads_file)
    return sorted_leads


def create_reddit_client(settings: Settings) -> praw.Reddit:
    missing = []
    if not settings.reddit_client_id:
        missing.append("REDDIT_CLIENT_ID")
    if not settings.reddit_client_secret:
        missing.append("REDDIT_CLIENT_SECRET")
    if not settings.reddit_username:
        missing.append("REDDIT_USERNAME")
    if not settings.reddit_password:
        missing.append("REDDIT_PASSWORD")

    if missing:
        raise RuntimeError(
            "Missing Reddit credentials for invite mode: " + ", ".join(missing)
        )

    return praw.Reddit(
        client_id=settings.reddit_client_id,
        client_secret=settings.reddit_client_secret,
        username=settings.reddit_username,
        password=settings.reddit_password,
        user_agent=settings.user_agent,
        check_for_async=False,
    )


def render_template(template: str, lead: RedditLead, signup_url: str) -> str:
    data = {
        "username": lead.username,
        "city": lead.city,
        "country": lead.country,
        "profile_url": lead.profile_url,
        "signup_url": signup_url,
    }
    return template.format(**data)


def send_invite(
    reddit: praw.Reddit | None,
    lead: RedditLead,
    subject: str,
    body: str,
    dry_run: bool,
) -> tuple[str, str]:
    if dry_run:
        return "dry_run_preview", ""
    if reddit is None:
        return "missing_client", "Reddit client is not initialized"

    try:
        reddit.redditor(lead.username).message(subject, body)
        return "sent", ""
    except RedditAPIException as exc:
        message = _reddit_api_error_to_text(exc)
        if "ratelimit" in message.lower():
            return "rate_limited", message
        return "api_error", message
    except Forbidden as exc:
        return "forbidden", str(exc)
    except NotFound as exc:
        return "not_found", str(exc)
    except BadRequest as exc:
        return "bad_request", str(exc)
    except ServerError as exc:
        return "server_error", str(exc)
    except RequestException as exc:
        return "request_error", str(exc)


def parse_rate_limit_wait_seconds(message: str) -> int:
    lowered = message.lower()
    minutes = re.search(r"(\d+)\s*minute", lowered)
    if minutes:
        return int(minutes.group(1)) * 60
    seconds = re.search(r"(\d+)\s*second", lowered)
    if seconds:
        return int(seconds.group(1))
    return 0


def auth_limit_snapshot(reddit: praw.Reddit) -> dict[str, Any]:
    limits = getattr(reddit.auth, "limits", None)
    if not isinstance(limits, dict):
        return {}
    return {
        "used": limits.get("used"),
        "remaining": limits.get("remaining"),
        "reset_timestamp": limits.get("reset_timestamp"),
    }


def _extract_username(lead_item: dict[str, Any]) -> str:
    raw_name = str(lead_item.get("name", "")).strip()
    if raw_name and raw_name.lower() != "unknown" and " " not in raw_name:
        return _normalize_username(raw_name)

    profile_url = str(lead_item.get("profile_url", "")).strip()
    match = re.search(r"/user/([^/?#]+)/?", profile_url)
    if match:
        return _normalize_username(match.group(1))
    return ""


def _normalize_username(value: str) -> str:
    normalized = value.strip().lstrip("/").removeprefix("u/").removeprefix("user/")
    return normalized.strip()


def _to_float(value: Any) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0.0


def _reddit_api_error_to_text(exc: RedditAPIException) -> str:
    try:
        return "; ".join(error.message for error in exc.items)
    except Exception:  # noqa: BLE001
        return str(exc)
