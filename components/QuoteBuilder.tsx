"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { company, products } from "@/lib/site";
import { addQuoteItem, observeQuoteList, quoteListSnapshot, readQuoteList, saveQuoteList } from "@/lib/quote-list";

const empty = "[]";
const serverSnapshot = () => empty;
type Lang = "en" | "ar";

export function QuoteBuilder({lang}:{lang:Lang}) {
  const ar=lang==="ar";
  const [selectedSlug,setSelectedSlug]=useState("");
  const [selectedVariant,setSelectedVariant]=useState("");
  const [selectedSize,setSelectedSize]=useState("");
  const [selectedQty,setSelectedQty]=useState("1");
  const [customProduct,setCustomProduct]=useState("");
  const [rig,setRig]=useState("");
  const [ground,setGround]=useState("");
  const [city,setCity]=useState("");
  const [notes,setNotes]=useState("");
  const snapshot=useSyncExternalStore(observeQuoteList,quoteListSnapshot,serverSnapshot);
  const items=useMemo(() => { void snapshot; return readQuoteList(); },[snapshot]);
  const product=products.find(p=>p.slug===selectedSlug);
  const canSend=items.length>0 || customProduct.trim().length>0;
  const message=useMemo(()=>{
    const lines=ar?["Hello, I would like a quotation. / مرحبًا، أود طلب عرض سعر."]:["Hello, I would like to request a quotation."];
    items.forEach((item,i)=>{
      const p=products.find(x=>x.slug===item.slug);
      lines.push(`${i+1}. ${ar?p?.nameAr:p?.name}${item.variant?` — ${item.variant}`:""}${item.size?.trim()?` — ${ar?"المقاس":"Size"}: ${item.size.trim()}`:""} × ${item.quantity}`);
    });
    if(customProduct.trim())lines.push(`${ar?"طلب مخصص":"Custom requirement"}: ${customProduct.trim()}`);
    if(rig.trim())lines.push(`${ar?"المعدة":"Rig"}: ${rig.trim()}`);
    if(ground.trim())lines.push(`${ar?"التربة/الاستخدام":"Ground / application"}: ${ground.trim()}`);
    if(city.trim())lines.push(`${ar?"مدينة التسليم":"Delivery city"}: ${city.trim()}`);
    if(notes.trim())lines.push(`${ar?"ملاحظات":"Notes"}: ${notes.trim()}`);
    return lines.join("\n");
  },[ar,items,customProduct,rig,ground,city,notes]);
  const whatsappHref=`https://wa.me/${company.phone.replace("+","")}?text=${encodeURIComponent(message)}`;
  const emailHref=`mailto:${company.email}?subject=${encodeURIComponent(ar?"طلب عرض سعر معدات حفر الأساسات":"Foundation drilling quotation request")}&body=${encodeURIComponent(message)}`;
  const updateItem=(index:number,change:{quantity?:number;size?:string})=>saveQuoteList(items.map((item,i)=>i===index?{...item,...change}:item));
  const addProduct=()=>{
    if(!product)return;
    const qty=Math.max(1,Math.min(9999,Number(selectedQty)||1));
    addQuoteItem({slug:product.slug,variant:selectedVariant,quantity:qty,size:selectedSize.trim().slice(0,80)});
    setSelectedSlug("");setSelectedVariant("");setSelectedSize("");setSelectedQty("1");
  };
  return <section className="quoteBuilder" id="quote-builder">
    <div className="quoteBuilderHead"><span>{ar?"طلب عرض سعر":"QUOTATION BUILDER"}</span><h2>{ar?"جهّز طلبك في قائمة واحدة.":"Build one clear quotation request."}</h2><p>{ar?"أضف كل منتج مع مقاسه وكميته، ثم أرسل الطلب عبر واتساب أو البريد الإلكتروني. تُحفظ القائمة في هذا المتصفح حتى تحذفها.":"Add each product with its own size and quantity, then send the request by WhatsApp or email. The list stays in this browser until you remove it."}</p><a href={`${ar?"/ar":""}/guides/foundation-drilling-rfq-checklist`}>{ar?"ما المعلومات المطلوبة لعرض السعر؟":"What details help us quote accurately?"} ↗</a></div>
    <div className="quoteForm">
      <div className="quoteList" aria-live="polite">
        <h3>{ar?"قائمة المنتجات":"Products in your request"} ({items.length})</h3>
        {items.length?<ul>{items.map((item,i)=>{
          const p=products.find(x=>x.slug===item.slug);
          return <li key={`${item.slug}-${item.variant}-${i}`}><div><b>{ar?p?.nameAr:p?.name}</b>{item.variant&&<small>{item.variant}</small>}</div><label className="quoteItemSize"><span>{ar?"المقاس":"Size"}</span><input value={item.size||""} maxLength={80} onChange={e=>updateItem(i,{size:e.target.value})} placeholder={ar?"مثال: 1200 مم":"e.g. 1200 mm"}/></label><label className="quoteItemQty"><span>{ar?"الكمية":"Qty"}</span><input type="number" min="1" max="9999" value={item.quantity} onChange={e=>updateItem(i,{quantity:Math.max(1,Math.min(9999,Number(e.target.value)||1))})}/></label><button type="button" onClick={()=>saveQuoteList(items.filter((_,j)=>i!==j))} aria-label={`${ar?"احذف":"Remove"} ${ar?p?.nameAr:p?.name}`}>×</button></li>;
        })}</ul>:<p>{ar?"لم تضف منتجات بعد. اختر منتجًا أدناه أو أضفه من صفحته.":"No products yet. Choose one below or add it from a product page."}</p>}
      </div>
      <div className="quoteAdd"><h3>{ar?"أضف منتجًا":"Add a product"}</h3><div className="quoteAddGrid">
        <label><span>{ar?"المنتج":"Product"}</span><select value={selectedSlug} onChange={e=>{setSelectedSlug(e.target.value);setSelectedVariant("");}}><option value="">{ar?"اختر المنتج":"Select a product"}</option>{products.map(p=><option key={p.slug} value={p.slug}>{ar?p.nameAr:p.name}</option>)}</select></label>
        {product && product.variants.length>0 && <label><span>{ar?"التكوين":"Configuration"}</span><select value={selectedVariant} onChange={e=>setSelectedVariant(e.target.value)}><option value="">{ar?"يؤكد لاحقًا":"To be confirmed"}</option>{product.variants.map(v=><option key={v} value={v}>{v}</option>)}</select></label>}
        <label><span>{ar?"المقاس أو القطر":"Size or diameter"}</span><input value={selectedSize} maxLength={80} onChange={e=>setSelectedSize(e.target.value)} placeholder={ar?"مثال: 1200 مم":"e.g. 1200 mm"}/></label>
        <label><span>{ar?"الكمية":"Quantity"}</span><input type="number" min="1" max="9999" value={selectedQty} onChange={e=>setSelectedQty(e.target.value)}/></label>
      </div><button className="quoteAddButton" type="button" onClick={addProduct} disabled={!product}>{ar?"إضافة إلى الطلب +":"Add to request +"}</button></div>
      <label className="quoteWide"><span>{ar?"طلب مخصص أو منتج غير مدرج (اختياري)":"Custom requirement or unlisted product (optional)"}</span><input value={customProduct} onChange={e=>setCustomProduct(e.target.value)} maxLength={200} placeholder={ar?"صف المنتج المطلوب":"Describe the item you need"}/></label>
      <label><span>{ar?"نوع وموديل المعدة":"Rig make and model"}</span><input value={rig} onChange={e=>setRig(e.target.value)} maxLength={120} placeholder={ar?"مثال: Bauer / Soilmec":"e.g. Bauer / Soilmec"}/></label>
      <label><span>{ar?"التربة أو الاستخدام":"Ground or application"}</span><input value={ground} onChange={e=>setGround(e.target.value)} maxLength={160} placeholder={ar?"مثال: صخر أو رمل":"e.g. rock or sand"}/></label>
      <label><span>{ar?"مدينة التسليم":"Delivery city"}</span><input value={city} onChange={e=>setCity(e.target.value)} maxLength={100} placeholder={ar?"مثال: جدة":"e.g. Jeddah"}/></label>
      <label className="quoteNotes"><span>{ar?"ملاحظات ورسومات متوفرة":"Notes and available drawings"}</span><textarea value={notes} onChange={e=>setNotes(e.target.value)} maxLength={1000} rows={4} placeholder={ar?"اذكر الوصلة والمواعيد وأي تفاصيل مهمة. يمكنك إرفاق الرسم في واتساب أو البريد بعد فتح الرسالة.":"Mention the connection, timing and other details. Attach drawings in WhatsApp or email after opening the message."}/></label>
      <div className="quoteSendActions">{canSend?<><a className="primaryButton quoteSend" href={whatsappHref} target="_blank" rel="noopener noreferrer">{ar?"أرسل عبر واتساب":"Send by WhatsApp"} ↗</a><a className="quoteEmail" href={emailHref}>{ar?"أرسل عبر البريد الإلكتروني":"Send by email"} ↗</a></>:<><span className="primaryButton quoteSend quoteDisabled" aria-disabled="true">{ar?"أرسل عبر واتساب":"Send by WhatsApp"}</span><span className="quoteEmail quoteDisabled" aria-disabled="true">{ar?"أرسل عبر البريد الإلكتروني":"Send by email"}</span></>}</div>
      {!canSend&&<p className="quoteHint">{ar?"أضف منتجًا أو اكتب طلبًا مخصصًا لتفعيل الإرسال.":"Add a product or describe a custom requirement to enable sending."}</p>}
      <p className="quotePrivacy">{ar?"سيفتح التطبيق المختار برسالة جاهزة. راجعها وأرفق الرسومات ثم أرسلها؛ لا يرسل الموقع طلبك تلقائيًا.":"Your chosen app opens with a prepared message. Review it, attach drawings and send; this site does not submit the inquiry automatically."}</p>
    </div>
  </section>;
}
