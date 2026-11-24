"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Profile } from "@/types/portfolio";
import { ArrowUpRight, MessageSquare, ChevronDown, Menu, X, IndianRupee, Layers } from "lucide-react";

interface NavbarProps {
  profile: Profile;
}

export function Navbar({ profile }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const services = [
    { label: "Website Developer Nagpur", href: "/website-developer-nagpur" },
    { label: "WordPress Developer", href: "/wordpress-developer-nagpur" },
    { label: "Shopify Developer", href: "/shopify-developer-nagpur" },
    { label: "E-Commerce Development", href: "/ecommerce-website-development-nagpur" },
    { label: "Website Design Cost (Pricing)", href: "/website-design-cost-nagpur" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-safe bg-[#08090D]/90 backdrop-blur-xl border-b border-white/[0.08] transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Brand: Monogram + Name + Live Status */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform hover:opacity-95"
        >
          {/* Developer Monogram Badge */}
          <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-xs font-mono font-bold text-white group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-all">
            SB
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-white font-sans">
                {profile.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Nagpur, IN
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 hidden sm:block font-mono">
              Website Developer Nagpur
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-md text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono tracking-wide rounded-md text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <span>Services</span>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-64 pt-2 shadow-2xl z-50">
                <div className="rounded-xl border border-white/10 bg-[#0d0f16] p-2 backdrop-blur-2xl shadow-tech-card">
                  {services.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      onClick={() => setServicesDropdown(false)}
                      className="block px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#projects"
            className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-md text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            Projects (35+)
          </Link>

          <Link
            href="/website-design-cost-nagpur"
            className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-md text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            Cost Guide
          </Link>

          <Link
            href="/about"
            className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-md text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-md text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* WhatsApp Direct */}
          <a
            href={profile.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 py-2 text-xs font-semibold text-zinc-950 transition-all active:scale-95 shadow-md shadow-emerald-500/20"
          >
            <MessageSquare className="w-3.5 h-3.5 text-zinc-950" />
            <span className="hidden sm:inline">WhatsApp Quote</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#0c0e14] px-4 pt-3 pb-6">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-md"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-3 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              Services in Nagpur:
            </div>
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                onClick={() => setMobileMenuOpen(false)}
                className="pl-5 pr-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-indigo-300 rounded-md"
              >
                • {svc.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-white/[0.06]">
              <Link
                href="/#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white rounded-md"
              >
                All Projects (35+ Shipped)
              </Link>
              <Link
                href="/website-design-cost-nagpur"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-mono text-emerald-400 hover:underline"
              >
                Website Design Cost in Nagpur (2026)
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white rounded-md"
              >
                About Sachin Bandebuche
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white rounded-md"
              >
                Contact & Office Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
