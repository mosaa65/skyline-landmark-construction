import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("CTA");

  return (
    <section className="relative overflow-hidden">
      {/* Multi-layer dramatic dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink2 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(232,168,56,0.22),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,169,110,0.15),_transparent_50%)]" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(201,169,110,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,110,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glowing orbs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber/15 blur-[100px] pointer-events-none" />

      <div className="container-shell relative z-10 py-28 text-sand" data-reveal>
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/70 mb-6">
            {t("subtitle")}
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl text-balance">
            {t("title_main")}{" "}
            <span className="text-gold">{t("title_highlight")}</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-sand/70 leading-relaxed">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/quote" size="lg" variant="primary" className="shadow-[0_20px_60px_rgba(232,168,56,0.35)]">
              {t("quote_btn")}
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              {t("schedule_btn")}
            </Button>
          </div>

          {/* Trust indicators row */}
          <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10">
            {[
              { value: "500+", label: t("stat_projects") },
              { value: "98%", label: t("stat_ontime") },
              { value: "35+", label: t("stat_years") },
              { value: "24h", label: t("stat_response") },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-display text-gold">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-sand/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
