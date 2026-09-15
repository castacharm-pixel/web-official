"use client";

import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
  current?: boolean;
};

export function MobileNav({
  links,
  openLabel,
  closeLabel,
}: {
  links: NavLink[];
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? closeLabel : openLabel}
        className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
      >
        <span className="material-symbols-outlined text-xl" aria-hidden="true">
          {open ? "close" : "menu"}
        </span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 sm:top-20 z-40 bg-slate-950/30 backdrop-blur-[2px] cursor-default"
          />
          <nav
            id="mobile-nav-panel"
            className="absolute top-full left-0 right-0 z-50 mx-3 mt-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/30 p-2 flex flex-col gap-1"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={link.current ? "page" : undefined}
                className={
                  link.current
                    ? "px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-purple dark:text-purple-300 bg-purple-50 dark:bg-purple-500/10 transition-all"
                    : "px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
