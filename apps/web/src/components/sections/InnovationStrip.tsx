import { Link } from "@/i18n/routing";
import { innovationItems as fallbackItems } from "@/data/home";
import { useTranslations } from "next-intl";

const INNOVATION_ICONS: Record<string, string> = {
  "BIM Integration": "🧩",
  "Drone Surveying": "🚁",
  "AI Scheduling": "🤖",
  "Sustainable Materials": "🌿",
  "Prefabrication": "🏭",
};

const INNOVATION_COLORS: Record<string, string> = {
  "BIM Integration": "from-blue-900/60 to-ink2",
  "Drone Surveying": "from-sky-900/60 to-ink2",
  "AI Scheduling": "from-violet-900/60 to-ink2",
  "Sustainable Materials": "from-emerald-900/60 to-ink2",
  "Prefabrication": "from-orange-900/60 to-ink2",
};

type InnovationStripProps = {
  items?: typeof fallbackItems;
};

export default function InnovationStrip({ items = fallbackItems }: InnovationStripProps) {
  const t = useTranslations("HomeComponents");

  return (
    <section className="section-light bg-surface overflow-hidden">
      <div className="container-shell py-24">
        <div data-reveal className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("innov_subtitle")}</p>
            <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl lg:text-5xl">
              {t("innov_title")}
            </h2>
            <p className="mt-4 max-w-2xl text-ink/60 leading-relaxed">
              {t("innov_desc")}
            </p>
          </div>
          <Link
            href="/innovation"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/50 hover:text-gold transition-colors lg:flex"
          >
            {t("innov_all")}
          </Link>
        </div>

        {/* Horizontal scrollable cards */}
        <div
          className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => {
            const icon = INNOVATION_ICONS[item.title] ?? "⚡";
            const gradient = INNOVATION_COLORS[item.title] ?? "from-ink2 to-ink";
            return (
              <div
                key={item.title}
                data-reveal
                data-delay={index * 0.07}
                className="group relative min-w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-[28px] border border-ink/8 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.15)] md:min-w-[300px]"
              >
                {/* Visual panel */}
                <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl transition-transform duration-700 group-hover:scale-125">{icon}</span>
                  </div>
                  {/* Index badge */}
                  <span className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                    0{index + 1}
                  </span>
                </div>

                {/* Text content */}
                <div className="p-7">
                  <h3 className="text-xl font-display text-ink transition-colors group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{item.description}</p>
                  <Link
                    href="/innovation"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/40 hover:text-gold transition-colors"
                  >
                    {t("innov_learn")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center lg:hidden">
          <Link href="/innovation" className="text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-gold">
            {t("innov_all")}
          </Link>
        </div>
      </div>
    </section>
  );
}
