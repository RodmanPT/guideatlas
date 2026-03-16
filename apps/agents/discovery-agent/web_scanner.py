from __future__ import annotations

import logging
from datetime import datetime, timezone
from urllib.parse import quote_plus

import requests
from bs4 import BeautifulSoup

from lead_store import Lead


def scan_web_sources(
    keywords: list[str],
    cities: list[str],
    user_agent: str,
    logger: logging.Logger,
) -> list[Lead]:
    leads: list[Lead] = []
    headers = {"User-Agent": user_agent}

    domains = {
        "facebook_groups": "site:facebook.com/groups",
        "travel_forums": "site:tripadvisor.com/ShowTopic OR site:lonelyplanet.com",
    }

    for source, domain_query in domains.items():
        for city in cities:
            for keyword in keywords:
                query = f'{domain_query} "{keyword}" "{city}"'
                leads.extend(_search_duckduckgo(query, source, city, headers, logger))

    return leads


def _search_duckduckgo(
    query: str,
    source: str,
    city: str,
    headers: dict,
    logger: logging.Logger,
) -> list[Lead]:
    url = f"https://duckduckgo.com/html/?q={quote_plus(query)}"
    results: list[Lead] = []

    try:
        response = requests.get(url, headers=headers, timeout=20)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
    except Exception as exc:  # noqa: BLE001
        logger.warning("Web scan failed for '%s': %s", query, exc)
        return results

    for item in soup.select(".result")[:6]:
        title_node = item.select_one(".result__a")
        link = title_node["href"] if title_node and title_node.has_attr("href") else ""
        title = title_node.get_text(strip=True) if title_node else "unknown"
        if not link:
            continue

        platform = "facebook" if source == "facebook_groups" else "travel_forum"
        contact_method = "platform_message"

        results.append(
            Lead(
                name=title,
                platform=platform,
                city=city,
                country="unknown",
                profile_url=link,
                contact_method=contact_method,
                discovered_at=datetime.now(timezone.utc).isoformat(),
            )
        )

    return results
