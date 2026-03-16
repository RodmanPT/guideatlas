# GuideAtlas AI Discovery Agent

This agent runs once, adds new destination(s) with AI curated tours, commits the change, and pushes to GitHub.
When your branch updates, Netlify redeploys automatically.

## File Structure

```
agents/discovery-agent/
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

Optional:

- `REPO_ROOT` (auto-detected when empty)
- `GIT_AUTHOR_NAME` (default: `GuideAtlas AI Agent`)
- `GIT_AUTHOR_EMAIL` (default: `bot@guideatlas.local`)
- `MIN_NEW_CITIES_PER_RUN` (default: `1`)
- `MAX_NEW_CITIES_PER_RUN` (default: `1`)
- `UNSPLASH_ACCESS_KEY` (recommended, for automatic city image assignment)

## Run with Jules / local shell

From repository root:

```bash
cd agents
npm run discovery-agent
```

## Optional: run with Docker

From repository root:

```bash
docker build -f agents/discovery-agent/Dockerfile -t guideatlas-discovery-agent .
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

## Daily scheduler

From `agents/discovery-agent/`:

```bash
docker compose build
docker compose up --abort-on-container-exit
docker compose down
```

Or one-shot:

```bash
docker compose run --rm guideatlas-agent
```

## Logs

The run script writes logs to:

```bash
/workspace/agents/discovery-agent/agent.log
```

Useful commands:

```bash
docker logs --tail 200 guideatlas-agent
```

`docker-compose.yml` maps `${GUIDEATLAS_HOST_PATH}` to `/workspace`, so the agent can update the repo and use `.git`.
The container will:

1. Read existing cities from `site/data/cities.ts`
2. Pick new destination(s) from `agents/discovery-agent/cities.json` respecting `MIN_NEW_CITIES_PER_RUN` and `MAX_NEW_CITIES_PER_RUN`
3. Generate 3-5 AI curated tours
4. Fetch and persist city image metadata in `site/data/cityImages.ts` (Unsplash with fallback to placeholder)
5. Update `site/data/aiTours.ts` and `site/data/cities.ts`
6. Commit and push to `GITHUB_BRANCH`

If no new city is available, it exits cleanly with no commit.
