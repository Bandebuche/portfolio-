"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Profile } from "@/types/portfolio";
import { ArrowUpRightIcon, MailIcon, GitHubIcon, WhatsAppIcon } from "./Icons";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-8 pb-4 md:pt-14 md:pb-6 overflow-hidden">
      {/* Subtle radial ambient glow behind the hero */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] md:w-[850px] md:h-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.14)_0%,rgba(14,165,233,0.06)_40%,transparent_70%)] blur-3xl opacity-75"
      />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Availability Badge & Avatar Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          {/* Avatar with Ping Badge */}
          <div className="relative group mb-6">
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full p-[2px] bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 dark:from-zinc-700/80 dark:via-zinc-800 dark:to-zinc-900/90 shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-950">
                {!imgError ? (
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-200 dark:bg-zinc-900 text-2xl font-bold text-zinc-700 dark:text-zinc-300">
                    SB
                  </div>
                )}
              </div>
            </div>

            {/* Glowing Active Green Ping Badge */}
            <div 
              className="absolute bottom-1 right-1 flex items-center justify-center"
              title={profile.availabilityText}
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white dark:border-zinc-950 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
              </span>
            </div>
          </div>

          {/* Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 backdrop-blur-md shadow-[0_0_20px_-3px_rgba(16,185,129,0.2)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span className="tracking-tight">{profile.availabilityText}</span>
          </motion.div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-3"
          >
            {profile.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="text-lg sm:text-xl font-medium tracking-tight text-zinc-700 dark:text-zinc-300 max-w-2xl mb-4"
          >
            {profile.tagline}
          </motion.p>

          {/* Concise Bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mb-7 leading-relaxed tracking-tight"
          >
            {profile.bio}
          </motion.p>

          {/* Action Buttons: Explore, GitHub, WhatsApp, Get in touch */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 px-5 py-2.5 text-sm font-semibold shadow-md transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:shadow-lg active:scale-95"
            >
              <span>Explore Projects</span>
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>

            {/* GitHub Icon Link Button */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub: Bandebuche"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 px-4 py-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-md transition-all hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 active:scale-95 shadow-sm"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* WhatsApp Link Button with Number 9168727315 */}
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp: +91 9168727315"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-2.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300 backdrop-blur-md transition-all hover:bg-emerald-100 dark:hover:bg-emerald-900/50 active:scale-95 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Email Contact */}
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 px-4 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 backdrop-blur-md transition-all hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-white active:scale-95"
            >
              <MailIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Email</span>
            </a>
          </motion.div>

          {/* Minimal Metric Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-500">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-zinc-800 dark:text-zinc-300">25+</span>
              <span>Websites Shipped</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-zinc-800 dark:text-zinc-300">5+</span>
              <span>SaaS Systems</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">100%</span>
              <span>Client Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
