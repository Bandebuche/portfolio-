"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Profile } from "@/types/portfolio";
import { GitHubIcon, WhatsAppIcon, ResumeIcon } from "./Icons";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const keyMetrics = [
    { value: "35+", label: "Projects Delivered" },
    { value: "8+", label: "SaaS & AI Platforms" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-[#060709] text-white">
      
      {/* 1. Ambient Background Atmosphere (Aleph Studios Ethereal Glows) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(212,181,127,0.08),transparent_70%)]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[450px] aleph-sphere-aura blur-3xl opacity-50 z-0" 
      />

      {/* 2. THE ICONIC MORPHING GLASS SPHERE (Responsive Background Centerpiece) */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[280px] sm:w-[420px] md:w-[540px] lg:w-[620px] aspect-square flex items-center justify-center z-0"
      >
        <div className="relative w-full h-full animate-sphere-float mix-blend-screen opacity-70 sm:opacity-85 filter contrast-110 brightness-105">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/aleph/cover-home-sphere.webm" type="video/webm" />
            <source src="/assets/aleph/cover-home-sphere.mov" type="video/quicktime" />
          </video>
        </div>

        {/* Outer Circular Optical Ring (Subtle Celestial Arc) */}
        <div className="absolute inset-[-4%] rounded-full border border-white/[0.05] animate-infinite-rotation-slow pointer-events-none opacity-40">
          <div className="w-full h-full rounded-full border border-dashed border-aleph-gold/20" />
        </div>
      </div>

      {/* 3. Clean, Human & Understandable Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Availability Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </span>
          <span className="text-[11px] uppercase tracking-wider text-zinc-300">
            {profile.availabilityText}
          </span>
        </motion.div>

        {/* Profile Avatar with Subtle Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-4 group cursor-pointer"
        >
          <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full p-[1.5px] bg-gradient-to-b from-aleph-gold/70 via-white/20 to-aleph-sage/50 shadow-xl transition-transform duration-300 group-hover:scale-105">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-950">
              {!imgError ? (
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="80px"
                  priority
                  className="object-cover object-top filter grayscale contrast-105 transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-sm font-mono text-aleph-gold">
                  SB
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Clear, Punchy, Understandable Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.18] sm:leading-[1.12] max-w-3xl mb-4"
        >
          Building{" "}
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-aleph-champagne to-aleph-gold">
            Intelligent AI Web Apps
          </span>{" "}
          <br className="hidden sm:inline" />
          <span className="text-zinc-200 font-light">& High-Performance Websites.</span>
        </motion.h1>

        {/* Simple & Clear Bio Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal mb-8"
        >
          Hi, I&apos;m <span className="text-white font-medium">{profile.name}</span>. I design and build fast, modern web applications, custom analytics dashboards, and autonomous AI integrations that help businesses grow.
        </motion.p>

        {/* Primary Action Buttons: Clean, High-Contrast & Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 w-full max-w-md"
        >
          {/* Primary CTA: Explore Work */}
          <a
            href="#ventures"
            className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-white text-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg transition-all hover:bg-aleph-champagne hover:shadow-aleph-gold/25 active:scale-95"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/25 px-5 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-emerald-300 backdrop-blur-md transition-all hover:border-emerald-500/60 hover:bg-emerald-900/40 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* GitHub Icon Link */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub: Bandebuche"
            className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/30 transition-all active:scale-95"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          {/* Resume Link */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume"
            className="inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/30 transition-all active:scale-95"
          >
            <ResumeIcon className="w-3.5 h-3.5 text-aleph-gold" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>
        </motion.div>

        {/* Clean, Simple 3-Pillar Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#0c0e13]/60 backdrop-blur-xl p-3 sm:p-4 shadow-aleph-card"
        >
          <div className="grid grid-cols-3 divide-x divide-white/[0.08] text-center">
            {keyMetrics.map((item, idx) => (
              <div key={idx} className="px-2">
                <div className="text-lg sm:text-xl md:text-2xl font-light text-white font-mono tracking-tight">
                  {item.value}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-400 mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* 4. Minimalist Aleph Arrow Capsule Indicator at Bottom */}
      <div className="relative z-10 pt-6 flex flex-col items-center">
        <a
          href="#ventures"
          aria-label="Scroll to Ventures"
          className="group flex flex-col items-center gap-1 transition-transform hover:translate-y-1"
        >
          <span className="w-8 h-12 flex justify-center items-center border border-white/15 rounded-full bg-white/[0.02] backdrop-blur-sm group-hover:border-aleph-gold/50 group-hover:bg-white/[0.06] transition-all">
            <span className="w-2.5 text-zinc-400 group-hover:text-aleph-gold rotate-90 transition-colors">
              <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 25.5023L25.0023 51L21.6693 47.6003L40.9769 27.9065H0V23.0981H40.9769L21.6693 3.39969L25.0023 0L50 25.5023Z" fill="currentColor"/>
              </svg>
            </span>
          </span>
        </a>
      </div>

    </section>
  );
}
