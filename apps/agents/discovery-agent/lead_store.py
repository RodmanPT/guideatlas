import json
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path


@dataclass
class Lead:
    name: str
    platform: str
    city: str
    country: str
    profile_url: str
    contact_method: str
    discovered_at: str
    score: float = 0.0


class LeadStore:
    def __init__(self, file_path: Path) -> None:
        self.file_path = file_path
        self.file_path.parent.mkdir(parents=True, exist_ok=True)

    def _read(self) -> list[dict]:
        if not self.file_path.exists():
            return []
        try:
            return json.loads(self.file_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            return []

    def all(self) -> list[dict]:
        return self._read()

    def upsert_many(self, leads: list[Lead]) -> tuple[int, int]:
        existing = self._read()
        index = {
            self._lead_key(item.get("platform", ""), item.get("profile_url", "")): item
            for item in existing
        }

        created = 0
        updated = 0
        for lead in leads:
            item = lead.__dict__
            key = self._lead_key(item["platform"], item["profile_url"])
            if key in index:
                if item.get("score", 0) > index[key].get("score", 0):
                    index[key].update(item)
                    index[key]["updated_at"] = datetime.now(timezone.utc).isoformat()
                    updated += 1
            else:
                index[key] = item
                created += 1

        payload = sorted(index.values(), key=lambda x: x.get("discovered_at", ""), reverse=True)
        self.file_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
        return created, updated

    @staticmethod
    def _lead_key(platform: str, profile_url: str) -> str:
        return f"{platform.strip().lower()}::{profile_url.strip().lower().rstrip('/')}"
