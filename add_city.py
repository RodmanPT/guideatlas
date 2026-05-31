import json

with open('agents/discovery-agent/cities.json', 'r') as f:
    candidates = json.load(f)

candidates.append({
    "slug": "test-pull-rebase-city",
    "name": "Test Pull Rebase City",
    "country": "Test Country",
    "latitude": 0,
    "longitude": 0
})

with open('agents/discovery-agent/cities.json', 'w') as f:
    json.dump(candidates, f, indent=2)
