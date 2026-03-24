"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
        locale === "ar" ? "font-sans uppercase tracking-wider" : "font-display"
      } border border-gold/50 hover:bg-gold/20 text-sand disabled:opacity-50`}
      aria-label="Toggle language"
    >
      {locale === "en" ? "العربية" : "En"}
    </button>
  );
}
