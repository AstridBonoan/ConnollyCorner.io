"""Remove white background from logo using flood-fill from corners."""
from collections import deque
from PIL import Image

src = "public/images/logo-original.png"
dst = "public/images/logo.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
width, height = img.size

def is_background(r: int, g: int, b: int) -> bool:
    brightness = (r + g + b) / 3
    if brightness > 240:
        return True
    if brightness > 215 and abs(r - g) < 20 and abs(g - b) < 20:
        return True
    return False

visited = [[False] * width for _ in range(height)]
queue: deque[tuple[int, int]] = deque()

for x in range(width):
    queue.append((x, 0))
    queue.append((x, height - 1))
for y in range(height):
    queue.append((0, y))
    queue.append((width - 1, y))

while queue:
    x, y = queue.popleft()
    if x < 0 or x >= width or y < 0 or y >= height or visited[y][x]:
        continue
    visited[y][x] = True
    r, g, b, a = pixels[x, y]
    if is_background(r, g, b):
        pixels[x, y] = (r, g, b, 0)
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))

img.save(dst, "PNG")
print(f"Saved transparent logo to {dst}")
