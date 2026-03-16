# Playwright Site Inspection

This folder contains a lightweight Playwright script that:
- Visits `/`, `/tours`, and `/lisbon-tours`
- Clicks key navigation links when available
- Captures console warnings/errors
- Saves screenshots for desktop + mobile

## Setup

From repo root:

```bash
npm install
npx playwright install chromium
```

## Run

Start the site (in another terminal):

```bash
cd site
npm install
npm run dev
```

Then run the inspection script from repo root:

```bash
npm run test:playwright
```

## Configuration

- `PLAYWRIGHT_BASE_URL` (default: `http://localhost:3000`)

Example:

```bash
set PLAYWRIGHT_BASE_URL=https://guideatlas.netlify.app/ && npm run test:playwright
```
