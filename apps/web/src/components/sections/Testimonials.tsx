"use client";

import { useEffect, useState } from "react";
import { testimonials as fallbackTestimonials } from "@/data/home";
import { useTranslations } from "next-intl";

type TestimonialsProps = {
  items?: typeof fallbackTestimonials;
};

export default function Testimonials({ items = fallbackTestimonials }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const t = useTranslations("HomeComponents");

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setFading(false);
      }, 400);
    }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const goTo = (idx: number) => {
    if (idx === index) return;
    setFading(true);
    setTimeout(() => {
      setIndex(idx);
      setFading(false);
    }, 300);
  };

  const active = items[index];

  const initials = active.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="section-dark overflow-hidden relative">
      {/* Decorative background quote mark */}
      <div className="absolute left-8 rtl:left-auto rtl:right-8 top-8 select-none text-[200px] leading-none text-white/5 font-serif pointer-events-none">
        {'"'}
      </div>
      <div className="container-shell py-24 relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-center">
          {/* Left: heading + navigation */}
          <div data-reveal>
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/70">{t("test_subtitle")}</p>
            <h2 className="mt-4 font-display text-3xl text-sand md:text-4xl lg:text-5xl leading-tight">
              {t("test_title")}
            </h2>
            <p className="mt-6 text-sand/60 leading-relaxed">
              {t("test_desc")}
            </p>

            {/* Dot navigation */}
            <div className="mt-10 flex gap-3">
              {items.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => goTo(idx)}
                  aria-label={`Testimonial from ${item.name}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    idx === index ? "w-10 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: testimonial card */}
          <div
            data-reveal
            data-delay="0.15"
            className="relative rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500"
            style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(10px)" : "translateY(0)" }}
          >
            {/* Oversized quote mark */}
            <div className="absolute -top-5 left-8 rtl:left-auto rtl:right-8 rtl:scale-x-[-1] text-6xl text-gold/30 font-serif select-none leading-none">
              {'"'}
            </div>

            <p className="text-xl text-sand leading-relaxed md:text-2xl">
              {active.quote}
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              {/* Avatar */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber text-ink text-sm font-bold">
                {initials}
              </div>
              <div>
                <p className="font-semibold text-sand">{active.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-sand/50">
                  {active.title}, {active.company}
                </p>
              </div>

              {/* Star rating */}
              <div className="ml-auto rtl:ml-0 rtl:mr-auto flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
