"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LockIcon } from "./Icons";
import { Profile } from "@/types/portfolio";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/60 pb-28 pt-10 text-xs text-zinc-500 dark:text-zinc-500 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-cyan-500/30 bg-zinc-950 shadow-[0_0_12px_rgba(6,182,212,0.25)] flex-shrink-0">
            <Image
              src="/logo.png"
              alt="WebTree Logo"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-zinc-800 dark:text-zinc-300 tracking-tight">
              web<span className="text-cyan-500 dark:text-cyan-400">tree</span>{" "}
              <span className="font-normal text-zinc-500">• {profile.name}</span>
            </p>
            <p className="text-[11px] text-zinc-500">
              Engineered with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            Resume
          </a>
          <span>•</span>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            WhatsApp
          </a>
          <span>•</span>
          {/* Discreet Admin Portal Link */}
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 text-zinc-400 dark:text-zinc-600 transition-colors hover:text-zinc-700 dark:hover:text-zinc-400"
            title="Administrator Portal"
          >
            <LockIcon className="w-3 h-3" />
            <span className="text-[11px]">Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
