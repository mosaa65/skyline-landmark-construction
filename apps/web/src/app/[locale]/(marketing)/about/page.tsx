import Image from "next/image";
import * as aboutEn from "@/data/about";
import * as aboutAr from "@/data/about-ar";
import { getTranslations } from "next-intl/server";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const localeData = locale === "ar" ? aboutAr : aboutEn;
  const { story, values, team, timeline, certifications } = localeData;
  const t = await getTranslations("AboutComponents");

  return (
    <div className="flex flex-col">
      {/* Hero / Story Section */}
      <section className="section-light">
        <div className="container-shell py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div data-reveal>
              <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("story_pill")}</p>
              <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl lg:text-6xl lg:leading-tight">
                {story.title}
              </h1>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                {story.description}
              </p>
              
              <div className="mt-12 flex flex-wrap gap-8">
                {[t("story_stats1"), t("story_stats2"), t("story_stats3")].map((item, index) => (
                  <div key={item} data-reveal data-delay={index * 0.08} className="space-y-2">
                    <p className="font-display text-3xl text-gold">{item.split(' ')[0]}</p>
                    <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-ink/50">{item.split(' ').slice(1).join(' ')}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div data-reveal data-delay="0.2" className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px]">
              <div className="absolute inset-0 bg-ink/5"></div>
              {/* Fallback pattern since we don't have images yet */}
              <div className="absolute inset-0 grid-overlay opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rtl:bg-gradient-to-tl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="section-dark border-y border-white/10">
        <div className="container-shell py-8">
           <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between" data-reveal>
             <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-sand/50">{t("cert_trusted")}</p>
             <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.2em] rtl:tracking-normal text-sand/80">
               {certifications.map((cert) => (
                 <span key={cert} className="rounded-full border border-white/10 px-4 py-2 hover:border-gold/50 transition-colors">
                   {cert}
                 </span>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-light bg-surface">
        <div className="container-shell py-24">
          <div data-reveal className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("values_pill")}</p>
            <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
              {t("values_title")}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={value.title} data-reveal data-delay={index * 0.1} className="card-hover rounded-[24px] bg-white p-8 shadow-card border border-ink/5">
                <div className="text-3xl mb-6">{value.icon}</div>
                <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-dark">
        <div className="container-shell py-24">
          <div data-reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/70">{t("history_pill")}</p>
            <h2 className="mt-4 font-display text-3xl text-sand md:text-4xl">
              {t("history_title")}
            </h2>
          </div>
          
          <div className="mt-20 relative max-w-4xl mx-auto">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 rtl:right-1/2 rtl:left-auto top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 rtl:translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              {timeline.map((item, index) => (
                <div key={item.year} data-reveal data-delay={index * 0.1} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute top-1/2 left-1/2 rtl:right-1/2 rtl:left-auto -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_rgba(201,169,110,0.5)] z-10"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 rtl:pl-0 rtl:pr-16 text-left rtl:text-right' : 'md:pr-16 rtl:pr-0 rtl:pl-16 text-left md:text-right rtl:text-right rtl:md:text-left'}`}>
                     <div className="glass-panel rounded-[20px] p-6 lg:p-8 hover:border-gold/30 transition-colors">
                        <span className="text-gold font-display text-xl">{item.year}</span>
                        <h3 className="mt-2 text-xl font-semibold text-sand">{item.title}</h3>
                        <p className="mt-3 text-sm text-sand/70">{item.description}</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-light">
        <div className="container-shell py-24">
           <div data-reveal className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("team_pill")}</p>
            <h2 className="mt-4 font-display text-3xl text-ink md:text-4xl">
              {t("team_title")}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
             {team.map((member, index) => (
               <div key={member.name} data-reveal data-delay={index * 0.1} className="group cursor-pointer">
                  <div className="relative aspect-square w-full md:w-4/5 mx-auto overflow-hidden rounded-full border-4 border-surface shadow-soft transition-transform duration-500 group-hover:scale-105">
                     <div className="absolute inset-0 bg-ink/5 mix-blend-multiply"></div>
                     {/* Temporarily just a gradient until we generate images */}
                     <div className="absolute inset-0 bg-gradient-to-br from-concrete/20 to-ink/20"></div>
                  </div>
                  <div className="mt-8 text-center max-w-sm mx-auto">
                    <h3 className="text-xl font-display text-ink">{member.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-gold">{member.role}</p>
                    <p className="mt-4 text-sm text-ink/70 leading-relaxed">{member.bio}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}

