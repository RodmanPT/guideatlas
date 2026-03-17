# Guide Inviter Agent (Reddit Outreach)

Invites discovered Reddit guide leads to test GuideAtlas.

This agent is intended for manual runs and stops automatically when it reaches the safe daily budget:

- `safe_daily_budget = floor(REDDIT_DAILY_INVITE_LIMIT * DAILY_USAGE_RATIO)`
- default `DAILY_USAGE_RATIO=0.90` (90%)

## Input and State

- Input leads: `../guide-discovery/data/leads.json` (default, configurable)
- Invitation attempts log: `data/invitations.json`
- Runtime log: `logs/guide-inviter.log`

## Required environment variables (real send mode)

- `REDDIT_CLIENT_ID`
- `REDDIT_CLIENT_SECRET`
- `REDDIT_USERNAME`
- `REDDIT_PASSWORD`

## Optional environment variables

- `REDDIT_USER_AGENT` (default: `GuideAtlasGuideInviter/0.1 by u/guideatlas-bot`)
- `GUIDE_SIGNUP_URL` (default: `https://guideatlas.app/become-a-guide`)
- `INVITE_SUBJECT_TEMPLATE` (supports `{username}`, `{city}`, `{country}`, `{profile_url}`, `{signup_url}`)
- `INVITE_MESSAGE_TEMPLATE` (same placeholders)
- `REDDIT_DAILY_INVITE_LIMIT` (default: `50`)
- `DAILY_USAGE_RATIO` (default: `0.90`)
- `MAX_INVITES_PER_RUN` (default: `100`)
- `MIN_SECONDS_BETWEEN_INVITES` (default: `12`)
- `MAX_SECONDS_BETWEEN_INVITES` (default: `24`)
- `TARGET_CITIES` (comma-separated city filter, optional)
- `LEADS_FILE` (override input leads file)
- `STATE_FILE` (override state file)
- `LOG_FILE` (override log file)

## Run

From repository root:

```bash
cd agents
npm run guide-inviter
```

Dry run (no DMs sent, still logs preview attempts):

```bash
cd agents
npm run guide-inviter -- --dry-run
```

## Notes

- Idempotent behavior: users already invited successfully are skipped in future runs.
- Every attempt is logged with status (`sent`, `dry_run_preview`, `rate_limited`, etc.).
- If Reddit returns a rate-limit response, the run stops immediately and logs the suggested wait time.
