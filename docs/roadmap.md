# Roadmap

Rule: Only MVP features should be implemented before market validation.

## NOW (MVP)

### Completed
- [x] Landing page
- [x] Guide signup form
- [x] Guide profile pages
- [x] Tour creation by guides
- [x] Basic tour listing by city

### Remaining (to close MVP validation loop)
- [ ] Improve conversion in guide onboarding flow (reduce friction)
- [ ] Ensure minimum real supply in production (active guides + real tours)
- [ ] Weekly review of MVP metrics (`guide_signup_submitted`, `tour_submitted`, `city_page_view`, `browse_tours_click`)
- [ ] Define and document market validation threshold (go/no-go criteria)

## NEXT (Growth, only after MVP validation)

### Acquisition & Automation
- [ ] Guide discovery agent
- [ ] Guide invitation system
- [ ] City landing pages
- [ ] SEO content generation
- [ ] Guide onboarding automation

### Automation Operationalization (after validation)
- [ ] Run `discovery-agent` daily (controlled rollout)
- [ ] Run `image-backfill` weekly to keep destination image coverage complete

### Programmatic SEO Expansion (Phase 3 — Growth)
- [ ] Generate large-scale city + tour-type pages
  - Examples:
    - `/lisbon-tours`
    - `/food-tours-lisbon`
    - `/walking-tours-rome`
- [ ] Scale from controlled dataset first, then database-driven generation
- [ ] Reinforce crawlability with internal linking + sitemap strategy

### Engagement Features
- [ ] Global Tour Map (Phase 3 — Growth & Discovery)
  - Marker types:
    - AI Generated Tours (light blue)
    - Real Guide Tours (orange or green)
  - Map behavior:
    - Zoom into regions
    - Click markers
    - View tours available in each location
  - Potential stack:
    - Mapbox, Leaflet, Google Maps

## GUIDE TOOLKIT (Roadmap by phase)

### MVP toolkit
- [x] Public guide profile
- [x] Tour creation/publishing
- [ ] Simple availability guidance (manual/text-based)
- [ ] Lead capture to guides (interest/contact requests)
- [ ] Basic guide metrics (profile views, tour interest, city demand)

### Growth toolkit
- [ ] Lightweight lead inbox/CRM (`new`, `contacted`, `onboarded`)
- [ ] Tour templates (food, history, hidden gems, private)
- [ ] Reputation layer (reviews + aggregated rating)
- [ ] Guided onboarding checklist
- [ ] Pricing/duration suggestions by city (assistive, not mandatory)

### Later toolkit
- [ ] Request-to-book flow (no internal payment processing)
- [ ] External booking handoff links (guide website, WhatsApp, Calendly, marketplaces)
- [ ] Group capacity and availability controls
- [ ] Retention tools (follow-up prompts, repeat traveler nudges)
- [ ] Guide copilot for content/SEO/social snippets

### Policy decision (explicit)
- [x] GuideAtlas does **not** process payments between travelers and guides.
- [x] GuideAtlas focuses on discovery, lead generation, and guide-traveler connection.

## LATER (Autonomous Platform)
- [ ] AI tour generator
- [ ] SEO city page generator
- [ ] Social media publishing agent
- [ ] Automated lead outreach agent
- [ ] Travel itinerary generator

### Viral Growth (Phase 4)

#### AI Trip Map (Future)
- [ ] Inputs:
  - city
  - trip duration
  - trip theme
- [ ] Outputs:
  - interactive map with recommended locations
  - suggested experiences
  - available tours from local guides
- [ ] Marker colors:
  - blue: AI suggested places
  - green: real guide tours

#### Collaborative Travel Planning (Future)
- [ ] Vision:
  - evolve from tour marketplace to travel discovery + planning platform
  - support collaborative planning with friends
- [ ] Solve fragmented planning across WhatsApp, Docs, links, and spreadsheets
- [ ] Future flow:
  1. user discovers a city
  2. user creates a trip plan (example: "Trip to Lisbon - May 2027")
  3. user invites friends via link
  4. friends vote on tours, activities, neighborhoods, restaurants
  5. group builds shared itinerary
- [ ] Core modules:
  - trip boards
  - saved tours
  - collaborative voting
  - AI suggestions
  - guide offers for planning groups
- [ ] Implementation phases:
  - Phase 1: trip boards + saved tours
  - Phase 2: collaborative voting
  - Phase 3: AI itinerary generation
  - Phase 4: guide booking integration
