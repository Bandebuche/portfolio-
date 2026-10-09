"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/portfolio";
import { ArrowUpRightIcon, Globe, Sparkles } from "lucide-react";

interface BentoCardProps {
  project: Project;
  index: number;
}

export function BentoCard({ project, index }: BentoCardProps) {
  const [thumbError, setThumbError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/80 hover:bg-white dark:hover:bg-zinc-900/60 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.7),0_0_20px_-5px_rgba(255,255,255,0.03)] ${
        project.featured ? "md:col-span-2 lg:col-span-1 xl:col-span-1" : "col-span-1"
      }`}
    >
      {/* Top Header Row: Thumbnail / Favicon + Category Tag + External Link Arrow */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Thumbnail preview or icon */}
            <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800/90 bg-zinc-100 dark:bg-zinc-950 p-1 shadow-inner transition-transform duration-300 group-hover:scale-105">
              {project.customThumb && !thumbError ? (
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.customThumb}
                    alt={project.title}
                    fill
                    sizes="44px"
                    className="object-cover"
                    onError={() => setThumbError(true)}
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 group-hover:text-emerald-500">
                  <Globe className="h-5 w-5" />
                </div>
              )}
            </div>

            {/* Category tag */}
            <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950/70 px-2.5 py-0.5 text-[11px] font-medium text-zinc-700 dark:text-zinc-400 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Animated External Link Arrow & Status */}
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                <Sparkles className="h-2.5 w-2.5" />
                <span>Featured</span>
              </span>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} website`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 transition-all duration-300 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 group-hover:shadow-md"
            >
              <div className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white transition-colors duration-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 mb-1.5">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </a>
        </h3>

        {/* 1-Line Tech Description */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed tracking-tight line-clamp-2 mb-4">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech tags + Status indicator */}
      <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-100 dark:bg-zinc-900/80 px-2 py-0.5 text-[10px] font-medium tracking-tight text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800/60"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Status Dot */}
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          <span className="font-medium text-[10px] text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">{project.status}</span>
        </div>
      </div>
    </motion.article>
  );
}
