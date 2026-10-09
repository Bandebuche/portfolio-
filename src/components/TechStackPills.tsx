"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechStackPillsProps {
  techs?: string[];
}

const DEFAULT_STACK = [
  "Next.js",
  "React",
  "AI Agents & APIs",
  "Interactive Dashboards",
  "SaaS",
  "Shopify/WordPress"
];

export function TechStackPills({ techs = DEFAULT_STACK }: TechStackPillsProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-1">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {techs.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 * index }}
            whileHover={{ scale: 1.04, y: -2 }}
            className="group relative inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/50 px-3.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-sm backdrop-blur-md transition-colors hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800/80 hover:text-zinc-950 dark:hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70 transition-all group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="tracking-tight">{tech}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
