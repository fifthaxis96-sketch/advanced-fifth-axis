"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { products } from "@/lib/site";
import { trackInquiryIntent } from "@/lib/analytics";

export function Analytics() {
  const pathname = usePathname() || "/";
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const a = event.target instanceof Element ? event.target.closest("a") : null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const channel = /^https:\/\/wa\.me\//.test(href) ? "whatsapp" : href.startsWith("mailto:") ? "email" : href.startsWith("tel:") ? "phone" : null;
      if (!channel) return;
      const slug = a.dataset.productSlug || pathname.match(/^\/(?:ar\/)?products\/([^/]+)$/)?.[1];
      trackInquiryIntent({ channel, language: pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en", product_slug: products.find(p => p.slug === slug)?.slug, source: "link" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);
  return <>
    <Script id="analytics-init" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-5N43XLD871', {send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false});
gtag('event', 'page_view', {page_location: location.origin + location.pathname, page_referrer: document.referrer ? new URL(document.referrer).origin : ''});`}</Script>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-5N43XLD871" strategy="afterInteractive" />
  </>;
}
