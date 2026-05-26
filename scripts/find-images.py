import re
import urllib.request

html = urllib.request.urlopen("https://www.connollyscorner.com/").read().decode("utf-8", "ignore")

# Find all spotapps image references
patterns = [
    r'https?://static\.spotapps\.co/[^\s"<>]+',
    r'/website_images/[^\s"<>]+',
    r'\.jpg[^\s"<>]*',
    r'\.png[^\s"<>]*',
]

for p in patterns:
    matches = set(re.findall(p, html, re.I))
    if matches:
        print(f"\n--- {p} ---")
        for m in sorted(matches)[:20]:
            print(m)

# Also look for data-src, background-image, etc
for m in re.findall(r'(?:data-src|src|background-image:\s*url\()[\"\'(]*([^\"\'\)]+)', html):
    if 'spotapps' in m or '.jpg' in m or '.png' in m:
        print("ATTR:", m)
