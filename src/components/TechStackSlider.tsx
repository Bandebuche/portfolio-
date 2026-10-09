"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_ITEMS = [
  "Next.js",
  "React",
  "AI Agents & APIs",
  "Interactive Dashboards",
  "SaaS",
  "Shopify / WordPress",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
];

export function TechStackSlider() {
  const renderPill = (name: string, key: string) => {
    return (
      <div
        key={key}
        className="group relative inline-flex items-center gap-2 rounded-full border border-zinc-200/90 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/40 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 dark:hover:border-blue-500/50 hover:text-zinc-950 dark:hover:text-white hover:scale-105 active:scale-95 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)] cursor-pointer"
      >
        {/* Glowing cyan/emerald status dot */}
        <span className="relative flex h-2 w-2 flex-shrink-0 items-center justify-center">
          <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
        </span>
        <span className="text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 tracking-wide whitespace-nowrap">
          {name}
        </span>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative w-full py-4 sm:py-6 overflow-hidden"
      aria-label="Tech Stack and Frameworks"
    >
      {/* Subtle left gradient fade mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-20 sm:w-36 md:w-56 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent dark:from-[#09090b] dark:via-[#09090b]/80 dark:to-transparent"
      />

      {/* Subtle right gradient fade mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-20 sm:w-36 md:w-56 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent dark:from-[#09090b] dark:via-[#09090b]/80 dark:to-transparent"
      />

      {/* Marquee Track Container with Pause on Hover */}
      <div className="pause-hover flex w-full overflow-hidden select-none">
        {/* Track 1 */}
        <div className="flex w-max shrink-0 animate-marquee items-center gap-3 sm:gap-4 pr-3 sm:pr-4 will-change-transform translate-z-0">
          {TECH_ITEMS.map((item, index) => renderPill(item, `t1-${index}`))}
        </div>

        {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
        <div
          aria-hidden="true"
          className="flex w-max shrink-0 animate-marquee items-center gap-3 sm:gap-4 pr-3 sm:pr-4 will-change-transform translate-z-0"
        >
          {TECH_ITEMS.map((item, index) => renderPill(item, `t2-${index}`))}
        </div>
      </div>
    </motion.section>
  );
}
