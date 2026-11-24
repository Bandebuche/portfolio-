"use client";

import React, { useState, useMemo } from "react";
import { BentoCard } from "./BentoCard";
import { CategoryFilter } from "./CategoryFilter";
import { Project } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { Layers } from "lucide-react";

interface BentoGridProps {
  initialProjects: Project[];
}

export function BentoGrid({ initialProjects }: BentoGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const preferredOrder = ["All", "AI Web Apps", "Dashboards", "E-Commerce / SaaS", "WordPress"];
    const found = new Set<string>();
    initialProjects.forEach((p) => {
      if (p.category) found.add(p.category);
    });
    const result: string[] = [];
    preferredOrder.forEach((cat) => {
      if (cat === "All" || found.has(cat)) {
        result.push(cat);
        found.delete(cat);
      }
    });
    found.forEach((cat) => result.push(cat));
    return result;
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q)) ||
        project.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#060709] text-white">
      {/* Section Header */}
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-aleph-sage mb-3 backdrop-blur-md">
          <Layers className="h-3 w-3 text-aleph-gold" />
          <span>Full Production Index</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              Bento System <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-aleph-champagne to-aleph-gold">Index</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-1 font-normal">
              Production web applications, headless commerce platforms, and client OS desks.
            </p>
          </div>
          <span className="text-xs text-zinc-500 font-mono">
            Displaying {filteredProjects.length} of {initialProjects.length} Systems
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={initialProjects.length}
      />

      {/* Bento Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <BentoCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="rounded-3xl border border-white/[0.08] bg-[#0c0e12] p-12 text-center backdrop-blur-md">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] text-zinc-400 mb-3 border border-white/10">
            🔍
          </div>
          <p className="text-sm font-mono text-zinc-400">No systems matching `{searchQuery}`.</p>
        </div>
      )}
    </section>
  );
}
