import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import * as projectsEn from "@/data/projects";
import * as projectsAr from "@/data/projects-ar";
import Button from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  const locales = ['en', 'ar'];
  return locales.flatMap(locale => {
    const projects = locale === 'ar' ? projectsAr.projects : projectsEn.projects;
    return projects.map((project) => ({
      locale,
      slug: project.slug,
    }));
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const { projects } = locale === "ar" ? projectsAr : projectsEn;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  const t = await getTranslations("ProjectDetail");

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Project Hero */}
      <section className="relative min-h-[85vh] flex items-end pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-ink z-0"></div>
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
           <div className="w-full h-full bg-gradient-to-tr from-black via-ink to-gold/20"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent z-10"></div>
        
        <div className="container-shell relative z-20 w-full">
          <div className="max-w-4xl" data-reveal>
            <div className="flex flex-wrap items-center gap-4 mb-6">
               <span className="px-3 py-1 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] rtl:tracking-normal bg-gold/5 backdrop-blur-sm">
                 {project.type}
               </span>
               <span className="text-sand/60 text-sm">{project.location}</span>
               <span className="text-sand/60 text-sm">•</span>
               <span className="text-sand/60 text-sm">{t("delivered")} {project.year}</span>
            </div>
            
            <h1 className="font-display text-4xl text-sand md:text-5xl lg:text-7xl leading-tight">
              {project.title}
            </h1>
            
            <p className="mt-8 text-xl text-sand/80 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          
          {/* Quick Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-ink2/50 backdrop-blur-md border border-white/10" data-reveal data-delay="0.2">
             {project.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                   <span className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-sand/50 mb-1">{stat.label}</span>
                   <span className="text-xl font-display text-gold">{stat.value}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-light bg-surface pt-24 pb-20">
        <div className="container-shell">
           <div className="max-w-3xl mx-auto space-y-20">
             {project.story?.map((section, idx) => (
               <div key={idx} data-reveal>
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-gold font-bold">0{idx + 1}</span>
                    <span className="h-[1px] flex-1 bg-ink/10"></span>
                 </div>
                 <h2 className="text-3xl font-display text-ink mb-6">{section.title}</h2>
                 <p className="text-lg text-ink/70 leading-relaxed">
                    {section.description}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-ink py-24">
        <div className="container-shell">
           <div className="flex justify-between items-end mb-12" data-reveal>
              <div>
                 <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-gold/70 mb-2">{t("visual_pill")}</p>
                 <h2 className="text-3xl font-display text-sand">{t("gallery_title")}</h2>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                 <div key={idx} data-reveal data-delay={idx * 0.1} className={`relative overflow-hidden rounded-[24px] bg-ink2 ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-[16/9]' : 'aspect-square'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    {/* Hover reveal overlay */}
                    <div className="absolute inset-0 bg-ink/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                       <span className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-sand">
                          +
                       </span>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Milestones / Timeline */}
      {project.milestones && (
        <section className="section-light py-24">
          <div className="container-shell">
            <div data-reveal className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.4em] rtl:tracking-normal text-concrete">{t("timeline_pill")}</p>
              <h2 className="text-3xl font-display text-ink mt-4">{t("timeline_title")}</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {project.milestones.map((milestone, idx) => (
                <div key={idx} data-reveal data-delay={idx * 0.1} className="relative">
                   <div className="mb-6 w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center text-xs font-bold text-gold bg-surface">
                     M{idx+1}
                   </div>
                   <h3 className="text-xl font-display text-ink mb-2">{milestone.title}</h3>
                   <p className="text-xs uppercase tracking-[0.2em] rtl:tracking-normal text-ink/50 mb-4">{milestone.date}</p>
                   <p className="text-sm text-ink/70 leading-relaxed">{milestone.description}</p>
                   
                   {/* Connector line */}
                   {idx < project.milestones!.length - 1 && (
                     <div className="hidden lg:block absolute top-6 left-16 rtl:right-16 rtl:left-0 right-0 h-[1px] bg-ink/10 -z-10 w-[calc(100%-1rem)]"></div>
                   )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Step / CTA */}
      <section className="bg-surface py-24 border-t border-ink/5 text-center">
         <div className="container-shell max-w-2xl" data-reveal>
            <h2 className="text-3xl font-display text-ink mb-6">{t("discuss_title")}</h2>
            <p className="text-ink/70 mb-8">
               {t("discuss_desc", { type: project.type.toLowerCase() })}
            </p>
            <Button href="/quote" variant="primary">{t("cta_btn")}</Button>
         </div>
      </section>
      
      {/* Return Link */}
      <section className="bg-white py-8 border-t border-ink/5">
         <div className="container-shell text-center">
            <Link href="/projects" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/60 hover:text-gold transition-colors">
               <span className="rtl:rotate-180">←</span>
               <span>{t("back_btn")}</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
