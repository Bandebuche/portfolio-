"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSlider } from "@/components/TechStackSlider";
import { CoreExpertise } from "@/components/CoreExpertise";
import { BentoGrid } from "@/components/BentoGrid";
import { FloatingDock } from "@/components/FloatingDock";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { DEFAULT_PROJECTS } from "@/data/projects";
import { getStoredProjects } from "@/lib/storage";
import { Project } from "@/types/portfolio";

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);

  useEffect(() => {
    // Synchronize with local updates if the admin modified items
    const stored = getStoredProjects();
    if (stored && stored.length > 0) {
      setProjects(stored);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-700 dark:selection:text-emerald-200 font-sans transition-colors duration-200">
      {/* Background radial gradient mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.06),rgba(255,255,255,0))]" 
      />

      {/* Top Navbar */}
      <Navbar profile={DEFAULT_PROFILE} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Header */}
        <HeroSection profile={DEFAULT_PROFILE} />

        {/* 2. Infinite Tech Stack Marquee Slider */}
        <TechStackSlider />

        {/* 3. Core Expertise / What I Build Bento Section */}
        <CoreExpertise />

        {/* 3. Bento Project Showcase */}
        <BentoGrid initialProjects={projects} />

        {/* 3. Call-to-action Banner */}
        <ContactSection profile={DEFAULT_PROFILE} />

        {/* 4. Footer */}
        <Footer profile={DEFAULT_PROFILE} />

        {/* 5. Minimalist Floating Dock */}
        <FloatingDock socials={DEFAULT_PROFILE.socials} />
      </main>
    </div>
  );
}
