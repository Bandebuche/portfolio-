"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { GitHubIcon, WhatsAppIcon } from "./Icons";
import { Profile } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  profile: Profile;
}

export function Navbar({ profile }: NavbarProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navLinks = [
    { label: "Ventures", href: "#ventures" },
    { label: "Showcase", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-safe bg-[#060709]/80 backdrop-blur-xl border-b border-white/[0.06] transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Brand / Aleph Concentric Symbol + Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
        >
          {/* Aleph Stylized Concentric Circle SVG */}
          <div className="w-8 h-8 flex items-center justify-center text-aleph-gold group-hover:text-aleph-champagne transition-colors">
            <svg viewBox="0 0 50 50" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="1.2" opacity="0.3" strokeDasharray="3 3"/>
              <circle cx="25" cy="25" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
              <circle cx="25" cy="25" r="8" fill="currentColor" opacity="0.9"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium tracking-tight text-white font-mono uppercase">
                webtree<span className="text-aleph-gold font-bold">.ai</span>
              </span>
              <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-zinc-700" />
              <span className="text-xs text-zinc-400 hidden sm:inline font-mono">
                {profile.name}
              </span>
            </div>
          </div>
        </Link>

        {/* Center Nav Links with Aleph Mutual-Dimming Hover Effect */}
        <nav className="hidden md:flex items-center gap-1 group">
          {navLinks.map((link) => {
            const isHovered = hoveredNav === link.label;
            const isOtherHovered = hoveredNav !== null && !isHovered;

            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredNav(link.label)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`px-3 py-1.5 text-xs font-mono tracking-widest uppercase transition-opacity duration-300 ${
                  isOtherHovered ? "opacity-30 text-white" : "opacity-90 text-white hover:text-aleph-champagne"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls: Status, WhatsApp, GitHub, Resume, Theme */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp Direct Chat */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="WhatsApp: +91 9168727315"
            className="hidden sm:flex items-center gap-1.5 h-8 px-3 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-900/40 transition-all text-xs font-mono"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-[11px] font-mono tracking-tight hidden lg:inline">+91 9168727315</span>
          </a>

          {/* GitHub Icon */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white hover:border-white/30 transition-all"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
          </a>

          {/* Contact Capsule CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>Get in Touch</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
