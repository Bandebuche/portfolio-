"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_ITEMS = [
  "Next.js 14",
  "React 18",
  "Autonomous AI Agents",
  "LLM API Integrations",
  "Real-Time Telemetry Dashboards",
  "SaaS Architecture",
  "FastAPI & Python",
  "TypeScript",
  "Tailwind CSS",
  "Supabase / PostgreSQL",
  "Headless E-Commerce",
];

export function TechStackSlider() {
  const renderPill = (name: string, key: string) => {
    return (
      <div
        key={key}
        className="group relative inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-aleph-gold/40 hover:bg-white/[0.05] hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* Glowing champagne / gold status dot */}
        <span className="relative flex h-1.5 w-1.5 flex-shrink-0 items-center justify-center">
          <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-aleph-champagne opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aleph-gold shadow-[0_0_8px_rgba(212,181,127,0.8)]" />
        </span>
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
          {name}
        </span>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full py-6 overflow-hidden bg-[#060709] border-y border-white/[0.05]"
      aria-label="Core Technology Foundations"
    >
      {/* Subtle left gradient fade mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-24 sm:w-44 bg-gradient-to-r from-[#060709] via-[#060709]/80 to-transparent"
      />

      {/* Subtle right gradient fade mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-24 sm:w-44 bg-gradient-to-l from-[#060709] via-[#060709]/80 to-transparent"
      />

      {/* Marquee Track Container with Pause on Hover */}
      <div className="pause-hover flex w-full overflow-hidden select-none">
        {/* Track 1 */}
        <div className="flex w-max shrink-0 animate-marquee items-center gap-3 sm:gap-4 pr-3 sm:pr-4 will-change-transform translate-z-0">
          {TECH_ITEMS.map((item, idx) => renderPill(item, `tech-1-${idx}`))}
        </div>

        {/* Track 2 (Seamless loop duplicate) */}
        <div
          aria-hidden="true"
          className="flex w-max shrink-0 animate-marquee items-center gap-3 sm:gap-4 pr-3 sm:pr-4 will-change-transform translate-z-0"
        >
          {TECH_ITEMS.map((item, idx) => renderPill(item, `tech-2-${idx}`))}
        </div>
      </div>
    </motion.section>
  );
}
