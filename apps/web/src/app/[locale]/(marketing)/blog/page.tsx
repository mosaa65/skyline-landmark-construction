import { Link } from '@/i18n/routing';
import { getBlogPosts } from "@/lib/content";
import { getTranslations } from "next-intl/server";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const posts = await getBlogPosts(locale);
  const t = await getTranslations("BlogPage");

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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-hover rounded-[28px] border border-ink/10 bg-white p-8" data-reveal>
              <p className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-ink/50">{post.category}</p>
              <h2 className="mt-4 text-2xl font-display text-ink">{post.title}</h2>
              <p className="mt-3 text-sm text-ink/70">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-ink/40">
                <span dir="ltr">{post.date ?? post.publishedAt}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
