import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "../globals.css"; // path updated because it's inside [locale]
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TransitionProvider from "@/components/shared/TransitionProvider";
import ScrollAnimator from "@/components/shared/ScrollAnimator";
import AIAssistant from "@/components/shared/AIAssistant";
import Providers from "@/components/shared/Providers";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            <ScrollAnimator />
            <main>
              <TransitionProvider>{children}</TransitionProvider>
            </main>
            <AIAssistant />
            <Footer />
            <ScrollToTop />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
