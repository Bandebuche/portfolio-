"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/portfolio";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, ExternalLink, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

interface AlephVenturesSliderProps {
  projects: Project[];
}

export function AlephVenturesSlider({ projects }: AlephVenturesSliderProps) {
  // Take featured projects or top projects for the orbit dial
  const ventureProjects = projects.filter((p) => p.featured || (p.clicks ?? 0) > 1400).slice(0, 8);
  const total = ventureProjects.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState<{ [id: string]: boolean }>({});
  const [isHovered, setIsHovered] = useState(false);

  const activeProject = ventureProjects[currentIndex] || ventureProjects[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  if (total === 0) return null;

  return (
    <section id="ventures" className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#060709] text-white">
      {/* 1. Ambient Background Ethereal Halos & Subtle Grid */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] rounded-full aleph-halo-ambient blur-3xl opacity-40 z-0" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] rounded-full aleph-sphere-aura blur-2xl opacity-50 z-0" 
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-mono tracking-widest uppercase text-aleph-champagne backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-aleph-gold" />
            <span>Curated Venture Orbit</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light tracking-tight text-white"
          >
            Signature Systems & <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-aleph-champagne to-aleph-gold">Ventures</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base text-zinc-400 mt-2.5 max-w-xl mx-auto font-normal leading-relaxed"
          >
            Explore live production web architectures. Select an orbital node or toggle the dial controls to inspect each system.
          </motion.p>
        </div>

        {/* The Central Stage: Tight, Luxurious 3-Column Cockpit */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT TELEMETRY POD: System Specs & Description */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id + "-left"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative rounded-3xl border border-white/[0.08] bg-[#0c0e13]/80 p-6 sm:p-7 backdrop-blur-xl shadow-aleph-card hover:border-white/15 transition-all"
              >
                {/* Large Subtle Watermark Index */}
                <div className="absolute top-4 right-6 text-5xl sm:text-6xl font-mono font-bold text-white/[0.03] select-none pointer-events-none">
                  {(currentIndex + 1).toString().padStart(2, "0")}
                </div>

                {/* Category & Status Beacon */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-aleph-sage">
                    {activeProject.category || "Venture"}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-[10px] font-mono text-aleph-gold uppercase">
                    {activeProject.status || "Production"}
                  </span>
                </div>

                {/* Venture Title */}
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-3">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                  {activeProject.description}
                </p>

                {/* Tech Pills */}
                <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                    Engineered Core Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2.5 py-1 text-[10px] rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Link on mobile */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between lg:hidden">
                  <span className="text-xs font-mono text-zinc-400">
                    Venture {currentIndex + 1} of {total}
                  </span>
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-aleph-champagne hover:underline"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER STAGE: THE LUXURY OPTICAL ORBIT DIAL */}
          <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2">
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] flex items-center justify-center"
            >
              
              {/* Outer Counter-Rotating Large Ambient Celestial Rings */}
              <div className="absolute inset-[-20%] pointer-events-none opacity-40">
                <div className="w-full h-full animate-infinite-rotation-slow">
                  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="240" stroke="#6F888F" strokeWidth="0.8" vectorEffect="non-scaling-stroke" strokeDasharray="4 6" opacity="0.5"/>
                    <circle cx="250" cy="250" r="240" transform="rotate(-90 250 250)" stroke="url(#paint_radial_orbit_main)" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
                    <defs>
                      <radialGradient id="paint_radial_orbit_main" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(360 460) rotate(-90) scale(90 90)">
                        <stop stopColor="white"/>
                        <stop offset="0.45" stopColor="#FEF9C7"/>
                        <stop offset="1" stopColor="#FDF6AB" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="absolute inset-[-12%] pointer-events-none opacity-30">
                <div className="w-full h-full animate-infinite-rotation-reverse">
                  <svg viewBox="0 0 500 500" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="220" stroke="#ABC5C4" strokeWidth="0.7" vectorEffect="non-scaling-stroke" strokeDasharray="2 4" opacity="0.4"/>
                    <circle cx="250" cy="250" r="220" transform="rotate(45 250 250)" stroke="url(#paint_radial_orbit_secondary)" strokeWidth="1.2" vectorEffect="non-scaling-stroke"/>
                    <defs>
                      <radialGradient id="paint_radial_orbit_secondary" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(360 460) rotate(-90) scale(90 90)">
                        <stop stopColor="#FEF9C7"/>
                        <stop offset="0.5" stopColor="#D4B57F"/>
                        <stop offset="1" stopColor="#D4B57F" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* The Central Circular Frame with Conic Gradient Rim */}
              <div className="relative w-full h-full rounded-full p-[2.5px] overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.9)]">
                
                {/* Conic Gradient Border Spin (Aleph Signature Dial Effect) */}
                <div 
                  className="absolute inset-[-50%] animate-conic-spin"
                  style={{
                    background: `conic-gradient(from 90deg, rgba(255, 254, 253, 0.95) 0deg, rgba(253, 246, 171, 0) 35deg, rgba(212, 181, 127, 0) 310deg, rgba(253, 246, 171, 0.85) 345deg, rgba(255, 255, 255, 1) 360deg)`
                  }}
                />

                {/* Inner Stage: High-End Optical Chamber */}
                <div className="relative w-full h-full rounded-full bg-[#080a0e] overflow-hidden p-2.5 border border-white/10 flex items-center justify-center">
                  
                  {/* Subtle Background Radial Mesh inside lens */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,181,127,0.15),transparent_65%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(6,7,9,0.95)_100%)] pointer-events-none z-10" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.08 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="relative w-full h-full rounded-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#11141b] to-[#07080a] p-6 text-center select-none"
                    >
                      {/* Modernist macOS/Viewport Window Mockup inside lens */}
                      <div className="relative w-[85%] max-w-[260px] rounded-2xl border border-white/15 bg-black/60 backdrop-blur-xl p-4 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                        
                        {/* Window Header Bar with Traffic Lights */}
                        <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 mb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-red-500/80" />
                            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[9px] font-mono text-zinc-400 truncate max-w-[130px]">
                            {activeProject.url.replace(/^https?:\/\//, '')}
                          </span>
                        </div>

                        {/* Centered Brand Emblem / Logo with Clean Framing (NO STRETCHING) */}
                        <div className="relative h-20 w-full flex items-center justify-center p-1">
                          {activeProject.customThumb && !imgError[activeProject.id] ? (
                            <div className="relative h-full w-full flex items-center justify-center">
                              <Image
                                src={activeProject.customThumb}
                                alt={activeProject.title}
                                fill
                                sizes="200px"
                                className="object-contain filter contrast-110 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                                onError={() => setImgError((prev) => ({ ...prev, [activeProject.id]: true }))}
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-aleph-gold text-lg font-mono">
                              {activeProject.title.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                        </div>

                        {/* Live Telemetry KPI Tag */}
                        <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono">
                          <span className="text-zinc-400">TELEMETRY</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            ACTIVE
                          </span>
                        </div>

                      </div>

                      {/* Floating Monogram Overlay Pill */}
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-black/80 backdrop-blur-md shadow-xl z-20 whitespace-nowrap">
                        <span className="h-1.5 w-1.5 rounded-full bg-aleph-gold animate-pulse" />
                        <span className="text-[11px] font-mono text-white tracking-tight">{activeProject.name}</span>
                      </div>

                      {/* Optical Glass Lens Sheen Reflection */}
                      <div 
                        aria-hidden="true" 
                        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-80" 
                      />
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>

              {/* Orbital Dial Pagers (Perimetric Interactive Clickable Nodes) */}
              <div className="absolute inset-0 pointer-events-none z-30">
                {ventureProjects.map((p, idx) => {
                  const angle = (idx / total) * 360 - 90; // Starting from 12 o'clock
                  const rad = (angle * Math.PI) / 180;
                  const radius = 50; // percentage to rim
                  const left = 50 + radius * Math.cos(rad);
                  const top = 50 + radius * Math.sin(rad);
                  const isActive = idx === currentIndex;

                  return (
                    <button
                      key={p.id}
                      onClick={() => setCurrentIndex(idx)}
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      title={`${p.title} (${idx + 1}/${total})`}
                      aria-label={`Select ${p.title}`}
                      className={`pointer-events-auto absolute flex items-center justify-center transition-all duration-300 group ${
                        isActive ? "scale-125 z-40" : "scale-100 hover:scale-115 z-30"
                      }`}
                    >
                      <span className="relative flex items-center justify-center w-7 h-7">
                        {isActive && (
                          <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-aleph-champagne/50" />
                        )}
                        <span
                          className={`relative inline-block rounded-full border transition-all duration-300 ${
                            isActive
                              ? "w-3.5 h-3.5 bg-aleph-champagne border-white shadow-[0_0_14px_rgba(253,246,171,1)]"
                              : "w-2.5 h-2.5 bg-zinc-600/90 border-white/20 group-hover:bg-zinc-200 group-hover:border-white/60"
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* RIGHT TELEMETRY POD: System Launch & Dial Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-center order-3">
            <div className="relative rounded-3xl border border-white/[0.08] bg-[#0c0e13]/80 p-6 sm:p-7 backdrop-blur-xl shadow-aleph-card hover:border-white/15 transition-all text-center lg:text-left">
              
              {/* Telemetry Status Strip */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-5">
                <div className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">
                  SYSTEM TELEMETRY
                </div>
                <div className="text-xs font-mono text-aleph-gold font-semibold">
                  SYS 0{currentIndex + 1} // 0{total}
                </div>
              </div>

              {/* Direct Launch Button */}
              <div className="mb-6">
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-center gap-2.5 rounded-full bg-white text-black hover:bg-aleph-champagne px-6 py-3.5 text-xs font-mono uppercase tracking-wider font-semibold shadow-xl transition-all duration-300 hover:shadow-aleph-gold/30 active:scale-95"
                >
                  <span>Launch Live System</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Dial Prev / Next Controls with Keyboard hint */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider hidden sm:block">
                  USE [←] [→] KEYS
                </div>
                
                <div className="flex items-center gap-2.5 mx-auto lg:mr-0">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous project"
                    className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/15 hover:border-white/30 flex items-center justify-center text-zinc-300 hover:text-white transition-all active:scale-95 shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next project"
                    className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/15 hover:border-white/30 flex items-center justify-center text-zinc-300 hover:text-white transition-all active:scale-95 shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mini Venture Nodes Quick Jumper */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">QUICK JUMP</span>
                <div className="flex items-center gap-1.5">
                  {ventureProjects.map((p, idx) => (
                    <button
                      key={p.id + "-mini"}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Jump to ${p.title}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-6 bg-aleph-gold shadow-[0_0_8px_rgba(212,181,127,0.8)]"
                          : "w-2 bg-white/20 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM FILMSTRIP: Interactive Venture Thumbnails Ribbon */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center gap-2 min-w-max mx-auto px-4">
            {ventureProjects.map((p, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={p.id + "-tab"}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 text-left ${
                    isActive
                      ? "border-aleph-gold/50 bg-white/[0.06] shadow-sm text-white"
                      : "border-white/[0.06] bg-white/[0.01] hover:border-white/20 hover:bg-white/[0.03] text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isActive ? "text-aleph-gold font-bold" : "text-zinc-500"}`}>
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-tight whitespace-nowrap">
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
