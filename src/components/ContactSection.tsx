"use client";

import React from "react";
import { motion } from "framer-motion";
import { MailIcon, ArrowUpRightIcon, WhatsAppIcon, GitHubIcon, ResumeIcon } from "./Icons";
import { Profile } from "@/types/portfolio";
import { Sparkles } from "lucide-react";

interface ContactSectionProps {
  profile: Profile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-[#060709] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#0c0e12] p-8 sm:p-14 text-center backdrop-blur-2xl shadow-aleph-card"
      >
        {/* Subtle background glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 h-52 w-[480px] rounded-full aleph-halo-ambient blur-3xl opacity-50"
        />

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-aleph-champagne mb-4 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-aleph-gold" />
          <span>Ecosystem Partnership</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white max-w-2xl mx-auto mb-4">
          Ready to engineer your next <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-aleph-champagne to-aleph-gold">AI Venture</span>?
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Available for end-to-end AI application engineering, bespoke high-density dashboards, and conversion-focused web architecture.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Start a Project (Primary Mailto) */}
          <a
            href={`mailto:${profile.email}?subject=Venture%20Inquiry%20-%20AI%20App%20/%20Custom%20Dashboard`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-black shadow-lg transition-all hover:bg-aleph-champagne hover:shadow-aleph-gold/30 active:scale-95"
          >
            <MailIcon className="w-4 h-4 text-black" />
            <span>Initiate Project</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>

          {/* WhatsApp Direct */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp: +91 9168727315"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-5 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-emerald-300 backdrop-blur-md transition-all hover:border-emerald-500/60 hover:bg-emerald-900/40 active:scale-95 shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp (+91 9168727315)</span>
          </a>

          {/* Resume Direct */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-95 shadow-sm"
          >
            <ResumeIcon className="w-4 h-4 text-aleph-gold" />
            <span>View Resume</span>
          </a>

          {/* GitHub Profile */}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-300 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-95 shadow-sm"
          >
            <GitHubIcon className="w-4 h-4 text-zinc-400" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
