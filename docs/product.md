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

## City image fields (programmatic content)
- Each city keeps an image record to avoid repeated API fetches.
- Image metadata fields:
  - `city_image_url`
  - `image_author`
  - `image_source` (`unsplash` or `placeholder`)
- If a city already has `city_image_url`, the platform does not request a new image.
