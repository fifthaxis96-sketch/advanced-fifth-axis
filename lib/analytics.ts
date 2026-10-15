type Inquiry = { channel: "whatsapp" | "email" | "phone"; language: "en" | "ar"; product_slug?: string; source: "link" | "quotation_form" };

export function trackInquiryIntent(context: Inquiry) {
  // Never send form text, phone/email values, delivery city, URLs with queries, or message bodies.
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", "inquiry_intent", {
    ...context,
    product_slug: context.product_slug || "unspecified",
    page_location: window.location.origin + window.location.pathname,
    page_path: window.location.pathname,
  });
}
