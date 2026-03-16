from __future__ import annotations

import logging
from datetime import datetime, timezone

import praw
import requests

from lead_store import Lead


def scan_reddit(
    keywords: list[str],
    cities: list[str],
    per_query_limit: int,
    user_agent: str,
    client_id: str,
    client_secret: str,
    logger: logging.Logger,
) -> list[Lead]:
    leads: list[Lead] = []

    if client_id and client_secret:
        leads.extend(
            _scan_with_praw(
                keywords, cities, per_query_limit, user_agent, client_id, client_secret, logger
            )
        )
    else:
        logger.info("Reddit API credentials missing. Using public JSON fallback.")

    if not leads:
        leads.extend(_scan_with_public_json(keywords, cities, per_query_limit, user_agent, logger))

    return leads


def _scan_with_praw(
    keywords: list[str],
    cities: list[str],
    per_query_limit: int,
    user_agent: str,
    client_id: str,
    client_secret: str,
    logger: logging.Logger,
) -> list[Lead]:
    reddit = praw.Reddit(
        client_id=client_id,
        client_secret=client_secret,
        user_agent=user_agent,
        check_for_async=False,
    )

    leads: list[Lead] = []
    queries = _build_queries(keywords, cities)

    for query in queries:
        for submission in reddit.subreddit("all").search(query, sort="new", limit=per_query_limit):
            author = str(submission.author) if submission.author else "unknown"
            title = submission.title or ""
            body = submission.selftext or ""
            text = f"{title} {body}".lower()
            city = _find_city(text, cities)
            if not city:
                continue

            leads.append(
                Lead(
                    name=author,
                    platform="reddit",
                    city=city,
                    country="unknown",
                    profile_url=f"https://www.reddit.com/user/{author}",
                    contact_method="reddit_dm",
                    discovered_at=datetime.now(timezone.utc).isoformat(),
                )
            )

            try:
                submission.comments.replace_more(limit=0)
                for c in submission.comments.list()[:20]:
                    c_text = (getattr(c, "body", "") or "").lower()
                    c_author = str(c.author) if c.author else "unknown"
                    if any(k in c_text for k in keywords) and _find_city(c_text, cities):
                        leads.append(
                            Lead(
                                name=c_author,
                                platform="reddit",
                                city=city,
                                country="unknown",
                                profile_url=f"https://www.reddit.com/user/{c_author}",
                                contact_method="reddit_dm",
                                discovered_at=datetime.now(timezone.utc).isoformat(),
                            )
                        )
            except Exception as exc:  # noqa: BLE001
                logger.warning("Reddit comments scan failed for %s: %s", submission.id, exc)

    return leads


def _scan_with_public_json(
    keywords: list[str],
    cities: list[str],
    per_query_limit: int,
    user_agent: str,
    logger: logging.Logger,
) -> list[Lead]:
    leads: list[Lead] = []
    headers = {"User-Agent": user_agent}

    for query in _build_queries(keywords, cities):
        url = "https://www.reddit.com/search.json"
        params = {"q": query, "sort": "new", "limit": per_query_limit, "type": "link"}
        try:
            res = requests.get(url, params=params, headers=headers, timeout=20)
            res.raise_for_status()
            data = res.json().get("data", {}).get("children", [])
        except Exception as exc:  # noqa: BLE001
            logger.error("Reddit public scan failed for '%s': %s", query, exc)
            continue

        for item in data:
            post = item.get("data", {})
            author = post.get("author", "unknown")
            title = post.get("title", "")
            body = post.get("selftext", "")
            text = f"{title} {body}".lower()
            city = _find_city(text, cities)
            if not city:
                continue

            leads.append(
                Lead(
                    name=author,
                    platform="reddit",
                    city=city,
                    country="unknown",
                    profile_url=f"https://www.reddit.com/user/{author}",
                    contact_method="reddit_dm",
                    discovered_at=datetime.now(timezone.utc).isoformat(),
                )
            )

    return leads


def _build_queries(keywords: list[str], cities: list[str]) -> list[str]:
    queries = keywords.copy()
    queries.extend([f"tour guide in {city}" for city in cities])
    return queries


def _find_city(text: str, cities: list[str]) -> str:
    lowered = text.lower()
    for city in cities:
        if city.lower() in lowered:
            return city
    return ""
