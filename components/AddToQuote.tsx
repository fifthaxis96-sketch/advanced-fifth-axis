import type { Product } from "@/lib/site";

export function AddToQuote({ product, lang }: { product: Product; lang: "en" | "ar" }) {
  const base = lang === "ar" ? "/ar" : "";
  return <a className="primaryButton quotationButton" href={`${base}/contact?product=${encodeURIComponent(product.slug)}#quote-builder`}>
    {lang === "ar" ? "اطلب عرض سعر" : "Request a quotation"}
  </a>;
}
