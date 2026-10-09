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
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8 text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-3 backdrop-blur-md">
          <Layers className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
          <span className="tracking-tight">Selected Engineering Work</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Bento Project Showcase
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 tracking-tight">
              Production web applications, headless commerce stores, and client platforms.
            </p>
          </div>
          <span className="text-xs text-zinc-500 font-mono">
            Showing {filteredProjects.length} of {initialProjects.length} Systems
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
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-12 text-center backdrop-blur-md">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-400 mb-3">
            🔍
          </div>
          <h3 className="text-base font-semibold text-zinc-200">No matching projects found</h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search query or switching categories to explore other systems.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-300 hover:bg-zinc-800"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}
