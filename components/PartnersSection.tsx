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
  return <section id="partners" className="partnersSection" aria-labelledby="partners-title"><div className="wrap">
    <div className="partnersHeading"><span className="sectionKicker"><i/>{lang === "ar" ? "شراكات نعتز بها" : "VALUED PARTNERSHIPS"}</span><h2 id="partners-title">{lang === "ar" ? "شركاء النجاح" : "Partners in Success"}</h2></div>
    <ul className="partnersGrid">{partners.map(([slug, name]) => <li key={slug}><img src={`/partners/${slug}.webp`} alt={name} loading="lazy" decoding="async" width="720" height="420"/></li>)}</ul>
  </div></section>;
}
