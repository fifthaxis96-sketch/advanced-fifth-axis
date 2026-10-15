import type { MetadataRoute } from "next";
import settings from "@/content/seo.json";
import recordedDates from "@/content/sitemap-dates.json";
import { products, collections, productsForCollection } from "@/lib/site";
import { guides } from "@/lib/guides";
import { fieldWorkGroups } from "@/lib/field-work";

export const dynamic = "force-static";
const origin = "https://advanced-fifthaxis.com";
const dates: Record<string, string> = recordedDates;
const paths = new Set(Object.keys(settings));

function pageImages(englishPath: string): string[] {
  if (englishPath === "/") return ["/home/foundation-drilling-showcase-optimized.webp"];
  if (englishPath === "/field-work") {
    return fieldWorkGroups.flatMap(group => group.scenes.map(scene => `/projects/${scene.file}.webp`));
  }
  const product = products.find(item => englishPath === `/products/${item.slug}`);
  if (product) return product.images || [];
  const guide = guides.find(item => englishPath === `/guides/${item.slug}`);
  if (guide?.productSlug) {
    const image = products.find(item => item.slug === guide.productSlug)?.images?.[0];
    return image ? [image] : [];
  }
  if (englishPath === "/products") return products.flatMap(item => item.images?.[0] || []);
  if (englishPath === "/collections") {
    return collections.flatMap(collection => productsForCollection(collection).find(item => item.images?.length)?.images?.[0] || []);
  }
  const collection = collections.find(item => englishPath === `/collections/${item.slug}`);
  return collection ? productsForCollection(collection).flatMap(item => item.images?.[0] || []) : [];
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical, indexable landing pages belong in the editable SEO inventory.
  // Generate both language entries from that inventory and require each counterpart.
  return [...paths].sort().map(path => {
    if (!path.startsWith("/") || /[?#]/.test(path) || (path !== "/" && path.endsWith("/"))) {
      throw new Error(`Invalid canonical sitemap path: ${path}`);
    }
    const englishPath = path.replace(/^\/ar(?=\/|$)/, "") || "/";
    const arabicPath = `/ar${englishPath === "/" ? "" : englishPath}`;
    if (!paths.has(englishPath) || !paths.has(arabicPath)) {
      throw new Error(`Missing sitemap language counterpart for ${path}`);
    }
    const english = origin + (englishPath === "/" ? "" : englishPath);
    const images = [...new Set(pageImages(englishPath))].map(image => origin + image);
    const lastModified = dates[path];
    if (lastModified && (!Number.isFinite(Date.parse(lastModified)) || Date.parse(lastModified) > Date.now())) {
      throw new Error(`Invalid recorded sitemap modification date for ${path}`);
    }
    return {
      url: origin + (path === "/" ? "" : path),
      ...(lastModified ? { lastModified } : {}),
      alternates: { languages: { en: english, ar: origin + arabicPath, "x-default": english } },
      ...(images.length ? { images } : {}),
    };
  });
}
