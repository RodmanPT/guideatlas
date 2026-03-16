# Data Model

## Guide
- `id`
- `slug` (public profile URL)
- `name`
- `email`
- `city`
- `country`
- `languages`
- `bio`
- `rating`
- `created_at`

## Tour
- `id`
- `guide_slug`
- `guide_name`
- `title`
- `city`
- `duration`
- `price`
- `description`
- `meeting_point`
- `created_at`

## Booking
- `id`
- `tour_id`
- `user_id`
- `date`
- `participants`

## User
- `id`
- `email`
- `role`

## ProductEvent (MVP validation)
- `event_name`
- `path`
- `city`
- `guide_slug`
- `tour_id`
- `metadata`
- `created_at`
