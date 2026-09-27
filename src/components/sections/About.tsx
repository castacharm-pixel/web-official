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

        </div>

        {/* Performance matrix panel */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-5 sm:p-7 lg:p-9 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-2.5 h-2.5 shrink-0 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 shrink-0 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 shrink-0 rounded-full bg-emerald-400" />
                <span className="hidden sm:block truncate text-xs font-semibold text-slate-500 dark:text-slate-400 pl-2">
                  {t("panel.windowLabel")}
                </span>
              </div>
              <span className="shrink-0 whitespace-nowrap text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-500/20">
                {t("panel.badge")}
              </span>
            </div>

            <div className="w-full bg-[#FAFAFE] dark:bg-slate-950 rounded-2xl p-4 sm:p-6 border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {t("panel.metricLabel")}
                </span>
                <span className="font-heading text-2xl font-extrabold bg-[linear-gradient(90deg,#7C3AED,#EC4899)] bg-clip-text text-transparent">
                  {t("panel.metricValue")}
                </span>
              </div>

              <svg
                className="w-full h-auto"
                viewBox="0 0 500 260"
                fill="none"
                role="img"
                aria-label="Marketing illustration"
              >
                <defs>
                  <linearGradient id="mkBrand" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="60%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                  <linearGradient id="mkSoft" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.06" />
                  </linearGradient>
                  <linearGradient id="mkHorn" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6D28D9" />
                    <stop offset="100%" stopColor="#DB2777" />
                  </linearGradient>
                </defs>

                {/* Backdrop blobs */}
                <circle cx="250" cy="135" r="118" fill="url(#mkSoft)" />
                <circle cx="95" cy="70" r="46" fill="#EC4899" fillOpacity="0.08" />
                <circle cx="440" cy="60" r="40" fill="#F59E0B" fillOpacity="0.1" />

                {/* Growth bars behind */}
                <g opacity="0.9">
                  <rect x="330" y="165" width="22" height="55" rx="6" fill="#7C3AED" fillOpacity="0.25" />
                  <rect x="362" y="135" width="22" height="85" rx="6" fill="#7C3AED" fillOpacity="0.4" />
                  <rect x="394" y="105" width="22" height="115" rx="6" fill="#EC4899" fillOpacity="0.55" />
                  <rect x="426" y="75" width="22" height="145" rx="6" fill="url(#mkBrand)" />
                  <path d="M326 150 L373 118 L405 90 L446 56" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M434 54 L448 54 L448 68" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Megaphone */}
                <g transform="translate(-50 0) rotate(-14 200 150)">
                  <rect x="112" y="128" width="38" height="46" rx="10" fill="#4C1D95" />
                  <path d="M150 128 L250 88 Q262 84 262 96 L262 206 Q262 218 250 214 L150 174 Z" fill="url(#mkHorn)" />
                  <ellipse cx="262" cy="151" rx="12" ry="60" fill="#F472B6" />
                  <ellipse cx="262" cy="151" rx="6" ry="44" fill="#FBCFE8" fillOpacity="0.7" />
                  <path d="M138 174 L150 214 Q153 222 162 219 L172 215 Q179 212 176 204 L166 178" fill="#5B21B6" />
                  <path d="M170 132 L240 104" stroke="#fff" strokeOpacity="0.35" strokeWidth="5" strokeLinecap="round" />
                </g>

                {/* Sound waves */}
                <g stroke="url(#mkBrand)" strokeWidth="4" strokeLinecap="round" fill="none">
                  <path d="M244 96 Q260 124 250 154" opacity="0.9" />
                  <path d="M264 78 Q290 120 274 166" opacity="0.6" />
                </g>

                {/* Floating social cards */}
                <g>
                  <rect x="40" y="36" width="96" height="40" rx="14" className="fill-white dark:fill-slate-800" stroke="#EDE9FE" />
                  <path d="M62 52 a6 6 0 0 1 10 -4 a6 6 0 0 1 10 4 q0 7 -10 13 q-10 -6 -10 -13z" fill="#EC4899" />
                  <rect x="90" y="48" width="34" height="6" rx="3" fill="#7C3AED" fillOpacity="0.35" />
                  <rect x="90" y="59" width="22" height="6" rx="3" fill="#7C3AED" fillOpacity="0.2" />
                </g>
                <g>
                  <rect x="24" y="210" width="104" height="42" rx="14" className="fill-white dark:fill-slate-800" stroke="#FCE7F3" />
                  <circle cx="48" cy="231" r="11" fill="#7C3AED" />
                  <path d="M43 232 l3 3 l7 -7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="66" y="223" width="48" height="6" rx="3" fill="#EC4899" fillOpacity="0.35" />
                  <rect x="66" y="235" width="30" height="6" rx="3" fill="#EC4899" fillOpacity="0.2" />
                </g>

                {/* Target */}
                <g transform="translate(284 206)">
                  <circle r="30" className="fill-white dark:fill-slate-800" stroke="#EC4899" strokeWidth="3" />
                  <circle r="19" fill="none" stroke="#7C3AED" strokeWidth="3" />
                  <circle r="8" fill="#F59E0B" />
                  <path d="M4 -4 L30 -30" stroke="#4C1D95" strokeWidth="3" strokeLinecap="round" />
                  <path d="M26 -34 L34 -34 L34 -26" stroke="#4C1D95" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Sparkles */}
                <g fill="#F59E0B">
                  <path d="M210 30 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4z" />
                  <path d="M470 30 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3z" fill="#EC4899" />
                  <path d="M170 236 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3z" fill="#7C3AED" />
                </g>
              </svg>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-2 text-center">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-0 bg-white dark:bg-slate-900 p-1.5 sm:p-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm"
                  >
                    <span className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 block font-medium truncate">
                      {stat.label}
                    </span>
                    <span className={`font-heading font-bold text-xs sm:text-base truncate block ${stat.color}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
