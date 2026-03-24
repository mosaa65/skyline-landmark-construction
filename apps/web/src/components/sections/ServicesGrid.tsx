import { Link } from "@/i18n/routing";
import { services as fallbackServices } from "@/data/home";
import { useTranslations } from "next-intl";

const SERVICE_ICONS: Record<string, string> = {
  "Commercial Construction": "🏢",
  "Residential Development": "🏘️",
  "Industrial & Infrastructure": "🏭",
  "Interior Fit-Out": "🛋️",
  "Renovation & Restoration": "🏛️",
  "Design-Build": "📐",
};

const SERVICE_SLUGS: Record<string, string> = {
  "Commercial Construction": "commercial",
  "Residential Development": "residential",
  "Industrial & Infrastructure": "industrial",
  "Interior Fit-Out": "fit-out",
  "Renovation & Restoration": "renovation",
  "Design-Build": "design-build",
};

type ServicesGridProps = {
  items?: typeof fallbackServices;
};

export default function ServicesGrid({ items = fallbackServices }: ServicesGridProps) {
  const t = useTranslations("HomeComponents");

  return (
    <section className="section-light bg-surface">
      <div className="container-shell py-24">
        <div data-reveal className="flex items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("services_subtitle")}</p>
            <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl lg:text-5xl">
              {t("services_title")}
            </h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              {t("services_desc")}
            </p>
          </div>
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/50 hover:text-gold transition-colors md:flex"
          >
            {t("services_all")}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => {
            const icon = SERVICE_ICONS[service.title] ?? "🏗️";
            const slug = SERVICE_SLUGS[service.title] ?? "commercial";
            return (
              <Link
                key={service.title}
                href={`/services/${slug}`}
                className="group block"
                data-reveal
                data-delay={index * 0.07}
              >
                <div className="card-hover flex h-full flex-col rounded-[28px] border border-ink/5 bg-white p-8 shadow-card">
                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface text-3xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/10">
                    {icon}
                  </div>

                  <h3 className="text-xl font-display text-ink transition-colors group-hover:text-gold">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-grow text-sm text-ink/60 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Footer row */}
                  <div className="mt-8 flex items-center justify-between border-t border-ink/5 pt-6 flex-wrap gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-ink/40 transition-colors group-hover:text-ink">
                      {t("services_explore")}
                    </span>
                    <span className="h-7 w-7 flex items-center justify-center rounded-full border border-ink/10 text-sm text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink rtl:rotate-180">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/50 hover:text-gold transition-colors"
          >
            {t("services_all")}
          </Link>
        </div>
      </div>
    </section>
  );
}
