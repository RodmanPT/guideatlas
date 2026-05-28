import json
import urllib.request
import urllib.parse

def get_coords(city):
    url = f"https://nominatim.openstreetmap.org/search?city={urllib.parse.quote(city)}&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'GuideAtlas/1.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode('utf-8'))
        if data:
            return float(data[0]['lat']), float(data[0]['lon'])
    return None, None

cities = ["Jacksonville", "San Francisco", "Austin", "Denver", "Seattle", "Boston"]
results = []
for city in cities:
    lat, lon = get_coords(city)
    if lat and lon:
        results.append({
            "slug": city.lower().replace(" ", "-"),
            "name": city,
            "country": "United States",
            "latitude": lat,
            "longitude": lon
        })

with open("agents/discovery-agent/cities.json", "r") as f:
    existing = json.load(f)

existing.extend(results)

with open("agents/discovery-agent/cities.json", "w") as f:
    json.dump(existing, f, indent=2)

print(f"Added {len(results)} cities.")
