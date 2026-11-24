"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Profile } from "@/types/portfolio";
import { ArrowUpRight, MessageSquare, Terminal } from "lucide-react";

interface NavbarProps {
  profile: Profile;
}

export function Navbar({ profile }: NavbarProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navLinks = [
    { label: "Featured Work", href: "#featured" },
    { label: "All Systems (35)", href: "#projects" },
    { label: "Architecture", href: "#architecture" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-safe bg-[#08090D]/85 backdrop-blur-xl border-b border-white/[0.08] transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Brand: Monogram + Name + Live Status */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform hover:opacity-95"
        >
          {/* Developer Monogram Badge */}
          <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-xs font-mono font-bold text-white group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-all">
            SB
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-white font-sans">
                {profile.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 hidden sm:block font-mono">
              Full-Stack & AI Systems
            </span>
          </div>
        </Link>

        {/* Center Nav Links: Silicon Valley Minimalist */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isHovered = hoveredNav === link.label;

            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredNav(link.label)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-md transition-colors ${
                  isHovered ? "text-white bg-white/[0.06]" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Resume link */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-white/[0.05] transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          {/* GitHub link */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-white/[0.05] transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>

          {/* Primary Action Button: WhatsApp / Get in Touch */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Let&apos;s Talk</span>
          </a>
        </div>

      </div>
    </header>
  );
}
