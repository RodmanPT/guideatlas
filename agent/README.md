# GuideAtlas AI Discovery Agent (Docker / Synology NAS)

This agent runs once, adds new destination(s) with AI curated tours, commits the change, and pushes to GitHub.
When your branch updates, Netlify redeploys automatically.

## File Structure

```
agent/
  discovery_agent.py
  docker-compose.yml
  cities.json
  requirements.txt
  Dockerfile
  run.sh
  README.md
```

## Required Environment Variables

- `GITHUB_TOKEN` (personal access token with repo write access)
- `GITHUB_REPO` (format: `owner/repo`, example: `RodmanPT/guideatlas`)
- `GITHUB_BRANCH` (example: `main`)
- `GUIDEATLAS_HOST_PATH` (absolute NAS path, example: `/volume1/Server/GuideAtlas`)

Optional:

- `REPO_ROOT` (default: `/workspace`)
- `GIT_AUTHOR_NAME` (default: `GuideAtlas AI Agent`)
- `GIT_AUTHOR_EMAIL` (default: `bot@guideatlas.local`)
- `MIN_NEW_CITIES_PER_RUN` (default: `1`)
- `MAX_NEW_CITIES_PER_RUN` (default: `1`)
- `UNSPLASH_ACCESS_KEY` (recommended, for automatic city image assignment)

## Build Docker Image

From repository root:

```bash
docker build -f agent/Dockerfile -t guideatlas-discovery-agent .
```

## Run Once (Container exits after completion)

```bash
docker run --rm \
  -e GITHUB_TOKEN=YOUR_TOKEN \
  -e GITHUB_REPO=RodmanPT/guideatlas \
  -e GITHUB_BRANCH=main \
  -v /path/to/guideatlas:/workspace \
  guideatlas-discovery-agent
```

Notes:
- Mounting the repo (`-v ...:/workspace`) is recommended so the container works on the latest code and has access to `.git`.
- The token is only read from environment variables and is never stored in source files.

## Synology Scheduler (Daily)

In Synology Task Scheduler, run Docker Compose once per day (for example at 03:00).

From `agent/`:

```bash
docker compose build
docker compose up --abort-on-container-exit
docker compose down
```

Or one-shot:

```bash
docker compose run --rm guideatlas-agent
```

## Logs (Synology friendly)

The run script writes logs to:

```bash
/workspace/agent/agent.log
```

Because the repository is mounted to `/workspace`, this file is persisted at:

```bash
/volume1/Server/GuideAtlas/agent/agent.log
```

Useful commands:

```bash
docker logs --tail 200 guideatlas-agent
tail -n 200 /volume1/Server/GuideAtlas/agent/agent.log
```

`docker-compose.yml` maps `${GUIDEATLAS_HOST_PATH}` to `/workspace`, so the agent can update the repo and use `.git`.
The container will:

1. Read existing cities from `apps/web/data/cities.ts`
2. Pick new destination(s) from `agent/cities.json` respecting `MIN_NEW_CITIES_PER_RUN` and `MAX_NEW_CITIES_PER_RUN`
3. Generate 3-5 AI curated tours
4. Fetch and persist city image metadata in `apps/web/data/cityImages.ts` (Unsplash with fallback to placeholder)
5. Update `apps/web/data/aiTours.ts` and `apps/web/data/cities.ts`
6. Commit and push to `GITHUB_BRANCH`

If no new city is available, it exits cleanly with no commit.
