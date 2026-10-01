import type { Metadata } from "next";
import settings from "@/content/seo.json";

type SEOEntry = { title: string; description: string };
const pages: Record<string, SEOEntry> = settings;

// Only editorial fields are configurable; crawl and canonical settings remain safe.
export function withSEO(path: string, metadata: Metadata): Metadata {
  const entry = pages[path];
  if (!entry) return metadata;
  const title = entry.title.trim();
  const description = entry.description.trim();
  if (!title || !description) throw new Error(`SEO title and description are required for ${path}`);
  return {
    ...metadata,
    title: { absolute: title },
    description,
    openGraph: { ...metadata.openGraph, title, description },
    twitter: { ...metadata.twitter, title, description },
  };
}
