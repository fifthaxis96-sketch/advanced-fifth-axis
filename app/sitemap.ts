import type { MetadataRoute } from "next";
import { products, collections } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://advanced-fifthaxis.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/ar`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/collections`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ar/collections`, changeFrequency: "weekly", priority: 0.85 },
    ...collections.flatMap((c) => [
      { url: `${base}/collections/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.85 },
      { url: `${base}/ar/collections/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.8 },
    ]),
    ...products.flatMap((p) => [
      { url: `${base}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 },
      { url: `${base}/ar/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.75 },
    ]),
  ];
}