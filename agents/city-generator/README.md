# AI Discovery Agent

The AI Discovery Agent helps GuideAtlas solve cold-start by automatically adding new city destinations and AI curated tours.

## Workflow

Each run:
1. Chooses one new destination from a candidate list.
2. Generates 3-5 suggested AI tours.
3. Updates `site/data/aiTours.ts`.
4. Adds a new city in `site/data/cities.ts`.
5. Adds SEO intro text in `site/data/citySeoIntros.ts`.
6. Triggers rebuild:
   - Uses `NETLIFY_BUILD_HOOK_URL` when available.
   - Falls back to local `npm run build` in `site`.

## Duplicate protection

- Existing cities are parsed directly from `cities.ts`.
- Agent state is stored in `data/discovered-cities.json`.
- A city is skipped if already present in either source.

## Run

From `agents/city-generator`:

```bash
npm run run-once
```

Daily loop mode:

```bash
npm start
```

## Environment

- Optional: `NETLIFY_BUILD_HOOK_URL` for remote deploy trigger.
- Optional: `RUN_ONCE=true` to force single execution.
