"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("ContactForm");

  const OFFICES = [
    {
      city: t("office_ny"),
      address: t("office_ny_addr"),
      phone: "+1 (212) 555-0189",
      email: "ny@constructionco.com",
    },
    {
      city: t("office_dubai"),
      address: t("office_dubai_addr"),
      phone: "+971 4 555 0198",
      email: "me@constructionco.com",
    },
    {
      city: t("office_london"),
      address: t("office_london_addr"),
      phone: "+44 20 7946 0102",
      email: "eu@constructionco.com",
    },
  ];

  const update = (k: string, v: string) => setFormData((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="rounded-[32px] border border-ink/5 bg-white p-10 shadow-card text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-4xl">
          ✓
        </div>
        <h3 className="text-2xl font-display text-ink mb-3">{t("success_sent")}</h3>
        <p className="text-ink/60 leading-relaxed mb-8">
          {t("success_msg")} <strong dir="ltr">{formData.email}</strong>.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          {t("success_btn")}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-ink/5 bg-white p-8 md:p-10 shadow-card"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/60 mb-2">
            {t("label_name")}
          </label>
          <input
            required
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
            className="input-field"
            placeholder={t("placeholder_name")}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/60 mb-2">
            {t("label_company")}
          </label>
          <input
            value={formData.company}
            onChange={(e) => update("company", e.target.value)}
            className="input-field"
            placeholder={t("placeholder_company")}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/60 mb-2">
            {t("label_email")}
          </label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            className="input-field"
            placeholder={t("placeholder_email")}
            dir="ltr"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/60 mb-2">
            {t("label_phone")}
          </label>
          <input
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input-field"
            placeholder={t("placeholder_phone")}
            dir="ltr"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/60 mb-2">
            {t("label_subject")}
          </label>
          <select
            value={formData.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="input-field"
          >
            <option value="">{t("subject_opt1")}</option>
            <option>{t("subject_opt2")}</option>
            <option>{t("subject_opt3")}</option>
            <option>{t("subject_opt4")}</option>
            <option>{t("subject_opt5")}</option>
            <option>{t("subject_opt6")}</option>
            <option>{t("subject_opt7")}</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-[0.2em] rtl:tracking-normal font-semibold text-ink/60 mb-2">
            {t("label_message")}
          </label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => update("message", e.target.value)}
            className="input-field resize-none"
            placeholder={t("placeholder_message")}
          />
        </div>
      </div>

      {/* Office selector */}
      <div className="mt-8 grid gap-3 rounded-2xl bg-surface p-4 sm:grid-cols-3">
        {OFFICES.map((office) => (
          <div key={office.city} className="rounded-xl bg-white p-4 border border-ink/5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] rtl:tracking-normal text-gold mb-2">{office.city}</p>
            <p className="text-xs text-ink/60 leading-relaxed">{office.address}</p>
            <p className="mt-1 text-xs text-ink/60" dir="ltr">{office.phone}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-xs text-ink/40">{t("footer_wait")}</p>
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? t("btn_sending") : t("btn_send")}
        </Button>
      </div>
    </form>
  );
}
