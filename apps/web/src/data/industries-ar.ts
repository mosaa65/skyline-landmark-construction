import { type Industry } from "./industries";

export const industries: Industry[] = [
  {
    slug: "commercial",
    title: "التجاري",
    description: "أبراج رائدة، ومقرات رئيسية، ومناطق متعددة الاستخدامات يتم تسليمها على مستوى المؤسسات.",
    focus: ["مقرات الشركات", "متعدد الاستخدامات", "الضيافة"],
    hero: "/images/industry-commercial.jpg",
    stats: [
      { label: "المشاريع", value: "+180" },
      { label: "التسليم", value: "98% في الوقت" },
      { label: "متوسط الحجم", value: "120,000 متر مربع" },
    ],
  },
  {
    slug: "institutional",
    title: "المؤسسي",
    description: "جامعات ومستشفيات وبنية تحتية مدنية مبنية مع إعطاء الأولوية للامتثال.",
    focus: ["الرعاية الصحية", "التعليم", "القطاع العام"],
    hero: "/images/industry-institutional.jpg",
    stats: [
      { label: "المرافق", value: "+90" },
      { label: "الشهادات", value: "LEED + ISO" },
      { label: "السلامة", value: "صفر حوادث" },
    ],
  },
  {
    slug: "residential",
    title: "سكني فاخر",
    description: "عقارات خاصة ومساكن عالية الارتفاع تُنفذ مع رعاية فائقة عند التسليم.",
    focus: ["عالية الارتفاع", "عقارات", "تجهيزات داخلية"],
    hero: "/images/industry-residential.jpg",
    stats: [
      { label: "مساكن", value: "+240" },
      { label: "رضا العملاء", value: "98%" },
      { label: "خدمة كونسيرج", value: "24/7" },
    ],
  },
  {
    slug: "industrial",
    title: "الصناعي والبنية التحتية",
    description: "مرافق حيوية وهامة مصممة للاستمرارية، الأمان، والنمو المستقبلي.",
    focus: ["اللوجستيات", "الطاقة", "التصنيع"],
    hero: "/images/industry-industrial.jpg",
    stats: [
      { label: "المرافق", value: "+110" },
      { label: "الأتمتة", value: "تصل إلى 95%" },
      { label: "النطاق", value: "+300,000 متر مربع" },
    ],
  },
];
