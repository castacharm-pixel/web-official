import { useTranslations } from "next-intl";

export function LeadCapture() {
  const t = useTranslations("lead");
  const benefits = t.raw("benefits") as string[];

  return (
    <section
      id="lead-form"
      className="w-full px-6 sm:px-8 py-24 relative bg-gradient-to-b from-[#FAFAFE] via-purple-50/30 to-white dark:from-slate-950 dark:via-purple-500/5 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-purple-100/80 dark:border-purple-500/20 shadow-2xl p-8 sm:p-12 lg:p-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Pitch + benefits */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 self-start text-xs font-bold">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">rocket_launch</span>
                <span>{t("eyebrow")}</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white leading-tight">
                {t("title")}
              </h2>
            </div>

            <div className="p-6 rounded-3xl bg-purple-50/50 dark:bg-purple-500/5 border border-purple-100/80 dark:border-purple-500/20 flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                {t("benefitsLabel")}
              </span>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-lg" aria-hidden="true">
                      verified
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick contact */}
          <div className="lg:col-span-7 bg-[#FAFAFE] dark:bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {t("formTitle")}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{t("formSubtitle")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full pt-1">
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener"
                className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#06C755] hover:bg-emerald-50/40 dark:hover:bg-emerald-500/5 hover:scale-[1.02] shadow-sm transition-all group text-center w-full"
              >
                <div className="w-11 h-11 rounded-xl bg-[#06C755]/10 text-[#06C755] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">chat</span>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                  {t("line.label")}
                </span>
                <span className="font-heading text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#06C755] transition-colors">
                  {t("line.value")}
                </span>
              </a>
              <a
                href="mailto:cast.a.charm@gmail.com"
                className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-pink-300 hover:bg-pink-50/40 dark:hover:bg-pink-500/5 hover:scale-[1.02] shadow-sm transition-all group text-center w-full"
              >
                <div className="w-11 h-11 rounded-xl bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">mail</span>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                  {t("email.label")}
                </span>
                <span className="font-heading text-sm font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  {t("email.value")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
