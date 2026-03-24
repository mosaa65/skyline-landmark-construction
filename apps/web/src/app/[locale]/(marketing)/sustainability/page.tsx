import Image from "next/image";
import * as innovationEn from "@/data/innovation";
import * as innovationAr from "@/data/innovation-ar";
import Button from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";

export default async function SustainabilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const { sustainabilityCommitments } = locale === "ar" ? innovationAr : innovationEn;
  const t = await getTranslations("SustainabilityPage");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
           {/* Abstract organic background */}
           <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-[#1a2f24] opacity-80 mix-blend-overlay"></div>
        </div>
        
        <div className="container-shell relative z-20 text-sand max-w-4xl mx-auto text-center" data-reveal>
          <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/80 mb-6">{t("pill")}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight">
            {t("title")}
          </h1>
          <p className="mt-8 text-xl text-sand/70 leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Core Metrics Banner */}
      <section className="bg-gold relative z-20 -mt-6 mx-4 rounded-3xl md:mx-auto md:max-w-5xl shadow-xl">
         <div className="grid grid-cols-2 md:grid-cols-4 divide-x rtl:divide-x-reverse divide-ink/10 py-8 px-6 text-center">
            <div>
               <p className="font-display text-3xl md:text-4xl text-ink" dir="ltr">{t("metric1_val")}</p>
               <p className="text-[10px] uppercase tracking-widest rtl:tracking-normal text-ink/60 mt-2 font-bold">{t("metric1_lbl")}</p>
            </div>
            <div>
               <p className="font-display text-3xl md:text-4xl text-ink" dir="ltr">{t("metric2_val")}</p>
               <p className="text-[10px] uppercase tracking-widest rtl:tracking-normal text-ink/60 mt-2 font-bold">{t("metric2_lbl")}</p>
            </div>
            <div>
               <p className="font-display text-3xl md:text-4xl text-ink" dir="ltr">{t("metric3_val")}</p>
               <p className="text-[10px] uppercase tracking-widest rtl:tracking-normal text-ink/60 mt-2 font-bold">{t("metric3_lbl")}</p>
            </div>
            <div>
               <p className="font-display text-3xl md:text-4xl text-ink">{t("metric4_val")}</p>
               <p className="text-[10px] uppercase tracking-widest rtl:tracking-normal text-ink/60 mt-2 font-bold">{t("metric4_lbl")}</p>
            </div>
         </div>
      </section>

      {/* Commitments Grid */}
      <section className="section-light bg-surface pt-32 pb-24">
        <div className="container-shell">
          <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
             <h2 className="text-3xl md:text-4xl font-display text-ink mb-6">{t("commitments_title")}</h2>
             <p className="text-ink/70 text-lg">
               {t("commitments_desc")}
             </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {sustainabilityCommitments.map((item, index) => (
              <div key={item.title} className="group relative overflow-hidden rounded-[32px] bg-white border border-ink/5 p-10 hover:shadow-card transition-all duration-300" data-reveal data-delay={index * 0.1}>
                {/* Decorative background element */}
                <div className="absolute -right-20 rtl:-left-20 rtl:-right-auto -top-20 w-64 h-64 bg-surface rounded-full opacity-50 transition-transform duration-700 group-hover:scale-150"></div>
                
                <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-ink/5 flex items-center justify-center text-ink mb-8 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </div>
                   <h3 className="text-2xl font-display text-ink mb-4">{item.title}</h3>
                   <p className="text-ink/70 leading-relaxed text-lg">
                     {item.description}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certification Footer */}
      <section className="bg-white py-20 border-t border-ink/10 text-center">
         <div className="container-shell">
            <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal font-semibold text-ink/40 mb-8">{t("standards_pill")}</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
               {/* Placeholders for certification badges */}
               <div className="font-display text-2xl font-bold border-2 border-black p-2">LEED</div>
               <div className="font-display text-2xl font-bold border-2 border-black p-2 rounded-full">BREEAM</div>
               <div className="font-display text-2xl font-bold border-2 border-black p-2">WELL</div>
               <div className="font-display text-xl font-bold">ISO 14001</div>
            </div>
         </div>
      </section>
    </div>
  );
}

