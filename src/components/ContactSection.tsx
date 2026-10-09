"use client";

import React from "react";
import { motion } from "framer-motion";
import { MailIcon, ArrowUpRightIcon, LinkedInIcon, WhatsAppIcon, GitHubIcon } from "./Icons";
import { Profile } from "@/types/portfolio";

interface ContactSectionProps {
  profile: Profile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900/60 dark:to-zinc-950/80 p-8 sm:p-12 text-center backdrop-blur-xl shadow-xl dark:shadow-2xl"
      >
        {/* Subtle background glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-44 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
          Available for New Projects
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-2xl mx-auto mb-3">
          Ready to build your next AI App or Custom Dashboard?
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8 tracking-tight">
          Available for full-cycle AI development, bespoke dashboard engineering, and modern web architectures.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Start a Project (Primary Mailto) */}
          <a
            href={`mailto:${profile.email}?subject=Project%20Inquiry%20-%20AI%20App%20/%20Custom%20Dashboard`}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-md transition-all hover:bg-emerald-400 hover:shadow-lg active:scale-95"
          >
            <MailIcon className="w-4 h-4 text-zinc-950" />
            <span>Start a Project</span>
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>

          {/* View Resume (Direct Link) */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-md transition-all hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95 shadow-sm"
          >
            <span>View Resume</span>
            <ArrowUpRightIcon className="w-4 h-4 text-zinc-500" />
          </a>

          {/* WhatsApp Direct */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-md transition-all hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95 shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp (+91 9168727315)</span>
          </a>

          {/* GitHub Profile */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-md transition-all hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95 shadow-sm"
          >
            <GitHubIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
