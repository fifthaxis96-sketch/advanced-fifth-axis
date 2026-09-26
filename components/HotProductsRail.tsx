"use client";

import { useRef } from "react";

type HotItem = { key: string; href: string; image?: string; name: string };

export function HotProductsRail({ items, lang }: { items: HotItem[]; lang: "en" | "ar" }) {
  const railRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const suppressClick = useRef(false);
  const forward = lang === "ar" ? -1 : 1;

  const scroll = (direction: number) => railRef.current?.scrollBy({ left: direction * forward * 440, behavior: "smooth" });

  return <div className="hotProductsSlider">
    <button type="button" className="hotProductsNav" onClick={() => scroll(-1)} aria-label={lang === "ar" ? "المنتجات السابقة" : "Previous products"}>{lang === "ar" ? "›" : "‹"}</button>
    <div ref={railRef} className="hotProductsRail" aria-label={lang === "ar" ? "مرر لعرض المنتجات المميزة" : "Scroll to explore hot products"}
      onDragStart={event => event.preventDefault()}
      onPointerDown={event => {
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        drag.current = { active: true, startX: event.clientX, startScroll: event.currentTarget.scrollLeft, moved: false };
      }}
      onPointerMove={event => {
        if (!drag.current.active || event.pointerType !== "mouse") return;
        const distance = event.clientX - drag.current.startX;
        if (Math.abs(distance) > 5) {
          if (!drag.current.moved) event.currentTarget.setPointerCapture(event.pointerId);
          drag.current.moved = true;
          event.currentTarget.style.scrollSnapType = "none";
          event.currentTarget.scrollLeft = drag.current.startScroll - distance;
          suppressClick.current = true;
        }
      }}
      onPointerUp={event => {
        if (!drag.current.active) return;
        drag.current.active = false;
        event.currentTarget.style.scrollSnapType = "";
        if (drag.current.moved) window.setTimeout(() => { suppressClick.current = false; }, 100);
      }}
      onPointerCancel={event => {
        drag.current.active = false;
        event.currentTarget.style.scrollSnapType = "";
        suppressClick.current = false;
      }}
      onClickCapture={event => {
        if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; }
      }}>
      {items.map(item => <a className="hotProduct" href={item.href} key={item.key} draggable={false}>
        <span className="hotProductThumb"><img src={item.image} alt="" loading="lazy" decoding="async" width="100" height="100" draggable={false}/></span>
        <span className="hotProductName">{item.name}</span>
        <span className="hotProductArrow" aria-hidden="true">↗</span>
      </a>)}
    </div>
    <button type="button" className="hotProductsNav" onClick={() => scroll(1)} aria-label={lang === "ar" ? "المنتجات التالية" : "Next products"}>{lang === "ar" ? "‹" : "›"}</button>
  </div>;
}
