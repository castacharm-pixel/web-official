import Image from "next/image";
import { useTranslations } from "next-intl";

const SOCIALS = [
  { href: "https://line.me", icon: "chat", label: "LINE Official", handle: "@castacharm", bg: "bg-[#06C755]/10", text: "text-[#06C755]", hoverBorder: "hover:border-emerald-300", hoverBg: "hover:bg-emerald-50/40 dark:hover:bg-emerald-500/5", hoverText: "group-hover:text-[#06C755]" },
  { href: "https://facebook.com", icon: "share", label: "Facebook", handle: "Cast a Charm", bg: "bg-purple-50 dark:bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", hoverBorder: "hover:border-purple-300", hoverBg: "hover:bg-purple-50 dark:hover:bg-purple-500/10", hoverText: "group-hover:text-purple-600 dark:group-hover:text-purple-400" },
  { href: "https://instagram.com", icon: "photo_camera", label: "Instagram", handle: "@castacharm", bg: "bg-pink-100 dark:bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", hoverBorder: "hover:border-pink-300", hoverBg: "hover:bg-pink-50 dark:hover:bg-pink-500/10", hoverText: "group-hover:text-pink-600 dark:group-hover:text-pink-400" },
  { href: "https://tiktok.com", icon: "music_note", label: "TikTok", handle: "@castacharm", bg: "bg-slate-100 dark:bg-slate-800", text: "text-slate-800 dark:text-slate-200", hoverBorder: "hover:border-slate-400", hoverBg: "hover:bg-slate-50 dark:hover:bg-slate-800", hoverText: "group-hover:text-slate-950 dark:group-hover:text-white" },
  { href: "https://youtube.com", icon: "play_circle", label: "YouTube", handle: "Cast a Charm", bg: "bg-red-50 dark:bg-red-500/10", text: "text-red-500 dark:text-red-400", hoverBorder: "hover:border-red-300", hoverBg: "hover:bg-red-50/40 dark:hover:bg-red-500/5", hoverText: "group-hover:text-red-600 dark:group-hover:text-red-400" },
  { href: "https://linkedin.com", icon: "work", label: "LinkedIn / X", handle: "Agency Page", bg: "bg-indigo-50 dark:bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400", hoverBorder: "hover:border-indigo-300", hoverBg: "hover:bg-indigo-50/40 dark:hover:bg-indigo-500/5", hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400" },
];

export function Footer() {
  const t = useTranslations("footer");
  const tHeader = useTranslations("header");

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden border border-purple-100 dark:border-purple-500/20 shadow-sm flex items-center justify-center p-1 bg-white">
                <Image
                  src="/logo-mark.png"
                  alt="Cast a Charm"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                  {tHeader("name")}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent -mt-1">
                  {tHeader("tagline")} Agency
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {t("description")}
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                {t("socialLabel")}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAFAFE] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 ${social.hoverBorder} ${social.hoverBg} hover:scale-[1.02] transition-all group text-center`}
                >
                  <div className={`w-8 h-8 rounded-xl ${social.bg} ${social.text} flex items-center justify-center mb-1.5`}>
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      {social.icon}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    {social.label}
                  </span>
                  <span className={`text-xs font-bold text-slate-800 dark:text-slate-200 ${social.hoverText} transition-colors`}>
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>{t("copyright")}</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {t("privacy")}
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {t("terms")}
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {t("cookie")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
