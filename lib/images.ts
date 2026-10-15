/** Use the prebuilt image sized for its context; keep the original on detail pages. */
export function productThumbnail(src: string, size: "large" | "small" = "large") {
  return src.startsWith("/products/") ? src.replace("/products/", `/thumbs/${size}/`) : src;
}
import dimensions from "@/content/image-dimensions.json";

export function imageSize(src: string): { width: number; height: number } {
  const size = (dimensions as Record<string, { width: number; height: number }>)[src];
  if (!size) throw new Error(`Missing image dimensions for ${src}`);
  return size;
}

export function productImageSet(src: string): string | undefined {
  const thumb = productThumbnail(src);
  const original = imageSize(src);
  const small = imageSize(thumb);
  return thumb !== src && small.width < original.width
    ? `${thumb} ${small.width}w, ${src} ${original.width}w`
    : undefined;
}
