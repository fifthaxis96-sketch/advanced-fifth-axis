export type Product = {
  slug: string;
  name: string;
  nameAr: string;
  category: string;
  description: string;
  descriptionAr: string;
  image?: string;
  imageType: "manufacturer-reference" | "photo-pending";
  variants: string[];
};

// Product families and model names transcribed from the lineup supplied by the owner.
// A model name is an inquiry option, not a confirmed stock or compatibility claim.
export const products: Product[] = [
  {
    slug: "roller-bits", name: "Roller Bits", nameAr: "رؤوس الحفر الدوارة", category: "Cutting Tools",
    description: "Roller-bit models for foundation drilling inquiries.",
    descriptionAr: "موديلات رؤوس الحفر الدوارة للاستفسارات الخاصة بحفر الأساسات.",
    image: "/products/roller-bits-0.webp", imageType: "manufacturer-reference",
    variants: ["MH-1 Classic", "MH-2 Traditional", "MH-3 Flagship", "MH-3R Holder type", "MH-3B Replaceable", "MH-3H 12-1/4\"", "MH-3P Reinforced"],
  },
  {
    slug: "bullet-teeth", name: "Bullet Teeth & Holders", nameAr: "أسنان الحفر المخروطية وحواملها", category: "Wear Parts",
    description: "Bullet teeth and holder model names from our supplied lineup.",
    descriptionAr: "موديلات أسنان الحفر المخروطية وحواملها وفق القائمة المقدمة.",
    image: "/products/bullet-teeth-7.webp", imageType: "manufacturer-reference",
    variants: ["B47K22H", "C31HD", "M50-22x27S", "M60-22x27", "69-95 Holder", "78-95 Holder", "B43 Holder", "C30 Holder"],
  },
  {
    slug: "bauer-teeth", name: "Bauer Teeth", nameAr: "أسنان باور", category: "Wear Parts",
    description: "Bauer tooth model names shown in the supplied reference.",
    descriptionAr: "موديلات أسنان باور الواردة في المرجع المقدم.",
    image: "/products/bauer-teeth-15.webp", imageType: "manufacturer-reference",
    variants: ["BFZ70", "BFZ72", "BFZ80"],
  },
  {
    slug: "bucket-teeth", name: "Bucket Teeth", nameAr: "أسنان بكيتات الحفر", category: "Wear Parts",
    description: "Bucket tooth model names shown in the supplied reference.",
    descriptionAr: "موديلات أسنان بكيتات الحفر الواردة في المرجع المقدم.",
    image: "/products/bucket-teeth-18.webp", imageType: "manufacturer-reference",
    variants: ["V20", "25T", "25RC-12"],
  },
  {
    slug: "rock-augers", name: "Rock Augers", nameAr: "أوجرات حفر الصخور", category: "Foundation Tools",
    description: "Straight and conical rock augers for rotary piling. Typical configurations use bullet teeth; diameter, flight geometry, pilot and Kelly connection are selected for the ground and rig.",
    descriptionAr: "أوجرات صخور مستقيمة ومخروطية للحفر الدوار، عادةً بأسنان صخرية مخروطية. يتم تحديد القطر وتصميم الحلزون والسن المركزي ووصلة كيلي حسب التربة والمعدة.",
    image: "/products/rock-augers-21.webp", imageType: "manufacturer-reference",
    variants: ["Straight Rock Auger", "Conical Rock Auger", "Rock Auger Pilot Bit / Pilot Head"],
  },
  {
    slug: "drilling-buckets", name: "Drilling Buckets", nameAr: "بكيتات الحفر", category: "Foundation Tools",
    description: "Rotary drilling buckets for soil, rock and bore cleaning. Rock buckets commonly use bullet teeth and reinforced wear protection; final diameter, shell and Kelly box are project-specific.",
    descriptionAr: "بكيتات حفر دوارة للتربة والصخور وتنظيف قاع الحفرة. بكيتات الصخور تستخدم عادةً أسنانًا مخروطية وحماية تآكل معززة؛ القطر والجسم ووصلة كيلي حسب المشروع.",
    image: "/products/drilling-buckets-23.webp", imageType: "manufacturer-reference",
    variants: ["Bucket with soil teeth", "Bucket with rock teeth", "Cleaning bucket"],
  },
  {
    slug: "core-barrels", name: "Core Barrels", nameAr: "كور بارل", category: "Foundation Tools",
    description: "Core barrels for cutting an annular ring in rock and hard formations. Available with bullet teeth or roller bits; common Kelly box sizes include 130×130, 150×150 and 200×200 mm, subject to confirmation.",
    descriptionAr: "كور بارل لقطع حلقة محيطية في الصخور والطبقات الصلبة، بخيارات أسنان مخروطية أو رولر بت. مقاسات كيلي الشائعة 130×130 و150×150 و200×200 مم، مع تأكيد المقاس قبل التصنيع.",
    image: "/products/core-barrels-26.webp", imageType: "manufacturer-reference",
    variants: ["Core barrel with bullet teeth", "Core barrel with roller bit"],
  },
  {
    slug: "casing", name: "Casing & Components", nameAr: "مواسير التغليف وملحقاتها", category: "Casing",
    description: "Casing and related component types shown in the supplied lineup.",
    descriptionAr: "أنواع مواسير التغليف ومكوناتها الواردة في القائمة المقدمة.",
    image: "/products/casing-28.webp", imageType: "manufacturer-reference",
    variants: ["Double wall casing", "Casing drive", "Casing shoe"],
  },
  {
    slug: "cfa", name: "CFA Augers", nameAr: "أوجرات الحفر المستمر", category: "Foundation Tools",
    description: "Continuous flight augers for foundation drilling inquiries.",
    descriptionAr: "أوجرات الحفر المستمر للاستفسارات الخاصة بأعمال الأساسات.",
    image: "/products/cfa-31.webp", imageType: "manufacturer-reference",
    variants: ["Continuous flight auger"],
  },
  {
    slug: "kelly-boxes", name: "Kelly Boxes & Adapters", nameAr: "كيلي بوكس ووصلات الحفر", category: "Drive Systems",
    description: "Heavy-duty square Kelly boxes and adapters for rotary drilling tools. Common connection sizes are 130×130, 150×150 and 200×200 mm; pin-hole layout and tool-side dimensions are made to the confirmed rig/tool interface.",
    descriptionAr: "كيلي بوكس ووصلات مربعة شديدة التحمل لأدوات الحفر الدوار. المقاسات الشائعة 130×130 و150×150 و200×200 مم؛ يتم تصنيع فتحات التثبيت وأبعاد جهة الأداة حسب الوصلة المؤكدة للمعدة.",
    imageType: "photo-pending",
    variants: ["130×130 mm Kelly Box", "150×150 mm Kelly Box", "200×200 mm Kelly Box", "Custom Kelly Adapter"],
  },
  {
    slug: "kelly-bars", name: "Kelly Bars", nameAr: "قضبان كيلي", category: "Drive Systems",
    description: "Interlocking and friction Kelly bar types shown in the supplied lineup.",
    descriptionAr: "قضبان كيلي التعشيق والاحتكاك حسب المرجع المقدم.",
    imageType: "photo-pending",
    variants: ["Interlocking Kelly bar", "Friction Kelly bar"],
  },
];

export const company = {
  name: "Advanced Fifth Axis",
  phone: "+966550071571",
  phoneDisplay: "055 007 1571",
  address: "Al Muftakira Street 4474, Jeddah Industrial, Saudi Arabia",
  vat: "310463296800003",
  cr: "4030336147",
};