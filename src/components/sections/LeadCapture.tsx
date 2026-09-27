import Image from "next/image";
import { useTranslations } from "next-intl";

export function LeadCapture() {
  const t = useTranslations("lead");
  const tHeader = useTranslations("header");
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

            <div className="p-6 rounded-3xl bg-purple-50/50 dark:bg-purple-500/5 border border-purple-100/80 dark:border-purple-500/20 ">
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

          {/* Business card */}
          <div className="lg:col-span-7 relative flex items-center py-4 sm:py-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-4 inset-y-6 sm:inset-x-8 sm:inset-y-10 rounded-3xl bg-[linear-gradient(135deg,#7C3AED,#EC4899,#F59E0B)] rotate-3 opacity-90 shadow-xl"
            />

            <div className="relative w-full sm:aspect-[7/4] -rotate-1 hover:rotate-0 transition-transform duration-500 motion-reduce:transition-none rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-purple-900/10 dark:shadow-black/40 overflow-hidden flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,#7C3AED,#EC4899,#F59E0B)]" />
              <div aria-hidden="true" className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.16),transparent_70%)]" />
              <div aria-hidden="true" className="absolute -bottom-24 right-16 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_70%)]" />

              <div className="relative flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-2xl overflow-hidden border border-purple-100/80 dark:border-purple-500/20 bg-white flex items-center justify-center p-1.5">
                  <Image src="/logo-mark.png" alt="" width={44} height={44} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900 dark:text-white truncate">
                    {tHeader("name")}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent -mt-0.5 whitespace-nowrap">
                    {tHeader("tagline")}
                  </span>
                </div>
              </div>

              <div className="relative flex flex-col gap-2">
                <h3 className="font-heading text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold text-slate-950 dark:text-white leading-snug">
                  {t("formTitle")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">{t("formSubtitle")}</p>
              </div>

              <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-6 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <a href="https://line.me" target="_blank" rel="noopener" className="group flex items-center gap-3 min-w-0">
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-[#06C755]/10 text-[#06C755] flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">{t("line.label")}</span>
                    <span className="font-heading text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#06C755] transition-colors">
                      {t("line.value")}
                    </span>
                  </span>
                </a>
                <a href="mailto:cast.a.charm@gmail.com" className="group flex items-center gap-3 min-w-0">
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">mail</span>
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">{t("email.label")}</span>
                    <span className="font-heading text-sm font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors break-all">
                      {t("email.value")}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
