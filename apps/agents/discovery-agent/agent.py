from __future__ import annotations

import logging
import time
from pathlib import Path

from config import settings
from instagram_scanner import scan_instagram
from lead_store import Lead, LeadStore
from reddit_scanner import scan_reddit
from web_scanner import scan_web_sources


def setup_logger(log_file: Path) -> logging.Logger:
    log_file.parent.mkdir(parents=True, exist_ok=True)
    logger = logging.getLogger("guide_discovery_agent")
    logger.setLevel(logging.INFO)
    logger.handlers.clear()

    formatter = logging.Formatter("%(asctime)s | %(levelname)s | %(message)s")

    stream = logging.StreamHandler()
    stream.setFormatter(formatter)
    logger.addHandler(stream)

    file_handler = logging.FileHandler(log_file, encoding="utf-8")
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)

    return logger


def score_lead(lead: Lead, keywords: list[str], target_cities: list[str]) -> float:
    text = f"{lead.name} {lead.profile_url}".lower()
    keyword_hits = sum(1 for k in keywords if k in text)
    keyword_score = min(4, keyword_hits) * 20

    location_score = 30 if lead.city in target_cities else 10

    tour_score = 30 if any(w in text for w in ["tour", "guide", "walk", "food"]) else 10

    return float(min(100, keyword_score + location_score + tour_score))


def run_scan_cycle(logger: logging.Logger, store: LeadStore) -> None:
    logger.info("Starting scan cycle")

    reddit_leads = scan_reddit(
        keywords=settings.keywords,
        cities=settings.cities,
        per_query_limit=settings.per_query_limit,
        user_agent=settings.user_agent,
        client_id=settings.reddit_client_id,
        client_secret=settings.reddit_client_secret,
        logger=logger,
    )

    instagram_leads = scan_instagram(
        keywords=settings.keywords,
        cities=settings.cities,
        per_query_limit=settings.per_query_limit,
        user_agent=settings.user_agent,
        session_id=settings.instagram_session_id,
        logger=logger,
    )

    web_leads = scan_web_sources(
        keywords=settings.keywords,
        cities=settings.cities,
        user_agent=settings.user_agent,
        logger=logger,
    )

    leads = reddit_leads + instagram_leads + web_leads

    for lead in leads:
        lead.score = score_lead(lead, settings.keywords, settings.cities)

    created, updated = store.upsert_many(leads)
    logger.info(
        "Cycle complete | scanned=%d | new=%d | updated=%d",
        len(leads),
        created,
        updated,
    )


def main() -> None:
    logger = setup_logger(settings.log_file)
    store = LeadStore(settings.data_file)

    logger.info("Guide Discovery Agent started")
    logger.info("Scan interval: every %d hour(s)", settings.scan_interval_hours)

    while True:
        try:
            run_scan_cycle(logger, store)
        except Exception as exc:  # noqa: BLE001
            logger.exception("Unexpected error in scan cycle: %s", exc)

        sleep_seconds = max(1, settings.scan_interval_hours) * 3600
        logger.info("Sleeping for %d seconds", sleep_seconds)
        time.sleep(sleep_seconds)


if __name__ == "__main__":
    main()
