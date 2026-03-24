import { Link } from '@/i18n/routing';
import { getJobs } from "@/lib/content";
import { getTranslations } from "next-intl/server";

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const jobs = await getJobs(locale);
  const t = await getTranslations("CareersPage");

  return (
    <section className="section-light">
      <div className="container-shell py-20">
        <div data-reveal>
          <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("pill")}</p>
          <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">{t("title")}</h1>
          <p className="mt-6 max-w-2xl text-ink/70">
            {t("description")}
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {jobs.map((job: any) => (
            <Link key={job.slug} href={`/careers/${job.slug}`} className="card-hover flex flex-col gap-4 rounded-[28px] border border-ink/10 bg-white p-6" data-reveal>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-ink/50">{job.location}</p>
                <h2 className="mt-3 text-2xl font-display text-ink">{job.title}</h2>
                <p className="mt-2 text-sm text-ink/70">{job.summary}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-ink/40">{job.type}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
