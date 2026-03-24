import { Link } from "@/i18n/routing";
import { differentiators as fallbackDifferentiators } from "@/data/home";
import { useTranslations } from "next-intl";

type WhyChooseUsProps = {
  items?: typeof fallbackDifferentiators;
};

const PILLAR_BG = [
  "from-blue-900/30 to-ink",
  "from-amber-900/30 to-ink",
  "from-emerald-900/30 to-ink",
];

export default function WhyChooseUs({ items = fallbackDifferentiators }: WhyChooseUsProps) {
  const t = useTranslations("HomeComponents");

  return (
    <section className="section-dark overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06),_transparent_70%)]" />

      <div className="container-shell relative z-10 py-24">
        <div data-reveal className="mb-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/70">{t("why_subtitle")}</p>
            <h2 className="mt-4 font-display text-3xl text-sand md:text-4xl lg:text-5xl">
              {t("why_title1")}{" "}
              <span className="text-gold">{t("why_title2")}</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-sand/40 hover:text-gold transition-colors hidden lg:block"
          >
            {t("why_link")}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.title} data-reveal data-delay={index * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-white/8">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${PILLAR_BG[index] ?? "from-ink2 to-ink"} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Large number watermark */}
                <div className="absolute rtl:left-6 rtl:right-auto right-6 top-4 text-[100px] font-display leading-none text-white/5 select-none">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="mb-8 text-5xl transition-transform duration-500 group-hover:scale-110 inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-display text-sand mb-4">{item.title}</h3>
                  <p className="text-sand/60 leading-relaxed">{item.description}</p>

                  {/* Animated bottom bar */}
                  <div className="mt-8 h-[1px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom certifications strip */}
        <div data-reveal data-delay="0.3" className="mt-16 flex flex-wrap items-center gap-6 border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-sand/40">{t("why_accredited")}</p>
          {["ISO 9001", "LEED Certified", "OHSAS 18001", "ISO 14001"].map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.15em] rtl:tracking-normal text-sand/60 hover:border-gold/40 hover:text-gold transition-colors"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
