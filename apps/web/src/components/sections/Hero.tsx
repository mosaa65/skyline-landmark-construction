"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroVideo = process.env.NEXT_PUBLIC_HERO_VIDEO ?? "";
  const heroPoster = process.env.NEXT_PUBLIC_HERO_POSTER ?? "";
  const t = useTranslations("Hero");

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".js-hero",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.12 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        {heroVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster || undefined}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full relative">
            <img 
              src="file:///C:/Users/mousa/.gemini/antigravity/brain/6e0b8139-8e45-408a-b26d-0f3b9e09414e/project_1_tower_1773784677018.png"
              alt="Luxury Construction"
              className="absolute inset-0 h-full w-full object-cover animate-slowZoom"
            />
            <div className="absolute inset-0 bg-ink/40"></div>
            <div className="absolute inset-0 grid-overlay opacity-20"></div>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-black/85"></div>

      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="rgba(201,169,110,0.35)" strokeWidth="1" fill="none">
          <path d="M0 560 L1200 560" />
          <path d="M0 640 L1200 640" />
          <rect x="90" y="360" width="120" height="200" />
          <rect x="240" y="300" width="80" height="260" />
          <rect x="360" y="260" width="140" height="300" />
          <rect x="520" y="330" width="100" height="230" />
          <rect x="650" y="280" width="70" height="280" />
          <rect x="760" y="240" width="140" height="320" />
          <rect x="930" y="320" width="90" height="240" />
        </g>
      </svg>

      <div
        className="absolute -right-24 top-24 h-[520px] w-[520px] rounded-full bg-gold/20 blur-[140px]"
        data-parallax
        data-depth="0.4"
      ></div>
      <div
        className="absolute -left-20 bottom-10 h-[360px] w-[360px] rounded-full bg-amber/20 blur-[120px]"
        data-parallax
        data-depth="0.25"
      ></div>

      <div
        className="pointer-events-none absolute -right-24 top-20 hidden h-[360px] w-[360px] rounded-full border border-white/10 bg-white/5 lg:block"
        data-parallax
        data-depth="0.2"
      >
        <div className="absolute inset-8 rounded-full border border-gold/20"></div>
        <div className="absolute inset-16 rounded-full border border-gold/10"></div>
        <div className="absolute inset-0 grid-overlay opacity-30"></div>
      </div>

      <div className="container-shell relative z-10 flex min-h-[92vh] flex-col justify-center gap-8 py-24">
        <div className="js-hero">
          <span className="pill border border-gold/40 text-gold/80">{t("pill")}</span>
        </div>
        <h1 className="js-hero font-display text-4xl leading-tight text-sand md:text-6xl lg:text-7xl">
          {t("title")}
        </h1>
        <p className="js-hero max-w-2xl text-lg text-sand/80 md:text-xl">
          {t("description")}
        </p>
        <div className="js-hero flex flex-wrap items-center gap-4">
          <Button href="/projects" size="lg" variant="primary" className="shadow-[0_20px_60px_rgba(232,168,56,0.3)]">
            {t("explore_btn")}
          </Button>
          <Button href="/quote" size="lg" variant="outline">
            {t("consultation_btn")}
          </Button>
        </div>

        <div className="js-hero mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: t("stats_years"), value: "35+" },
            { label: t("stats_landmarks"), value: "500+" },
            { label: t("stats_satisfaction"), value: "98%" },
          ].map((item) => (
            <div key={item.label} className="glass-panel rounded-[20px] px-6 py-4 text-sand/80">
              <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-sand/60">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-gold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Animated scroll indicator */}
        <div className="js-hero mt-10 flex flex-col items-start gap-2">
          <span className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-sand/40">{t("scroll")}</span>
          <div className="flex h-10 w-6 items-center justify-center rounded-full border border-white/20">
            <svg
              className="h-4 w-4 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(5px); opacity: 0.5; }
          }
        `}</style>
      </div>
    </section>
  );
}
