import urllib.request
import json
import sys

def get_coords(city):
    url = f"https://nominatim.openstreetmap.org/search?city={urllib.parse.quote(city)}&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'GuideAtlas/1.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data:
                return float(data[0]['lat']), float(data[0]['lon'])
    except Exception as e:
        print(f"Error fetching {city}: {e}", file=sys.stderr)
    return None, None

if __name__ == "__main__":
    import urllib.parse
    city = sys.argv[1]
    lat, lon = get_coords(city)
    print(f"Lat: {lat}, Lon: {lon}")
