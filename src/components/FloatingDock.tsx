"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, MailIcon, ResumeIcon } from "./Icons";

interface FloatingDockProps {
  socials: {
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
    resume: string;
  };
}

interface DockItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

export function FloatingDock({ socials }: FloatingDockProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const items: DockItem[] = [
    {
      id: "github",
      label: "GitHub",
      href: socials.github,
      icon: <GitHubIcon className="w-5 h-5" />,
      external: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: socials.linkedin,
      icon: <LinkedInIcon className="w-5 h-5" />,
      external: true,
    },
    {
      id: "whatsapp",
      label: "WhatsApp (+91 9168727315)",
      href: socials.whatsapp,
      icon: <WhatsAppIcon className="w-5 h-5" />,
      external: true,
    },
    {
      id: "email",
      label: "Email",
      href: socials.email,
      icon: <MailIcon className="w-5 h-5" />,
      external: false,
    },
    {
      id: "resume",
      label: "Resume",
      href: socials.resume,
      icon: <ResumeIcon className="w-5 h-5" />,
      external: true,
    },
  ];

  return (
    <aside aria-label="Quick social connections" className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-40">
      <motion.nav
        aria-label="Floating social dock"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center gap-1.5 sm:gap-2.5 rounded-full border border-zinc-200/90 dark:border-zinc-800/80 bg-white/85 dark:bg-zinc-950/80 px-3.5 py-2 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-zinc-900/5 dark:ring-white/5 transition-colors"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Tooltip reveal */}
            <AnimatePresence>
              {hoveredId === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: -10, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2.5 py-0.5 text-[10px] font-medium tracking-tight text-zinc-900 dark:text-zinc-200 shadow-xl backdrop-blur-md"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rotate-45 border-b border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-black dark:hover:text-white"
            >
              {item.icon}
            </motion.a>
          </div>
        ))}
      </motion.nav>
    </aside>
  );
}
