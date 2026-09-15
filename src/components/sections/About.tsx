import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  const stats = [
    { label: t("panel.stat1Label"), value: t("panel.stat1Value"), color: "text-slate-800 dark:text-slate-100" },
    { label: t("panel.stat2Label"), value: t("panel.stat2Value"), color: "text-purple-600 dark:text-purple-400" },
    { label: t("panel.stat3Label"), value: t("panel.stat3Value"), color: "text-pink-600 dark:text-pink-400" },
  ];

  return (
    <section className="w-full px-6 sm:px-8 py-24 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Story column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 self-start text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm" aria-hidden="true">auto_awesome</span>
            <span>{t("eyebrow")}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white leading-tight">
            {t("title")}
            <br />
            <span className="bg-[linear-gradient(90deg,#4F46E5,#7C3AED,#EC4899,#F59E0B)] bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.rich("body", {
              strong: (chunks) => (
                <strong className="text-slate-900 dark:text-white font-medium">{chunks}</strong>
              ),
            })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-subtle flex flex-col gap-2 hover:border-purple-200 dark:hover:border-purple-500/40 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">hub</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {t("feature1.title")}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">
                {t("feature1.body")}
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-subtle flex flex-col gap-2 hover:border-pink-200 dark:hover:border-pink-500/40 transition-all">
              <div className="w-11 h-11 rounded-2xl bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">query_stats</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {t("feature2.title")}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">
                {t("feature2.body")}
              </p>
            </div>
          </div>
        </div>

        {/* Performance matrix panel */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-7 sm:p-9 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-2">
                  {t("panel.windowLabel")}
                </span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-500/20">
                {t("panel.badge")}
              </span>
            </div>

            <div className="w-full bg-[#FAFAFE] dark:bg-slate-950 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {t("panel.metricLabel")}
                </span>
                <span className="font-heading text-2xl font-extrabold bg-[linear-gradient(90deg,#7C3AED,#EC4899)] bg-clip-text text-transparent">
                  {t("panel.metricValue")}
                </span>
              </div>

              <svg className="w-full h-36" fill="none" preserveAspectRatio="none" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="chartGradLight" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,130 C70,120 120,95 180,90 C240,85 280,45 350,35 C420,25 460,10 500,5 L500,150 L0,150 Z"
                  fill="url(#chartGradLight)"
                />
                <path
                  d="M0,130 C70,120 120,95 180,90 C240,85 280,45 350,35 C420,25 460,10 500,5"
                  stroke="#7C3AED"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
                <circle cx="180" cy="90" fill="#7C3AED" r="5" />
                <circle cx="350" cy="35" fill="#EC4899" r="5" />
                <circle cx="500" cy="5" fill="#F97316" r="6" />
              </svg>

              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm"
                  >
                    <span className="text-xs text-slate-400 dark:text-slate-500 block font-medium">
                      {stat.label}
                    </span>
                    <span className={`font-heading font-bold text-base ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50/50 to-amber-50/40 dark:from-purple-500/10 dark:via-pink-500/5 dark:to-amber-500/5 border border-purple-100 dark:border-purple-500/20">
              <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-3xl" aria-hidden="true">
                verified_user
              </span>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {t("panel.footerTitle")}
                </span>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {t("panel.footerBody")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
