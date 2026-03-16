# Product

## Actors

### Traveler
- Searches tours by city.
- Browses guide profiles.
- Books tours.

### Guide
- Creates and manages a guide profile.
- Publishes tours.

### Platform
- Enables discovery, trust, and booking flows.
- Supports growth via structured content and automation.

## Core Features
- Search tours by city
- Browse guides
- Book tours
- Guide profiles
- Tour publishing

## Guide waitlist system
- Landing page includes a guide interest signup form.
- Form captures name, email, city, country, and tour type.
- Data is stored in Google Sheets (sheet/tab: `guides_waitlist`).
- Duplicate emails are blocked to avoid repeated waitlist entries.

## MVP guide profile and tour publishing
- Guides can create a public profile with:
  - name
  - email
  - city
  - country (optional)
  - languages (optional)
  - bio
  - rating (optional)
- Guides can publish tours with:
  - title
  - city
  - duration
  - price
  - description
  - meeting point
- City pages prioritize real guide tours first.
- AI curated tours are used only as fallback when no real tours exist in that city.

## MVP API contracts
- `POST /api/guides`: create guide profile
- `POST /api/tours`: create tour
- `GET /api/tours?city={slug}`: list tours by city

## MVP validation events
- `guide_signup_submitted`
- `tour_submitted`
- `city_page_view`
- `browse_tours_click`

## City image fields (programmatic content)
- Each city keeps an image record to avoid repeated API fetches.
- Image metadata fields:
  - `city_image_url`
  - `image_author`
  - `image_source` (`unsplash` or `placeholder`)
- If a city already has `city_image_url`, the platform does not request a new image.
