"""Download remaining local images for menu and gallery."""
import urllib.request
from pathlib import Path

OUT = Path("public/images")
files = {
    "menu-steak.jpg": "https://images.unsplash.com/photo-1600891960792-0326c7108b09?w=800&h=600&fit=crop",
    "menu-chicken.jpg": "https://images.unsplash.com/photo-1598515214210-89f3bca8ae07?w=800&h=600&fit=crop",
    "menu-seafood.jpg": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&h=600&fit=crop",
    "menu-specials.jpg": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
    "menu-classics.jpg": "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&h=600&fit=crop",
    "gallery-bar.jpg": "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&h=600&fit=crop",
    "gallery-brunch.jpg": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop",
}

headers = {"User-Agent": "Mozilla/5.0"}

for name, url in files.items():
    if (OUT / name).exists():
        print("SKIP", name)
        continue
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp, open(OUT / name, "wb") as f:
            f.write(resp.read())
        print("OK", name)
    except Exception as e:
        print("FAIL", name, e)
