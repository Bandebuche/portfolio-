"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Profile } from "@/types/portfolio";
import { GitHubIcon, WhatsAppIcon, ResumeIcon } from "./Icons";
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles, MapPin, Code2, ShoppingCart, IndianRupee } from "lucide-react";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  const telemetryStats = [
    { value: "35+", label: "Websites Shipped", detail: "Nagpur & Global Live Projects" },
    { value: "4+ Yrs", label: "Developer Experience", detail: "Next.js, WordPress, Shopify" },
    { value: "100%", label: "Client Satisfaction", detail: "Verified Delivery & Support" },
    { value: "< 1s", label: "Page Load Speed", detail: "Passing Core Web Vitals" },
  ];

  const quickServices = [
    { label: "Website Developer Nagpur", href: "/website-developer-nagpur" },
    { label: "WordPress Developer", href: "/wordpress-developer-nagpur" },
    { label: "Shopify Developer", href: "/shopify-developer-nagpur" },
    { label: "E-Commerce Development", href: "/ecommerce-website-development-nagpur" },
    { label: "Website Design Cost", href: "/website-design-cost-nagpur" },
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
        
        {/* Availability & Location Status Pill (Direct Local Signal) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </span>
          <span className="text-[11px] uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-emerald-400 inline" />
            Based in Nagpur, India • Available for Local & Global Projects
          </span>
        </motion.div>

        {/* Profile Headshot with Descriptive Alt Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative mb-5"
        >
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full p-[2px] bg-gradient-to-b from-indigo-500/60 via-white/20 to-transparent shadow-xl">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-950">
              {!imgError ? (
                <Image
                  src={profile.avatar}
                  alt="Sachin Bandebuche - Freelance Website Developer in Nagpur, Maharashtra"
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

        {/* Primary Target H1: Exact Keyword Match with High Conversion Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.15] sm:leading-[1.1] max-w-4xl mb-5"
        >
          Website Developer in Nagpur{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 font-bold block mt-1">
            Crafting Next.js, WordPress & Shopify Solutions
          </span>
        </motion.h1>

        {/* Plain-Text Intro Paragraph for Crawlers and AI Answer Engines */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal mb-8"
        >
          I am <strong className="text-white font-medium">Sachin Bandebuche</strong>, a freelance website developer based in <strong className="text-white font-medium">Nagpur, Maharashtra, India</strong> with 4+ years of professional experience. I have delivered over <strong className="text-white font-medium">35+ live production websites</strong>, custom Next.js web applications, responsive WordPress business portals, and conversion-focused Shopify e-commerce platforms for clients in Nagpur and across the globe.
        </motion.p>

        {/* Action Button Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8 w-full max-w-xl"
        >
          {/* Primary CTA */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp: +91 9168727315"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-zinc-950" />
            <span>Get a Free Quote (WhatsApp)</span>
          </a>

          {/* Explore Projects */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-zinc-950 px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide shadow-lg hover:bg-zinc-200 transition-all active:scale-95"
          >
            <span>View 35+ Live Websites</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          {/* Pricing Guide */}
          <Link
            href="/website-design-cost-nagpur"
            className="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-mono text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all active:scale-95"
          >
            <IndianRupee className="w-3.5 h-3.5 text-indigo-400" />
            <span>Nagpur Pricing Guide</span>
          </Link>
        </motion.div>

        {/* Internal Service Links Ribbon (SEO & Crawl Pathway) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-3xl">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mr-1">
            Nagpur Services:
          </span>
          {quickServices.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="text-[11px] font-mono text-zinc-400 hover:text-indigo-300 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-indigo-500/40 px-2.5 py-1 rounded-md transition-colors"
            >
              {svc.label}
            </Link>
          ))}
        </div>

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
