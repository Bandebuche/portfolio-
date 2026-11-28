"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/portfolio";
import { ArrowUpRight, ArrowUp, Globe, Lock, ExternalLink, Sparkles, CheckCircle2, FileText } from "lucide-react";

interface FeaturedShowcaseProps {
  projects: Project[];
}

export function FeaturedShowcase({ projects }: FeaturedShowcaseProps) {
  // Get top 6 featured projects (including the 4 new ones: fruffles, justfarm, supports, piushbhandari)
  const featured = projects.slice(0, 6);
  const [imgError, setImgError] = useState<{ [id: string]: boolean }>({});
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Monitor scroll position to show floating back-to-top button on the right side
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const caseStudyMap: { [id: string]: string } = {
    "site-fruffles": "/projects/fruffles",
    "site-justfarm": "/projects/justfarm",
    "site-supports-desk": "/projects/supports-desk",
    "site-piush-bhandari": "/projects/piush-bhandari",
    "site-digital-azadi-support": "/projects/digital-azadi-support",
    "site-digital-azadi-admin": "/projects/digital-azadi-admin",
  };

  const getCleanDomain = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname + (parsed.pathname !== "/" ? parsed.pathname : "");
    } catch {
      return url.replace(/^https?:\/\//, "");
    }
  };

  return (
    <section id="featured" className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#08090D] text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-4 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Silicon Valley Standard • Nagpur & Global Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Production Systems
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              End-to-end full-stack architectures built for real businesses, high conversion, and sub-second SLAs.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
          >
            <span>View All 35+ Production Deployments</span>
            <ArrowUpRight className="w-4 h-4 text-indigo-400" />
          </a>
        </div>

        {/* 2-Column High-Impact Product Cards with macOS Window Chrome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((project, idx) => {
            const hasError = imgError[project.id];
            const cleanUrl = getCleanDomain(project.url);
            const caseStudyUrl = caseStudyMap[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-card hover:border-indigo-500/40 hover:bg-surface-cardHover transition-all duration-300 shadow-tech-card hover:shadow-tech-hover cursor-pointer"
              >
                {/* Full-Box Clickable Overlay — opens live website in a new tab while preserving current portfolio */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live website in new tab (${cleanUrl})`}
                  title={`Visit ${project.title} (${cleanUrl}) in new tab`}
                  className="absolute inset-0 z-10 cursor-pointer"
                />

                {/* macOS Style Window Header Bar */}
                <div className="relative z-0 flex items-center justify-between border-b border-white/[0.07] bg-surface-elevated/70 px-4 py-3">
                  {/* Traffic Light Window Controls */}
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
                  </div>

                  {/* Clean URL Bar Pill */}
                  <div className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-black/40 px-3 py-1 text-[11px] font-mono text-zinc-400 max-w-[260px] truncate">
                    <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{cleanUrl}</span>
                  </div>

                  {/* Live Status Badge */}
                  <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Card Body & Preview */}
                <div className="relative z-0 p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Visual Preview / Thumbnail Banner */}
                    <div className="relative mb-5 h-48 sm:h-56 w-full overflow-hidden rounded-xl border border-white/[0.06] bg-black/60 group-hover:border-white/15 transition-all">
                      {project.customThumb && !hasError ? (
                        <Image
                          src={project.customThumb}
                          alt={`${project.title} - Website Development by Sachin Bandebuche Nagpur`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                          onError={() => setImgError((prev) => ({ ...prev, [project.id]: true }))}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-zinc-950 text-zinc-500">
                          <Globe className="h-10 w-10 text-zinc-700 group-hover:text-indigo-400 transition-colors" />
                        </div>
                      )}

                      {/* Subtle gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Category overlay pill */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md border border-white/10 bg-black/75 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                        <span>{project.category}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags & Launch Buttons */}
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      {project.tags.slice(0, 4).map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 relative z-20">
                      {/* Launch Live App Button */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-mono font-medium text-white hover:border-indigo-500/50 hover:bg-indigo-600 hover:text-white transition-all active:scale-[0.98]"
                      >
                        <span>Launch App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {/* Case study link if available */}
                      {caseStudyUrl && (
                        <Link
                          href={caseStudyUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 px-3.5 py-2.5 text-xs font-mono text-indigo-300 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Case Study</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section Quick Bar with Top Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.08] pt-6 gap-3">
          <span className="text-xs font-mono text-zinc-500">
            6 of 35+ flagship ventures showcased • High-Availability Silicon Valley Stack
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top / ऊपर जाएँ</span>
          </button>
        </div>

      </div>

      {/* Floating Right-Side Scroll-To-Top Button (Appears smoothly when scrolling down) */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.75, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            aria-label="Scroll directly to top of page"
            className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 group flex items-center gap-2 rounded-full border border-indigo-500/40 bg-[#0c0e14]/90 px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs font-mono font-semibold text-white shadow-[0_12px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(99,102,241,0.3)] backdrop-blur-2xl hover:border-indigo-400 hover:bg-indigo-600 hover:shadow-[0_15px_40px_rgba(99,102,241,0.55)] transition-all duration-300 active:scale-95"
            title="Go to top / सीधे ऊपर ले जाएँ"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/20 group-hover:bg-white/20 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-indigo-300 group-hover:text-white transition-transform group-hover:-translate-y-0.5" />
            </div>
            <span className="text-[11px] font-mono tracking-wider text-zinc-300 group-hover:text-white uppercase font-bold">
              Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
