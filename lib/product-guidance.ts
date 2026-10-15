import content from "@/content/product-guidance.json";

type Guidance = { en: { question: string; answer: string }; ar: { question: string; answer: string } };
export const productGuidance: Record<string, Guidance> = content;

export function productGuideSlug(slug: string, category: string): string {
  if (category === "Drive Systems") return "kelly-connections";
  if (["rock-augers", "drilling-buckets", "core-barrels", "cleaning-buckets", "roller-bits"].includes(slug)) return "drilling-tool-selection";
  return "foundation-drilling-rfq-checklist";
}
