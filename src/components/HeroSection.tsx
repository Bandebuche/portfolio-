"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Profile } from "@/types/portfolio";
import { GitHubIcon, WhatsAppIcon, ResumeIcon } from "./Icons";
import { ArrowDown, ArrowUpRight, CheckCircle2, Terminal, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  const telemetryStats = [
    { value: "35+", label: "Systems Deployed", detail: "Live in production" },
    { value: "8+", label: "AI & SaaS Engines", detail: "LLMs, RAG, WebSockets" },
    { value: "100%", label: "Client Satisfaction", detail: "Verified delivery" },
    { value: "< 100ms", label: "Edge Performance", detail: "Next.js App Router" },
  ];

  return (
    <section className="relative min-h-[85vh] md:min-h-[92vh] flex flex-col justify-center items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#08090D] text-white">
      
      {/* 1. Silicon Valley Precision Grid Background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 bg-tech-grid opacity-70 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,#000_65%,transparent_100%)]" 
      />

      {/* 2. Ambient Electric Spotlight Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/10 via-blue-500/10 to-transparent blur-3xl opacity-60 z-0" 
      />

      {/* 3. Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Availability Status Pill (US Tech Standard) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </span>
          <span className="text-[11px] uppercase tracking-wider text-zinc-300">
            Available for Contract & Full-Time • Worldwide Remote
          </span>
        </motion.div>

        {/* Minimal Profile Headshot with Clean Tech Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative mb-6"
        >
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full p-[2px] bg-gradient-to-b from-indigo-500/60 via-white/20 to-transparent shadow-xl">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-950">
              {!imgError ? (
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="96px"
                  priority
                  className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-sm font-mono text-indigo-400 font-bold">
                  SB
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Strong, Precision Headline (Silicon Valley Typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.14] sm:leading-[1.1] max-w-4xl mb-5"
        >
          Engineering Production{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 font-bold">
            AI Applications
          </span>{" "}
          <br className="hidden sm:inline" />
          & High-Performance Web Systems.
        </motion.h1>

        {/* Developer Narrative Bio */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal mb-9"
        >
          I&apos;m <span className="text-white font-medium">{profile.name}</span>. I design and build modern Next.js web applications, sub-second telemetry dashboards, and autonomous AI integrations that solve real business bottlenecks.
        </motion.p>

        {/* Action Button Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14 w-full max-w-xl"
        >
          {/* Primary CTA */}
          <a
            href="#featured"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white text-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide shadow-lg hover:bg-zinc-200 transition-all active:scale-95"
          >
            <span>Explore Featured Work</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          {/* WhatsApp Direct */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/20 px-5 py-3 text-xs sm:text-sm font-mono text-emerald-300 backdrop-blur-md hover:border-emerald-500/60 hover:bg-emerald-900/30 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp (+91 9168727315)</span>
          </a>

          {/* GitHub Repos */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub: Bandebuche"
            className="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-mono text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all active:scale-95"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          {/* Resume Link */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume"
            className="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-mono text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all active:scale-95"
          >
            <ResumeIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>
        </motion.div>

        {/* Linear / Stripe Style Telemetry Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-4xl rounded-xl border border-white/[0.08] bg-surface-card/80 backdrop-blur-xl p-4 sm:p-5 shadow-tech-card"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.07] text-left">
            {telemetryStats.map((item, idx) => (
              <div key={idx} className={`${idx > 0 ? "pt-3 md:pt-0 md:pl-5" : "pl-2"}`}>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-medium text-zinc-300 mt-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
}
