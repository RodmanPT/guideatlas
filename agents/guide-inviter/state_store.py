from __future__ import annotations

import json
from collections import Counter
from pathlib import Path
from typing import Any


SUCCESS_STATUS = "sent"


class InvitationStore:
    def __init__(self, file_path: Path) -> None:
        self.file_path = file_path
        self.file_path.parent.mkdir(parents=True, exist_ok=True)
        self._records: list[dict[str, Any]] = self._read()
        self._successful_usernames = {
            str(record.get("username", "")).strip().lower()
            for record in self._records
            if str(record.get("status", "")) == SUCCESS_STATUS
        }
        self._sent_by_date = Counter(
            str(record.get("sent_at", ""))[:10]
            for record in self._records
            if str(record.get("status", "")) == SUCCESS_STATUS
        )

    def _read(self) -> list[dict[str, Any]]:
        if not self.file_path.exists():
            return []
        try:
            payload = json.loads(self.file_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            return []
        if isinstance(payload, list):
            return [item for item in payload if isinstance(item, dict)]
        return []

    def _write(self) -> None:
        self.file_path.write_text(
            json.dumps(self._records, indent=2, ensure_ascii=False),
            encoding="utf-8",
        )

    def has_successful_invite(self, username: str) -> bool:
        return username.strip().lower() in self._successful_usernames

    def sent_count_for_date(self, date_iso: str) -> int:
        return int(self._sent_by_date.get(date_iso, 0))

    def append_attempt(self, attempt: dict[str, Any]) -> None:
        status = str(attempt.get("status", ""))
        username = str(attempt.get("username", "")).strip().lower()
        sent_at = str(attempt.get("sent_at", ""))

        self._records.append(attempt)
        if status == SUCCESS_STATUS and username:
            self._successful_usernames.add(username)
            if len(sent_at) >= 10:
                self._sent_by_date[sent_at[:10]] += 1
        self._write()

    @property
    def total_attempts(self) -> int:
        return len(self._records)
