# GuideAtlas

GuideAtlas is the foundation of a platform connecting travelers with independent local guides offering authentic tours.

## Repository Structure

- `docs/`: product, architecture, data, roadmap, and agent context
- `prompts/`: guidance for Codex and autonomous agents
- `apps/web`: public Next.js app (landing + future traveler flows)
- `apps/dashboard`: future dashboard app
- `apps/agents`: future autonomous agent services
- `api/`: backend and service boundaries
- `cities/`: future SEO city routes (for example `/lisbon-tours`)
- `public/`: shared static assets
- `scripts/`: utility scripts and automations

## Quick Start

```bash
cd apps/web
npm install
npm run dev
```

## Build

```bash
cd apps/web
npm run build
```

## Netlify

Configured with `netlify.toml` to build from `apps/web` using the Next.js Netlify plugin.
