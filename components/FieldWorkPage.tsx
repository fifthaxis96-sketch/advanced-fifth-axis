import { Header, Footer, type Lang } from "@/components/LocalizedSite";

type Scene = { file: string; en: string; ar: string };
type Group = { en: {title: string; text: string}; ar: {title: string; text: string}; scenes: Scene[] };
const groups: Group[] = [
  {
    en: { title: "Foundation drilling beside a roadway", text: "Site photographs of a tracked drilling rig, drilling tools and reinforcement cage beside a roadway." },
    ar: { title: "حفر الأساسات بجانب الطريق", text: "صور ميدانية لآلة حفر مجنزرة وأدوات الحفر وقفص التسليح بجانب الطريق." },
    scenes: [
      {file: "roadway-foundation-rig-4079", en: "Tracked foundation drilling rig and vertical reinforcement cage beside a roadway", ar: "آلة حفر أساسات مجنزرة وقفص تسليح عمودي بجانب الطريق"},
      {file: "roadway-foundation-rig-4080", en: "Wide site view of a foundation drilling rig and reinforcement cage between road lanes", ar: "منظر عام لآلة حفر أساسات وقفص تسليح بين مسارات الطريق"},
      {file: "roadway-foundation-rig-4078", en: "Foundation drilling rig working beside a roadway and bridge construction", ar: "آلة حفر أساسات تعمل بجانب الطريق وأعمال إنشاء جسر"}
    ]
  },
  {
    en: { title: "Drilling tools on site", text: "Field views of foundation drilling tools and a rig. The images show the equipment in its working environment; tool dimensions and the ground profile are specific to each inquiry." },
    ar: { title: "أدوات الحفر في الموقع", text: "صور ميدانية لأدوات حفر الأساسات وآلة الحفر. تظهر المعدات في بيئة العمل، فيما تختلف أبعاد الأداة وطبيعة التربة حسب كل طلب." },
    scenes: [
      {file: "tool-on-rig", en: "Blue drilling tool suspended beneath a rig at a foundation site", ar: "أداة حفر زرقاء معلقة أسفل آلة حفر في موقع أساسات"},
      {file: "blue-drilling-tool", en: "Blue drilling tool in front of a tracked foundation rig", ar: "أداة حفر زرقاء أمام آلة حفر مجنزرة"},
      {file: "tool-with-rig", en: "Foundation rig with used drilling tools at a work site", ar: "آلة حفر وأدوات مستخدمة في موقع عمل"}
    ]
  },
  {
    en: { title: "Casing handling", text: "Two views of a large tubular component being lifted at a construction site. Lifting arrangement, connection and dimensions must be checked for the actual project." },
    ar: { title: "مناولة المواسير", text: "صورتان لرفع مكون أنبوبي كبير في موقع إنشاءات. يجب التحقق من طريقة الرفع والوصلة والأبعاد وفق المشروع الفعلي." },
    scenes: [
      {file: "casing-lift-red", en: "Large tubular component lifted vertically by a crane", ar: "رفع مكون أنبوبي كبير عموديًا بواسطة رافعة"},
      {file: "casing-lift-blue", en: "Vertical tubular component suspended during site handling", ar: "مكون أنبوبي معلق أثناء المناولة في الموقع"}
    ]
  },
  {
    en: { title: "Bore and excavated ground", text: "Site views of drilled openings and excavated material. They illustrate why an inquiry benefits from a ground description and geotechnical information rather than a diameter alone." },
    ar: { title: "الحفر والتربة المستخرجة", text: "صور ميدانية لفتحات حفر ومواد مستخرجة. توضح أهمية وصف التربة والمعلومات الجيوتقنية عند الاستفسار، إلى جانب القطر المطلوب." },
    scenes: [
      {file: "drilled-bore-one", en: "Drilled opening in excavated ground", ar: "فتحة حفر في تربة محفورة"},
      {file: "drilled-bore-two", en: "View into a drilled bore from ground level", ar: "منظر من سطح الأرض إلى داخل فتحة حفر"},
      {file: "excavated-material", en: "Large cylindrical piece of excavated material on site", ar: "قطعة أسطوانية كبيرة من مواد الحفر في الموقع"},
      {file: "site-material-view", en: "Excavated material and site work area", ar: "مواد مستخرجة ومنطقة العمل في الموقع"}
    ]
  }
];
export function FieldWorkPage({lang}:{lang:Lang}) {
  const ar=lang==="ar", prefix=ar?"/ar":"";
  return <div className="site" lang={lang} dir={ar?"rtl":"ltr"}><Header lang={lang} section="field-work"/><main id="main-content" className="wrap catalogPage fieldPage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={ar?"/ar":"/"}>{ar?"الرئيسية":"Home"}</a><span>/</span><span>{ar?"معرض مشاريع العملاء":"Client Projects Showcase"}</span></nav>
    <div className="catalogHero"><span className="sectionKicker"><i/>{ar?"من عملائنا":"FROM OUR CLIENTS"}</span><h1>{ar?"عملاؤنا. أدواتنا. مشاريع على أرض الواقع.":"Our Clients. Our Tools. Real Projects."}</h1><p>{ar?"استكشف صورًا شاركها عملاؤنا من مشاريع حفر الأساسات، تعرض أدواتنا ومعداتنا أثناء العمل.":"Explore photos shared by our clients from foundation drilling projects, showcasing our tools and equipment in action."}</p></div>
    {groups.map((group,i)=><section className="fieldGroup" key={group.en.title} aria-labelledby={`field-group-${i}`}><div className="sectionHeader"><div><span className="sectionKicker"><i/>{String(i+1).padStart(2,"0")}</span><h2 id={`field-group-${i}`}>{group[lang].title}</h2></div><p>{group[lang].text}</p></div><div className="fieldGrid">{group.scenes.map(scene=><figure key={scene.file}><a href={`/projects/${scene.file}.webp`} target="_blank" rel="noopener noreferrer" aria-label={ar?`عرض الصورة: ${scene.ar}`:`Open photo: ${scene.en}`}><img loading="lazy" decoding="async" src={`/projects/${scene.file}.webp`} alt={ar?scene.ar:scene.en} width="900" height="1200"/></a></figure>)}</div></section>)}
    <section className="collectionCta"><h2>{ar?"هل تعمل على مشروع مشابه؟":"Working on a similar foundation project?"}</h2><p>{ar?"أرسل موديل المعدة والقطر وطبيعة التربة والرسومات لطلب عرض سعر مناسب.":"Share your rig model, diameter, ground conditions and drawings for a relevant quotation."}</p><a className="primaryButton" href={`${prefix}/contact#quote-builder`}>{ar?"اطلب عرض سعر":"Request a quotation"} ↗</a><a className="fieldGuideLink" href={`${prefix}/guides/foundation-drilling-rfq-checklist`}>{ar?"ما البيانات المطلوبة؟":"What details should I send?"} ↗</a></section>
  </main><Footer lang={lang}/></div>;
}
