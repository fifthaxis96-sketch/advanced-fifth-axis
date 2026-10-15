"""Refresh intrinsic image dimensions after updating real site photographs. Requires Pillow."""
import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
sizes = {}
for path in sorted((root / "public").rglob("*")):
    if path.suffix.lower() in (".webp", ".jpg", ".png"):
        with Image.open(path) as image:
            sizes["/" + path.relative_to(root / "public").as_posix()] = {"width": image.width, "height": image.height}
(root / "content/image-dimensions.json").write_text(json.dumps(sizes, indent=2) + "\n")
print(f"Recorded dimensions for {len(sizes)} existing images.")
