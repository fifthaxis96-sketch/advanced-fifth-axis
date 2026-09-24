export type Product = {
  slug: string;
  name: string;
  nameAr: string;
  category: string;
  description: string;
  descriptionAr: string;
  image: string;
  imageType: "supplied-photo" | "reference-thumbnail";
  variants: string[];
};

// Product families and model names transcribed from the lineup supplied by the owner.
// A model name is an inquiry option, not a confirmed stock or compatibility claim.
export const products: Product[] = [
  {
    slug: "roller-bits", name: "Roller Bits", nameAr: "رؤوس الحفر الدوارة", category: "Cutting Tools",
    description: "Roller-bit models for foundation drilling inquiries.",
    descriptionAr: "موديلات رؤوس الحفر الدوارة للاستفسارات الخاصة بحفر الأساسات.",
    image: "/products/roller-bits-reference.webp", imageType: "reference-thumbnail",
    variants: ["MH-1 Classic", "MH-2 Traditional", "MH-3 Flagship", "MH-3R Holder type", "MH-3B Replaceable", "MH-3H 12-1/4\"", "MH-3P Reinforced"],
  },
  {
    slug: "bullet-teeth", name: "Bullet Teeth & Holders", nameAr: "أسنان الحفر المخروطية وحواملها", category: "Wear Parts",
    description: "Bullet teeth and holder model names from our supplied lineup.",
    descriptionAr: "موديلات أسنان الحفر المخروطية وحواملها وفق القائمة المقدمة.",
    image: "/products/bullet-teeth-reference.webp", imageType: "reference-thumbnail",
    variants: ["B47K22H", "C31HD", "M50-22x27S", "M60-22x27", "69-95 Holder", "78-95 Holder", "B43 Holder", "C30 Holder"],
  },
  {
    slug: "bauer-teeth", name: "Bauer Teeth", nameAr: "أسنان باور", category: "Wear Parts",
    description: "Bauer tooth model names shown in the supplied reference.",
    descriptionAr: "موديلات أسنان باور الواردة في المرجع المقدم.",
    image: "/products/bauer-teeth-reference.webp", imageType: "reference-thumbnail",
    variants: ["BFZ70", "BFZ72", "BFZ80"],
  },
  {
    slug: "bucket-teeth", name: "Bucket Teeth", nameAr: "أسنان بكيتات الحفر", category: "Wear Parts",
    description: "Bucket tooth model names shown in the supplied reference.",
    descriptionAr: "موديلات أسنان بكيتات الحفر الواردة في المرجع المقدم.",
    image: "/products/bucket-teeth-reference.webp", imageType: "reference-thumbnail",
    variants: ["V20", "25T", "25RC-12"],
  },
  {
    slug: "rock-augers", name: "Rock Augers", nameAr: "أوجرات حفر الصخور", category: "Foundation Tools",
    description: "Straight and conical rock augers for quotation by required configuration.",
    descriptionAr: "أوجرات صخور مستقيمة ومخروطية؛ تُحدد المواصفات عند طلب عرض السعر.",
    image: "/products/rock-augers-photo.webp", imageType: "supplied-photo",
    variants: ["Straight Rock Auger", "Conical Rock Auger"],
  },
  {
    slug: "drilling-buckets", name: "Drilling Buckets", nameAr: "بكيتات الحفر", category: "Foundation Tools",
    description: "Soil-tooth, rock-tooth and cleaning bucket options in the supplied lineup.",
    descriptionAr: "خيارات بكيتات بأسنان التربة والصخور وبكيت التنظيف حسب القائمة المقدمة.",
    image: "/products/drilling-buckets-photo.webp", imageType: "supplied-photo",
    variants: ["Bucket with soil teeth", "Bucket with rock teeth", "Cleaning bucket"],
  },
  {
    slug: "core-barrels", name: "Core Barrels", nameAr: "كور بارل", category: "Foundation Tools",
    description: "Core barrel cutting arrangements listed in the supplied reference.",
    descriptionAr: "تجهيزات القطع للكور بارل حسب المرجع المقدم.",
    image: "/products/core-barrels-reference.webp", imageType: "reference-thumbnail",
    variants: ["Core barrel with bullet teeth", "Core barrel with roller bit"],
  },
  {
    slug: "casing", name: "Casing & Components", nameAr: "مواسير التغليف وملحقاتها", category: "Casing",
    description: "Casing and related component types shown in the supplied lineup.",
    descriptionAr: "أنواع مواسير التغليف ومكوناتها الواردة في القائمة المقدمة.",
    image: "/products/casing-reference.webp", imageType: "reference-thumbnail",
    variants: ["Double wall casing", "Casing drive", "Casing shoe"],
  },
  {
    slug: "cfa", name: "CFA Augers", nameAr: "أوجرات الحفر المستمر", category: "Foundation Tools",
    description: "Continuous flight augers for foundation drilling inquiries.",
    descriptionAr: "أوجرات الحفر المستمر للاستفسارات الخاصة بأعمال الأساسات.",
    image: "/products/cfa-reference.webp", imageType: "reference-thumbnail",
    variants: ["Continuous flight auger"],
  },
  {
    slug: "kelly-bars", name: "Kelly Bars", nameAr: "قضبان كيلي", category: "Drive Systems",
    description: "Interlocking and friction Kelly bar types shown in the supplied lineup.",
    descriptionAr: "قضبان كيلي التعشيق والاحتكاك حسب المرجع المقدم.",
    image: "/products/kelly-bars-reference.webp", imageType: "reference-thumbnail",
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
