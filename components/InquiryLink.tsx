"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { company, products, type Product } from "@/lib/site";
import { inquiryLinks } from "@/lib/inquiry-context";

export function InquiryLink({ lang, channel, product, variant, className, label, children }: {
  lang: "en" | "ar"; channel: "whatsapp" | "email"; product?: Product; variant?: string;
  className?: string; label?: string; children: ReactNode;
}) {
  const pathname = usePathname() || "/";
  const [selectedSlug, setSelectedSlug] = useState("");
  useEffect(() => {
    if (!/^\/(ar\/)?contact\/?$/.test(pathname)) return;
    setSelectedSlug(new URLSearchParams(window.location.search).get("product") || "");
    const update = (event: Event) => setSelectedSlug((event as CustomEvent<string>).detail || "");
    window.addEventListener("afa-inquiry-product-change", update);
    return () => window.removeEventListener("afa-inquiry-product-change", update);
  }, [pathname]);
  const routeSlug = pathname.match(/^\/(?:ar\/)?products\/([^/]+)\/?$/)?.[1];
  const current = product || products.find(p => p.slug === routeSlug) ||
    (/^\/(ar\/)?contact\/?$/.test(pathname) ? products.find(p => p.slug === selectedSlug) : undefined);
  const links = inquiryLinks({ product: current, lang, pathname, variant }, company.phone, company.email);
  return <a href={links[channel]} className={className} aria-label={label} target={channel === "whatsapp" ? "_blank" : undefined} rel={channel === "whatsapp" ? "noopener noreferrer" : undefined}>{children}</a>;
}
