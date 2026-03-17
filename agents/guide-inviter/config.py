from __future__ import annotations

import os
from dataclasses import dataclass, field
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent


def _env_int(name: str, default: int, minimum: int = 0) -> int:
    raw = os.getenv(name, str(default)).strip()
    try:
        value = int(raw)
    except ValueError:
        value = default
    return max(minimum, value)


def _env_float(name: str, default: float, minimum: float = 0.0, maximum: float | None = None) -> float:
    raw = os.getenv(name, str(default)).strip()
    try:
        value = float(raw)
    except ValueError:
        value = default
    if maximum is not None:
        return min(maximum, max(minimum, value))
    return max(minimum, value)


def _env_csv(name: str) -> list[str]:
    raw = os.getenv(name, "").strip()
    if not raw:
        return []
    return [item.strip() for item in raw.split(",") if item.strip()]


def _env_path(name: str, default: Path) -> Path:
    raw = os.getenv(name, "").strip()
    if not raw:
        return default
    parsed = Path(raw).expanduser()
    if parsed.is_absolute():
        return parsed
    return (BASE_DIR / parsed).resolve()


@dataclass
class Settings:
    user_agent: str = os.getenv(
        "REDDIT_USER_AGENT",
        "GuideAtlasGuideInviter/0.1 by u/guideatlas-bot",
    )
    reddit_client_id: str = os.getenv("REDDIT_CLIENT_ID", "").strip()
    reddit_client_secret: str = os.getenv("REDDIT_CLIENT_SECRET", "").strip()
    reddit_username: str = os.getenv("REDDIT_USERNAME", "").strip()
    reddit_password: str = os.getenv("REDDIT_PASSWORD", "").strip()

    invite_subject_template: str = os.getenv(
        "INVITE_SUBJECT_TEMPLATE",
        "Invitation to test GuideAtlas in {city}",
    ).strip()
    invite_message_template: str = os.getenv(
        "INVITE_MESSAGE_TEMPLATE",
        (
            "Hi u/{username},\n\n"
            "I found your activity related to {city} and thought you might be a strong fit for GuideAtlas.\n"
            "We're inviting independent guides to test the platform early.\n\n"
            "Why join:\n"
            "- Build a professional public guide profile\n"
            "- Get discovered by travelers by city and interests\n"
            "- Keep control of your own bookings and payments\n\n"
            "Join here: {signup_url}\n\n"
            "If you want, I can also share a quick overview of how it works.\n"
            "- GuideAtlas team"
        ),
    )
    signup_url: str = os.getenv("GUIDE_SIGNUP_URL", "https://guideatlas.app/become-a-guide").strip()

    reddit_daily_invite_limit: int = _env_int("REDDIT_DAILY_INVITE_LIMIT", 50, minimum=1)
    daily_usage_ratio: float = _env_float("DAILY_USAGE_RATIO", 0.90, minimum=0.1, maximum=1.0)
    max_invites_per_run: int = _env_int("MAX_INVITES_PER_RUN", 100, minimum=1)

    min_seconds_between_invites: float = _env_float("MIN_SECONDS_BETWEEN_INVITES", 12.0, minimum=0.0)
    max_seconds_between_invites: float = _env_float("MAX_SECONDS_BETWEEN_INVITES", 24.0, minimum=0.0)

    target_cities: list[str] = field(default_factory=lambda: _env_csv("TARGET_CITIES"))

    leads_file: Path = field(
        default_factory=lambda: _env_path(
            "LEADS_FILE",
            BASE_DIR.parent / "guide-discovery" / "data" / "leads.json",
        )
    )
    state_file: Path = field(
        default_factory=lambda: _env_path(
            "STATE_FILE",
            BASE_DIR / "data" / "invitations.json",
        )
    )
    log_file: Path = field(
        default_factory=lambda: _env_path(
            "LOG_FILE",
            BASE_DIR / "logs" / "guide-inviter.log",
        )
    )

    def safe_daily_budget(self) -> int:
        return max(1, int(self.reddit_daily_invite_limit * self.daily_usage_ratio))

    def normalized_delay_bounds(self) -> tuple[float, float]:
        low = min(self.min_seconds_between_invites, self.max_seconds_between_invites)
        high = max(self.min_seconds_between_invites, self.max_seconds_between_invites)
        return low, high


settings = Settings()
