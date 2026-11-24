"use client";

import React from "react";
import Link from "next/link";
import { Profile } from "@/types/portfolio";
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-white/[0.08] bg-[#050608] pb-20 pt-16 text-xs text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Footer Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: NAP Details & Bio */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-xs font-mono font-bold text-white">
                SB
              </div>
              <span className="font-semibold text-white text-sm">Sachin Bandebuche</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Freelance full-stack website developer based in Nagpur, Maharashtra. Building fast, mobile-first business websites, Next.js web applications, WordPress, and Shopify stores.
            </p>
            <div className="space-y-1.5 text-[11px] font-mono text-zinc-400">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Nagpur, Maharashtra, India (440001)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:+919168727315" className="hover:text-white underline">+91 9168727315</a>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <a href="mailto:sachinbandebuche@gmail.com" className="hover:text-white underline">sachinbandebuche@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Column 2: Nagpur Services */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-3">
              Web Services in Nagpur
            </h3>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <Link href="/website-developer-nagpur" className="hover:text-indigo-300 transition-colors">
                  • Website Developer Nagpur
                </Link>
              </li>
              <li>
                <Link href="/wordpress-developer-nagpur" className="hover:text-emerald-300 transition-colors">
                  • WordPress Developer Nagpur
                </Link>
              </li>
              <li>
                <Link href="/shopify-developer-nagpur" className="hover:text-cyan-300 transition-colors">
                  • Shopify Developer Nagpur
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-website-development-nagpur" className="hover:text-violet-300 transition-colors">
                  • E-Commerce Development
                </Link>
              </li>
              <li>
                <Link href="/website-design-cost-nagpur" className="hover:text-white transition-colors">
                  • Website Design Cost in Nagpur
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Nagpur & Client Projects */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-3">
              Featured Case Studies
            </h3>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <Link href="/projects/fruffles" className="hover:text-white transition-colors">
                  • Fruffles Desserts (Nagpur QSR)
                </Link>
              </li>
              <li>
                <Link href="/projects/justfarm" className="hover:text-white transition-colors">
                  • Just Farm Dairy (D2C Store)
                </Link>
              </li>
              <li>
                <Link href="/projects/supports-desk" className="hover:text-white transition-colors">
                  • Support Desk (Live Analytics)
                </Link>
              </li>
              <li>
                <Link href="/projects/piush-bhandari" className="hover:text-white transition-colors">
                  • Piush Bhandari (Executive Bio)
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-indigo-400 transition-colors">
                  • View All 35+ Production Sites →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Trust */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-semibold mb-3">
              Quick Links & Connect
            </h3>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  • About Sachin Bandebuche
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  • Contact & Consultation
                </Link>
              </li>
              <li>
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  • View Resume <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  • GitHub Profile (30+ Repos) <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  • LinkedIn Network <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-white/[0.08]">
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp (+91 9168727315)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Sachin Bandebuche. All rights reserved. • Website Developer in Nagpur, Maharashtra, India.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Core Web Vitals Passed</span>
            </span>
            <span>•</span>
            <Link href="/llms.txt" className="hover:text-zinc-300 transition-colors">
              llms.txt
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-zinc-300 transition-colors">
              sitemap.xml
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
