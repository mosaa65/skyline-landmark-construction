import Image from "next/image";
import * as innovationEn from "@/data/innovation";
import * as innovationAr from "@/data/innovation-ar";
import Button from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";

export default async function InnovationPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const { innovationHighlights } = locale === "ar" ? innovationAr : innovationEn;
  const t = await getTranslations("InnovationPage");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0 opacity-30">
           {/* Abstract tech grid background */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
        </div>
        
        <div className="container-shell relative z-20 text-sand text-center max-w-4xl mx-auto">
          <div data-reveal>
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/80 mb-6">{t("pill")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight text-balance">
              {t("title")}
            </h1>
            <p className="mt-8 text-xl text-sand/70 leading-relaxed max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Showcase Grid */}
      <section className="section-light bg-surface -mt-8 relative z-20 rounded-t-[40px] pt-24 pb-32">
        <div className="container-shell">
          <div className="space-y-32">
            {innovationHighlights.map((item, index) => (
              <div key={item.title} className={`grid gap-12 lg:gap-20 lg:grid-cols-2 items-center ${index % 2 !== 0 ? 'lg:[&>div:first-child]:order-last' : ''}`}>
                 
                 {/* Text Content */}
                 <div data-reveal className={`${index % 2 !== 0 ? 'lg:pl-10 rtl:pl-0 rtl:pr-10' : 'lg:pr-10 rtl:pr-0 rtl:pl-10'}`}>
                    <div className="text-6xl text-gold/20 font-display mb-6 tracking-tighter">
                      0{index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display text-ink mb-6">{item.title}</h2>
                    <p className="text-lg text-ink/70 leading-relaxed">
                      {item.description}
                    </p>
                    {/* Placeholder for expanded detailed text we might add later */}
                    <p className="mt-4 text-ink/60 leading-relaxed">
                      {t("expanded_text")}
                    </p>
                 </div>

                 {/* Visual Component */}
                 <div data-reveal data-delay="0.2">
                    <div className="aspect-[4/3] rounded-[32px] overflow-hidden relative shadow-soft border border-ink/5 bg-white p-2">
                       <div className="w-full h-full rounded-[24px] bg-ink relative overflow-hidden group">
                          {/* Inner tech visualization placeholder */}
                          <div className="absolute inset-0 bg-gradient-to-br from-ink2 to-ink"></div>
                          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(201,169,110,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,110,0.2)_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-screen transition-transform duration-1000 group-hover:scale-110"></div>
                          
                          {/* Floating UI Elements Simulation */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-gold/10 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                          
                          <div className="absolute bottom-6 left-6 rtl:right-6 rtl:left-auto px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-xs text-sand uppercase tracking-wider">
                            {t("system_active")}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="py-24 bg-ink text-center">
         <div className="container-shell max-w-2xl text-sand" data-reveal>
            <h2 className="text-3xl font-display mb-6">{t("cta_title")}</h2>
            <p className="text-sand/70 mb-10 leading-relaxed">
              {t("cta_desc")}
            </p>
            <Button href="/contact" variant="primary">{t("cta_btn")}</Button>
         </div>
      </section>
    </div>
  );
}

