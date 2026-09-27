import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LEGAL_CONTENT, LEGAL_SLUGS, LEGAL_UPDATED, type LegalSlug } from "@/content/legal";

const TAB_KEYS: Record<LegalSlug, "privacy" | "terms" | "cookie"> = {
  privacy: "privacy",
  terms: "terms",
  cookies: "cookie",
};

export async function LegalPage({ slug, locale }: { slug: LegalSlug; locale: Locale }) {
  const t = await getTranslations("legal");
  const tFooter = await getTranslations("footer");
  const doc = LEGAL_CONTENT[locale][slug];

  return (
    <>
      <Header />
      <main className="w-full pt-16 sm:pt-20 flex-grow">
        <section className="relative isolate overflow-hidden border-b border-slate-100 dark:border-slate-800 bg-gradient-to-b from-purple-50/70 via-[#FAFAFE] to-[#FAFAFE] dark:from-purple-500/10 dark:via-slate-950 dark:to-slate-950">
          <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.14),transparent_70%)]" />
          <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-12 pb-10 sm:pt-16 sm:pb-12 flex flex-col gap-5">
            <Link
              href="/"
              className="self-start inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-purple dark:hover:text-purple-300 transition-colors"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
              {t("backHome")}
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 self-start text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">gavel</span>
              <span>{t("eyebrow")}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-950 dark:text-white leading-tight">
              {doc.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">{doc.summary}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t("lastUpdated")}: {LEGAL_UPDATED[locale]}
            </p>

            <nav aria-label={t("nav")} className="flex flex-wrap gap-2 pt-2">
              {LEGAL_SLUGS.map((s) => (
                <Link
                  key={s}
                  href={`/${s}`}
                  aria-current={s === slug ? "page" : undefined}
                  className={
                    s === slug
                      ? "px-4 py-2 rounded-full text-sm font-semibold text-white bg-[linear-gradient(90deg,#7C3AED,#EC4899)] shadow-sm"
                      : "px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-500/40 hover:text-slate-900 dark:hover:text-white transition-colors"
                  }
                >
                  {tFooter(TAB_KEYS[s])}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
          <aside className="hidden lg:block">
            <nav aria-label={t("contents")} className="sticky top-28 flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 pb-2">
                {t("contents")}
              </span>
              {doc.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-purple dark:hover:text-purple-300 py-1 transition-colors"
                >
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 flex flex-col gap-10 text-slate-600 dark:text-slate-300 leading-relaxed">
            <div className="flex flex-col gap-4 text-base sm:text-lg text-slate-700 dark:text-slate-200">
              {doc.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 flex flex-col gap-4">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                  {section.heading}
                </h2>
                {section.body?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.list && (
                  <ul className="flex flex-col gap-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[linear-gradient(135deg,#7C3AED,#EC4899)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full min-w-[520px] text-sm text-left">
                      <thead className="bg-purple-50/70 dark:bg-purple-500/10 text-slate-900 dark:text-white">
                        <tr>
                          {section.table.head.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                        {section.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, i) => (
                              <td
                                key={i}
                                className={`px-4 py-3 align-top ${i === 0 ? "font-mono text-xs text-purple-700 dark:text-purple-300" : ""}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.after?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function legalMetadata(slug: LegalSlug, locale: Locale) {
  const doc = LEGAL_CONTENT[locale][slug];
  return { title: `${doc.title} | Cast a Charm`, description: doc.summary };
}
