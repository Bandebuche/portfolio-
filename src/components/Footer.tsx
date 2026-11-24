"use client";

import React from "react";
import { Profile } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#06070a] pb-24 pt-12 text-xs text-zinc-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">

        {/* Brand info & timezone */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-xs font-mono font-bold text-white">
            SB
          </div>
          <div className="flex flex-col">
            <p className="font-mono text-zinc-300 text-xs">
              {profile.name} • Full-Stack Engineer & AI Solutions
            </p>
            <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
              Nagpur, India (IST • UTC+5:30) • Operating Worldwide
            </p>
          </div>
        </div>

        {/* System status & links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Systems Online</span>
          </span>

          <span className="text-zinc-700">•</span>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Resume
          </a>

          <span className="text-zinc-700">•</span>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <span className="text-zinc-700">•</span>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>

          <span className="text-zinc-700">•</span>

          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </footer>
  );
}
