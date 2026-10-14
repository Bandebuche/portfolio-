"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { GitHubIcon, WhatsAppIcon } from "./Icons";
import { Profile } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  profile: Profile;
}

export function Navbar({ profile }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full pt-safe border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand / WebTree Logo + Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group transition-transform hover:scale-[1.02]"
        >
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 overflow-hidden rounded-xl border border-cyan-500/40 bg-zinc-950 shadow-[0_0_15px_-3px_rgba(6,182,212,0.35)] transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_22px_rgba(6,182,212,0.55)]">
            <Image
              src="/logo.png"
              alt="WebTree Portfolio Logo"
              fill
              sizes="40px"
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-zinc-900 dark:text-white">
                web<span className="text-cyan-500 dark:text-cyan-400">tree</span>
              </span>
              <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 hidden sm:inline tracking-tight">
                {profile.name}
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 hidden sm:inline tracking-tight">
              Full-Stack Engineer & AI Solutions
            </span>
          </div>
        </Link>

        {/* Right Action Icons: GitHub, WhatsApp, Theme Toggle, Resume */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* GitHub Icon Link */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub: Bandebuche"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-black dark:hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>

          {/* WhatsApp Icon Link */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="WhatsApp: +91 9168727315"
            className="flex items-center gap-1.5 h-9 px-3 rounded-xl border border-emerald-500/30 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <WhatsAppIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-semibold hidden md:inline tracking-tight">
              +91 9168727315
            </span>
          </a>

          {/* Theme Toggle (Dark / Light) */}
          <ThemeToggle />

          {/* Resume Link */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 rounded-xl bg-zinc-900 dark:bg-white px-3.5 py-2 text-xs font-semibold text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm active:scale-95"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
