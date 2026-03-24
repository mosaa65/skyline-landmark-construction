export type Service = {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  heroImage: string;
};

export const services: Service[] = [
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    icon: "🏢",
    shortDescription: "Flagship towers, headquarters, and mixed-use landmarks.",
    fullDescription: "From soaring skyscrapers to expansive corporate campuses, our commercial construction division delivers the physical manifestations of global business ambition. We understand that commercial spaces must balance striking architectural vision with rigorous operational efficiency.",
    capabilities: [
      "High-Rise Office Towers",
      "Corporate Headquarters Campus",
      "Mixed-Use Developments",
      "Retail & Hospitality Centers",
      "BIM-Led Core & Shell Construction"
    ],
    heroImage: "/images/service-commercial.jpg",
  },
  {
    slug: "residential-development",
    title: "Residential Development",
    icon: "🏘️",
    shortDescription: "Luxury estates and high-rise residences with white-glove delivery.",
    fullDescription: "We build uncompromising residential spaces, ranging from exclusive high-net-worth custom estates to premium multi-family high-rises. Our dedicated residential teams focus intensely on artisanal finish quality, acoustic privacy, and white-glove client onboarding.",
    capabilities: [
      "Ultra-Luxury Custom Estates",
      "Premium High-Rise Condominiums",
      "Coastal & Resilient Residential",
      "Bespoke Interior Fit-Outs",
      "Smart Home Infrastructure Integration"
    ],
    heroImage: "/images/service-residential.jpg",
  },
  {
    slug: "industrial-infrastructure",
    title: "Industrial & Infrastructure",
    icon: "🏭",
    shortDescription: "Mission-critical facilities engineered for longevity and safety.",
    fullDescription: "The backbone of the modern economy requires construction at scale with zero margin for error. We construct hyper-scale logistics hubs, advanced manufacturing plants, and mission-critical infrastructure designed for 24/7 uptime and extreme operational resilience.",
    capabilities: [
      "Hyper-Scale Logistics & Distribution Hubs",
      "Advanced Manufacturing Facilities",
      "Mission-Critical Data Centers",
      "Aviation & Transport Terminals",
      "Heavy Industrial Process Plants"
    ],
    heroImage: "/images/service-industrial.jpg",
  },
  {
    slug: "interior-fit-out",
    title: "Interior Fit-Out",
    icon: "🛋️",
    shortDescription: "Premium interior execution that matches architectural intent.",
    fullDescription: "Our specialized fit-out division transforms structural shells into breathtaking, functional environments. Whether executing a minimalist corporate boardroom or a highly-themed hospitality venue, we deliver precision craftsmanship that honors the designer's original vision.",
    capabilities: [
      "Premium Corporate Interiors",
      "Luxury Hospitality & Retail",
      "Acoustically Sensitive Environments",
      "Specialized Medical/Lab Fit-Outs",
      "Custom Millwork & Architectural Finishes"
    ],
    heroImage: "/images/service-interior.jpg",
  },
  {
    slug: "renovation-restoration",
    title: "Renovation & Restoration",
    icon: "🏛️",
    shortDescription: "Heritage-sensitive upgrades with modern performance standards.",
    fullDescription: "Breathing new life into existing structures demands a delicate balance of preservation and modernization. We specialize in adaptive reuse and historic restoration, seamlessly integrating cutting-edge MEP systems while meticulously restoring heritage architectural elements.",
    capabilities: [
      "Historic Building Restoration",
      "Adaptive Reuse Conversions",
      "Seismic & Structural Retrofitting",
      "Facade Upgrades & Modernization",
      "Occupied-Space Renovations"
    ],
    heroImage: "/images/service-renovation.jpg",
  },
  {
    slug: "design-build",
    title: "Design-Build",
    icon: "📐",
    shortDescription: "Integrated delivery to compress schedules and align stakeholders.",
    fullDescription: "By uniting design and construction under a single point of accountability, our Design-Build approach eliminates adversarial silos, accelerates schedules, and guarantees budget certainty. We assemble and lead a bespoke team of premier architects and engineers tailored to your specific project.",
    capabilities: [
      "Single-Source Accountability",
      "Fast-Track Project Delivery",
      "Guaranteed Maximum Price (GMP) Contracts",
      "Integrated Target Value Design",
      "Early Procurement Modeling"
    ],
    heroImage: "/images/service-designbuild.jpg",
  },
];
