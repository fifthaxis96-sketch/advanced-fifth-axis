/** Use the prebuilt image sized for its context; keep the original on detail pages. */
export function productThumbnail(src: string, size: "large" | "small" = "large") {
  return src.startsWith("/products/") ? src.replace("/products/", `/thumbs/${size}/`) : src;
}
