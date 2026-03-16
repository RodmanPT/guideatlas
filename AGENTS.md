# GuideAtlas Repository Structure

GuideAtlas is organized as a monorepo with isolated systems.

## `site/`

Contains the GuideAtlas website frontend.

- Scope: UI, routes, pages, forms, SEO pages.
- Deployment target: Netlify.
- Rule: changes here must not include automation/runtime agent logic.

## `agents/`

Contains autonomous background jobs.

- Scope: destination discovery, image enrichment, scheduled automation.
- Runtime target: Jules scheduler (or Docker/NAS runners).
- Rule: jobs must be idempotent and log all execution outcomes.

## `shared/`

Contains shared code used by both systems.

- Scope: schema contracts, domain types, reusable helpers.
- Rule: keep framework-agnostic and side-effect free.

## Agent Rules

- Always read relevant docs in `docs/` before making changes.
- UI changes -> modify only `site/`.
- Automation/runtime changes -> modify only `agents/`.
- Shared model/type updates -> modify only `shared/`.
- Never mix responsibilities in a single module.
