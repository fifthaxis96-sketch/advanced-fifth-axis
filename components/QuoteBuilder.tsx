"use client";

import { useMemo, useState } from "react";
import { company, products } from "@/lib/site";

export function QuoteBuilder({lang}:{lang:"en"|"ar"}) {
  const [product,setProduct]=useState("");
  const [rig,setRig]=useState("");
  const [size,setSize]=useState("");
  const [qty,setQty]=useState("");
  const [notes,setNotes]=useState("");
  const href=useMemo(()=>{
    const lines=lang==="ar"
      ? ["مرحبًا، أود طلب عرض سعر.",product&&`المنتج: ${product}`,rig&&`المعدة: ${rig}`,size&&`المقاس/القطر: ${size}`,qty&&`الكمية: ${qty}`,notes&&`ملاحظات: ${notes}`]
      : ["Hello, I would like to request a quotation.",product&&`Product: ${product}`,rig&&`Rig: ${rig}`,size&&`Size/Diameter: ${size}`,qty&&`Quantity: ${qty}`,notes&&`Notes: ${notes}`];
    return "https://wa.me/"+company.phone.replace("+","")+"?text="+encodeURIComponent(lines.filter(Boolean).join("\n"));
  },[lang,product,rig,size,qty,notes]);
  return <section className="quoteBuilder">
    <div className="quoteBuilderHead"><span>{lang==="ar"?"طلب عرض سعر":"QUOTATION BUILDER"}</span><h2>{lang==="ar"?"جهّز تفاصيل استفسارك قبل الإرسال.":"Prepare your inquiry before sending it."}</h2><p>{lang==="ar"?"أدخل المعلومات المتاحة وسيتم تجهيز رسالة واتساب منظمة لفريقنا.":"Enter the details you have and we will prepare a structured WhatsApp message for our team."}</p></div>
    <div className="quoteForm">
      <label><span>{lang==="ar"?"المنتج":"Product"}</span><select value={product} onChange={e=>setProduct(e.target.value)}><option value="">{lang==="ar"?"اختر منتجًا":"Select a product"}</option>{products.map(p=><option key={p.slug} value={lang==="ar"?p.nameAr:p.name}>{lang==="ar"?p.nameAr:p.name}</option>)}</select></label>
      <label><span>{lang==="ar"?"نوع وموديل المعدة":"Rig make & model"}</span><input value={rig} onChange={e=>setRig(e.target.value)} placeholder={lang==="ar"?"مثال: Bauer / Soilmec / ...":"Example: Bauer / Soilmec / ..."}/></label>
      <label><span>{lang==="ar"?"المقاس أو القطر":"Size or diameter"}</span><input value={size} onChange={e=>setSize(e.target.value)} placeholder={lang==="ar"?"مثال: 1500 مم":"Example: 1500 mm"}/></label>
      <label><span>{lang==="ar"?"الكمية":"Quantity"}</span><input value={qty} onChange={e=>setQty(e.target.value)} inputMode="numeric" placeholder={lang==="ar"?"الكمية المطلوبة":"Required quantity"}/></label>
      <label className="quoteNotes"><span>{lang==="ar"?"ملاحظات إضافية":"Additional notes"}</span><textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={4} placeholder={lang==="ar"?"طبيعة التربة، الوصلة، أو أي تفاصيل مهمة...":"Ground condition, connection, or any important details..."}/></label>
      <a className="primaryButton quoteSend" href={href}>{lang==="ar"?"إرسال الطلب عبر واتساب":"Send request on WhatsApp"} ↗</a>
    </div>
  </section>;
}
