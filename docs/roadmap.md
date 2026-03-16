# Roadmap

Rule: Only MVP features should be implemented before market validation.

## MVP
- Landing page
- Guide signup form
- Guide profile pages
- Tour creation by guides
- Basic tour listing by city

## Growth
### Acquisition & Automation
- Guide discovery agent
- Guide invitation system
- City landing pages
- SEO content generation
- Guide onboarding automation
- Automation operationalization (after market validation):
  - Run `discovery-agent` daily (controlled rollout).
  - Run `image-backfill` weekly to keep destination images complete and avoid stale/placeholder coverage as new cities are added.

### Programmatic SEO Expansion (Phase 3 — Growth)
Generate hundreds (and later thousands) of SEO pages by combining cities and tour types.

Examples:
- City pages: `/lisbon-tours`
- City + tour type pages: `/food-tours-lisbon`, `/walking-tours-rome`

Notes:
- Expand using a controlled dataset first, then scale from the tour database.
- Use internal linking + sitemaps so pages are discoverable without manual effort.

### Engagement Features

#### Global Tour Map (Phase 3 — Growth & Discovery)
An interactive world map that visually displays where GuideAtlas tours exist around the world.

Marker types:
- AI Generated Tours (light blue)
- Real Guide Tours (orange or green)

Map behavior:
- Zoom into regions
- Click markers
- View tours available in that location

User experience:
- Landing page could include: "Explore tours around the world"
- Works as a discovery tool and a visual growth indicator

Technical notes (future):
- Map library options: Mapbox, Leaflet, Google Maps
- Markers generated dynamically from the tour database
- Not required for MVP

## Autonomous Platform
- AI tour generator
- SEO city page generator
- Social media publishing agent
- Automated lead outreach agent
- Travel itinerary generator

### Viral Growth (Phase 4)

#### AI Trip Map (Future)
GuideAtlas will allow travelers to generate visual trip itineraries.

Inputs:
- City
- Trip duration
- Trip theme

Outputs:
- Interactive map with recommended locations
- Suggested experiences
- Available tours from local guides

User experience example:
- "3 Days in Lisbon"
- Page includes: interactive map, daily itinerary, recommended tours

Markers:
- Blue: AI suggested places
- Green: Real guide tours

Value:
- Helps travelers plan trips faster
- Encourages sharing of itineraries
- Creates viral, SEO-friendly itinerary pages

#### Collaborative Travel Planning (Future)

Vision:
- GuideAtlas should evolve from a tour marketplace into a travel discovery and planning platform.
- Users should be able to discover tours, invite friends, and collaboratively plan travel experiences.

Problem:
- Travel planning is fragmented across WhatsApp groups, Google Docs, shared links, and spreadsheets.
- GuideAtlas can centralize travel exploration and group decision making in one place.

Future user flow:
1. User discovers a city on GuideAtlas.
2. User creates a trip plan (example: "Trip to Lisbon - May 2027").
3. User invites friends via link.
4. Friends vote on tours, activities, neighborhoods, and restaurants.
5. The group builds a shared travel itinerary.

Core features (future):
- Trip boards:
Users can create boards such as Lisbon Weekend, Tokyo Food Trip, and Barcelona Friends Trip.
- Saved tours:
Users can save tours to a board.
- Voting:
Participants can vote on preferred experiences.
- AI suggestions:
The system suggests additional tours, neighborhoods, and hidden experiences.
- Guide integration:
Local guides can offer private tours to groups planning a trip.

Product benefits:
- Transforms GuideAtlas from "a tour listing site" into "a travel planning platform".
- Increases longer session times, repeat visits, network effects, and viral sharing.

Relationship with existing features:
- AI Curated Tours
- City pages
- Guide profiles

Implementation phases (future):
- Phase 1: Trip board creation and saved tours
- Phase 2: Collaborative voting
- Phase 3: AI itinerary generation
- Phase 4: Guide booking integration
