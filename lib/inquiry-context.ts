import type { Product } from "./site";

const origin = "https://advanced-fifthaxis.com";
type Context = { product?: Product; lang: "en" | "ar"; pathname?: string; variant?: string };

// A single page link lets WhatsApp create the product preview without repeating its details.
export function inquiryContextLines({ product, lang, pathname = "/" }: Context): string[] {
  return [product
    ? `${origin}${lang === "ar" ? "/ar" : ""}/products/${product.slug}`
    : `${origin}${pathname}`];
}

export function inquiryLinks(context: Context, phone: string, email: string) {
  const ar = context.lang === "ar";
  const greeting = context.product
    ? (ar ? "مرحبًا، أود الاستفسار عن هذا المنتج." : "Hello, I would like to inquire about this product.")
    : (ar ? "مرحبًا، أود الاستفسار عن منتجاتكم." : "Hello, I would like to inquire about your products.");
  const message = [...inquiryContextLines(context), "", greeting].join("\n");
  const name = context.product ? (ar ? context.product.nameAr : context.product.name) : "Advanced Fifth Axis";
  const subject = `${ar ? "استفسار عن" : "Product inquiry"}: ${name}`;
  return {
    whatsapp: `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`,
    email: `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message.replace(/\n/g, "\r\n"))}`,
  };
}
