import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { MapPin, Mail, Phone, MessageSquare, CheckCircle2, ArrowRight, Code2, Sparkles, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Sachin Bandebuche | Website Developer in Nagpur, Maharashtra",
  description:
    "Meet Sachin Bandebuche, freelance website developer based in Nagpur with 4+ years of experience and 35+ deployed production websites. Contact +91 9168727315.",
  alternates: {
    canonical: "https://websitelink.cc.cd/about",
  },
  openGraph: {
    title: "About Sachin Bandebuche — Website Developer in Nagpur",
    description:
      "Full-stack engineer and freelance web developer based in Nagpur, India. Learn about Sachin's engineering approach, portfolio, and contact details.",
    url: "https://websitelink.cc.cd/about",
    type: "profile",
  },
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sachin Bandebuche",
    jobTitle: "Freelance Website Developer & Full-Stack Engineer",
    description:
      "Sachin Bandebuche is a freelance website developer based in Nagpur, Maharashtra, India specializing in custom Next.js, WordPress, Shopify, and e-commerce platforms.",
    url: "https://websitelink.cc.cd/about",
    image: "https://websitelink.cc.cd/logo.png",
    email: "sachinbandebuche@gmail.com",
    telephone: "+91 9168727315",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/Bandebuche",
      "https://www.linkedin.com/in/sachin-bandebuche-47b1a8257",
      "https://sbresume.lovable.app/",
    ],
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Breadcrumbs items={[{ name: "About Sachin Bandebuche", href: "/about" }]} />

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Developer Profile & Biography</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            About Sachin Bandebuche — Website Developer in Nagpur
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Full-stack software engineer and freelance web developer helping Nagpur businesses and international clients engineer fast, high-converting digital products.
          </p>
        </header>

        {/* NAP Fact Card for Google & GEO Citations */}
        <section className="mb-12 rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
          <h2 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-4">
            Official Developer Information (NAP Details)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-mono">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="text-zinc-500">Name:</span>
              <strong className="text-white font-sans">Sachin Bandebuche</strong>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Nagpur, Maharashtra, India (440001)</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Phone className="w-4 h-4 text-cyan-400" />
              <a href="tel:+919168727315" className="hover:text-white underline">+91 9168727315</a>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Mail className="w-4 h-4 text-indigo-400" />
              <a href="mailto:sachinbandebuche@gmail.com" className="hover:text-white underline">sachinbandebuche@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="text-zinc-500">Experience:</span>
              <span>4+ Years in Full-Stack Web Development</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="text-zinc-500">Shipped:</span>
              <span>35+ Live Production Websites</span>
            </div>
          </div>
        </section>

        {/* Story & Philosophy */}
        <article className="space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed mb-14">
          <section className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Who I Am & What I Do
            </h2>
            <p className="mb-4">
              I am an independent software engineer and website developer based in Nagpur, Maharashtra. Over the past 4+ years, I have built web solutions ranging from high-converting corporate sites for local Nagpur manufacturers and clinics, to venture-backed SaaS platforms and fast e-commerce stores across India.
            </p>
            <p>
              My goal is simple: <strong>to make high-end Silicon Valley web engineering accessible to businesses in Nagpur without bloated agency pricing.</strong> Every website I ship is coded for sub-second speed, flawless mobile usability, and high visibility on Google search.
            </p>
          </section>

          <section className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Core Engineering Philosophy
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Performance-First:</strong> No sluggish 8-second page loads. We use Next.js 14 App Router, image optimization, and edge CDN delivery to keep load times under 1 second.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Communication:</strong> You work directly with me. No junior interns, no account managers, and no inflated promises.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Full Asset Ownership:</strong> You own 100% of your domain, hosting, and code from day one. Zero vendor lock-in.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Modern Technical SEO:</strong> Schema markup, Google Search Console indexing, and local keyword alignment are baked into every site.
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Tech Stack & Toolchain
            </h2>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {[
                "Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "WordPress & WooCommerce",
                "Shopify Liquid", "FastAPI & Python", "PostgreSQL / Supabase", "Vercel Edge",
                "Cloudflare CDN", "Razorpay / UPI", "Shiprocket API", "Git / GitHub"
              ].map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-black/40 px-3 py-1 text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </article>

        {/* CTA */}
        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Let&apos;s Connect in Nagpur
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Whether you need a new website, a redesign of an existing site, or custom web application architecture, I am ready to collaborate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20would%20like%20to%20discuss%20a%20website%20project%20in%20Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all"
            >
              <MessageSquare className="w-4 h-4 text-zinc-950" />
              <span>WhatsApp: +91 9168727315</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-xs sm:text-sm font-mono transition-all"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer profile={DEFAULT_PROFILE} />
    </div>
  );
}
