import content from "@/content/product-guidance.json";

type Guidance = { en: { question: string; answer: string }; ar: { question: string; answer: string } };
export const productGuidance: Record<string, Guidance> = content;

export function productGuideSlug(slug: string, _category: string): string {
  return `${slug}-guide`;
}
