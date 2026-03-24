import { Link } from "@/i18n/routing";
import { featuredProjects as fallbackProjects } from "@/data/home";
import { useTranslations } from "next-intl";

type FeaturedProjectsProps = {
  projects?: typeof fallbackProjects;
};

const PROJECT_GRADIENTS = [
  "from-blue-900 via-ink2 to-ink",
  "from-teal-900 via-ink2 to-ink",
  "from-violet-900 via-ink2 to-ink",
  "from-orange-900 via-ink2 to-ink",
];

export default function FeaturedProjects({ projects = fallbackProjects }: FeaturedProjectsProps) {
  const t = useTranslations("HomeComponents");

  return (
    <section className="section-light bg-white">
      <div className="container-shell py-24">
        <div data-reveal className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("projects_subtitle")}</p>
            <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl lg:text-5xl">
              {t("projects_title")}
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/50 hover:text-gold transition-colors md:flex"
          >
            {t("projects_link")}
          </Link>
        </div>

        {/* Horizontal scroll strip */}
        <div
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory -mx-6 px-6"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={`/projects/${["harbor-skyline-tower", "aurora-medical-campus", "seraphim-residences", "northline-logistics-hub"][index] ?? "harbor-skyline-tower"}`}
              data-reveal
              data-delay={index * 0.08}
              className="group relative min-w-[300px] flex-shrink-0 snap-start overflow-hidden rounded-[32px] bg-ink shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_32px_80px_rgba(0,0,0,0.35)] md:min-w-[360px]"
            >
              {/* Background image panel */}
              <div className="h-[280px] bg-ink2 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
                />

                {/* Animated grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

                {/* Hover overlay with CTA */}
                <div className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-all duration-400 group-hover:opacity-100 backdrop-blur-[2px]">
                  <div className="flex items-center gap-3 rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-gold backdrop-blur-md">
                    {t("projects_case")}
                  </div>
                </div>

                {/* Type badge */}
                <span className="absolute top-5 left-5 rtl:left-auto rtl:right-5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] rtl:tracking-normal text-gold backdrop-blur-sm">
                  {project.type}
                </span>
              </div>

              {/* Content footer */}
              <div className="p-7">
                <h3 className="text-xl font-display text-sand transition-colors group-hover:text-gold">
                  {project.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-sm text-sand/50">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4 text-center md:hidden">
          <Link href="/projects" className="text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-gold">
            {t("projects_link")}
          </Link>
        </div>
      </div>
    </section>
  );
}
