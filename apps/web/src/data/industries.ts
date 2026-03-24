export type Industry = {
  slug: string;
  title: string;
  description: string;
  focus: string[];
  hero: string;
  stats?: { label: string; value: string }[];
};

export const industries: Industry[] = [
  {
    slug: "commercial",
    title: "Commercial",
    description: "Flagship towers, headquarters, and mixed-use districts delivered at enterprise scale.",
    focus: ["Corporate HQ", "Mixed-Use", "Hospitality"],
    hero: "/images/industry-commercial.jpg",
    stats: [
      { label: "Projects", value: "180+" },
      { label: "Delivery", value: "98% on-time" },
      { label: "Avg. Size", value: "120,000 sqm" },
    ],
  },
  {
    slug: "institutional",
    title: "Institutional",
    description: "Universities, hospitals, and civic infrastructure built with compliance-first rigor.",
    focus: ["Healthcare", "Education", "Public Sector"],
    hero: "/images/industry-institutional.jpg",
    stats: [
      { label: "Facilities", value: "90+" },
      { label: "Certifications", value: "LEED + ISO" },
      { label: "Safety", value: "Zero incidents" },
    ],
  },
  {
    slug: "residential",
    title: "Luxury Residential",
    description: "Private estates and high-rise residences executed with white-glove delivery.",
    focus: ["High-Rise", "Estates", "Interior Fit-Out"],
    hero: "/images/industry-residential.jpg",
    stats: [
      { label: "Residences", value: "240+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Concierge", value: "24/7" },
    ],
  },
  {
    slug: "industrial",
    title: "Industrial & Infrastructure",
    description: "Mission-critical facilities engineered for uptime, safety, and future growth.",
    focus: ["Logistics", "Energy", "Manufacturing"],
    hero: "/images/industry-industrial.jpg",
    stats: [
      { label: "Facilities", value: "110+" },
      { label: "Automation", value: "Up to 95%" },
      { label: "Scale", value: "300,000+ sqm" },
    ],
  },
];
