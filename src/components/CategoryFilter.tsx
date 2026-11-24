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
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
      {/* Category Pills in Aleph Swiss Minimalist Typography */}
      <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-all duration-200 ${
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

      {/* Search Bar in Aleph Dark Glass */}
      <div className="relative min-w-[240px] sm:w-72">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
          <SearchIcon className="w-3.5 h-3.5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`Search ${totalCount} systems...`}
          className="w-full rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-9 pr-8 text-xs font-mono text-zinc-200 placeholder-zinc-500 backdrop-blur-md outline-none transition-all focus:border-aleph-gold/50 focus:bg-white/[0.06]"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-zinc-500 hover:text-zinc-300"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
