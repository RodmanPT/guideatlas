from __future__ import annotations

import json
import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
WEB_PUBLIC = ROOT / "apps" / "web" / "public"
INPUT_LOGO = ROOT / "logo.png"


def non_white_bbox(img: Image.Image, threshold: int = 245):
    rgb = img.convert("RGB")
    pix = rgb.load()
    w, h = rgb.size
    left, top, right, bottom = w, h, -1, -1
    for y in range(h):
        for x in range(w):
            r, g, b = pix[x, y]
            if r < threshold or g < threshold or b < threshold:
                left = min(left, x)
                top = min(top, y)
                right = max(right, x)
                bottom = max(bottom, y)
    if right == -1:
        return (0, 0, w, h)
    return (left, top, right + 1, bottom + 1)


def make_square_icon(icon: Image.Image, size: int = 1024) -> Image.Image:
    icon = icon.convert("RGBA")
    iw, ih = icon.size
    edge = max(iw, ih)
    pad = int(edge * 0.1)
    canvas = Image.new("RGBA", (edge + pad * 2, edge + pad * 2), (255, 255, 255, 0))
    ox = (canvas.width - iw) // 2
    oy = (canvas.height - ih) // 2
    canvas.paste(icon, (ox, oy), icon)
    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    if not INPUT_LOGO.exists():
        raise SystemExit(f"Missing input logo: {INPUT_LOGO}")

    WEB_PUBLIC.mkdir(parents=True, exist_ok=True)
    favicon_dir = WEB_PUBLIC / "favicon"
    favicon_dir.mkdir(parents=True, exist_ok=True)

    logo_img = Image.open(INPUT_LOGO).convert("RGBA")
    logo_out = WEB_PUBLIC / "logo.png"
    logo_img.save(logo_out)

    w, h = logo_img.size
    rough_icon = logo_img.crop((int(w * 0.18), 0, int(w * 0.82), int(h * 0.63)))
    tight = rough_icon.crop(non_white_bbox(rough_icon))
    logo_icon = make_square_icon(tight, 1024)

    logo_icon_out = WEB_PUBLIC / "logo-icon.png"
    logo_icon.save(logo_icon_out)

    root_assets = {
        "favicon-16x16.png": (16, 16),
        "favicon-32x32.png": (32, 32),
        "apple-touch-icon.png": (180, 180),
        "android-chrome-192x192.png": (192, 192),
        "android-chrome-512x512.png": (512, 512),
    }

    generated = []
    for name, dim in root_assets.items():
        out_path = WEB_PUBLIC / name
        logo_icon.resize(dim, Image.Resampling.LANCZOS).save(out_path)
        generated.append(out_path)

    ico_path = WEB_PUBLIC / "favicon.ico"
    logo_icon.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    generated.append(ico_path)

    for path in generated:
        shutil.copy2(path, favicon_dir / path.name)

    manifest = {
        "name": "GuideAtlas",
        "short_name": "GuideAtlas",
        "icons": [
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
            },
        ],
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "display": "standalone",
    }

    (WEB_PUBLIC / "site.webmanifest").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")

    print("Generated logo + favicon assets:")
    print(f"- {logo_out}")
    print(f"- {logo_icon_out}")
    for path in generated:
        print(f"- {path}")
    print(f"- {WEB_PUBLIC / 'site.webmanifest'}")
    print(f"- {favicon_dir}/*")


if __name__ == "__main__":
    main()
