"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const t = useTranslations("LoginForm");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/client",
    });

    if (result?.error) {
      setError(t("error_invalid"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-ink/10 bg-white p-8 shadow-card">
      <div className="space-y-6">
        <div>
          <label className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-ink/60">{t("email")}</label>
          <input
            className="mt-2 input-field"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t("placeholder_email")}
            required
            dir="ltr"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.3em] rtl:tracking-normal text-ink/60">{t("password")}</label>
          <input
            className="mt-2 input-field"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            required
            dir="ltr"
          />
        </div>
      </div>

      {error ? <p className="mt-4 text-sm text-red-500">{error}</p> : null}

      <div className="mt-6">
        <Button type="submit">{t("btn_signin")}</Button>
      </div>
    </form>
  );
}
