"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSlider } from "@/components/TechStackSlider";
import { AlephVenturesSlider } from "@/components/AlephVenturesSlider";
import { CoreExpertise } from "@/components/CoreExpertise";
import { BentoGrid } from "@/components/BentoGrid";
import { FloatingDock } from "@/components/FloatingDock";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AlephCursor } from "@/components/AlephCursor";
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
    <div className="relative min-h-screen bg-[#060709] text-zinc-100 selection:bg-aleph-gold/30 selection:text-aleph-champagne font-sans overflow-x-hidden">
      {/* Interactive mouse ambient spotlight */}
      <AlephCursor />

      {/* Background ambient radial gradients */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,181,127,0.06),transparent_70%)]" 
      />

      {/* Fixed Header Navbar */}
      <Navbar profile={DEFAULT_PROFILE} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero with Iconic Aleph Morphing Glass Sphere */}
        <HeroSection profile={DEFAULT_PROFILE} />

        {/* 2. Infinite Tech Stack Marquee Slider */}
        <TechStackSlider />

        {/* 3. The Signature Aleph Circular Orbit Dial Showcase */}
        <AlephVenturesSlider projects={projects} />

        {/* 4. Core Engineering Expertise Pillars */}
        <CoreExpertise />

        {/* 5. Complete Bento Systems Showcase & Filters */}
        <BentoGrid initialProjects={projects} />

        {/* 6. Ecosystem Partnership & Contact Banner */}
        <ContactSection profile={DEFAULT_PROFILE} />

        {/* 7. Footer */}
        <Footer profile={DEFAULT_PROFILE} />

        {/* 8. Minimalist Floating Dock */}
        <FloatingDock socials={DEFAULT_PROFILE.socials} />
      </main>
    </div>
  );
}
