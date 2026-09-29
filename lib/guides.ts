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
  },
  {
    slug: "foundation-drilling-rfq-checklist",
    related: ["drilling-buckets", "rock-augers", "casing", "wire-tremie-pipe"],
    en: {
      title: "Foundation drilling RFQ checklist",
      description: "The dimensions, ground information, drawings and delivery details to send when requesting foundation drilling tools or fabricated components.",
      intro: "A quotation is more useful when the tool, connection and application are clear. This checklist helps you collect the information the team needs to review an inquiry. Send what you have; missing details can be confirmed before fabrication or supply.",
      sections: [
        { heading: "1. Identify the equipment and application", bullets: [
          "State the product family and intended use: auger, bucket, core barrel, casing, tremie pipe, wear part or fabricated component.",
          "Give the drilling rig make and model, drilling method, required bore diameter and expected working depth.",
          "Describe the ground layers and whether drilling is dry or uses fluid. Attach relevant geotechnical information if available."
        ]},
        { heading: "2. Define the dimensions and connection", bullets: [
          "Provide the required outside diameter, working length and any restrictions on overall dimensions.",
          "Identify the Kelly box or other connection size and mating dimensions. Include pin-hole locations and pin dimensions when applicable.",
          "For a casing or tremie assembly, specify each component and connection; for the listed wire tremie pipe, confirm whether the 8-inch or 10-inch set and which hopper, lifting and suspension accessories are needed.",
          "Attach a dimensioned drawing or clear photos of the existing tool with a scale. Mark the critical measurements in millimetres."
        ]},
        { heading: "3. Clarify the commercial scope", bullets: [
          "State quantity for each size or variant and whether you need a complete assembly or replacement parts.",
          "Give the delivery city, required date and any packaging or site access constraints you already know.",
          "Provide a contact person and preferred reply method so the team can clarify any uncertain dimension."
        ]},
        { heading: "Before approving a drawing", paragraphs: [
          "Review the final dimensions, connection, cutting layout and included accessories against your rig and project. A catalog photo or nominal size alone is not a fabrication drawing or a compatibility guarantee.",
          "If you are replacing a worn tool, share the existing part's measurements and photos. Wear can make a single measurement misleading, so confirm against a drawing or unworn reference when possible."
        ]}
      ],
      takeaway: "Use the quotation list to identify products, then send drawings and project details through the contact options for technical review."
    },
    ar: {
      title: "قائمة بيانات طلب عرض سعر معدات حفر الأساسات",
      description: "الأبعاد ومعلومات التربة والرسومات وبيانات التسليم المطلوبة للاستفسار عن أدوات حفر الأساسات والمكونات المصنعة.",
      intro: "يكون عرض السعر أدق عندما تتضح الأداة والوصلة والاستخدام. تساعدك هذه القائمة في جمع المعلومات اللازمة لمراجعة الطلب. أرسل ما لديك من بيانات، ويمكن تأكيد التفاصيل الناقصة قبل التصنيع أو التوريد.",
      sections: [
        { heading: "١. حدد المعدة والاستخدام", bullets: [
          "اذكر فئة المنتج والاستخدام المقصود: أوجر أو بكيت أو كور بارل أو مواسير تغليف أو أنابيب تريمي أو قطع تآكل أو مكون مصنع.",
          "حدد الشركة المصنعة وموديل آلة الحفر وطريقة الحفر وقطر الحفرة المطلوب وعمق العمل المتوقع.",
          "صف طبقات التربة وما إذا كان الحفر جافًا أو باستخدام سوائل، وأرفق المعلومات الجيوتقنية ذات الصلة إن توفرت."
        ]},
        { heading: "٢. حدد الأبعاد والوصلة", bullets: [
          "أرسل القطر الخارجي وطول العمل المطلوب وأي قيود على الأبعاد الكلية.",
          "حدد مقاس كيلي بوكس أو الوصلة الأخرى وأبعاد الأجزاء المتداخلة، مع مواقع فتحات التثبيت ومقاسات البنوز عند الحاجة.",
          "في مجموعة مواسير التغليف أو التريمي، حدد كل مكون ووصلته؛ وبالنسبة لأنبوب التريمي المدرج، أكد مقاس 8 أو 10 بوصات والملحقات المطلوبة من قمع ورافعة وحامل تعليق.",
          "أرفق رسمًا بالأبعاد أو صورًا واضحة للأداة الحالية مع مقياس، وحدد القياسات المهمة بالملليمتر."
        ]},
        { heading: "٣. وضح نطاق الطلب والتسليم", bullets: [
          "حدد الكمية لكل مقاس أو خيار، وهل المطلوب مجموعة كاملة أم قطع بديلة.",
          "اذكر مدينة التسليم والموعد المطلوب وأي متطلبات تعبئة أو دخول للموقع تعرفها.",
          "أرسل اسم جهة الاتصال وطريقة الرد المفضلة للاستفسار عن أي أبعاد غير واضحة."
        ]},
        { heading: "قبل اعتماد الرسم", paragraphs: [
          "راجع الأبعاد النهائية والوصلة وترتيب القطع والملحقات المشمولة بما يناسب المعدة والمشروع. الصورة المرجعية أو المقاس الاسمي لا يحل محل رسم التصنيع أو تأكيد التوافق.",
          "عند استبدال أداة متآكلة، أرسل مقاساتها وصورها. قد يؤثر التآكل في دقة القياس الواحد، لذا قارن بالرسم أو بجزء غير متآكل إن أمكن."
        ]}
      ],
      takeaway: "حدد المنتجات في قائمة عرض السعر، ثم أرسل الرسومات وبيانات المشروع عبر خيارات الاتصال للمراجعة الفنية."
    }
  }
];
