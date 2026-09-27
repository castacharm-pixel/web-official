import { useTranslations } from "next-intl";
import { SERVICE_ILLUSTRATIONS } from "@/components/ui/ServiceIllustrations";
import { ServicesScroller, type ServiceColor } from "./ServicesScroller";

const SERVICE_META: { icon: string; color: ServiceColor }[] = [
  { icon: "psychology", color: "purple" },
  { icon: "movie", color: "pink" },
  { icon: "ads_click", color: "amber" },
  { icon: "travel_explore", color: "purple" },
  { icon: "support_agent", color: "pink" },
  { icon: "terminal", color: "indigo" },
  { icon: "diversity_3", color: "purple" },
  { icon: "inventory_2", color: "pink" },
  { icon: "celebration", color: "amber" },
];

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { tag: string; title: string; body: string }[];

  const slides = items.map((item, i) => {
    const Illustration = SERVICE_ILLUSTRATIONS[i];
    return { ...item, ...SERVICE_META[i], visual: <Illustration /> };
  });

  return (
    <section className="w-full bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-4 flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs uppercase tracking-widest font-bold">
          <span className="material-symbols-outlined text-sm" aria-hidden="true">magic_button</span>
          <span>{t("eyebrow")}</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white max-w-xl">
          {t("title")}
        </h2>
      </div>

      <ServicesScroller slides={slides} />
    </section>
  );
}
