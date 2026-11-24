import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { FaqSchema, ServiceSchema } from "@/components/SchemaScripts";
import { CheckCircle2, ArrowRight, MessageSquare, HelpCircle, Layers, Zap, Shield, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress Developer in Nagpur | Custom Themes & WooCommerce - Sachin Bandebuche",
  description:
    "Looking for a reliable WordPress developer in Nagpur? Sachin Bandebuche builds clean, fast, mobile-friendly WordPress websites with zero plugin bloat. Call +91 9168727315.",
  alternates: {
    canonical: "https://websitelink.cc.cd/wordpress-developer-nagpur",
  },
  openGraph: {
    title: "WordPress Developer in Nagpur | Sachin Bandebuche",
    description:
      "Expert WordPress developer based in Nagpur, Maharashtra. Custom theme development, speed optimization, Elementor, and WooCommerce stores.",
    url: "https://websitelink.cc.cd/wordpress-developer-nagpur",
    type: "article",
  },
};

const FAQS = [
  {
    question: "Why should I hire Sachin Bandebuche for WordPress development in Nagpur?",
    answer:
      "Unlike developers who install 40+ plugins that slow down your website, Sachin builds lean, custom WordPress websites using lightweight page builders or custom Gutenberg blocks. This guarantees faster loading speeds, lower vulnerability risks, and a simpler editing experience.",
  },
  {
    question: "How much does a WordPress website cost in Nagpur?",
    answer:
      "A professionally developed custom WordPress business website in Nagpur typically costs between ₹12,000 and ₹30,000, depending on the number of pages, custom features, and design requirements. A WooCommerce e-commerce site starts around ₹25,000 to ₹50,000.",
  },
  {
    question: "Can I easily edit text and images on my WordPress website myself?",
    answer:
      "Yes. You will receive an easy-to-use admin panel where you can update text, swap photos, publish blog articles, and add new services in seconds without touching any code. Sachin also provides a personal video walkthrough showing how to manage your website.",
  },
  {
    question: "How do you make WordPress websites fast and secure?",
    answer:
      "We implement Redis/memcached object caching, lightweight asset loading, WebP image compression, Cloudflare CDN integration, secure SSL configuration, disabled XML-RPC, and two-factor authentication to keep your WordPress installation lightning-fast and hacker-resistant.",
  },
  {
    question: "Can you fix or redesign my existing slow WordPress site in Nagpur?",
    answer:
      "Yes. We specialize in WordPress speed audits, plugin cleanup, database optimization, broken link repairs, mobile responsiveness fixes, and full visual revamps for existing Nagpur business websites.",
  },
  {
    question: "Do you build WooCommerce online stores in Nagpur?",
    answer:
      "Yes. We design and launch WooCommerce stores with Indian payment gateways (Razorpay, Cashfree, UPI, Paytm), shipping rate rules, product variation filters, customer invoice generators, and automated WhatsApp order notifications.",
  },
  {
    question: "How long does WordPress website development take?",
    answer:
      "Standard 5 to 8-page WordPress business websites take approximately 6 to 10 business days. E-commerce WooCommerce stores take about 12 to 18 business days from content approval to live deployment.",
  },
  {
    question: "Will my WordPress website rank on Google in Nagpur?",
    answer:
      "Yes. Every build includes technical on-page SEO: clean permalinks, XML sitemaps, RankMath/Yoast setup, Schema.org structured data, and local Nagpur keyword alignment to help your business rank on Google search and Maps.",
  },
];

