from __future__ import annotations

import logging
from datetime import datetime, timezone

import requests

from lead_store import Lead


def scan_instagram(
    keywords: list[str],
    cities: list[str],
    per_query_limit: int,
    user_agent: str,
    session_id: str,
    logger: logging.Logger,
) -> list[Lead]:
    """
    Basic public Instagram discovery.
    Uses the web topsearch endpoint and filters profiles by keyword + city mentions.
    """
    leads: list[Lead] = []
    headers = {
        "User-Agent": user_agent,
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    }

    if session_id:
        headers["Cookie"] = f"sessionid={session_id}"

    for query in keywords:
        try:
            data = _fetch_topsearch(query, headers)
        except Exception as exc:  # noqa: BLE001
            logger.warning("Instagram scan failed for '%s': %s", query, exc)
            continue

        for item in data.get("users", [])[:per_query_limit]:
            user = item.get("user", {})
            username = user.get("username") or ""
            if not username:
                continue

            full_name = user.get("full_name") or username
            bio = (user.get("biography") or "").lower()
            ext_url = user.get("external_url") or ""
            combined = f"{full_name} {bio} {ext_url}".lower()

            if not any(k in combined for k in keywords):
                continue

            city = _find_city(combined, cities)
            if not city:
                continue

            leads.append(
                Lead(
                    name=full_name,
                    platform="instagram",
                    city=city,
                    country="unknown",
                    profile_url=f"https://www.instagram.com/{username}/",
                    contact_method="instagram_dm",
                    discovered_at=datetime.now(timezone.utc).isoformat(),
                )
            )

    return leads


def _fetch_topsearch(query: str, headers: dict) -> dict:
    res = requests.get(
        "https://www.instagram.com/web/search/topsearch/",
        params={"query": query},
        headers=headers,
        timeout=20,
    )
    res.raise_for_status()
    return res.json()


def _find_city(text: str, cities: list[str]) -> str:
    lowered = text.lower()
    for city in cities:
        if city.lower() in lowered:
            return city
    return ""
