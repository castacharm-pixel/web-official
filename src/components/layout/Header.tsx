import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header() {
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");

  const navLinks = [
    { href: "#home", label: t("home"), current: true },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#lead-form", label: t("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 sm:px-8 flex items-center justify-between gap-3 sm:gap-6">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded-2xl overflow-hidden shadow-sm border border-purple-100/80 dark:border-purple-500/20 bg-white flex items-center justify-center p-1.5 group-hover:scale-105 group-hover:shadow-glow-sm transition-all duration-300">
            <Image
              src="/logo-mark.png"
              alt="Cast a Charm"
              width={44}
              height={44}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-brand-purple dark:group-hover:text-purple-400 transition-colors truncate">
              {tHeader("name")}
            </span>
            <span className="hidden sm:block text-[10px] uppercase font-bold tracking-widest bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent -mt-1 whitespace-nowrap">
              {tHeader("tagline")}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.current ? "page" : undefined}
              className={
                link.current
                  ? "px-4 py-1.5 rounded-full text-sm font-semibold text-brand-purple dark:text-purple-300 bg-white dark:bg-slate-700 shadow-sm transition-all"
                  : "px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800 transition-all"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav
            links={navLinks}
            openLabel={t("openMenu")}
            closeLabel={t("closeMenu")}
          />
        </div>
      </div>
    </header>
  );
}
