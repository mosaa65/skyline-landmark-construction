export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  publishedAt?: string;
  readTime: string;
  content: Array<string | { children?: Array<{ text: string }> }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-modular-construction",
    title: "The Future of Modular Construction",
    excerpt: "How precision manufacturing is redefining speed, quality, and sustainability.",
    category: "Industry Insights",
    date: "March 2026",
    readTime: "6 min",
    content: [
      "Modular construction has moved beyond efficiency—it is now a strategic advantage for large-scale developments.",
      "By shifting critical assemblies into controlled environments, teams reduce risk, improve safety, and compress schedules.",
      "Our next-gen approach blends BIM coordination with factory precision for predictable delivery at scale.",
    ],
  },
  {
    slug: "behind-the-build-civic-center",
    title: "Behind the Build: Cityline Civic Center",
    excerpt: "A time-lapse look at orchestration, logistics, and engineering execution.",
    category: "Project Story",
    date: "February 2026",
    readTime: "5 min",
    content: [
      "The Cityline Civic Center was executed in four tightly managed construction phases.",
      "Every milestone was mapped against a risk register to keep the project on schedule and under budget.",
      "This build set a new standard for cross-stakeholder collaboration in the public sector.",
    ],
  },
  {
    slug: "sustainable-construction-2030",
    title: "Sustainable Construction: Meeting 2030 Carbon Goals",
    excerpt: "A practical blueprint for lowering embodied carbon without sacrificing luxury.",
    category: "Sustainability",
    date: "January 2026",
    readTime: "7 min",
    content: [
      "Low-carbon materials, circular supply chains, and energy-positive operations are now baseline expectations.",
      "Our project teams build carbon reduction into design decisions from day one.",
      "Clients benefit from long-term operational savings and elevated asset value.",
    ],
  },
];
