"use client";

import React from "react";
import { SearchIcon } from "./Icons";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 pb-4">
      {/* Category Segmented Tabs (Linear / Apple Style) */}
      <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-mono tracking-wide transition-all duration-200 ${
                isActive
                  ? "bg-white text-zinc-950 font-semibold shadow-sm"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Modern Search Bar with Command Hint */}
      <div className="relative min-w-[240px] sm:w-72">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
          <SearchIcon className="w-3.5 h-3.5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`Search ${totalCount} deployments...`}
          className="w-full rounded-lg border border-white/10 bg-surface-subtle py-2 pl-9 pr-12 text-xs font-mono text-white placeholder-zinc-500 focus:border-indigo-500/60 focus:bg-surface-elevated focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition-all"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
          <kbd className="hidden sm:inline-block rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}
