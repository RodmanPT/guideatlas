# GuideAtlas Agents (Jules Runtime)

This folder contains autonomous jobs executed independently from the website.

## Structure

- `city-generator/`: adds new destinations and AI-curated tours.
- `image-fetcher/`: Unsplash integration utility for city images.
- `discovery-agent/`: production discovery runner (Python engine + `job.ts` wrapper).

## Install

```bash
cd agents
npm install
```

## Run Jobs Once

```bash
npm run city-generator
npm run discovery-agent
npm run image-fetcher
```

## Environment

Create one of these files:

```bash
agents/.env
agents/discovery-agent/.env
```

Supported variables:
- `GITHUB_TOKEN`
- `GITHUB_REPO`
- `GITHUB_BRANCH`
- `MIN_NEW_CITIES_PER_RUN`
- `MAX_NEW_CITIES_PER_RUN`
- `UNSPLASH_ACCESS_KEY`
- Optional: `REPO_ROOT`

## Scheduling in Jules

- Configure jobs as independent schedules:
  - `npm run city-generator`
  - `npm run discovery-agent`
- Keep `MIN_NEW_CITIES_PER_RUN` / `MAX_NEW_CITIES_PER_RUN` conservative for idempotent daily runs.
