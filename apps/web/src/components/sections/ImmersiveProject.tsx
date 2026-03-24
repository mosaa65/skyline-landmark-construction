"use client";

import { useEffect, useRef, useState } from "react";
import { immersiveProject as fallbackProject } from "@/data/home";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type ImmersiveProjectProps = {
  project?: typeof fallbackProject;
};

export default function ImmersiveProject({ project = fallbackProject }: ImmersiveProjectProps) {
  const [active, setActive] = useState(0);
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const t = useTranslations("HomeComponents");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stageRefs.current.forEach((node, index) => {
      if (!node) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(index);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(node);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="section-dark">
      <div className="container-shell grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
          <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/70">{t("immersive_subtitle")}</p>
          <h2 className="mt-4 font-display text-3xl text-sand md:text-4xl">{project.title}</h2>
          <p className="mt-3 text-sand/70">{project.subtitle}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {project.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-sand/50">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-gold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            {project.stages.map((stage, index) => (
              <div
                key={stage.title}
                className={cn(
                  "rounded-2xl border border-white/10 px-4 py-3 text-sm transition",
                  active === index ? "bg-white/10 text-sand" : "text-sand/60"
                )}
              >
                {stage.title}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {project.stages.map((stage, index) => (
            <div
              key={stage.title}
              ref={(el) => {
                stageRefs.current[index] = el;
              }}
              data-reveal
              data-delay={index * 0.08}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-gold/70">{t("immersive_phase")} {index + 1}</span>
                <span className="h-[1px] flex-1 bg-white/10"></span>
              </div>
              <h3 className="mt-4 text-2xl font-display text-sand">{stage.title}</h3>
              <p className="mt-3 text-sm text-sand/70">{stage.description}</p>
              <div className="mt-6 h-44 rounded-2xl bg-gradient-to-br from-ink2 via-ink to-black/70"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
