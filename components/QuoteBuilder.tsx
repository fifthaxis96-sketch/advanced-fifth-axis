"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { company, products } from "@/lib/site";
import { readQuoteList } from "@/lib/quote-list";
import { inquiryContextLines } from "@/lib/inquiry-context";
import { trackInquiryIntent } from "@/lib/analytics";
import { variantLabel } from "@/lib/localization";

export function QuoteBuilder({ lang }: { lang: "en" | "ar" }) {
  const ar = lang === "ar";
  const [slug, setSlug] = useState("");
  const [requirement, setRequirement] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const input = useRef<HTMLTextAreaElement>(null);
  const optional = ar ? "(اختياري)" : "(optional)";
  const errorText = ar ? "يرجى وصف طلبك بإيجاز." : "Please briefly describe what you need.";

  useEffect(() => {
    const selected = products.find(p => p.slug === new URLSearchParams(window.location.search).get("product"));
    if (selected) {
      setSlug(selected.slug);
      setRequirement(ar ? `أود طلب عرض سعر لمنتج ${selected.nameAr}.` : `I would like a quotation for ${selected.name}.`);
      return;
    }
    // Preserve requests saved in the former builder without showing its list interface.
    const saved = readQuoteList();
    if (saved.length) {
      if (saved.length === 1) setSlug(saved[0].slug);
      setRequirement(saved.map(item => {
        const p = products.find(p => p.slug === item.slug)!;
        return `${ar ? p.nameAr : p.name}${item.variant ? ` — ${variantLabel(item.variant, lang)}` : ""}${item.size ? ` — ${item.size}` : ""} × ${item.quantity}`;
      }).join("\n"));
    }
  }, [ar]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("afa-inquiry-product-change", { detail: slug }));
  }, [slug]);

  const continueRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!requirement.trim()) { setError(errorText); input.current?.focus(); return; }
    setError("");
    const p = products.find(p => p.slug === slug);
    const lines = [ar ? "مرحبًا، أود طلب عرض سعر." : "Hello, I would like to request a quotation."];
    lines.push(...inquiryContextLines({ product: p, lang, pathname: ar ? "/ar/contact" : "/contact" }));
    lines.push(`${ar ? "الطلب" : "Requirement"}: ${requirement.trim()}`);
    if (city.trim()) lines.push(`${ar ? "مدينة التسليم" : "Delivery city"}: ${city.trim()}`);
    if (details.trim()) lines.push(`${ar ? "تفاصيل المشروع" : "Project details"}: ${details.trim()}`);
    const message = encodeURIComponent(lines.join("\n"));
    const button = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    trackInquiryIntent({ channel: button?.value === "email" ? "email" : "whatsapp", language: lang, product_slug: p?.slug, source: "quotation_form" });
    if (button?.value === "email") {
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(ar ? "طلب عرض سعر معدات حفر الأساسات" : "Foundation drilling quotation request")}&body=${message}`;
      setStatus(ar ? "أكمل الإرسال في تطبيق البريد وأرفق الصور أو الرسومات هناك." : "Complete sending in your email app. Attach photos or drawings there.");
    } else {
      window.open(`https://wa.me/${company.phone.replace("+", "")}?text=${message}`, "_blank", "noopener,noreferrer");
      setStatus(ar ? "أكمل إرسال الطلب في واتساب. لم يتم إرسال الطلب من الموقع." : "Complete sending in WhatsApp. Your request has not been sent by this website.");
    }
  };

  return <section className="simpleQuote" id="quote-builder" aria-labelledby="simple-quote-title">
    <div className="simpleQuoteHead">
      <span className="sectionKicker">{ar ? "تواصل مع فريقنا" : "TALK TO OUR TEAM"}</span>
      <h2 id="simple-quote-title">{ar ? "اطلب عرض سعر" : "Request a quotation"}</h2>
      <p>{ar ? "أخبرنا بما تحتاجه، وسنساعدك في تأكيد المواصفات." : "Tell us what you need. We’ll help confirm the specifications."}</p>
    </div>
    <form className="simpleQuoteForm" onSubmit={continueRequest}>
      <label htmlFor="inquiry-product">{ar ? "المنتج" : "Product"} <span>{optional}</span></label>
      <select id="inquiry-product" name="product" value={slug} onChange={event => {
        const previous = products.find(p => p.slug === slug);
        const next = products.find(p => p.slug === event.target.value);
        const starter = previous ? (ar ? `أود طلب عرض سعر لمنتج ${previous.nameAr}.` : `I would like a quotation for ${previous.name}.`) : "";
        if (previous && requirement === starter) setRequirement(next ? (ar ? `أود طلب عرض سعر لمنتج ${next.nameAr}.` : `I would like a quotation for ${next.name}.`) : "");
        setSlug(event.target.value); setStatus("");
      }}>
        <option value="">{ar ? "اختر منتجًا أو صفه أدناه" : "Choose a product or describe it below"}</option>
        {products.map(p => <option key={p.slug} value={p.slug}>{ar ? p.nameAr : p.name}</option>)}
      </select>
      <label htmlFor="inquiry-requirement">{ar ? "طلبك" : "Your requirement"} <span>{ar ? "(مطلوب)" : "(required)"}</span></label>
      <textarea id="inquiry-requirement" name="requirement" ref={input} required maxLength={2000} rows={3} value={requirement}
        placeholder={ar ? "مثال: عدد 2 بكيت حفر صخور بقطر 1200 مم لمعدة Bauer." : "Example: 2 rock buckets, 1200 mm, for a Bauer rig."}
        aria-invalid={error ? true : undefined} aria-describedby={error ? "inquiry-error" : undefined}
        onInvalid={() => setError(errorText)} onChange={event => { setRequirement(event.target.value); setError(""); setStatus(""); }} />
      {error && <p className="simpleQuoteError" id="inquiry-error" role="alert">{error}</p>}
      <details className="simpleQuoteDetails">
        <summary>{ar ? "أضف تفاصيل المشروع" : "Add project details"} <span>{optional}</span></summary>
        <div>
          <label htmlFor="inquiry-city">{ar ? "مدينة التسليم" : "Delivery city"} <span>{optional}</span></label>
          <input id="inquiry-city" name="city" autoComplete="address-level2" value={city} maxLength={100} onChange={event => setCity(event.target.value)} placeholder={ar ? "جدة" : "Jeddah"} />
          <label htmlFor="inquiry-details">{ar ? "موديل المعدة أو تفاصيل أخرى" : "Rig model or other details"} <span>{optional}</span></label>
          <input id="inquiry-details" name="details" value={details} maxLength={300} onChange={event => setDetails(event.target.value)} placeholder={ar ? "إن كانت متوفرة" : "Only if known"} />
        </div>
      </details>
      <button type="submit" name="channel" value="whatsapp" className="simpleQuotePrimary">{ar ? "المتابعة في واتساب" : "Continue in WhatsApp"} </button>
      <button type="submit" name="channel" value="email" className="simpleQuoteEmail">{ar ? "إرسال الطلب عبر البريد بدلًا من ذلك" : "Email this request instead"}</button>
      <p className="simpleQuoteNote">{ar ? "راجع الطلب وأرسله في واتساب. يمكنك إرفاق الصور أو الرسومات هناك." : "Review and send in WhatsApp. Attach photos or drawings there."}</p>
      <p className="simpleQuoteStatus" role="status" aria-live="polite">{status}</p>
    </form>
  </section>;
}
