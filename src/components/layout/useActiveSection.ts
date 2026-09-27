"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";

// Returns the id of the section currently under the upper part of the viewport.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(",");

  useEffect(() => {
    const list = key.split(",");
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // The last section may be too short to reach the line; treat the page bottom as reaching it.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = list[list.length - 1];
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [key]);

  return active;
}

// Section links are plain "#id" anchors; off the home page they must lead back to it.
export function useSectionHref() {
  const onHome = usePathname() === "/";
  const locale = useLocale();
  return (hash: string) => (onHome ? hash : `/${locale}${hash}`);
}

export function useIsHome() {
  return usePathname() === "/";
}
