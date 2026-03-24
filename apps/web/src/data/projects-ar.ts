import { type Project } from "./projects";

export const projects: Project[] = [
  {
    slug: "harbor-skyline-tower",
    title: "برج أفق المرفأ",
    location: "دبي، الإمارات العربية المتحدة",
    type: "تجاري",
    year: 2025,
    description: "برج متعدد الاستخدامات مكون من 62 طابقاً تم تسليمه بتنسيق تقنية BIM وتسليم بدون أي تأخير.",
    hero: "file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_1_tower_1773784677018.png",
    gallery: ["file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_1_tower_1773784677018.png"],
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
    stats: [
      { label: "الارتفاع", value: "310 متر" },
      { label: "المساحة", value: "210,000 متر مربع" },
      { label: "الجدول الزمني", value: "28 شهراً" },
      { label: "التسليم", value: "في الموعد المحدد" },
    ],
    story: [
      {
        title: "التحدي",
        description: "تطلب الإطار الزمني المضغوط والموقع الحضري الكثيف لوجستيات خالية من الأخطاء.",
      },
      {
        title: "النهج",
        description: "أدى التنسيق القائم على BIM والأنظمة الأساسية الجاهزة إلى تقليل التعقيد في الموقع.",
      },
      {
        title: "التنفيذ",
        description: "حافظت الصبات الليلية والجدولة بالذكاء الاصطناعي على تقدم حزمة الصلب عن الخطة بـ 6 أسابيع.",
      },
      {
        title: "النتيجة",
        description: "برج تاريخي تم تسليمه في الموعد المحدد بإعادة عمل منخفضة بشكل قياسي وتشطيبات ممتازة.",
      },
    ],
    milestones: [
      {
        title: "اكتمال الأساس",
        date: "أبريل 2024",
        description: "تم صب أساس الطوافة عالي الأداء في وقت قياسي.",
      },
      {
        title: "اكتمال الهيكل الأساسي",
        date: "سبتمبر 2024",
        description: "وصل القلب الهيكلي إلى الارتفاع النهائي قبل الموعد المحدد.",
      },
      {
        title: "إغلاق الواجهة",
        date: "يناير 2025",
        description: "الجدار الساتر مغلق مع عدم دخول أي مياه.",
      },
      {
        title: "التسليم النهائي",
        date: "يونيو 2025",
        description: "تم تسليم مساحات التجزئة الفاخرة والمساكن بدون تأخير في قائمة الملاحظات.",
      },
    ],
  },
  {
    slug: "aurora-medical-campus",
    title: "حرم أورورا الطبي",
    location: "سياتل، الولايات المتحدة",
    type: "مؤسسي",
    year: 2024,
    description: "حرم يركز على الشفاء وحاصل على شهادة LEED البلاتينية مع بنية تحتية مرنة.",
    hero: "file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_2_hospital_1773784701906.png",
    gallery: ["file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_2_hospital_1773784701906.png"],
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
    stats: [
      { label: "عدد الأسرة", value: "480" },
      { label: "المساحة", value: "145,000 متر مربع" },
      { label: "الجدول الزمني", value: "24 شهراً" },
      { label: "الطاقة", value: "-38%" },
    ],
    story: [
      {
        title: "التحدي",
        description: "تطلبت عمليات المستشفى النشطة بناءً على مراحل دون أي توقف.",
      },
      {
        title: "النهج",
        description: "أتاحت وحدات MEP الجاهزة التركيب الهادئ والتشغيل الأسرع.",
      },
      {
        title: "التنفيذ",
        description: "سمحت مناطق العمل الهجينة بالرعاية المتزامنة للمرضى ونشاط العمل.",
      },
      {
        title: "النتيجة",
        description: "تم تسليم الحرم الحاصل على شهادة LEED البلاتينية بمرونة متقدمة وتصميم يركز على المريض.",
      },
    ],
    milestones: [
      {
        title: "تجهيز الموقع",
        date: "فبراير 2023",
        description: "تأسيس مناطق عمل آمنة دون التأثير على وصول المرضى.",
      },
      {
        title: "اكتمال الهيكل الأساسي",
        date: "أكتوبر 2023",
        description: "اكتمل الهيكل الفولاذي مع عدم تسجيل أي حوادث سلامة.",
      },
      {
        title: "تشغيل الأنظمة",
        date: "مارس 2024",
        description: "تم اختبار الأنظمة الحيوية واعتمدت للجاهزية التشغيلية.",
      },
      {
        title: "إطلاق الحرم",
        date: "أغسطس 2024",
        description: "تم افتتاح أجنحة جديدة للمرضى بانتقال سلس.",
      },
    ],
  },
  {
    slug: "seraphim-residences",
    title: "مساكن سيرافيم",
    location: "موناكو",
    type: "سكني فاخر",
    year: 2023,
    description: "مساكن فائقة الفخامة مصممة بتصميمات داخلية فنية وأنظمة مرونة ساحلية.",
    hero: "file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_3_residence_1773784719830.png",
    gallery: ["file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_3_residence_1773784719830.png"],
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
    stats: [
      { label: "الوحدات", value: "84" },
      { label: "المساحة", value: "96,000 متر مربع" },
      { label: "الجدول الزمني", value: "20 شهراً" },
      { label: "التشطيب", value: "حسب الطلب" },
    ],
    story: [
      {
        title: "التحدي",
        description: "تطلب الموقع الساحلي تفاصيل مقاومة للأملاح ومتطلبات خصوصية صارمة.",
      },
      {
        title: "النهج",
        description: "جمعت شراكات الفنانين لوحات داخلية متطابقة لكل مستوى سكني.",
      },
      {
        title: "التنفيذ",
        description: "نسقت اللوجستيات ذات العناية الفائقة واردات المواد عبر البحار دون تأخير.",
      },
      {
        title: "النتيجة",
        description: "تم تسليم عنوان حصري بجودة تشطيب ومكانة تجارية لا مثيل لها.",
      },
    ],
    milestones: [
      {
        title: "اكتمال البنية التحتية",
        date: "يناير 2022",
        description: "تم تسليم مستويات الطابق السفلي بتفاصيل مرنة للفيضانات.",
      },
      {
        title: "تركيب الواجهة",
        date: "يونيو 2022",
        description: "تم تركيب واجهة حجرية مخصصة بتفاوتات دقيقة.",
      },
      {
        title: "التجهيزات الداخلية",
        date: "ديسمبر 2022",
        description: "أُجريت تصميمات داخلية وتشغيل نظام منزلي ذكي.",
      },
      {
        title: "تسليم خاص",
        date: "مايو 2023",
        description: "تم تسليم المساكن مع إعداد وتزويد كونسيرج مخصص.",
      },
    ],
  },
  {
    slug: "northline-logistics-hub",
    title: "محور نورثلاين اللوجستي",
    location: "هامبورغ، ألمانيا",
    type: "صناعي",
    year: 2025,
    description: "محور لوجستي عالي الإنتاجية مُحسن بجدولة مدفوعة بالذكاء الاصطناعي وأنظمة معيارية.",
    hero: "file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_4_logistics_1773784748734.png",
    gallery: ["file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_4_logistics_1773784748734.png"],
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
    stats: [
      { label: "المساحة", value: "320,000 متر مربع" },
      { label: "الأرصفة", value: "140" },
      { label: "الجدول الزمني", value: "18 شهراً" },
      { label: "الأتمتة", value: "95%" },
    ],
    story: [
      {
        title: "التحدي",
        description: "تطلبت منشأة النقل اللوجستي ذات المسار السريع تسلسلاً دقيقاً وأقل قدر من التوقف.",
      },
      {
        title: "النهج",
        description: "قلل البناء المعياري ومسارات العمل المتوازية من نافذة التسليم.",
      },
      {
        title: "التنفيذ",
        description: "قادت جدولة الذكاء الاصطناعي التوائم الرقمية للخدمات اللوجستية اليومية.",
      },
      {
        title: "النتيجة",
        description: "محور آلي بالكامل يقدم كفاءة إنتاجية تصل إلى 95% من اليوم الأول.",
      },
    ],
    milestones: [
      {
        title: "الأعمال الأرضية",
        date: "مارس 2024",
        description: "تم تحسين تسوية الموقع لتدفق المركبات الثقيلة.",
      },
      {
        title: "اكتمال الخليج الهيكلي",
        date: "يوليو 2024",
        description: "توجت الخلجان الأولية عبر مساحة 40 هكتاراً.",
      },
      {
        title: "تركيب الأتمتة",
        date: "نوفمبر 2024",
        description: "تم دمج الروبوتات وأنظمة النقل.",
      },
      {
        title: "إطلاق التشغيل",
        date: "أبريل 2025",
        description: "بدأ المرفق العمل مع تشغيل آلي كامل.",
      },
    ],
  },
];
