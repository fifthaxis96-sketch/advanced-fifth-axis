"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { company, products } from "@/lib/site";
import { observeQuoteList, quoteListSnapshot, readQuoteList, saveQuoteList } from "@/lib/quote-list";

const empty = "[]";
const serverSnapshot = () => empty;

export function QuoteBuilder({lang}:{lang:"en"|"ar"}) {
  const [product,setProduct]=useState("");
  const [rig,setRig]=useState("");
  const [size,setSize]=useState("");
  const [qty,setQty]=useState("");
  const [notes,setNotes]=useState("");
  const snapshot=useSyncExternalStore(observeQuoteList,quoteListSnapshot,serverSnapshot);
  const items=useMemo(() => { void snapshot; return readQuoteList(); },[snapshot]);
  const href=useMemo(()=>{
    const lines=lang==="ar"
      ? ["مرحبًا، أود طلب عرض سعر.",...items.map((item,i)=>{
          const p=products.find(product=>product.slug===item.slug);
          return `${i+1}. ${p?.nameAr || item.slug}${item.variant?` — ${item.variant}`:""} × ${item.quantity}`;
        }),product&&`منتج إضافي: ${product}`,rig&&`المعدة: ${rig}`,size&&`المقاس/القطر: ${size}`,qty&&`كمية المنتج الإضافي: ${qty}`,notes&&`ملاحظات: ${notes}`]
      : ["Hello, I would like to request a quotation.",...items.map((item,i)=>{
          const p=products.find(product=>product.slug===item.slug);
          return `${i+1}. ${p?.name || item.slug}${item.variant?` — ${item.variant}`:""} × ${item.quantity}`;
        }),product&&`Additional product: ${product}`,rig&&`Rig: ${rig}`,size&&`Size/Diameter: ${size}`,qty&&`Additional product quantity: ${qty}`,notes&&`Notes: ${notes}`];
    return "https://wa.me/"+company.phone.replace("+","")+"?text="+encodeURIComponent(lines.filter(Boolean).join("\n"));
  },[lang,items,product,rig,size,qty,notes]);
  const updateQuantity=(index:number,value:number)=>saveQuoteList(items.map((item,i)=>i===index?{...item,quantity:Math.max(1,Math.min(9999,value || 1))}:item));
  return <section className="quoteBuilder" id="quote-builder">
    <div className="quoteBuilderHead"><span>{lang==="ar"?"طلب عرض سعر":"QUOTATION BUILDER"}</span><h2>{lang==="ar"?"جهّز تفاصيل استفسارك قبل الإرسال.":"Prepare your inquiry before sending it."}</h2><p>{lang==="ar"?"أضف المنتجات إلى قائمتك ثم أرسل طلبًا واحدًا عبر واتساب. ستبقى القائمة في هذا المتصفح حتى تحذفها.":"Add products to your list and send one WhatsApp inquiry. Your list stays in this browser until you remove it."}</p></div>
    <div className="quoteForm">
      <div className="quoteList" aria-live="polite">
        <h3>{lang==="ar"?"قائمة المنتجات":"Your quotation list"} ({items.length})</h3>
        {items.length ? <ul>{items.map((item,i)=>{
          const p=products.find(product=>product.slug===item.slug);
          return <li key={`${item.slug}-${item.variant}`}><div><b>{lang==="ar"?p?.nameAr:p?.name}</b>{item.variant&&<small>{item.variant}</small>}</div><label><span>{lang==="ar"?"الكمية":"Qty"}</span><input type="number" min="1" max="9999" value={item.quantity} onChange={event=>updateQuantity(i,Number(event.target.value))}/></label><button type="button" onClick={()=>saveQuoteList(items.filter((_,j)=>i!==j))} aria-label={`${lang==="ar"?"احذف":"Remove"} ${lang==="ar"?p?.nameAr:p?.name}`}>×</button></li>;
        })}</ul> : <p>{lang==="ar"?"لم تضف منتجات بعد. يمكنك اختيار منتج أدناه أو إضافته من صفحة المنتج.":"No products added yet. Select one below or add items from their product pages."}</p>}
      </div>
      <label><span>{lang==="ar"?"منتج إضافي (اختياري)":"Additional product (optional)"}</span><select value={product} onChange={e=>setProduct(e.target.value)}><option value="">{lang==="ar"?"اختر منتجًا":"Select a product"}</option>{products.map(p=><option key={p.slug} value={lang==="ar"?p.nameAr:p.name}>{lang==="ar"?p.nameAr:p.name}</option>)}</select></label>
      <label><span>{lang==="ar"?"نوع وموديل المعدة":"Rig make & model"}</span><input value={rig} onChange={e=>setRig(e.target.value)} placeholder={lang==="ar"?"مثال: Bauer / Soilmec / ...":"Example: Bauer / Soilmec / ..."}/></label>
      <label><span>{lang==="ar"?"المقاس أو القطر":"Size or diameter"}</span><input value={size} onChange={e=>setSize(e.target.value)} placeholder={lang==="ar"?"مثال: 1500 مم":"Example: 1500 mm"}/></label>
      <label><span>{lang==="ar"?"كمية المنتج الإضافي":"Additional product quantity"}</span><input value={qty} onChange={e=>setQty(e.target.value)} inputMode="numeric" placeholder={lang==="ar"?"الكمية المطلوبة":"Required quantity"}/></label>
      <label className="quoteNotes"><span>{lang==="ar"?"ملاحظات إضافية":"Additional notes"}</span><textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={4} placeholder={lang==="ar"?"طبيعة التربة، الوصلة، أو أي تفاصيل مهمة...":"Ground condition, connection, or any important details..."}/></label>
      <a className="primaryButton quoteSend" href={href} target="_blank" rel="noopener noreferrer">{lang==="ar"?"إرسال الطلب عبر واتساب":"Send request on WhatsApp"} ↗</a>
      <p className="quotePrivacy">{lang==="ar"?"سيتم فتح واتساب برسالة جاهزة. راجع التفاصيل ثم أرسل الرسالة هناك؛ لا يرسل الموقع طلبك تلقائيًا.":"WhatsApp opens with a prepared message. Review and send it there; this website does not submit the inquiry automatically."}</p>
    </div>
  </section>;
}
