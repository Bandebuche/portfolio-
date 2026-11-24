"use client";

import React from "react";
import { Profile } from "@/types/portfolio";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-white/[0.06] bg-[#040507] pb-28 pt-12 text-xs text-zinc-500 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">

        {/* Brand mark & info */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center text-aleph-gold opacity-80">
            <svg viewBox="0 0 50 50" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeDasharray="2 3" />
              <circle cx="25" cy="25" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
              <circle cx="25" cy="25" r="6" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="font-mono text-zinc-300 tracking-wider uppercase text-[11px]">
              webtree<span className="text-aleph-gold">.ai</span> • {profile.name}
            </p>
            <p className="text-[10px] text-zinc-500 font-mono">
              Aleph Studios Inspired Architecture & Animation Systems
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Resume
          </a>
          <span>•</span>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-emerald-400 hover:text-emerald-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
