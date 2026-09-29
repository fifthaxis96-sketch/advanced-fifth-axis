"use client";

import { useState } from "react";
import type { Product } from "@/lib/site";
import { addQuoteItem } from "@/lib/quote-list";

export function AddToQuote({ product, lang }: { product: Product; lang: "en" | "ar" }) {
  const [variant, setVariant] = useState("");
  const [added, setAdded] = useState(false);
  const base = lang === "ar" ? "/ar" : "";
  return <div className="addToQuote">
    {product.variants.length > 0 && <label>
      <span>{lang === "ar" ? "اختر التكوين" : "Choose configuration"}</span>
      <select value={variant} onChange={event => { setVariant(event.target.value); setAdded(false); }}>
        <option value="">{lang === "ar" ? "يرجى التأكيد مع الفريق" : "To be confirmed with our team"}</option>
        {product.variants.map(value => <option key={value} value={value}>{value}</option>)}
      </select>
    </label>}
    <button type="button" className="quoteListButton" onClick={() => { addQuoteItem({slug: product.slug, variant, quantity: 1}); setAdded(true); }}>
      {added ? lang === "ar" ? "تمت الإضافة إلى قائمة عرض السعر ✓" : "Added to quotation list ✓" : lang === "ar" ? "أضف إلى قائمة عرض السعر +" : "Add to quotation list +"}
    </button>
    {added && <a href={`${base}/contact#quote-builder`}>{lang === "ar" ? "راجع قائمتك" : "Review your list"} ↗</a>}
  </div>;
}
