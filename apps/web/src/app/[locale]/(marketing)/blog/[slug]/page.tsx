import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import * as blogEn from "@/data/blog";
import * as blogAr from "@/data/blog-ar";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  const locales = ['en', 'ar'];
  return locales.flatMap(locale => {
    const posts = locale === 'ar' ? blogAr.blogPosts : blogEn.blogPosts;
    return posts.map((post) => ({
      locale,
      slug: post.slug,
    }));
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const { blogPosts } = locale === "ar" ? blogAr : blogEn;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  const t = await getTranslations("BlogPost");

  if (!post) {
    notFound();
  }

  const tags = [t("tag_eng"), t("tag_strat"), t("tag_inn")];

  return (
    <article className="flex flex-col">
      {/* Blog Article Header */}
      <section className="bg-surface pt-32 pb-20 border-b border-ink/5">
        <div className="container-shell max-w-4xl mx-auto" data-reveal>
          <div className="flex flex-wrap items-center gap-4 mb-8 text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold">
             <Link href="/blog" className="text-ink/40 hover:text-ink transition-colors">News & Insights</Link>
             <span className="text-ink/20">/</span>
             <span className="text-gold">{post.category}</span>
          </div>
          
          <h1 className="font-display text-4xl text-ink md:text-5xl lg:text-6xl leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-ink/60">
             <span dir="ltr">{post.date || post.publishedAt}</span>
             <span className="w-1 h-1 rounded-full bg-ink/20"></span>
             <span>{post.readTime} {t("read_suffix")}</span>
          </div>
        </div>
      </section>

      {/* Hero Image / Featured Media */}
      <section className="bg-surface -mt-8 relative z-10 w-full overflow-hidden">
        <div className="container-shell max-w-5xl mx-auto" data-reveal>
           <div className="aspect-[21/9] w-full bg-ink rounded-[24px] shadow-soft relative overflow-hidden">
               {/* Placeholder for featured image */}
               <div className="absolute inset-0 bg-gradient-to-br from-ink via-gold/10 to-gold/20 opacity-80 mix-blend-overlay"></div>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,168,56,0.1),_transparent_60%)]"></div>
           </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-20 pb-32">
         <div className="container-shell max-w-3xl mx-auto" data-reveal>
            {/* Excerpt Summary */}
            <div className="text-xl md:text-2xl text-ink/80 leading-relaxed font-display mb-12 pb-12 border-b border-ink/10 relative">
               <span className="absolute -top-4 -left-6 rtl:-right-6 rtl:-left-auto text-6xl text-gold/20 font-serif leading-none">“</span>
               {post.excerpt}
            </div>
            
            {/* Body Content */}
            <div className="prose prose-lg prose-p:text-ink/70 prose-p:leading-relaxed prose-headings:font-display prose-headings:text-ink prose-a:text-gold hover:prose-a:text-gold/80 max-w-none">
               {post.content.map((paragraph, idx) => {
                 if (typeof paragraph === "string") {
                   return <p key={idx}>{paragraph}</p>;
                 }
                 // Handle simple portable text structure if present
                 return (
                   <p key={idx}>
                     {paragraph.children?.map(child => child.text).join('')}
                   </p>
                 );
               })}
               
               {/* Simulating longer content for visual richness as requested in blueprint */}
               <h3 className="text-2xl font-display text-ink mt-12 mb-6">
                 {locale === 'ar' ? 'التحدي الهندسي' : 'The Engineering Challenge'}
               </h3>
               <p>
                 {locale === 'ar' 
                   ? 'في مشهد البناء المتسارع اليوم، اختفى هامش الخطأ. تذبذب سلسلة التوريد ونقص العمالة الماهرة والمطالب المعمارية المعقدة بشكل متزايد تعني أن منهجيات البناء المتسلسلة التقليدية لم تعد صالحة.'
                   : 'In today’s hyper-accelerated construction landscape, the margin for error has vanished. Supply chain volatility, skilled labor shortages, and increasingly complex architectural demands mean that traditional sequential construction methodologies are no longer viable.'}
               </p>
               
               <blockquote className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-gold bg-surface/50 p-6 my-10 italic text-ink/80 rounded-r-xl rtl:rounded-r-none rtl:rounded-l-xl">
                 {locale === 'ar'
                   ? '"الابتكار في البناء لا يتعلق فقط بالمواد الجديدة؛ بل يتعلق بإعادة تحديد تسلسل التجميع وشفافية البيانات التي نشاركها مع شركائنا."'
                   : '"Innovation in construction isnt just about new materials; it is about redefining the sequence of assembly and the transparency of the data we share with our partners."'}
               </blockquote>
            </div>
            
            {/* Share / Tags Footer */}
            <div className="mt-16 pt-8 border-t border-ink/10 flex flex-wrap items-center justify-between gap-6">
               <div className="flex gap-2">
                 {tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-surface text-ink/60 text-xs uppercase tracking-[0.1em] rtl:tracking-normal rounded-full border border-ink/5">
                     {tag}
                   </span>
                 ))}
               </div>
               
               <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/40">
                  <span>{t("share")}</span>
                  <div className="flex gap-2">
                     <button className="w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">in</button>
                     <button className="w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">tw</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      {/* Return Link */}
      <section className="bg-surface py-12 border-t border-ink/5 text-center">
         <div className="container-shell">
            <Link href="/blog" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] rtl:tracking-normal text-ink/60 hover:text-gold transition-colors">
               <span className="rtl:rotate-180">←</span>
               <span>{t("back_to_all")}</span>
            </Link>
         </div>
      </section>
    </article>
  );
}
