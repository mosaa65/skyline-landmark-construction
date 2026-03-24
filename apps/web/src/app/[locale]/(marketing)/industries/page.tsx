import { Link } from '@/i18n/routing';
import * as industriesEn from "@/data/industries";
import * as industriesAr from "@/data/industries-ar";
import { getTranslations } from "next-intl/server";

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const { industries } = locale === "ar" ? industriesAr : industriesEn;
  const t = await getTranslations("IndustriesPage");

  return (
    <section className="section-light">
      <div className="container-shell py-20 lg:py-32">
        <div data-reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("pill")}</p>
          <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {industries.map((industry, index) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group relative block overflow-hidden rounded-[32px] bg-ink h-[480px]" data-reveal data-delay={index * 0.1}>
              {/* Background Setup */}
              <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent z-10"></div>
                  <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-br from-ink to-gold/20 z-0 rtl:bg-gradient-to-bl"></div>
                  <div className="w-full h-full bg-ink2 transition-transform duration-700 group-hover:scale-105"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
                 <h2 className="text-3xl font-display text-sand mb-3 group-hover:text-gold transition-colors">{industry.title}</h2>
                 <p className="text-sand/80 max-w-sm mb-6 leading-relaxed">{industry.description}</p>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                   {industry.focus.map((item) => (
                     <span key={item} className="px-3 py-1 text-xs uppercase tracking-[0.1em] rtl:tracking-normal rounded-full border border-white/20 text-white/80">
                       {item}
                     </span>
                   ))}
                 </div>
                 
                 <div className="flex items-center justify-between border-t border-white/20 pt-6 flex-wrap gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-sand/60 group-hover:text-sand transition-colors">{t("capabilities")}</span>
                    <span className="text-gold transform transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180">→</span>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

