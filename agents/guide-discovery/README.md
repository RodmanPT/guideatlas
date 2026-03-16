# Guide Discovery Agent

Continuously discovers potential tour guides and lead opportunities from:
- Reddit
- Instagram
- Facebook groups (web search based)
- Travel forums (web search based)

## Output
- Leads file: `data/leads.json`
- Runtime log: `logs/discovery-agent.log`

## Lead schema

```json
{
  "name": "Example Guide",
  "platform": "instagram",
  "city": "Lisbon",
  "country": "unknown",
  "profile_url": "https://www.instagram.com/example/",
  "contact_method": "instagram_dm",
  "discovered_at": "2026-03-16T11:00:00+00:00",
  "score": 70.0
}
```

## Local run

```bash
pip install -r requirements.txt
python agent.py
```

## Docker build/run

```bash
docker build -t guideatlas-discovery-agent .
docker run -d --name guideatlas-discovery \
  -e SCAN_INTERVAL_HOURS=4 \
  -e TARGET_CITIES="Lisbon,Porto,Rome,Tokyo" \
  -e REDDIT_CLIENT_ID="your_id" \
  -e REDDIT_CLIENT_SECRET="your_secret" \
  -e INSTAGRAM_SESSION_ID="optional" \
  -v $(pwd)/data:/app/data \
  -v $(pwd)/logs:/app/logs \
  guideatlas-discovery-agent
```

## Notes
- Reddit works best with API credentials; fallback uses public JSON search.
- Instagram search is best-effort and may be rate-limited.
- Facebook/forum coverage is query-based for initial lead discovery.
