export type JobPosting = {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: JobPosting[] = [
  {
    slug: "senior-project-manager",
    title: "Senior Project Manager",
    location: "New York, NY",
    type: "Full-time",
    summary: "Lead complex commercial builds with cross-disciplinary teams and client stakeholders.",
    responsibilities: [
      "Own project schedules, budgets, and risk mitigation plans.",
      "Coordinate internal teams, consultants, and subcontractors.",
      "Deliver client updates with executive-level clarity.",
    ],
    requirements: [
      "10+ years in commercial construction delivery.",
      "Proven leadership of multi-phase projects.",
      "Strong communication and stakeholder management skills.",
    ],
  },
  {
    slug: "bim-coordinator",
    title: "BIM Coordinator",
    location: "Dubai, UAE",
    type: "Full-time",
    summary: "Drive BIM execution and clash detection across large-scale developments.",
    responsibilities: [
      "Manage BIM models across design and construction stages.",
      "Coordinate with engineering teams to resolve clashes.",
      "Maintain data integrity and reporting.",
    ],
    requirements: [
      "5+ years in BIM coordination.",
      "Expertise with Revit, Navisworks, and coordination platforms.",
      "Strong collaboration skills across teams.",
    ],
  },
  {
    slug: "site-superintendent",
    title: "Site Superintendent",
    location: "Hamburg, Germany",
    type: "Full-time",
    summary: "Lead on-site execution and enforce best-in-class safety standards.",
    responsibilities: [
      "Manage daily site operations and sequencing.",
      "Ensure safety protocols and quality control.",
      "Coordinate inspections and handovers.",
    ],
    requirements: [
      "8+ years of site leadership experience.",
      "Strong safety and compliance track record.",
      "Fluent in German and English.",
    ],
  },
];
