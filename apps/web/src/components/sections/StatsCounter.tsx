"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { metrics as fallbackMetrics, logos as fallbackLogos } from "@/data/home";
import { useTranslations } from "next-intl";

type StatsCounterProps = {
  metrics?: typeof fallbackMetrics;
  logos?: string[];
};

export default function StatsCounter({ metrics = fallbackMetrics, logos = fallbackLogos }: StatsCounterProps) {
  const [doubled, setDoubled] = useState([...logos, ...logos]);
  const t = useTranslations("HomeComponents");

  return (
    <section className="section-dark section-divider relative overflow-hidden">
      {/* Gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.08),_transparent_70%)] pointer-events-none" />

      <div className="container-shell grid gap-12 py-20 relative z-10">
        {/* Metrics grid */}
        <div className="grid gap-6 md:grid-cols-4" data-reveal>
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 px-6 py-7 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-white/8"
              data-delay={idx * 0.07}
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-gold/15 to-transparent rounded-bl-[24px] rtl:right-auto rtl:left-0 rtl:rounded-br-[24px] rtl:rounded-bl-none rtl:bg-gradient-to-br" />
              <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-sand/50 mb-3">{metric.label}</p>
              <p className="text-4xl font-semibold text-gold md:text-5xl">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
            </div>
          ))}
        </div>

        {/* Client logos infinite scroll marquee */}
        <div data-reveal data-delay="0.2" className="overflow-hidden">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-sand/30 text-center">
            {t("stats_trusted")}
          </p>
          <div className="relative">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink2 to-transparent z-10 rtl:bg-gradient-to-l" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink2 to-transparent z-10 rtl:bg-gradient-to-r" />

            {/* Scrolling logos */}
            <div className="flex gap-4" style={{ animation: "marquee 20s linear infinite" }}>
              {doubled.map((logo, idx) => (
                <span
                  key={`${logo}-${idx}`}
                  className="inline-flex flex-shrink-0 items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand/60 hover:border-gold/40 hover:text-gold transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
