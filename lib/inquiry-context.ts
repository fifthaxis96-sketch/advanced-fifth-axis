import type { Product } from "./site";

const origin = "https://advanced-fifthaxis.com";
type Context = { product?: Product; lang: "en" | "ar"; pathname?: string; variant?: string };

export function inquiryContextLines({ product, lang, pathname = "/", variant }: Context): string[] {
  const ar = lang === "ar";
  if (!product) return [`${ar ? "الصفحة" : "Page"}: ${origin}${pathname}`];
  const page = `${origin}${ar ? "/ar" : ""}/products/${product.slug}`;
  const lines = [
    `${ar ? "المنتج" : "Product"}: ${ar ? product.nameAr : product.name}`,
    `${ar ? "مرجع المنتج" : "Product reference"}: ${product.slug}`,
  ];
  if (variant && product.variants.includes(variant)) lines.push(`${ar ? "الخيار" : "Option"}: ${variant}`);
  lines.push(`${ar ? "رابط المنتج" : "Product page"}: ${page}`);
  for (const [index, image] of (product.images || []).entries()) {
    lines.push(`${ar ? "صورة المنتج" : "Product photo"}${index ? ` ${index + 1}` : ""}: ${origin}${image}`);
  }
  return lines;
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
