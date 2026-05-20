import json
import urllib.request
import urllib.parse
import sys

def get_coords(city):
    url = f"https://nominatim.openstreetmap.org/search?city={urllib.parse.quote(city)}&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'GuideAtlas/1.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode('utf-8'))
        if data:
            return float(data[0]['lat']), float(data[0]['lon'])
    return None

cities = ["Dallas", "Phoenix", "Philadelphia"]
result = []
for c in cities:
    lat, lon = get_coords(c)
    result.append({
        "slug": c.lower(),
        "name": c,
        "country": "United States",
        "latitude": lat,
        "longitude": lon
    })
print(json.dumps(result, indent=2))
