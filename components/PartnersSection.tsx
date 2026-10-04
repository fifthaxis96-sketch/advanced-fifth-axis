"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  ["sudan-pile", "Sudan Pile for Roads & Bridges"],
  ["keller", "Keller"],
  ["kabbani", "Kabbani Construction Group"],
  ["saudi-bauer", "Saudi Bauer Foundation Contractors"],
  ["ahmadiah", "Ahmadiah Contracting & Trading Co."],
  ["edrafor", "Edrafor"],
  ["eamar-eg", "Eamar EG"],
  ["huta", "Huta Foundation"],
  ["experts", "Experts Deep Foundations Co."],
  ["sawaed-al-ezz", "Sawaed Al-Ezz Contracting Co."],
  ["rakayiz", "Rakayiz Concrete Company"],
  ["jeddah-foundation", "Jeddah Foundation Contracting Co."],
  ["asas", "ASAS"],
];

const logoFrames = {
  "ahmadiah": { ratio: 5.350877, width: "118.032787%", height: "210.526316%", left: "-11.475410%", top: "-60.526316%" },
  "asas": { ratio: 1.597619, width: "100.000000%", height: "100.000000%", left: "0.000000%", top: "0.000000%" },
  "eamar-eg": { ratio: 2.352941, width: "100.000000%", height: "100.000000%", left: "0.000000%", top: "0.000000%" },
  "edrafor": { ratio: 3.070423, width: "100.000000%", height: "295.774648%", left: "0.000000%", top: "-95.070423%" },
  "experts": { ratio: 4.396947, width: "125.000000%", height: "183.206107%", left: "-12.500000%", top: "-45.038168%" },
  "huta": { ratio: 3.149780, width: "100.699301%", height: "119.823789%", left: "-0.699301%", top: "0.000000%" },
  "jeddah-foundation": { ratio: 1.000000, width: "100.000000%", height: "100.000000%", left: "0.000000%", top: "0.000000%" },
  "kabbani": { ratio: 2.324627, width: "115.569823%", height: "134.328358%", left: "-8.025682%", top: "-13.059701%" },
  "keller": { ratio: 3.412322, width: "100.000000%", height: "113.744076%", left: "0.000000%", top: "-6.635071%" },
  "rakayiz": { ratio: 2.426471, width: "145.454545%", height: "117.647059%", left: "-22.626263%", top: "-11.764706%" },
  "saudi-bauer": { ratio: 2.823529, width: "100.000000%", height: "141.176471%", left: "0.000000%", top: "-20.000000%" },
  "sawaed-al-ezz": { ratio: 0.649254, width: "107.279693%", height: "104.477612%", left: "-3.831418%", top: "-0.995025%" },
  "sudan-pile": { ratio: 3.000000, width: "100.000000%", height: "100.000000%", left: "0.000000%", top: "0.000000%" },
};

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
    <div ref={marquee} className={`partnersMarquee${visible ? " isVisible" : ""}`} dir="rtl"><div className="partnersTrack">{[0, 1].map(copy => <ul className="partnersLogoRow" key={copy} aria-hidden={copy === 1 ? true : undefined}>{partners.map(([slug, name]) => <li key={slug} data-partner={slug}><span className="partnerLogoFrame" style={{ aspectRatio: logoFrames[slug as keyof typeof logoFrames].ratio, width: `min(100%, ${68 * logoFrames[slug as keyof typeof logoFrames].ratio}px)` }}><img src={`/partners/${slug}.webp`} style={{ width: logoFrames[slug as keyof typeof logoFrames].width, height: logoFrames[slug as keyof typeof logoFrames].height, left: logoFrames[slug as keyof typeof logoFrames].left, top: logoFrames[slug as keyof typeof logoFrames].top }} alt={`${name} logo`} aria-hidden={copy === 1 ? true : undefined} loading="lazy" decoding="async"/></span></li>)}</ul>)}</div></div>
  </div></section>;
}
