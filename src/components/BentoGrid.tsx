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
    <section id="projects" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#08090D] text-white">
      {/* Section Header */}
      <div className="mb-10 text-left border-b border-white/[0.08] pb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3">
          <Layers className="h-3.5 w-3.5 text-indigo-400" />
          <span>Full Production Index</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              All Production Systems ({initialProjects.length})
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Browse through deployed AI apps, real-time analytics hubs, and high-conversion client platforms.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            Showing {filteredProjects.length} of {initialProjects.length}
          </div>
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

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <BentoCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]">
          <p className="text-sm font-mono text-zinc-400 mb-2">
            No production deployments matching &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs font-mono text-indigo-400 hover:text-indigo-300 underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
