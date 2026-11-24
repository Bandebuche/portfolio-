"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/portfolio";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";

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
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.25) }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0e12] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-aleph-gold/30 hover:bg-[#11131a] shadow-aleph-card hover:shadow-aleph-hover ${
        project.featured ? "md:col-span-2 lg:col-span-1 xl:col-span-1" : "col-span-1"
      }`}
    >
      {/* Subtle ambient card glow on hover */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-aleph-gold/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
      />

      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Thumbnail / Favicon */}
            <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/60 p-1 shadow-inner transition-transform duration-300 group-hover:scale-105">
              {project.customThumb && !thumbError ? (
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.customThumb}
                    alt={project.title}
                    fill
                    sizes="44px"
                    className="object-cover filter contrast-105 group-hover:contrast-115 transition-all"
                    onError={() => setThumbError(true)}
                  />
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-aleph-gold transition-colors">
                  <Globe className="h-4 w-4" />
                </div>
              )}
            </div>

            {/* Category tag */}
            <span className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-aleph-sage">
              {project.category}
            </span>
          </div>

          {/* External Link & Featured Tag */}
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-aleph-gold/30 bg-aleph-gold/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-aleph-champagne">
                <Sparkles className="h-2.5 w-2.5 text-aleph-gold" />
                <span>Featured</span>
              </span>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white group-hover:text-black"
            >
              <div className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-aleph-champagne mb-1.5">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </a>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2 font-normal mb-4">
          {project.description}
        </p>
      </div>

      {/* Footer: Tags */}
      <div className="relative z-10 flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
        {project.tags.slice(0, 3).map((tag, tIndex) => (
          <span
            key={tIndex}
            className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
