"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSlider } from "@/components/TechStackSlider";
import { FeaturedShowcase } from "@/components/FeaturedShowcase";
import { CoreExpertise } from "@/components/CoreExpertise";
import { BentoGrid } from "@/components/BentoGrid";
import { FloatingDock } from "@/components/FloatingDock";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { TechCursor } from "@/components/TechCursor";
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
    <div className="relative min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans overflow-x-hidden">
      {/* Subtle developer spotlight */}
      <TechCursor />

      {/* Fixed Header Navbar */}
      <Navbar profile={DEFAULT_PROFILE} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Silicon Valley Hero Section with Live Telemetry */}
        <HeroSection profile={DEFAULT_PROFILE} />

        {/* 2. Infinite Tech Stack Marquee Slider */}
        <TechStackSlider />

        {/* 3. Flagship Systems Showcase with macOS Browser Window Mockups */}
        <FeaturedShowcase projects={projects} />

        {/* 4. Core Engineering Disciplines & Architecture */}
        <CoreExpertise />

        {/* 5. Complete 35+ Systems Index with Live Filter & Search */}
        <BentoGrid initialProjects={projects} />

        {/* 6. Production Partnership & Contact Panel */}
        <ContactSection profile={DEFAULT_PROFILE} />

        {/* 7. Footer */}
        <Footer profile={DEFAULT_PROFILE} />

        {/* 8. Minimalist Floating Dock */}
        <FloatingDock socials={DEFAULT_PROFILE.socials} />
      </main>
    </div>
  );
}
