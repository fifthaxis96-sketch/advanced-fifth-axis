"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  ["ahmadiah", "Ahmadiah Contracting & Trading Co."],
  ["keller", "Keller"],
  ["kabbani", "Kabbani Construction Group"],
  ["saudi-bauer", "Saudi Bauer Foundation Contractors"],
  ["sudan-pile", "Sudan Pile for Roads & Bridges"],
  ["edrafor", "Edrafor"],
  ["eamar-eg", "Eamar EG"],
  ["huta", "Huta Foundation"],
  ["experts", "Experts Deep Foundations Co."],
  ["sawaed-al-ezz", "Sawaed Al-Ezz Contracting Co."],
  ["rakayiz", "Rakayiz Concrete Company"],
  ["jeddah-foundation", "Jeddah Foundation Contracting Co."],
  ["asas", "ASAS"],
];

export function PartnersSection({ lang }: { lang: "en" | "ar" }) {
  const marquee = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = marquee.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <section id="partners" className="partnersSection" aria-labelledby="partners-title"><div className="wrap">
    <div className="partnersHeading"><span className="sectionKicker"><i/>{lang === "ar" ? "شراكات نعتز بها" : "VALUED PARTNERSHIPS"}</span><h2 id="partners-title">{lang === "ar" ? "شركاء النجاح" : "Partners in Success"}</h2></div>
    <div ref={marquee} className={`partnersMarquee${visible ? " isVisible" : ""}`} dir="rtl"><div className="partnersTrack">{[0, 1].map(copy => <ul className="partnersLogoRow" key={copy} aria-hidden={copy === 1 ? true : undefined}>{partners.map(([slug, name]) => <li key={slug}><img src={`/partners/${slug}.webp`} alt={copy === 0 ? name : ""} aria-hidden={copy === 1 ? true : undefined} loading="lazy" decoding="async" width="720" height="420"/></li>)}</ul>)}</div></div>
  </div></section>;
}
