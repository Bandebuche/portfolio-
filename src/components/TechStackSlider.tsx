"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_ITEMS = [
  "Next.js 14 App Router",
  "React 18 & Server Components",
  "Autonomous AI Agents",
  "OpenAI & Claude LLM APIs",
  "FastAPI & Python",
  "TypeScript",
  "Tailwind CSS",
  "Real-Time WebSockets",
  "PostgreSQL & Supabase",
  "Stripe Billing & Subscriptions",
  "Vercel Edge & Cloudflare Workers",
  "Headless Shopify & Liquid",
];

export function TechStackSlider() {
  const renderPill = (name: string, key: string) => {
    return (
      <div
        key={key}
        className="group relative inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-surface-subtle px-3.5 py-1.5 backdrop-blur-md transition-all duration-200 hover:border-indigo-500/40 hover:bg-surface-elevated hover:text-white cursor-pointer"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-300 shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
        <span className="text-xs font-mono tracking-wide text-zinc-300 group-hover:text-white transition-colors whitespace-nowrap">
          {name}
        </span>
      </div>
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative w-full py-5 overflow-hidden bg-[#08090D] border-y border-white/[0.07]"
      aria-label="Core Engineering Stack"
    >
      {/* Left gradient fade mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-20 sm:w-36 bg-gradient-to-r from-[#08090D] via-[#08090D]/80 to-transparent"
      />

      {/* Right gradient fade mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-20 sm:w-36 bg-gradient-to-l from-[#08090D] via-[#08090D]/80 to-transparent"
      />

      {/* Marquee Track */}
      <div className="pause-hover flex w-full overflow-hidden select-none">
        {/* Track 1 */}
        <div className="flex w-max shrink-0 animate-marquee items-center gap-3 sm:gap-3.5 pr-3 sm:pr-3.5 will-change-transform">
          {TECH_ITEMS.map((item, idx) => renderPill(item, `tech-1-${idx}`))}
        </div>

        {/* Track 2 */}
        <div
          aria-hidden="true"
          className="flex w-max shrink-0 animate-marquee items-center gap-3 sm:gap-3.5 pr-3 sm:pr-3.5 will-change-transform"
        >
          {TECH_ITEMS.map((item, idx) => renderPill(item, `tech-2-${idx}`))}
        </div>
      </div>
    </motion.section>
  );
}
