import os
from dataclasses import dataclass, field
from pathlib import Path


@dataclass
class Settings:
    scan_interval_hours: int = int(os.getenv("SCAN_INTERVAL_HOURS", "4"))
    per_query_limit: int = int(os.getenv("PER_QUERY_LIMIT", "15"))
    user_agent: str = os.getenv("USER_AGENT", "GuideAtlasDiscoveryAgent/0.1")

    # Optional Reddit API credentials (recommended). Agent falls back to public JSON search.
    reddit_client_id: str = os.getenv("REDDIT_CLIENT_ID", "")
    reddit_client_secret: str = os.getenv("REDDIT_CLIENT_SECRET", "")

    instagram_session_id: str = os.getenv("INSTAGRAM_SESSION_ID", "")

    cities: list[str] = field(
        default_factory=lambda: [
            c.strip()
            for c in os.getenv(
                "TARGET_CITIES",
                "Lisbon,Porto,Madrid,Barcelona,Rome,Paris,Tokyo,Bangkok,New York",
            ).split(",")
            if c.strip()
        ]
    )

    keywords: list[str] = field(
        default_factory=lambda: [
            "local guide",
            "walking tour",
            "food tour guide",
            "private guide",
        ]
    )

    data_file: Path = Path(os.getenv("DATA_FILE", "data/leads.json"))
    log_file: Path = Path(os.getenv("LOG_FILE", "logs/discovery-agent.log"))


settings = Settings()
