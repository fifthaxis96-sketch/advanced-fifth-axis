export type Product = {
  slug: string;
  name: string;
  nameAr: string;
  category: string;
  description: string;
  descriptionAr: string;
  variants: string[];
  images?: string[];
  visualNote?: string;
  visualNoteAr?: string;
};

// Product families and model names transcribed from the lineup supplied by the owner.
// A model name is an inquiry option, not a confirmed stock or compatibility claim.
export const products: Product[] = [
  {
    slug: "roller-bits", name: "Roller Bits", nameAr: "رؤوس الحفر الدوارة", category: "Cutting Tools",
    description: "Roller-bit models for foundation drilling inquiries.",
    descriptionAr: "موديلات رؤوس الحفر الدوارة للاستفسارات الخاصة بحفر الأساسات.",
    variants: ["MH-1 Classic", "MH-2 Traditional", "MH-3 Flagship", "MH-3R Holder type", "MH-3B Replaceable", "MH-3H 12-1/4\"", "MH-3P Reinforced"],
  },
  {
    slug: "bullet-teeth", name: "Bullet Teeth & Holders", nameAr: "أسنان الحفر المخروطية وحواملها", category: "Wear Parts",
    description: "Bullet teeth and holder model names from our supplied lineup.",
    descriptionAr: "موديلات أسنان الحفر المخروطية وحواملها وفق القائمة المقدمة.",
    variants: ["B47K22H", "C31HD", "M50-22x27S", "M60-22x27", "69-95 Holder", "78-95 Holder", "B43 Holder", "C30 Holder"],
  },
  {
    slug: "bauer-teeth", name: "Bauer Teeth", nameAr: "أسنان باور", category: "Wear Parts",
    description: "Bauer tooth model names shown in the supplied reference.",
    descriptionAr: "موديلات أسنان باور الواردة في المرجع المقدم.",
    variants: ["BFZ70", "BFZ72", "BFZ80"],
  },
  {
    slug: "bucket-teeth", name: "Bucket Teeth", nameAr: "أسنان بكيتات الحفر", category: "Wear Parts",
    description: "Bucket tooth model names shown in the supplied reference.",
    descriptionAr: "موديلات أسنان بكيتات الحفر الواردة في المرجع المقدم.",
    variants: ["V20", "25T", "25RC-12"],
  },
  {
    slug: "rock-augers", name: "Rock Augers", nameAr: "أوجرات حفر الصخور", category: "Foundation Tools",
    description: "Straight and conical rock augers for rotary piling. Typical configurations use bullet teeth; diameter, flight geometry, pilot and Kelly connection are selected for the ground and rig.",
    descriptionAr: "أوجرات صخور مستقيمة ومخروطية للحفر الدوار، عادةً بأسنان صخرية مخروطية. يتم تحديد القطر وتصميم الحلزون والسن المركزي ووصلة كيلي حسب التربة والمعدة.",
    variants: ["Straight Rock Auger", "Conical Rock Auger", "Rock Auger Pilot Bit / Pilot Head"],
  },
  {
    slug: "drilling-buckets", name: "Drilling Buckets", nameAr: "بكيتات الحفر", category: "Foundation Tools",
    description: "Rotary drilling buckets for soil, rock and bore cleaning. Rock buckets commonly use bullet teeth and reinforced wear protection; final diameter, shell and Kelly box are project-specific.",
    descriptionAr: "بكيتات حفر دوارة للتربة والصخور وتنظيف قاع الحفرة. بكيتات الصخور تستخدم عادةً أسنانًا مخروطية وحماية تآكل معززة؛ القطر والجسم ووصلة كيلي حسب المشروع.",
    variants: ["Bucket with soil teeth", "Bucket with rock teeth", "Cleaning bucket"],
  },
  {
    slug: "core-barrels", name: "Core Barrels", nameAr: "كور بارل", category: "Foundation Tools",
    description: "Core barrels for cutting an annular ring in rock and hard formations. Available with bullet teeth or roller bits; common Kelly box sizes include 130×130, 150×150 and 200×200 mm, subject to confirmation.",
    descriptionAr: "كور بارل لقطع حلقة محيطية في الصخور والطبقات الصلبة، بخيارات أسنان مخروطية أو رولر بت. مقاسات كيلي الشائعة 130×130 و150×150 و200×200 مم، مع تأكيد المقاس قبل التصنيع.",
    variants: ["Core barrel with bullet teeth", "Core barrel with roller bit"],
  },
  {
    slug: "casing", name: "Casing & Components", nameAr: "مواسير التغليف وملحقاتها", category: "Casing",
    description: "Casing and related component types shown in the supplied lineup.",
    descriptionAr: "أنواع مواسير التغليف ومكوناتها الواردة في القائمة المقدمة.",
    variants: ["Double wall casing", "Casing drive", "Casing shoe"],
  },
  {
    slug: "cfa", name: "CFA Augers", nameAr: "أوجرات الحفر المستمر", category: "Foundation Tools",
    description: "Continuous flight augers for foundation drilling inquiries.",
    descriptionAr: "أوجرات الحفر المستمر للاستفسارات الخاصة بأعمال الأساسات.",
    variants: ["Continuous flight auger"],
  },
  {
    slug: "kelly-boxes", name: "Kelly Boxes & Adapters", nameAr: "كيلي بوكس ووصلات الحفر", category: "Drive Systems",
    description: "Heavy-duty square Kelly boxes and adapters for rotary drilling tools. Common connection sizes are 130×130, 150×150 and 200×200 mm; pin-hole layout and tool-side dimensions are made to the confirmed rig/tool interface.",
    descriptionAr: "كيلي بوكس ووصلات مربعة شديدة التحمل لأدوات الحفر الدوار. المقاسات الشائعة 130×130 و150×150 و200×200 مم؛ يتم تصنيع فتحات التثبيت وأبعاد جهة الأداة حسب الوصلة المؤكدة للمعدة.",
    variants: ["130×130 mm Kelly Box", "150×150 mm Kelly Box", "200×200 mm Kelly Box", "Custom Kelly Adapter"],
  },
  {
    slug: "kelly-bars", name: "Kelly Bars", nameAr: "قضبان كيلي", category: "Drive Systems",
    description: "Interlocking and friction Kelly bar types shown in the supplied lineup.",
    descriptionAr: "قضبان كيلي التعشيق والاحتكاك حسب المرجع المقدم.",
    variants: ["Interlocking Kelly bar", "Friction Kelly bar"],
  },
  {
    slug: "tapered-steel-fabrication", name: "Tapered Steel Fabrication", nameAr: "قطعة فولاذية مخروطية مصنّعة", category: "Fabricated Components",
    description: "Tapered, rib-reinforced steel fabrication shown in our product photograph. Share your drawing and required dimensions for an accurate quotation.",
    descriptionAr: "قطعة فولاذية مخروطية مع تقويات ظاهرة في الصورة. أرسل الرسم والأبعاد المطلوبة للحصول على عرض سعر دقيق.",
    variants: [], images: ["/products/owner-tapered-steel-fabrication.webp"],
  },
  {
    slug: "black-continuous-flight-auger", name: "Continuous Flight Auger — Black Steel", nameAr: "أوجر حفر مستمر فولاذي أسود", category: "Foundation Tools",
    description: "Continuous flight auger photographed from both ends. Confirm diameter, length, flight pitch and connection before ordering.",
    descriptionAr: "أوجر حفر مستمر مصوّر من الطرفين. يرجى تأكيد القطر والطول وخطوة الحلزون والوصلة قبل الطلب.",
    variants: [], images: ["/products/owner-continuous-flight-auger-coupling.webp", "/products/owner-continuous-flight-auger-flight.webp"],
  },
  {
    slug: "blue-toothed-casing-section", name: "Blue Toothed Casing Section", nameAr: "مقطع تغليف أزرق بأسنان طرفية", category: "Casing",
    description: "Blue tubular steel section with cutting elements around its visible rim. Dimensions and connection details are available on inquiry.",
    descriptionAr: "مقطع فولاذي أسطواني أزرق مع عناصر قطع على الحافة الظاهرة. الأبعاد وتفاصيل الوصلة تُحدَّد عند الاستفسار.",
    variants: [], images: ["/products/owner-blue-toothed-casing.webp"],
  },
  {
    slug: "rectangular-drilling-wear-component", name: "Rectangular Drilling Wear Component", nameAr: "قطعة تآكل حفر مستطيلة", category: "Wear Parts",
    description: "Rectangular steel wear component shown with a central bore and a lower shank. Confirm fit and dimensions before ordering.",
    descriptionAr: "قطعة تآكل فولاذية مستطيلة بفتحة وسطية وساق سفلية ظاهرتين. يرجى تأكيد الملاءمة والأبعاد قبل الطلب.",
    variants: [], images: ["/products/owner-rectangular-wear-component.webp"],
  },
  {
    slug: "drilling-wear-block", name: "Drilling Wear Block", nameAr: "كتلة تآكل للحفر", category: "Wear Parts",
    description: "Steel drilling wear component with a top bore and front slot as shown. Model and compatibility require confirmation.",
    descriptionAr: "قطعة تآكل فولاذية للحفر بفتحة علوية وشق أمامي كما في الصورة. يُرجى تأكيد الموديل والتوافق.",
    variants: [], images: ["/products/owner-drilling-wear-block.webp"],
  },
  {
    slug: "carbide-insert-wear-component", name: "Rounded Steel Wear Component", nameAr: "قطعة تآكل فولاذية مستديرة", category: "Wear Parts",
    description: "Rounded steel wear component with visible gold-toned insert seats and a central opening. Confirm the exact application and dimensions before ordering.",
    descriptionAr: "قطعة تآكل فولاذية مستديرة مع مواضع إدخالات ظاهرة وفتحة مركزية. يرجى تأكيد الاستخدام والأبعاد قبل الطلب.",
    variants: [], images: ["/products/owner-carbide-insert-component.webp"],
  },
  {
    slug: "pile-testing-reaction-beam", name: "Pile Testing Reaction Beam", nameAr: "كمرة اختبار تحميل الخوازيق", category: "Fabricated Components",
    description: "Fabricated reaction beam for pile load testing inquiries. Configuration, length, connections and load rating must be engineered and confirmed for the testing arrangement.",
    descriptionAr: "كمرة مصنّعة للاستفسارات الخاصة باختبار تحميل الخوازيق. يتم تصميم وتأكيد التكوين والطول والوصلات والحمولة حسب نظام الاختبار.",
    variants: [], images: ["/products/pile-testing-reaction-beam-blue.webp"],
    visualNote: "Concept visualization based on the supplied site photo; confirm the fabrication design before ordering.",
    visualNoteAr: "تصور مرئي مبني على صورة الموقع المقدمة؛ يرجى تأكيد التصميم التصنيعي قبل الطلب.",
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

export type Collection = {
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  categories: string[];
};

export const collections: Collection[] = [
  { slug: "foundation-tools", name: "Foundation Drilling Tools", nameAr: "أدوات حفر الأساسات", description: "Augers, drilling buckets, core barrels and continuous-flight tools for piling and foundation drilling projects.", descriptionAr: "أوجرات وبكيتات وكور بارل وأدوات الحفر المستمر لمشاريع الخوازيق وحفر الأساسات.", categories: ["Foundation Tools"] },
  { slug: "wear-parts", name: "Cutting & Wear Parts", nameAr: "أسنان وقطع التآكل", description: "Cutting tools, teeth, holders and replaceable wear components for foundation drilling equipment.", descriptionAr: "أدوات قطع وأسنان وحوامل وقطع تآكل قابلة للاستبدال لمعدات حفر الأساسات.", categories: ["Cutting Tools", "Wear Parts"] },
  { slug: "casing", name: "Casing & Components", nameAr: "مواسير التغليف ومكوناتها", description: "Casing sections, casing components and related solutions for foundation drilling applications.", descriptionAr: "مواسير تغليف ومكوناتها وحلول مرتبطة بتطبيقات حفر الأساسات.", categories: ["Casing"] },
  { slug: "drive-systems", name: "Kelly & Drive Systems", nameAr: "أنظمة كيلي ونقل الحركة", description: "Kelly bars, Kelly boxes and adapters for connecting rotary drilling rigs to foundation tools.", descriptionAr: "قضبان كيلي وكيلي بوكس ووصلات لربط معدات الحفر الدوار بأدوات الأساسات.", categories: ["Drive Systems"] },
  { slug: "fabricated-components", name: "Custom Fabricated Components", nameAr: "مكونات مصنعة حسب الطلب", description: "Heavy steel fabricated components produced to confirmed drawings, dimensions and project requirements.", descriptionAr: "مكونات فولاذية ثقيلة تُصنع حسب الرسومات والأبعاد ومتطلبات المشروع المؤكدة.", categories: ["Fabricated Components"] },
];

export const productsForCollection = (collection: Collection) =>
  products.filter((product) => collection.categories.includes(product.category));


export const collectionForProduct = (product: Product) =>
  collections.find((collection) => collection.categories.includes(product.category));

export const relatedProducts = (product: Product, limit = 3) =>
  products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, limit);
