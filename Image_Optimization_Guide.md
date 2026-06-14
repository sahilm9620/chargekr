Image optimization guide — concise commands and recommendations

- Goal: reduce bytes, preserve visual quality, enable responsive loading and lazy-loading.

Recommended formats:
- WebP for photos/illustrations (good quality + small size).
- PNG for images requiring transparency; compress and consider WebP fallback.
- SVG for logos and simple graphics where appropriate.

Basic macOS commands:
- Resize and compress with `sips`:
  sips -Z 1200 input.jpg --out output.jpg
- Convert to WebP (with cwebp):
  cwebp -q 80 input.jpg -o output.webp

Using ImageMagick (install via `brew install imagemagick`):
- Resize and recompress (example):
  magick input.jpg -strip -interlace Plane -gaussian-blur 0.05 -quality 75 -resize 1200x output.jpg
- Batch convert to WebP:
  for f in *.jpg; do magick "$f" -quality 80 "${f%.*}.webp"; done

Best practices:
- Add `width` and `height` attributes to images to avoid layout shift.
- Use `loading="lazy"` (already applied) for non-critical images.
- Provide `srcset` and multiple sizes for responsive images.
- Inline small critical images (SVG or tiny JPEG) in HTML/CSS.
- Prefer WebP for modern browsers and keep fallback JPEG/PNG if needed.
- Target quality 70–85 for photographic images; test visually.
- Run Lighthouse (or PageSpeed) and iterate.

Automation suggestions:
- Add a small build step or Git hook that converts uploaded images to WebP and generates responsive sizes.
- Use Git LFS for very large original images if needed.

Notes:
- Keep filenames and paths unchanged unless you update references in HTML.
- Backups: keep originals in a separate folder before mass conversion.