"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { locales } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();

  function handleChange(value: string) {
    document.cookie = `NEXT_LOCALE=${value};path=/;max-age=31536000;samesite=lax`;
    router.refresh();
  }

  return (
    <select
      aria-label={t("language")}
      value={locale}
      onChange={(event) => handleChange(event.target.value)}
      className="inline-flex h-9 cursor-pointer appearance-none rounded-full border border-border bg-background px-3 font-mono text-xs font-medium text-muted-foreground transition-colors outline-none hover:border-foreground/30 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
    >
      {locales.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