export default function WordPressDeveloperNagpurPage() {
  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans">
      <ServiceSchema
        name="WordPress Developer in Nagpur"
        description="Custom WordPress theme development, WooCommerce online stores, speed optimization, and local SEO in Nagpur by freelance engineer Sachin Bandebuche."
        url="https://websitelink.cc.cd/wordpress-developer-nagpur"
      />
      <FaqSchema faqs={FAQS} />

      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "WordPress Developer in Nagpur", href: "/wordpress-developer-nagpur" }]} />

        {/* Hero Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-emerald-300 mb-3">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>WordPress Solutions • Nagpur, Maharashtra</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            WordPress Developer in Nagpur — Clean Code, High Speed & Zero Bloat
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Custom WordPress themes, Elementor landing pages, and WooCommerce platforms designed to load under 1 second, rank locally on Google, and convert visitors into inquiries.
          </p>
        </header>

        {/* GEO Answer-First Summary Block */}
        <section className="mb-12 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-2.5 mb-3 text-emerald-300 font-mono text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct Summary for Nagpur Businesses & Search Engines</span>
          </div>
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
            <strong>Sachin Bandebuche</strong> is an experienced freelance WordPress developer based in <strong>Nagpur, India</strong>. He specializes in designing lightweight, SEO-optimized, and secure WordPress websites for small businesses, professional firms, healthcare clinics, and retail stores across Nagpur. Unlike bloated agency templates, Sachin&apos;s builds feature clean code architecture, sub-second load times, and custom-tailored admin controls.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
            <span>📍 City: Nagpur, Maharashtra</span>
            <span>🛠 Focus: Custom Themes, WooCommerce, Speed Optimization, Elementor</span>
            <span>📱 Direct Contact: +91 9168727315 / WhatsApp Available</span>
          </div>
        </section>

        {/* The Problem with Typical Nagpur WordPress Sites */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            The Problem with Typical WordPress Websites (And How We Fix It)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-6">
              <h3 className="text-lg font-semibold text-rose-300 mb-2">Common Problem: Heavy Bloat</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Many developers install 30 to 50 unnecessary plugins and pre-made pirated themes. The result is a slow website that takes 6+ seconds to load and crashes frequently.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-6">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">Our Solution: Clean Stack</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We use minimal, high-grade plugins, lightweight CSS, native Gutenberg or optimized Elementor, and server-level caching. Your site loads in under 1 second.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/10 p-6">
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">Result: Better Google Rankings</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Google prioritizes fast websites that pass Core Web Vitals. Our clean WordPress builds outrank sluggish competitors in Nagpur local search results.
              </p>
            </div>
          </div>
        </section>

        {/* WordPress Services Offered */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Custom WordPress Development Services in Nagpur
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Custom Business Websites on WordPress
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Built specifically for Nagpur doctors, advocates, manufacturing firms, chartered accountants, real estate developers, and consultancies. Every page includes clear calls to action, WhatsApp chat routing, and fast inquiry forms.
              </p>
              <span className="text-xs font-mono text-emerald-400">Included: Mobile optimization, Google Analytics, SSL, and Contact Forms</span>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                2. WooCommerce E-Commerce Store Development
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Complete online store functionality on WordPress. Manage products, stock levels, discount coupons, and customer orders. Integrated with Razorpay, Cashfree, UPI, and automatic invoice generation for Indian GST billing.
              </p>
              <Link href="/ecommerce-website-development-nagpur" className="text-xs font-mono text-indigo-400 hover:underline">
                Read more about our Nagpur E-Commerce Development →
              </Link>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                3. WordPress Speed Optimization & Security Hardening
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                If your existing WordPress website is sluggish or infected with malware, we audit database queries, eliminate redundant scripts, compress media assets, and implement strict firewall rules.
              </p>
              <span className="text-xs font-mono text-cyan-400">Target Benchmark: 90+ Score on Google PageSpeed Insights</span>
            </div>
          </div>
        </section>

        {/* Technical Features Strip */}
        <section className="mb-14 rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Technical Standards Included with Every Nagpur WordPress Project
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
              <Zap className="w-5 h-5 text-emerald-400 mb-1" />
              <h3 className="text-xs font-bold text-white">Sub-1s LCP</h3>
              <p className="text-[11px] text-zinc-400">Ultra-fast server response and compressed assets.</p>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
              <Search className="w-5 h-5 text-indigo-400 mb-1" />
              <h3 className="text-xs font-bold text-white">Yoast / RankMath SEO</h3>
              <p className="text-[11px] text-zinc-400">Sitemaps, OpenGraph cards, and schema tags.</p>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
              <Shield className="w-5 h-5 text-cyan-400 mb-1" />
              <h3 className="text-xs font-bold text-white">Security Guard</h3>
              <p className="text-[11px] text-zinc-400">Anti-spam, disabled brute-force attacks, SSL.</p>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
              <Layers className="w-5 h-5 text-violet-400 mb-1" />
              <h3 className="text-xs font-bold text-white">100% Mobile Fluid</h3>
              <p className="text-[11px] text-zinc-400">Flawless on iPhones, iPads, and Android screens.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              WordPress Development FAQs (Nagpur)
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.08] bg-surface-card p-5 sm:p-6">
                <h3 className="text-base font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Build a Fast WordPress Website in Nagpur
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Discuss your requirements with Sachin Bandebuche and get a personalized project roadmap and quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20need%20a%20WordPress%20developer%20in%20Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all"
            >
              <MessageSquare className="w-4 h-4 text-zinc-950" />
              <span>WhatsApp: +91 9168727315</span>
            </a>
            <Link
              href="/website-design-cost-nagpur"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-xs sm:text-sm font-mono transition-all"
            >
              <span>Compare Nagpur Pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer profile={DEFAULT_PROFILE} />
    </div>
  );
}
