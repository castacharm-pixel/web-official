"use client";

import { useActiveSection, useIsHome, useSectionHref } from "./useActiveSection";

type NavLink = { href: string; label: string };

export function DesktopNav({ links }: { links: NavLink[] }) {
  const active = useActiveSection(links.map((link) => link.href.slice(1)));
  const onHome = useIsHome();
  const toHref = useSectionHref();

  return (
    <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 rounded-full shadow-inner">
      {links.map((link) => {
        const current = onHome && link.href === `#${active}`;
        return (
          <a
            key={link.href}
            href={toHref(link.href)}
            aria-current={current ? "location" : undefined}
            className={
              current
                ? "px-4 py-1.5 rounded-full text-sm font-semibold text-brand-purple dark:text-purple-300 bg-white dark:bg-slate-700 shadow-sm transition-all"
                : "px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800 transition-all"
            }
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
