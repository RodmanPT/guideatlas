import json

with open('agents/discovery-agent/cities.json', 'r') as f:
    candidates = json.load(f)

new_cities = [
  {
    "slug": "portland",
    "name": "Portland",
    "country": "United States",
    "latitude": 45.5202471,
    "longitude": -122.674194
  },
  {
    "slug": "detroit",
    "name": "Detroit",
    "country": "United States",
    "latitude": 42.3315509,
    "longitude": -83.0466403
  },
  {
    "slug": "minneapolis",
    "name": "Minneapolis",
    "country": "United States",
    "latitude": 44.9772995,
    "longitude": -93.2654692
  },
  {
    "slug": "tampa",
    "name": "Tampa",
    "country": "United States",
    "latitude": 27.9449854,
    "longitude": -82.4583107
  },
  {
    "slug": "baltimore",
    "name": "Baltimore",
    "country": "United States",
    "latitude": 39.2908816,
    "longitude": -76.610759
  }
]

existing_slugs = {c['slug'] for c in candidates}
for c in new_cities:
    if c['slug'] not in existing_slugs:
        candidates.append(c)

with open('agents/discovery-agent/cities.json', 'w') as f:
    json.dump(candidates, f, indent=2)

