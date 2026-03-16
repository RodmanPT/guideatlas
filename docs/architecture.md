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
- City + tour type pages: `/{tourType}-tours-{city}` (examples: `/food-tours-lisbon`, `/walking-tours-rome`)

Implementation notes:
- Source datasets live in `apps/web/data/cities.ts` and `apps/web/data/tourTypes.ts`.
- Next.js App Router uses static generation (`generateStaticParams`) to pre-render only supported combinations.
- Future expansions can pull from the tour database and use revalidation to scale safely.

## Future Integrations
- Stripe payments
