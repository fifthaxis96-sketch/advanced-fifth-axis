import type { MetadataRoute } from "next";
import { products } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://advanced-fifthaxis.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...products.map((p) => ({ url: `${base}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
