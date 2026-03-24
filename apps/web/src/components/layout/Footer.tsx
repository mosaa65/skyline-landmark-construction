"use client";

import { Link } from "@/i18n/routing";
import { Button, Input } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function Footer() {
  const tNav = useTranslations("Navigation");
  const tFoot = useTranslations("Footer");

  const columns = [
    {
      title: tFoot("title_company"),
      items: [
        { label: tNav("about"), href: "/about" },
        { label: tNav("services"), href: "/services" },
        { label: tNav("industries"), href: "/industries" },
        { label: tNav("projects"), href: "/projects" },
        { label: tNav("careers"), href: "/careers" },
      ],
    },
    {
      title: tFoot("title_expertise"),
      items: [
        { label: tFoot("commercial"), href: "/services" },
        { label: tFoot("residential"), href: "/services" },
        { label: tFoot("industrial"), href: "/services" },
        { label: tNav("innovation"), href: "/innovation" },
        { label: tFoot("sustainability"), href: "/sustainability" },
      ],
    },
    {
      title: tFoot("title_connect"),
      items: [
        { label: tNav("contact"), href: "/contact" },
        { label: tFoot("quote"), href: "/quote" },
        { label: tNav("blog"), href: "/blog" },
        { label: tFoot("linkedin"), href: "#" },
        { label: tFoot("youtube"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="section-dark border-t border-white/10">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="space-y-4">
          <p className="font-display text-2xl text-sand">Construction Co.</p>
          <p className="text-sm text-sand/70">
            {tFoot("description")}
          </p>
          <div className="flex gap-3 text-xs uppercase tracking-[0.2em] text-sand/60 rtl:tracking-normal">
            <span>ISO 9001</span>
            <span>LEED</span>
            <span>ENR</span>
          </div>
          
          <div className="pt-6 mt-6 border-t border-white/10">
             <p className="text-sm font-semibold text-sand mb-3">{tFoot("subscribe_title")}</p>
             <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder={tFoot("subscribe_placeholder")}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-sand placeholder:text-sand/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                <Button type="submit" variant="primary" className="px-4 py-2 text-sm">{tFoot("subscribe_button")}</Button>
             </form>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] rtl:tracking-normal text-sand/70">{column.title}</p>
            <div className="flex flex-col gap-2 text-sm text-sand/80">
              {column.items.map((item) => (
                <Link key={item.label} href={item.href} className="transition hover:text-gold w-fit">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-shell flex flex-col items-center justify-between gap-4 text-xs text-sand/60 md:flex-row">
          <p>{tFoot("copyright")}</p>
          <div className="flex gap-4">
            <Link href="/privacy">{tFoot("privacy")}</Link>
            <Link href="/terms">{tFoot("terms")}</Link>
            <Link href="/accessibility">{tFoot("accessibility")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
