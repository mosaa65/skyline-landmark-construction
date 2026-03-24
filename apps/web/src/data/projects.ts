export type Project = {
  slug: string;
  title: string;
  location: string;
  type: string;
  year: number;
  description: string;
  hero: string;
  gallery: string[];
  before: string;
  after: string;
  stats: { label: string; value: string }[];
  story?: { title: string; description: string }[];
  milestones?: { title: string; date: string; description: string }[];
};

export const projects: Project[] = [
  {
    slug: "harbor-skyline-tower",
    title: "Harbor Skyline Tower",
    location: "Dubai, UAE",
    type: "Commercial",
    year: 2025,
    description: "A 62-story mixed-use tower delivered with BIM-led coordination and a zero-delay handover.",
    hero: "file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_1_tower_1773784677018.png",
    gallery: ["file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_1_tower_1773784677018.png"],
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
    stats: [
      { label: "Height", value: "310m" },
      { label: "Area", value: "210,000 sqm" },
      { label: "Timeline", value: "28 months" },
      { label: "Delivery", value: "On schedule" },
    ],
    story: [
      {
        title: "The Challenge",
        description: "A compressed delivery window and dense urban site demanded flawless logistics.",
      },
      {
        title: "The Approach",
        description: "BIM-led coordination and prefabricated core systems reduced on-site complexity.",
      },
      {
        title: "The Execution",
        description: "Night shift pours and AI scheduling kept the steel package ahead of plan by 6 weeks.",
      },
      {
        title: "The Result",
        description: "A landmark tower delivered on schedule with record-low rework and premium finishes.",
      },
    ],
    milestones: [
      {
        title: "Foundation Complete",
        date: "Apr 2024",
        description: "High-performance raft foundation poured in record time.",
      },
      {
        title: "Core Topped Out",
        date: "Sep 2024",
        description: "Structural core reached final elevation ahead of schedule.",
      },
      {
        title: "Facade Sealed",
        date: "Jan 2025",
        description: "Curtain wall sealed with zero water ingress.",
      },
      {
        title: "Final Handover",
        date: "Jun 2025",
        description: "Luxury retail and residences delivered with zero punch list delays.",
      },
    ],
  },
  {
    slug: "aurora-medical-campus",
    title: "Aurora Medical Campus",
    location: "Seattle, USA",
    type: "Institutional",
    year: 2024,
    description: "A healing-focused campus with LEED Platinum certification and resilient infrastructure.",
    hero: "file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_2_hospital_1773784701906.png",
    gallery: ["file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_2_hospital_1773784701906.png"],
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
    stats: [
      { label: "Beds", value: "480" },
      { label: "Area", value: "145,000 sqm" },
      { label: "Timeline", value: "24 months" },
      { label: "Energy", value: "-38%" },
    ],
    story: [
      {
        title: "The Challenge",
        description: "Active hospital operations required phased construction with zero downtime.",
      },
      {
        title: "The Approach",
        description: "Prefabricated MEP modules enabled quiet installation and faster commissioning.",
      },
      {
        title: "The Execution",
        description: "Hybrid work zones allowed simultaneous patient care and construction activity.",
      },
      {
        title: "The Result",
        description: "LEED Platinum campus delivered with advanced resilience and patient-centered design.",
      },
    ],
    milestones: [
      {
        title: "Site Mobilization",
        date: "Feb 2023",
        description: "Secure staging established without impacting patient access routes.",
      },
      {
        title: "Structural Completion",
        date: "Oct 2023",
        description: "Steel structure topped out with zero safety incidents.",
      },
      {
        title: "Systems Commissioning",
        date: "Mar 2024",
        description: "Critical systems tested and certified for operational readiness.",
      },
      {
        title: "Campus Launch",
        date: "Aug 2024",
        description: "New patient wings opened with a seamless transition.",
      },
    ],
  },
  {
    slug: "seraphim-residences",
    title: "Seraphim Residences",
    location: "Monaco",
    type: "Luxury Residential",
    year: 2023,
    description: "Ultra-luxury residences crafted with artisanal interiors and coastal resilience systems.",
    hero: "file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_3_residence_1773784719830.png",
    gallery: ["file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_3_residence_1773784719830.png"],
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
    stats: [
      { label: "Units", value: "84" },
      { label: "Area", value: "96,000 sqm" },
      { label: "Timeline", value: "20 months" },
      { label: "Finish", value: "Bespoke" },
    ],
    story: [
      {
        title: "The Challenge",
        description: "Coastal site demanded salt-resistant detailing and strict privacy requirements.",
      },
      {
        title: "The Approach",
        description: "Artisan partnerships curated interior palettes matched to each residence tier.",
      },
      {
        title: "The Execution",
        description: "White-glove logistics coordinated overseas material imports without delays.",
      },
      {
        title: "The Result",
        description: "An exclusive address delivered with unmatched finish quality and brand prestige.",
      },
    ],
    milestones: [
      {
        title: "Substructure Complete",
        date: "Jan 2022",
        description: "Basement levels delivered with flood-resilient detailing.",
      },
      {
        title: "Facade Installation",
        date: "Jun 2022",
        description: "Custom stone facade installed with precision tolerances.",
      },
      {
        title: "Interior Fit-Out",
        date: "Dec 2022",
        description: "Bespoke interiors and smart home systems commissioned.",
      },
      {
        title: "Private Handover",
        date: "May 2023",
        description: "Residences delivered with curated concierge onboarding.",
      },
    ],
  },
  {
    slug: "northline-logistics-hub",
    title: "Northline Logistics Hub",
    location: "Hamburg, Germany",
    type: "Industrial",
    year: 2025,
    description: "High-throughput logistics hub optimized with AI-driven scheduling and modular systems.",
    hero: "file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_4_logistics_1773784748734.png",
    gallery: ["file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_4_logistics_1773784748734.png"],
    before: "/images/project-before.jpg",
    after: "/images/project-after.jpg",
    stats: [
      { label: "Area", value: "320,000 sqm" },
      { label: "Docks", value: "140" },
      { label: "Timeline", value: "18 months" },
      { label: "Automation", value: "95%" },
    ],
    story: [
      {
        title: "The Challenge",
        description: "A fast-track logistics facility required precision sequencing and minimal downtime.",
      },
      {
        title: "The Approach",
        description: "Modular construction and parallel workstreams compressed the delivery window.",
      },
      {
        title: "The Execution",
        description: "AI scheduling and digital twins guided daily logistics.",
      },
      {
        title: "The Result",
        description: "A fully automated hub delivering 95% throughput efficiency from day one.",
      },
    ],
    milestones: [
      {
        title: "Groundworks",
        date: "Mar 2024",
        description: "Site grading optimized for heavy vehicle flow.",
      },
      {
        title: "Structural Bay Complete",
        date: "Jul 2024",
        description: "Primary bays topped out across 40 hectares.",
      },
      {
        title: "Automation Install",
        date: "Nov 2024",
        description: "Robotics and conveyor systems integrated.",
      },
      {
        title: "Operational Launch",
        date: "Apr 2025",
        description: "Facility went live with full automation uptime.",
      },
    ],
  },
];
