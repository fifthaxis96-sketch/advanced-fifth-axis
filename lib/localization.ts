import variantsAr from "@/content/variants-ar.json";

export function variantLabel(variant: string, lang: "en" | "ar"): string {
  return lang === "ar" ? (variantsAr as Record<string, string>)[variant] || variant : variant;
}
