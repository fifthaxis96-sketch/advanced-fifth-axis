import articles from "@/content/product-articles.json";
import guidance from "@/content/product-guidance.json";
import { products, relatedProducts, company } from "@/lib/site";
import { variantLabel } from "@/lib/localization";
import type { Guide, GuideTranslation } from "@/lib/guides";

// These are editorial selection guides, not additional product listings.
// Numeric specifications and variants remain sourced from the catalog.
export const productArticles: Guide[] = products.map(product => {
  const content = (articles as Record<string, { en: string[]; ar: string[] }>)[product.slug];
  if (!content) throw new Error(`Missing product article: ${product.slug}`);
  const question = (guidance as Record<string, { en: {question: string; answer: string}; ar: {question: string; answer: string} }>)[product.slug];
  const translate = (lang: "en" | "ar"): GuideTranslation => {
    const ar = lang === "ar", [title, purpose, selection, review] = content[lang];
    const name = ar ? product.nameAr : product.name;
    return {
      title,
      description: ar ? `تعرف على استخدام ${name}، والمقاسات وخيارات الكتالوج وبيانات الاختيار اللازمة لمشروعك في السعودية.` : `Explore ${name.toLowerCase()} applications, catalog specifications, selection checks and quotation requirements for foundation projects in Saudi Arabia.`,
      intro: purpose,
      sections: [
        { heading: ar ? "كيف تختار التكوين المناسب؟" : "How to specify the right configuration", paragraphs: [selection] },
        { heading: ar ? "المواصفات والخيارات المدرجة" : "Catalog specifications and listed options", paragraphs: [ar ? product.descriptionAr : product.description], ...(product.variants.length ? { bullets: product.variants.map(v => variantLabel(v, lang)) } : {}) },
        { heading: ar ? "مراجعة المجموعة والفحص" : "Assembly review and inspection", paragraphs: [review] },
        { heading: question[lang].question, paragraphs: [question[lang].answer] },
        { heading: ar ? "بيانات طلب عرض السعر في السعودية" : "Preparing a quotation request in Saudi Arabia", bullets: ar ? [
          "حدد موديل المعدة واسم المنتج والكمية ونوع العمل؛ وأرفق وصف الطبقات عند طلب أداة قطع.",
          "أرسل رسمًا بالأبعاد أو صورًا بمقياس واضح. حدد الوصلات والأجزاء المقابلة، وميّز الأبعاد المقاسة عن التقديرية.",
          "اذكر مدينة التسليم والموعد المطلوب والوثائق الفنية التي يشترطها مشروعك. أكد المكونات المشمولة في العرض قبل الطلب."
        ] : [
          "Identify the rig model, product, quantity and application; include the ground profile when specifying a cutting tool.",
          "Send a dimensioned drawing or clearly scaled photos. Identify mating components and distinguish measured dimensions from estimates.",
          "State the delivery city, required date and project documentation requirements. Confirm the included components before ordering."
        ] }
      ],
      takeaway: ar ? `راجع صفحة ${name} للصور وخيارات الطلب، ثم أرسل الأبعاد لمراجعتها مع فريق ${company.nameAr} في جدة. يتم تأكيد التكوين والتوفر وموعد التسليم خلال عرض السعر.` : `Review the ${name} product page for photos and inquiry options, then send your dimensions to the Advanced Fifth Axis team in Jeddah. Configuration, availability and delivery are confirmed during quotation.`
    };
  };
  return { slug: `${product.slug}-guide`, productSlug: product.slug, related: [product.slug, ...relatedProducts(product).map(p => p.slug)], en: translate("en"), ar: translate("ar") };
});
