# GuideAtlas

GuideAtlas is the foundation of a platform connecting travelers with independent local guides offering authentic tours.

## Repository Structure

- `docs/`: product, architecture, data, roadmap, and agent context
- `prompts/`: guidance for Codex and autonomous agents
- `site/`: public Next.js app (frontend only, Netlify deployment target)
- `agents/`: autonomous jobs (Jules execution target)
- `shared/`: shared schema/types/helpers reused by site and agents
- `api/`: backend and service boundaries
- `cities/`: future SEO city routes (for example `/lisbon-tours`)
- `public/`: shared static assets
- `scripts/`: utility scripts and automations

## Quick Start (Site)

```bash
cd site
npm install
npm run dev
```

## Build (Site)

```bash
cd site
npm run build
```

## Run Agents

```bash
cd agents
npm install
npm run city-generator
npm run discovery-agent
```

## Netlify

Configured with `netlify.toml` to build from `site` using the Next.js Netlify plugin.
