"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1 bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 rounded-full shadow-inner text-xs font-semibold backdrop-blur-md">
      <span className="hidden sm:inline-flex material-symbols-outlined text-slate-400 dark:text-slate-500 text-base pl-1" aria-hidden="true">
        language
      </span>
      <button
        type="button"
        onClick={() => switchTo("th")}
        aria-label={t("switchToThai")}
        className={`px-2 sm:px-2.5 py-1 rounded-full transition-all ${
          locale === "th"
            ? "bg-white dark:bg-slate-700 text-brand-purple dark:text-purple-300 shadow-sm"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        TH
      </button>
      <span className="text-slate-300 dark:text-slate-600 text-[10px]">|</span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-label={t("switchToEnglish")}
        className={`px-2 sm:px-2.5 py-1 rounded-full transition-all ${
          locale === "en"
            ? "bg-white dark:bg-slate-700 text-brand-purple dark:text-purple-300 shadow-sm"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
