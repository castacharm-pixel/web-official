import { useTranslations } from "next-intl";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative isolate w-full px-6 sm:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center bg-gradient-to-b from-white via-[#FAFAFE] to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      <HeroBackground />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-purple-200/70 dark:border-purple-500/20 shadow-sm mb-8 backdrop-blur-md">
        <span className="flex h-2 w-2 relative">
          <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider bg-[linear-gradient(90deg,#4F46E5,#7C3AED,#EC4899,#D97706)] bg-clip-text text-transparent">
          {t("badge")}
        </span>
      </div>

      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white max-w-5xl tracking-tight leading-[1.15] text-balance">
        {t("headline")}{" "}
        <span className="bg-[linear-gradient(90deg,#4F46E5,#7C3AED,#EC4899,#F59E0B)] bg-clip-text text-transparent drop-shadow-sm">
          {t("headlineHighlight")}
        </span>
      </h1>

      <p className="font-body text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mt-6 leading-relaxed">
        {t.rich("subheadline", {
          strong: (chunks) => (
            <strong className="text-slate-900 dark:text-white font-semibold">{chunks}</strong>
          ),
        })}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full justify-center max-w-md sm:max-w-none">
        <a
          href="#lead-form"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[linear-gradient(90deg,#4F46E5,#7C3AED,#EC4899,#F97316)] text-white font-semibold text-base shadow-lg shadow-purple-500/25 hover:shadow-glow-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
        >
          <span className="material-symbols-outlined text-xl" aria-hidden="true">
            flash_on
          </span>
          <span>{t("cta")}</span>
        </a>
      </div>
    </section>
  );
}
