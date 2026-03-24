import QuoteForm from "@/components/forms/QuoteForm";
import { getTranslations } from "next-intl/server";

export default async function QuotePage() {
  const t = await getTranslations("QuotePage");

  return (
    <section className="section-light">
      <div className="container-shell grid gap-10 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div data-reveal>
          <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("pill")}</p>
          <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">{t("title")}</h1>
          <p className="mt-6 text-ink/70">
            {t("description")}
          </p>
        </div>
        <div data-reveal data-delay="0.1">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
