import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import * as servicesEn from "@/data/services";
import * as servicesAr from "@/data/services-ar";
import Button from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
  const locales = ['en', 'ar'];
  return locales.flatMap(locale => {
    const services = locale === 'ar' ? servicesAr.services : servicesEn.services;
    return services.map((service) => ({
      locale,
      slug: service.slug,
    }));
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const { services } = locale === "ar" ? servicesAr : servicesEn;
  const service = services.find((s) => s.slug === resolvedParams.slug);
  const t = await getTranslations("ServiceDetail");

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-ink z-0"></div>
        {/* Placeholder for the hero image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
           <div className="w-full h-full bg-gradient-to-br from-ink via-ink to-gold/20"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent z-10"></div>
        
        <div className="container-shell relative z-20">
          <div className="max-w-3xl" data-reveal>
            <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl backdrop-blur-md">
                  {service.icon}
                </div>
                <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/80">{t("pill")}</p>
            </div>
            <h1 className="font-display text-4xl text-sand md:text-5xl lg:text-7xl leading-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-sand/80 leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Capabilities */}
      <section className="section-light relative z-20 -mt-10 rounded-t-[40px] bg-white pt-24 pb-20">
        <div className="container-shell">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
            {/* Left: Description */}
            <div data-reveal>
              <h2 className="text-3xl font-display text-ink mb-8">{t("overview_title")}</h2>
              <div className="prose prose-lg prose-p:text-ink/70 prose-p:leading-relaxed max-w-none">
                <p>{service.fullDescription}</p>
                <p className="mt-6">
                  {t("approach_text", { type: service.title.toLowerCase() })}
                </p>
              </div>
              
              <div className="mt-12 pt-12 border-t border-ink/10">
                 <h3 className="text-xl font-semibold text-ink mb-6">{t("related_projects")}</h3>
                 <p className="text-sm text-ink/60 mb-8">{t("related_projects_desc", { type: service.title.toLowerCase() })}</p>
                 <Button href="/projects" variant="outline">{t("view_portfolio")}</Button>
              </div>
            </div>

            {/* Right: Capabilities List */}
            <div data-reveal data-delay="0.2">
              <div className="glass-panel rounded-[28px] p-8 md:p-10 sticky top-32 border border-ink/5 bg-surface/50">
                <h3 className="text-xl font-display text-ink mb-8">{t("core_capabilities")}</h3>
                <ul className="space-y-6">
                  {service.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-ink/80 font-medium leading-relaxed">{capability}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10 pt-10 border-t border-ink/10">
                   <p className="text-sm text-ink/60 mb-6">{t("cta_prompt")}</p>
                   <Button href="/quote" variant="primary" className="w-full justify-center">{t("cta_btn")}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Return Link */}
      <section className="bg-surface py-12 border-t border-ink/5">
         <div className="container-shell text-center">
            <Link href="/services" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/60 hover:text-gold transition-colors">
               <span className="rtl:rotate-180">←</span>
               <span>{t("back_btn")}</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
