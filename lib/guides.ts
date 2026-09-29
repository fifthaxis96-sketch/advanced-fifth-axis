export type GuideSection = { heading: string; paragraphs?: string[]; bullets?: string[] };
export type GuideTranslation = { title: string; description: string; intro: string; sections: GuideSection[]; takeaway: string };
export type Guide = { slug: string; en: GuideTranslation; ar: GuideTranslation; related: string[] };
export const guides: Guide[] = [
  {
    slug: "drilling-tool-selection",
    related: ["rock-augers", "drilling-buckets", "core-barrels", "cleaning-buckets"],
    en: {
      title: "Rock auger, rock bucket or core barrel?", description: "A practical comparison of foundation drilling tools and the project details to confirm before requesting a quotation.",
      intro: "The tool choice depends on the ground, drilling method and rig as well as the target diameter. Use this guide to narrow the conversation, then confirm the configuration against the actual project requirements.",
      sections: [
        { heading: "What each tool does", bullets: [
          "Rock auger: a flighted tool for rotary excavation. Specify the ground conditions, diameter, pilot arrangement and cutting teeth.",
          "Rock bucket: cuts and collects spoil in its shell. Confirm the base, teeth, shell geometry and operating conditions.",
          "Core barrel: cuts an annular path into hard material; the cutting arrangement may use bullet teeth or roller bits. Confirm the formation and intended cutting layout.",
          "Cleaning bucket: removes loose material from the bottom of the bore. Confirm the bore diameter and cleaning arrangement."
        ]},
        { heading: "Do not select on diameter alone", paragraphs: [
          "Two tools with the same nominal diameter can have different connections, tooth patterns and working lengths. Ground descriptions such as ‘rock’ may cover very different conditions. Share the geotechnical report or a concise description of the layers, including any obstructions, where available.",
          "The product tables on this site show reference sizes from the supplied lineup. They are a starting point for an inquiry, not a promise that every configuration is available or compatible with every rig."
        ]},
        { heading: "What to send with your inquiry", bullets: [
          "Rig make and model, drilling method and Kelly connection dimensions; include a measured drawing or clear photos if possible.",
          "Required bore diameter, tool working length and expected depth.",
          "Ground layers and whether drilling is dry or uses fluid; include the geotechnical information available to you.",
          "Preferred cutting setup, quantity, delivery location and target date."
        ]}
      ],
      takeaway: "Send the project details through the quotation form. The team can review the appropriate tool and connection before confirming a configuration."
    },
    ar: {
      title: "الأوجر الصخري أم بكيت الصخور أم الكور بارل؟", description: "مقارنة عملية لأدوات حفر الأساسات والمعلومات اللازمة قبل طلب عرض السعر.",
      intro: "يعتمد اختيار الأداة على طبيعة التربة وطريقة الحفر والمعدة، بالإضافة إلى القطر المطلوب. يساعدك هذا الدليل في تحديد الخيارات، ثم يجب تأكيد التكوين وفق متطلبات المشروع الفعلية.",
      sections: [
        { heading: "وظيفة كل أداة", bullets: [
          "الأوجر الصخري: أداة حلزونية للحفر الدوراني. حدد طبيعة التربة والقطر وترتيب رأس التوجيه والأسنان.",
          "بكيت الصخور: يقطع ناتج الحفر ويجمعه داخل الجسم. أكد تصميم القاعدة والأسنان وهيكل البكيت وظروف التشغيل.",
          "الكور بارل: يقطع مسارًا حلقيًا في المواد الصلبة، وقد يستخدم أسنان الحفر أو الرولر بت. أكد طبيعة التكوين وترتيب القطع المطلوب.",
          "بكيت التنظيف: يزيل المواد المفككة من قاع الحفرة. أكد قطر الحفرة وترتيب التنظيف."
        ]},
        { heading: "القطر وحده لا يكفي للاختيار", paragraphs: [
          "قد تختلف الوصلات وترتيب الأسنان وطول العمل بين أداتين لهما القطر الاسمي نفسه. وقد تشير كلمة «صخر» إلى ظروف مختلفة جدًا. أرسل التقرير الجيوتقني أو وصفًا موجزًا للطبقات والعوائق إن توفر.",
          "جداول المنتجات في الموقع تعرض مقاسات مرجعية من القائمة المقدمة. وهي نقطة بداية للاستفسار، وليست تأكيدًا لتوفر كل تكوين أو توافقه مع كل معدة."
        ]},
        { heading: "المعلومات المطلوبة للاستفسار", bullets: [
          "الشركة المصنعة وموديل المعدة وطريقة الحفر وأبعاد وصلة الكيلي؛ وأرفق رسمًا بمقاسات فعلية أو صورًا واضحة إن أمكن.",
          "قطر الحفرة وطول الأداة المطلوب والعمق المتوقع.",
          "طبقات التربة وما إذا كان الحفر جافًا أو باستخدام سوائل، مع المعلومات الجيوتقنية المتوفرة.",
          "ترتيب القطع المفضل والكمية وموقع التسليم والموعد المطلوب."
        ]}
      ],
      takeaway: "أرسل تفاصيل المشروع عبر نموذج عرض السعر ليتم مراجعة الأداة والوصلة المناسبة قبل تأكيد التكوين."
    }
  },
  {
    slug: "kelly-connections",
    related: ["kelly-boxes", "kelly-box-pins", "kelly-bars"],
    en: {
      title: "How to specify a Kelly box and adapter", description: "Connection measurements, pins and drawings to check for a foundation drilling tool inquiry.",
      intro: "A nominal Kelly box size does not, by itself, establish fit. The existing lineup includes 150 × 150, 200 × 200 and 250 × 250 mm Kelly boxes; the standard tool connection shown in the catalog is 200 × 200 mm. Verify the actual mating dimensions before ordering.",
      sections: [
        { heading: "Record both sides of the connection", paragraphs: [
          "Identify the rig and Kelly bar model, then measure the male drive and the female box on the tool. Include the square dimensions, engagement length, wall clearance and pin-hole positions. A labeled sketch with millimetres and photos taken square-on makes the review much faster.",
          "For a transition, state the female input and male output separately. The catalog includes an inquiry for a 250 mm female to 200 mm male adapter; its final drawing and fit still require confirmation."
        ]},
        { heading: "Pins are part of the specification", bullets: [
          "Confirm pin outside diameter, overall length and the hole dimensions on both mating parts.",
          "The listed Kelly box pin options include OD 60 mm × 400 mm and OD 50 mm × 320 mm; check which arrangement applies to your assembly.",
          "Share photos of the existing pin and retention arrangement. Do not infer compatibility from the outside diameter alone."
        ]},
        { heading: "A useful quote package", bullets: [
          "Rig and Kelly bar make/model, tool name and required quantity.",
          "Dimensioned connection drawing, pin-hole centre positions and engagement length.",
          "Clear photos of the worn or existing parts, plus any repair scope where relevant.",
          "Delivery city and required date."
        ]}
      ],
      takeaway: "Send measurements and photos through the quotation form so the connection can be reviewed before fabrication."
    },
    ar: {
      title: "كيفية تحديد مقاسات الكيلي بوكس والوصلة", description: "الأبعاد والمسامير والرسومات المطلوبة للاستفسار عن وصلات أدوات حفر الأساسات.",
      intro: "المقاس الاسمي للكيلي بوكس لا يؤكد التوافق وحده. تشمل القائمة الحالية مقاسات 150 × 150 و200 × 200 و250 × 250 مم، والوصلة القياسية المعروضة للأدوات هي 200 × 200 مم. تحقق من أبعاد الأجزاء المتداخلة فعليًا قبل الطلب.",
      sections: [
        { heading: "سجل أبعاد طرفي الوصلة", paragraphs: [
          "حدد موديل المعدة وكيلي بار، ثم قس الطرف الذكر والعلبة الأنثى في الأداة. أرفق أبعاد المربع وطول التداخل والخلوص ومواقع فتحات التثبيت. يساعد رسم واضح بالأبعاد بالملليمتر وصور مواجهة للقطعة على سرعة المراجعة.",
          "في الوصلة التحويلية، اذكر مقاس المدخل الأنثى والمخرج الذكر كلًا على حدة. تتضمن القائمة طلب وصلة من 250 مم أنثى إلى 200 مم ذكر، ويظل الرسم النهائي والتوافق بحاجة إلى تأكيد."
        ]},
        { heading: "مسمار التثبيت جزء من المواصفة", bullets: [
          "أكد القطر الخارجي للمسمار وطوله الكلي وأبعاد الفتحات في الطرفين.",
          "تتضمن خيارات المسامير المدرجة قطرًا خارجيًا 60 مم بطول 400 مم وقطرًا خارجيًا 50 مم بطول 320 مم؛ تحقق من الخيار المناسب لتجميعك.",
          "أرسل صور المسمار الحالي وطريقة تثبيته. لا تعتمد على القطر الخارجي وحده لإثبات التوافق."
        ]},
        { heading: "معلومات مفيدة لعرض السعر", bullets: [
          "نوع وموديل المعدة وكيلي بار واسم الأداة والكمية المطلوبة.",
          "رسم للوصلة بالأبعاد ومراكز فتحات التثبيت وطول التداخل.",
          "صور واضحة للأجزاء الحالية أو المتآكلة، ونطاق الإصلاح إن كان مطلوبًا.",
          "مدينة التسليم والموعد المطلوب."
        ]}
      ],
      takeaway: "أرسل القياسات والصور عبر نموذج عرض السعر لمراجعة الوصلة قبل التصنيع."
    }
  }
];
