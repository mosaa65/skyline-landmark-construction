import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import * as industriesEn from "@/data/industries";
import * as industriesAr from "@/data/industries-ar";
import Button from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  const locales = ['en', 'ar'];
  return locales.flatMap(locale => {
    const industries = locale === 'ar' ? industriesAr.industries : industriesEn.industries;
    return industries.map((industry) => ({
      locale,
      slug: industry.slug,
    }));
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const { industries } = locale === "ar" ? industriesAr : industriesEn;
  const industry = industries.find((i) => i.slug === resolvedParams.slug);
  const t = await getTranslations("IndustryDetail");

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-ink z-0"></div>
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
           {/* Placeholder gradient for industry hero image */}
           <div className="w-full h-full bg-gradient-to-tr from-ink2 via-ink to-concrete/20"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent z-10"></div>
        
        <div className="container-shell relative z-20">
          <div className="max-w-3xl" data-reveal>
            <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/80 mb-4">{t("pill")}</p>
            <h1 className="font-display text-4xl text-sand md:text-5xl lg:text-7xl leading-tight">
              {industry.title}
            </h1>
            <p className="mt-6 text-xl text-sand/80 leading-relaxed max-w-2xl">
              {industry.description}
            </p>
            
            {industry.stats && (
              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {industry.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-3xl font-display text-gold">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-sand/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Focus Areas & Capabilities */}
      <section className="section-light relative z-20 -mt-10 rounded-t-[40px] bg-white pt-24 pb-20">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
            {/* Left: Overview */}
            <div data-reveal>
              <h2 className="text-3xl font-display text-ink mb-8">{t("approach_title")}</h2>
              <div className="prose prose-lg prose-p:text-ink/70 prose-p:leading-relaxed max-w-none">
                <p>
                   {t("approach_text", { type: industry.title.toLowerCase() })}
                </p>
                <p className="mt-6">
                   {t("approach_text2")}
                </p>
              </div>
              
              <div className="mt-12 pt-12 border-t border-ink/10">
                 <h3 className="text-xl font-semibold text-ink mb-6">{t("specializations")}</h3>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {industry.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-ink/5">
                        <div className="w-2 h-2 rounded-full bg-gold shrink-0"></div>
                        <span className="text-ink/80 font-medium">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Right: CTA & Contact */}
            <div data-reveal data-delay="0.2">
              <div className="glass-panel rounded-[28px] p-8 md:p-10 sticky top-32 border border-ink/5 bg-ink text-sand">
                <h3 className="text-xl font-display text-sand mb-4">{t("cta_title", { type: industry.title })}</h3>
                <p className="text-sm text-sand/70 mb-8 leading-relaxed">
                   {t("cta_desc")}
                </p>
                
                <div className="space-y-4">
                   <Button href="/projects" variant="outline" className="w-full justify-center border-white/20 text-sand hover:bg-white/10">
                     {t("btn_projects")}
                   </Button>
                   <Button href="/quote" variant="primary" className="w-full justify-center">
                     {t("btn_consult")}
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Return Link */}
      <section className="bg-surface py-12 border-t border-ink/5 text-center">
         <div className="container-shell">
            <Link href="/industries" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/60 hover:text-gold transition-colors">
               <span className="rtl:rotate-180">←</span>
               <span>{t("back_btn")}</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
