"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type ServiceColor = "purple" | "pink" | "amber" | "indigo";

export type ServiceSlide = {
  tag: string;
  title: string;
  body: string;
  icon: string;
  color: ServiceColor;
  visual: ReactNode;
};

const COLOR_STYLES: Record<ServiceColor, { chip: string; text: string }> = {
  purple: {
    chip: "bg-purple-100/70 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400",
    text: "text-purple-600 dark:text-purple-400",
  },
  pink: {
    chip: "bg-pink-100/70 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400",
    text: "text-pink-600 dark:text-pink-400",
  },
  amber: {
    chip: "bg-amber-100/70 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
    text: "text-amber-600 dark:text-amber-400",
  },
  indigo: {
    chip: "bg-indigo-100/70 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    text: "text-indigo-600 dark:text-indigo-400",
  },
};

// Scroll distance (in viewport heights) spent on each service.
const STEP_SVH = 60;

const pad = (n: number) => String(n).padStart(2, "0");

export function ServicesScroller({ slides }: { slides: ServiceSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = slides.length;

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const track = trackRef.current;
      const sticky = stickyRef.current;
      if (!track || !sticky) return;

      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      const distance = track.offsetHeight - sticky.offsetHeight;
      const progress = distance > 0 ? (stickyTop - track.getBoundingClientRect().top) / distance : 0;
      setActive(Math.min(count - 1, Math.max(0, Math.floor(progress * count))));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [count]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return;

    const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
    const distance = track.offsetHeight - sticky.offsetHeight;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: trackTop - stickyTop + ((index + 0.5) / count) * distance,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div ref={trackRef} className="relative" style={{ height: `calc(100svh + ${count * STEP_SVH}svh)` }}>
      <div
        ref={stickyRef}
        className="sticky top-16 sm:top-20 h-[calc(100svh-4rem)] sm:h-[calc(100svh-5rem)] overflow-hidden"
      >
        <div className="h-full max-w-7xl mx-auto px-6 sm:px-8 py-6 lg:py-10 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 lg:items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex gap-6 lg:gap-8 shrink-0">
            <nav className="hidden lg:flex flex-col gap-2 py-1" aria-label="Services">
              {slides.map((slide, i) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={slide.title}
                  aria-current={i === active ? "step" : undefined}
                  className="group p-1 -m-1 cursor-pointer"
                >
                  <span
                    className={`block w-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                      i === active
                        ? "h-10 bg-[linear-gradient(180deg,#7C3AED,#EC4899)]"
                        : "h-4 bg-slate-200 dark:bg-slate-700 group-hover:bg-purple-300 dark:group-hover:bg-purple-500/60"
                    }`}
                  />
                </button>
              ))}
            </nav>

            <div className="flex-1 min-w-0 flex flex-col gap-4">
              <div className="flex lg:hidden gap-1" aria-hidden="true">
                {slides.map((slide, i) => (
                  <span
                    key={slide.title}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i <= active ? "bg-[linear-gradient(90deg,#7C3AED,#EC4899)]" : "bg-slate-200 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>

              <div className="grid">
                {slides.map((slide, i) => {
                  const styles = COLOR_STYLES[slide.color];
                  const isActive = i === active;
                  return (
                    <article
                      key={slide.title}
                      className={`col-start-1 row-start-1 flex flex-col gap-3 lg:gap-5 transition-all duration-500 motion-reduce:transition-none ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-heading text-4xl lg:text-6xl font-extrabold bg-[linear-gradient(90deg,#7C3AED,#EC4899,#F59E0B)] bg-clip-text text-transparent">
                          {pad(i + 1)}
                        </span>
                        <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">/ {pad(count)}</span>
                        <span className={`ml-auto lg:ml-2 w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center ${styles.chip}`}>
                          <span className="material-symbols-outlined text-xl lg:text-2xl" aria-hidden="true">
                            {slide.icon}
                          </span>
                        </span>
                      </div>
                      <span className={`text-xs font-bold tracking-wider ${styles.text}`}>{slide.tag}</span>
                      <h3 className="font-heading text-xl sm:text-2xl lg:text-4xl font-extrabold text-slate-950 dark:text-white leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {slide.body}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Visual column */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex-1 min-h-0 flex items-center">
            <div className="relative w-full h-full lg:h-auto lg:aspect-[6/5] lg:max-h-[calc(100svh-10rem)] rounded-[2rem] bg-gradient-to-br from-purple-50 via-pink-50/60 to-amber-50/60 dark:from-purple-500/10 dark:via-slate-900 dark:to-pink-500/10 border border-slate-100 dark:border-slate-800 overflow-hidden">
              {slides.map((slide, i) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 p-4 sm:p-8 transition-all duration-700 motion-reduce:transition-none ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  {slide.visual}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
