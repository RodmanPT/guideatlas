from __future__ import annotations

import argparse
import logging
import random
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

from config import settings
from reddit_inviter import (
    auth_limit_snapshot,
    create_reddit_client,
    load_reddit_leads,
    parse_rate_limit_wait_seconds,
    render_template,
    send_invite,
)
from state_store import InvitationStore


def setup_logger(log_file: Path) -> logging.Logger:
    log_file.parent.mkdir(parents=True, exist_ok=True)
    logger = logging.getLogger("guide_inviter_agent")
    logger.setLevel(logging.INFO)
    logger.handlers.clear()

    formatter = logging.Formatter("%(asctime)s | %(levelname)s | %(message)s")

    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(formatter)
    logger.addHandler(stream_handler)

    file_handler = logging.FileHandler(log_file, encoding="utf-8")
    file_handler.setFormatter(formatter)
    logger.addHandler(file_handler)

    return logger


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Invite Reddit guide leads to test GuideAtlas. "
            "Stops automatically when 90% (configurable) of daily invite budget is reached."
        )
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview invitations without sending Reddit DMs.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    logger = setup_logger(settings.log_file)
    store = InvitationStore(settings.state_file)

    today_iso = datetime.now(timezone.utc).date().isoformat()
    safe_daily_budget = settings.safe_daily_budget()
    sent_today = store.sent_count_for_date(today_iso)
    remaining_daily_budget = max(0, safe_daily_budget - sent_today)

    logger.info("Guide inviter run started | dry_run=%s", args.dry_run)
    logger.info(
        "Budget | reddit_daily_invite_limit=%d | daily_usage_ratio=%.2f | safe_daily_budget=%d | sent_today=%d | remaining=%d",
        settings.reddit_daily_invite_limit,
        settings.daily_usage_ratio,
        safe_daily_budget,
        sent_today,
        remaining_daily_budget,
    )

    if remaining_daily_budget <= 0:
        logger.info("Daily safe budget already reached. Nothing to do.")
        return 0

    run_budget = min(remaining_daily_budget, settings.max_invites_per_run)
    if run_budget <= 0:
        logger.info("Run budget is zero because MAX_INVITES_PER_RUN is zero.")
        return 0

    leads = load_reddit_leads(settings.leads_file, settings.target_cities, logger)
    if not leads:
        logger.info("No Reddit leads available for invites.")
        return 0

    eligible = [lead for lead in leads if not store.has_successful_invite(lead.username)]
    logger.info(
        "Eligible leads | total=%d | already_contacted=%d | run_budget=%d",
        len(eligible),
        max(0, len(leads) - len(eligible)),
        run_budget,
    )

    if not eligible:
        logger.info("All available Reddit leads have already been contacted.")
        return 0

    reddit = None
    if not args.dry_run:
        try:
            reddit = create_reddit_client(settings)
            me = reddit.user.me()
            logger.info("Authenticated as Reddit user: %s", me)
            logger.info("OAuth limits snapshot: %s", auth_limit_snapshot(reddit))
        except Exception as exc:  # noqa: BLE001
            logger.error("Cannot initialize Reddit client: %s", exc)
            return 1

    delay_low, delay_high = settings.normalized_delay_bounds()

    sent_in_run = 0
    failed_in_run = 0
    stopped_by_rate_limit = False

    for lead in eligible:
        if sent_in_run >= run_budget:
            logger.info("Reached run budget (%d). Stopping.", run_budget)
            break

        try:
            subject = render_template(settings.invite_subject_template, lead, settings.signup_url)
            body = render_template(settings.invite_message_template, lead, settings.signup_url)
        except Exception as exc:  # noqa: BLE001
            logger.error("Template rendering failed for u/%s: %s", lead.username, exc)
            failed_in_run += 1
            continue

        status, error = send_invite(reddit, lead, subject, body, args.dry_run)
        timestamp = datetime.now(timezone.utc).isoformat()

        store.append_attempt(
            {
                "username": lead.username,
                "city": lead.city,
                "country": lead.country,
                "profile_url": lead.profile_url,
                "score": lead.score,
                "status": status,
                "error": error,
                "sent_at": timestamp,
                "dry_run": args.dry_run,
            }
        )

        if status in {"sent", "dry_run_preview"}:
            sent_in_run += 1
            logger.info(
                "Invite %s | user=u/%s | city=%s | progress=%d/%d",
                status,
                lead.username,
                lead.city,
                sent_in_run,
                run_budget,
            )
            if status == "sent" and reddit is not None:
                logger.info("OAuth limits snapshot: %s", auth_limit_snapshot(reddit))
        else:
            failed_in_run += 1
            logger.warning(
                "Invite failed | user=u/%s | status=%s | error=%s",
                lead.username,
                status,
                error,
            )

        if status == "rate_limited":
            stopped_by_rate_limit = True
            wait_seconds = parse_rate_limit_wait_seconds(error)
            if wait_seconds > 0:
                logger.warning(
                    "Stopped due to Reddit rate limit. Retry after approximately %d second(s).",
                    wait_seconds,
                )
            else:
                logger.warning("Stopped due to Reddit rate limit.")
            break

        if sent_in_run < run_budget and delay_high > 0:
            sleep_seconds = random.uniform(delay_low, delay_high)
            time.sleep(sleep_seconds)

    logger.info(
        "Guide inviter run completed | sent=%d | failed=%d | stopped_by_rate_limit=%s | attempts_logged=%d",
        sent_in_run,
        failed_in_run,
        stopped_by_rate_limit,
        store.total_attempts,
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
