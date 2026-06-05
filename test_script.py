import json

with open('site/data/cities.ts', 'r') as f:
    cities_ts = f.read()

with open('agents/discovery-agent/cities.json', 'r') as f:
    cities_json = json.load(f)

import re

slugs_ts = {m.group(1).strip().lower() for m in re.finditer(r'slug:\s*"([^"]+)"', cities_ts)}
slugs_json = {city['slug'].lower() for city in cities_json}

print("In json but not in ts:", slugs_json - slugs_ts)
