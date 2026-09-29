"""Regenerate card and icon images after changing files in public/products.

Requires Pillow: python -m pip install Pillow
"""

from pathlib import Path
from PIL import Image

source = Path(__file__).resolve().parent.parent / "public" / "products"
destination = source.parent / "thumbs"

for folder, pixels, quality in (("large", 480, 82), ("small", 160, 78)):
    target = destination / folder
    target.mkdir(parents=True, exist_ok=True)
    for stale in target.glob("*.webp"):
        stale.unlink()
    for path in sorted(source.glob("*.webp")):
        with Image.open(path) as image:
            image.thumbnail((pixels, pixels), Image.Resampling.LANCZOS)
            image.save(target / path.name, "WEBP", quality=quality, method=6)
    print(f"Generated {len(list(target.glob('*.webp')))} {folder} thumbnails")
