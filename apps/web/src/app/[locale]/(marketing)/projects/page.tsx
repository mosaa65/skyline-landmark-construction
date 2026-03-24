import { getProjects } from "@/lib/content";
import ProjectsClient from "./ProjectsClient";
import ProjectMap from "@/components/projects/ProjectMap";
import SearchTrigger from "@/components/search/SearchTrigger";
import { getTranslations } from "next-intl/server";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const projects = await getProjects(locale);
  const t = await getTranslations("ProjectsPage");

  return (
    <section className="section-light">
      <div className="container-shell py-20">
        <div data-reveal>
          <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("pill")}</p>
          <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">{t("title")}</h1>
          <p className="mt-6 max-w-2xl text-ink/70">
            {t("description")}
          </p>
          <SearchTrigger projects={projects} />
        </div>

        <ProjectsClient projects={projects} />
        <ProjectMap />
      </div>
    </section>
  );
}
