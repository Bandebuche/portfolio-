"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, ArrowUpRightIcon, WhatsAppIcon, GitHubIcon, ResumeIcon } from "./Icons";
import { Profile } from "@/types/portfolio";
import { Copy, Check, MessageSquare, Terminal } from "lucide-react";

interface ContactSectionProps {
  profile: Profile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-[#08090D] text-white">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-card p-8 sm:p-14 text-center shadow-tech-card"
      >
        {/* Subtle background glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-60 w-[500px] rounded-full bg-indigo-600/10 blur-3xl opacity-60"
        />

        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-emerald-300 mb-4">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Website Developer in Nagpur • Available for Local & Global Projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto mb-4">
          Ready to build your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 font-extrabold">website or web application</span>?
        </h2>

        <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mb-9 leading-relaxed">
          Based in Nagpur, Maharashtra. Available for in-person meetings in Sadar, Dharampeth, Ramdaspeth, and Wardha Road, as well as worldwide remote consulting.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Direct Email */}
          <a
            href={`mailto:${profile.email}?subject=Project%20Inquiry%20-%20AI%20App%20/%20Custom%20Dashboard`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-zinc-950 shadow-lg hover:bg-zinc-200 transition-all active:scale-95"
          >
            <MailIcon className="w-4 h-4 text-black" />
            <span>Send Email</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-xs sm:text-sm font-mono text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/[0.07] transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>{profile.email}</span>
              </>
            )}
          </button>

          {/* WhatsApp Direct */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp: +91 9168727315"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/20 px-5 py-3 text-xs sm:text-sm font-mono text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-900/30 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp (+91 9168727315)</span>
          </a>

          {/* Resume Direct */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-xs sm:text-sm font-mono text-zinc-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white transition-all active:scale-95"
          >
            <ResumeIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>View Resume</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
