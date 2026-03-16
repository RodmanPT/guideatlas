# Architecture

## Stack

### Frontend
Next.js

### Hosting
Netlify

### Backend
MVP: Next.js API routes + Google Sheets API (waitlist)

Future: Supabase

### Database
MVP: Google Sheets (guides_waitlist)

Future: PostgreSQL (via Supabase)

### Maps
Google Maps API

## Programmatic SEO

GuideAtlas is prepared for programmatic SEO by generating a bounded set of landing pages from small datasets.

Page types:
- City pages: `/{city}-tours` (example: `/lisbon-tours`)
- Tour type pages: `/{tourType}-tours` (example: `/food-tours`)
- City + tour type pages: `/{tourType}-tours-{city}` (examples: `/food-tours-lisbon`, `/night-tours-rome`, `/private-tours-barcelona`)

Implementation notes:
- Source datasets live in `apps/web/data/cities.ts` and `apps/web/data/tourTypes.ts`.
- Next.js App Router uses static generation (`generateStaticParams`) to pre-render only supported combinations.
- The SEO route is effectively a whitelist (unknown slugs 404), which prevents collisions and keeps the app ready for adding new top-level routes later.
- Future expansions can pull from the tour database and use revalidation + sitemaps to scale safely.

## City Image Automation

GuideAtlas assigns city card images automatically in the city-generation pipeline.

Flow:
- When a new city is created, the agent calls Unsplash Search API (`/search/photos`) with fallback queries:
  - `{city} skyline`
  - `{city} cityscape`
  - `{city} downtown`
  - `{country} city skyline`
- If a city already has `city_image_url`, no new API request is made (cache-first behavior).
- The selected result is stored with:
  - `city_image_url`
  - `image_author`
  - `image_source` (`unsplash`)
- If all queries fail, the city is marked with `image_source: placeholder` and frontend shows a gradient fallback.

Configuration:
- `UNSPLASH_ACCESS_KEY` (agent environment variable)

## Future Integrations
- Stripe payments
