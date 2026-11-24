"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/portfolio";
import { ArrowUpRight, Globe, Lock } from "lucide-react";

interface BentoCardProps {
  project: Project;
  index: number;
}

export function BentoCard({ project, index }: BentoCardProps) {
  const [thumbError, setThumbError] = useState(false);

  const getCleanDomain = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname + (parsed.pathname !== "/" ? parsed.pathname : "");
    } catch {
      return url.replace(/^https?:\/\//, "");
    }
  };

  const domain = getCleanDomain(project.url);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.2) }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-surface-card p-5 hover:border-indigo-500/40 hover:bg-surface-cardHover transition-all duration-200 shadow-tech-card hover:shadow-tech-hover"
    >
      <div>
        {/* Top Header: Favicon/Icon + Domain + External Link */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Thumbnail / Favicon Box */}
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/50 p-0.5">
              {project.customThumb && !thumbError ? (
                <div className="relative h-full w-full overflow-hidden rounded-[6px]">
                  <Image
                    src={project.customThumb}
                    alt={project.title}
                    fill
                    sizes="36px"
                    className="object-cover"
                    onError={() => setThumbError(true)}
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-zinc-900 text-zinc-400 group-hover:text-indigo-400 transition-colors">
                  <Globe className="h-4 w-4" />
                </div>
              )}
            </div>

            {/* Domain & Category */}
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-mono text-zinc-400 truncate group-hover:text-zinc-200 transition-colors">
                {domain}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">
                {project.category}
              </span>
            </div>
          </div>

          {/* External Link Button */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white hover:text-black transition-all"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Project Title */}
        <h3 className="text-base font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors mb-1.5 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>
      </div>

      {/* Footer: Tags & Status */}
      <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/[0.06]">
        <div className="flex flex-wrap items-center gap-1 overflow-hidden h-6">
          {project.tags.slice(0, 2).map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="rounded border border-white/[0.05] bg-black/40 px-2 py-0.5 text-[10px] font-mono text-zinc-400 truncate max-w-[120px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-emerald-400 shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live</span>
        </span>
      </div>
    </motion.article>
  );
}
