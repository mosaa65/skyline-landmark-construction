"use client";

import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";

const navItems = [
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "industries", href: "/industries" },
  { key: "projects", href: "/projects" },
  { key: "innovation", href: "/innovation" },
  { key: "careers", href: "/careers" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
  { key: "portal", href: "/client/dashboard" }, // Using portal translation
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Navigation");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-lg transition ${
        scrolled ? "bg-black/70 shadow-[0_20px_40px_rgba(0,0,0,0.35)]" : "bg-black/30"
      }`}
    >
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="font-display text-xl tracking-wide text-sand">
          Construction Co.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 rtl:gap-8 text-[11px] uppercase tracking-[0.22em] text-sand/80 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition hover:text-gold"
            >
              {
                // Fallback to title case of key if translation is missing in JSON
                t.has(item.key as any) ? t(item.key as any) : item.key
              }
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center gap-4"
          aria-label="Toggle menu"
        >
          <LanguageSwitcher />
          <div onClick={() => setOpen((prev) => !prev)}>
            <span className="block h-[2px] w-6 bg-sand"></span>
            <span className="mt-2 block h-[2px] w-6 bg-sand"></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {open ? (
        <div className="md:hidden">
          <div className="container-shell flex flex-col gap-6 py-6 text-sm uppercase tracking-[0.2em] rtl:tracking-normal text-sand/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {t.has(item.key as any) ? t(item.key as any) : item.key}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
