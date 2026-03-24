import { Link } from '@/i18n/routing';
import * as servicesEn from "@/data/services";
import * as servicesAr from "@/data/services-ar";
import { getTranslations } from "next-intl/server";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const { services } = locale === "ar" ? servicesAr : servicesEn;
  const t = await getTranslations("ServicesPage");

  return (
    <section className="section-light">
      <div className="container-shell py-20 lg:py-32">
        <div data-reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("pill")}</p>
          <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl lg:text-6xl">{t("title")}</h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
             {t("description")}
          </p>
        </div>
        
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group block" data-reveal data-delay={index * 0.1}>
              <div className="card-hover h-full flex flex-col rounded-[28px] border border-ink/5 bg-white p-8 shadow-card">
                <div className="mb-6 h-16 w-16 rounded-2xl bg-surface flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold/10">
                   {service.icon}
                </div>
                <h2 className="text-2xl font-display text-ink group-hover:text-gold transition-colors">{service.title}</h2>
                <p className="mt-4 flex-grow text-sm text-ink/70 leading-relaxed">{service.shortDescription}</p>
                <div className="mt-8 flex items-center justify-between border-t border-ink/5 pt-6 flex-wrap gap-2">
                   <span className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-ink/50 group-hover:text-ink transition-colors">{t("explore")}</span>
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
