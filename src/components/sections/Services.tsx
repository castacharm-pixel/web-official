import { useTranslations } from "next-intl";
import { ServiceCard, type ServiceColor } from "@/components/ui/ServiceCard";

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

  return (
    <section className="w-full px-6 sm:px-8 py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800" id="services">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">magic_button</span>
              <span>{t("eyebrow")}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
              {t("title")}
            </h2>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-md">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <ServiceCard
              key={item.title}
              icon={SERVICE_META[i].icon}
              color={SERVICE_META[i].color}
              tag={item.tag}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
