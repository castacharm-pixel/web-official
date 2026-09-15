export type ServiceColor = "purple" | "pink" | "amber" | "indigo";

const COLOR_STYLES: Record<
  ServiceColor,
  { iconBg: string; iconText: string; tagText: string; hoverBorder: string; hoverText: string }
> = {
  purple: {
    iconBg: "bg-purple-100/70 dark:bg-purple-500/10",
    iconText: "text-purple-600 dark:text-purple-400",
    tagText: "text-purple-600 dark:text-purple-400",
    hoverBorder: "hover:border-purple-300 dark:hover:border-purple-500/40",
    hoverText: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
  },
  pink: {
    iconBg: "bg-pink-100/70 dark:bg-pink-500/10",
    iconText: "text-pink-600 dark:text-pink-400",
    tagText: "text-pink-600 dark:text-pink-400",
    hoverBorder: "hover:border-pink-300 dark:hover:border-pink-500/40",
    hoverText: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
  },
  amber: {
    iconBg: "bg-amber-100/70 dark:bg-amber-500/10",
    iconText: "text-amber-600 dark:text-amber-400",
    tagText: "text-amber-600 dark:text-amber-400",
    hoverBorder: "hover:border-amber-300 dark:hover:border-amber-500/40",
    hoverText: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
  },
  indigo: {
    iconBg: "bg-indigo-100/70 dark:bg-indigo-500/10",
    iconText: "text-indigo-600 dark:text-indigo-400",
    tagText: "text-indigo-600 dark:text-indigo-400",
    hoverBorder: "hover:border-indigo-300 dark:hover:border-indigo-500/40",
    hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
  },
};

export function ServiceCard({
  icon,
  color,
  tag,
  title,
  body,
}: {
  icon: string;
  color: ServiceColor;
  tag: string;
  title: string;
  body: string;
}) {
  const styles = COLOR_STYLES[color];

  return (
    <div
      className={`p-8 rounded-3xl bg-[#FAFAFE] dark:bg-slate-900 border border-slate-100 dark:border-slate-800 ${styles.hoverBorder} hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 flex flex-col justify-between group`}
    >
      <div className="flex flex-col gap-4">
        <div className={`w-12 h-12 rounded-2xl ${styles.iconBg} ${styles.iconText} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <span className="material-symbols-outlined text-2xl" aria-hidden="true">
            {icon}
          </span>
        </div>
        <span className={`text-xs font-bold ${styles.tagText} tracking-wider`}>{tag}</span>
        <h3 className={`font-heading text-xl font-bold text-slate-900 dark:text-white ${styles.hoverText} transition-colors`}>
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
