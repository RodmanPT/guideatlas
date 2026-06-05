import json

with open('agents/discovery-agent/cities.json', 'r') as f:
    candidates = json.load(f)

new_cities = [
  {
    "slug": "liechtenstein",
    "name": "Liechtenstein",
    "country": "Liechtenstein",
    "latitude": 47.1410,
    "longitude": 9.5215
  }
]

existing_slugs = {c['slug'] for c in candidates}
for c in new_cities:
    if c['slug'] not in existing_slugs:
        candidates.append(c)

with open('agents/discovery-agent/cities.json', 'w') as f:
    json.dump(candidates, f, indent=2)
