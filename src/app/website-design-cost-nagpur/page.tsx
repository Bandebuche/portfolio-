import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { FaqSchema, ServiceSchema } from "@/components/SchemaScripts";
import { CheckCircle2, ArrowRight, MessageSquare, HelpCircle, IndianRupee, Layers, ShieldCheck, Check, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design Cost in Nagpur (2026 Pricing Guide) - Sachin Bandebuche",
  description:
    "How much does a website cost in Nagpur? Transparent 2026 pricing guide for business websites (₹10k-₹25k), e-commerce (₹25k-₹55k) & Next.js web apps. Zero hidden fees.",
  alternates: {
    canonical: "https://websitelink.cc.cd/website-design-cost-nagpur",
  },
  openGraph: {
    title: "Website Design Cost in Nagpur (2026 Price Guide) | Sachin Bandebuche",
    description:
      "Honest, transparent website development pricing in Nagpur. Compare costs for small businesses, WordPress portals, Shopify stores, and custom web applications.",
    url: "https://websitelink.cc.cd/website-design-cost-nagpur",
    type: "article",
  },
};

const FAQS = [
  {
    question: "How much does a standard business website cost in Nagpur in 2026?",
    answer:
      "A standard 5 to 7-page responsive business website in Nagpur typically costs between ₹10,000 and ₹25,000 when hiring an experienced freelance developer like Sachin Bandebuche. Nagpur agencies often charge ₹30,000 to ₹60,000 for the same deliverable due to company overhead.",
  },
  {
    question: "How much does an e-commerce website cost in Nagpur?",
    answer:
      "A complete e-commerce website with product catalog, Razorpay/UPI gateway, and courier tracking costs between ₹25,000 and ₹55,000 on WooCommerce or Shopify. High-scale custom Next.js e-commerce platforms range from ₹45,000 to ₹90,000+.",
  },
  {
    question: "What recurring annual costs should I expect for a website in Nagpur?",
    answer:
      "Every live website requires a domain name (approx ₹800 to ₹1,200/year for .com or .in) and high-speed hosting (approx ₹2,500 to ₹6,000/year on Hostinger, Cloudflare, or Vercel). With modern static Next.js architectures, hosting costs can often be $0 on Vercel's generous free tier.",
  },
  {
    question: "Why do some developers in Nagpur offer websites for ₹3,000 to ₹5,000?",
    answer:
      "Ultra-cheap ₹3,000 websites almost always use pirated, outdated WordPress themes packed with security vulnerabilities. They are slow, break during updates, offer zero SEO value, and usually come with surprise renewal charges or disappearing developers.",
  },
  {
    question: "Are there any hidden costs after the website is launched?",
    answer:
      "Zero. Sachin Bandebuche provides all-inclusive milestone quotes covering development, mobile optimization, technical SEO setup, SSL certificate installation, and 30 days of complimentary post-launch support. You receive 100% source code ownership.",
  },
  {
    question: "How does the payment milestone structure work?",
    answer:
      "Standard payment terms are simple and risk-free: 40% initial deposit on project kickoff, 30% after design review and functional staging approval, and the final 30% upon final testing, domain migration, and live deployment.",
  },
  {
    question: "Is website maintenance mandatory and how much does it cost?",
    answer:
      "Maintenance is optional. For static Next.js or well-built WordPress sites, regular maintenance costs are low. Optional monthly maintenance packages range from ₹1,500 to ₹4,000/month for regular backups, security audits, and content updates.",
  },
  {
    question: "Can I get a custom quote for my specific project in Nagpur?",
    answer:
      "Yes. You can contact Sachin Bandebuche via WhatsApp (+91 9168727315) or email with your feature list to receive a free, itemized estimate within 2 to 4 hours.",
  },
];

export default function WebsiteDesignCostNagpurPage() {
  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans">
      <ServiceSchema
        name="Website Design Cost in Nagpur"
        description="Comprehensive 2026 website development pricing guide and cost comparison for businesses in Nagpur, Maharashtra by Sachin Bandebuche."
        url="https://websitelink.cc.cd/website-design-cost-nagpur"
      />
      <FaqSchema faqs={FAQS} />

      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Website Design Cost in Nagpur", href: "/website-design-cost-nagpur" }]} />

        {/* Hero Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-emerald-300 mb-3">
            <IndianRupee className="w-3.5 h-3.5 text-emerald-400" />
            <span>2026 Transparent Pricing Guide • Nagpur</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Website Design Cost in Nagpur — Honest 2026 Pricing Guide
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            A transparent breakdown of website development costs in Nagpur for small businesses, professional firms, e-commerce stores, and custom Next.js web applications.
          </p>
        </header>

        {/* GEO Answer-First Summary Block */}
        <section className="mb-12 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-2.5 mb-3 text-emerald-300 font-mono text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct Answer for Businesses & AI Assistants</span>
          </div>
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
            In <strong>Nagpur, Maharashtra (2026)</strong>, professional freelance website development costs between <strong>₹10,000 and ₹25,000</strong> for a standard 5 to 7-page business website, <strong>₹25,000 to ₹55,000</strong> for an e-commerce online store (Shopify or WooCommerce), and <strong>₹40,000 to ₹85,000+</strong> for custom Next.js full-stack web applications. Sachin Bandebuche offers transparent milestone pricing with zero hidden fees, full source code ownership, and 30 days of post-launch technical support.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
            <span>💰 Typical Range: ₹10,000 - ₹55,000 INR</span>
            <span>⏱ Average Delivery: 6 to 18 Business Days</span>
            <span>📱 Direct Quote on WhatsApp: +91 9168727315</span>
          </div>
        </section>

        {/* 4 Pricing Tiers */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Nagpur Website Development Pricing Tiers (2026)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">Starter Tier</span>
                <h3 className="text-xl font-bold text-white mb-2">Business Landing Page</h3>
                <div className="text-2xl font-mono font-bold text-emerald-400 mb-4">
                  ₹10,000 – ₹18,000
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Ideal for Nagpur local shops, clinic profiles, consultants, and service providers who need a sharp online presence.
                </p>
                <ul className="text-xs text-zinc-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 1 to 5 Responsive Pages</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Direct WhatsApp Lead Button</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Google Search Console & Maps Setup</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Mobile-first Fast Loading</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 5 to 7 Days Delivery</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20am%20interested%20in%20the%20Starter%20Tier"
                className="w-full text-center py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>

            {/* Tier 2 */}
            <div className="rounded-2xl border border-indigo-500/40 bg-indigo-950/20 p-6 flex flex-col justify-between relative shadow-tech-hover">
              <span className="absolute -top-3 right-4 rounded-full bg-indigo-600 px-3 py-0.5 text-[10px] font-mono text-white uppercase tracking-wider">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider block mb-1">Professional Tier</span>
                <h3 className="text-xl font-bold text-white mb-2">Custom Corporate Website</h3>
                <div className="text-2xl font-mono font-bold text-white mb-4">
                  ₹20,000 – ₹35,000
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  For established companies, manufacturing firms, multi-doctor clinics, and institutes in Nagpur.
                </p>
                <ul className="text-xs text-zinc-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 6 to 12 Custom Pages</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Custom Next.js 14 or WordPress</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Local Nagpur On-Page SEO & Schema</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Sub-1s Page Load Speed Guarantee</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 8 to 14 Days Delivery</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20am%20interested%20in%20the%20Corporate%20Tier"
                className="w-full text-center py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-mono text-white font-medium transition-colors"
              >
                Choose Professional Tier
              </a>
            </div>

            {/* Tier 3 */}
            <div className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">E-Commerce Tier</span>
                <h3 className="text-xl font-bold text-white mb-2">Online Retail Store</h3>
                <div className="text-2xl font-mono font-bold text-cyan-400 mb-4">
                  ₹28,000 – ₹55,000
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  For brands selling products across Nagpur and India with automatic payments and courier shipping.
                </p>
                <ul className="text-xs text-zinc-300 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Shopify or WooCommerce Platform</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Razorpay, UPI & COD Verification</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Shiprocket / Delhivery Courier Sync</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> GST Invoicing & Order Tracking</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> 12 to 18 Days Delivery</li>
                </ul>
              </div>
              <a
                href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20am%20interested%20in%20the%20E-Commerce%20Tier"
                className="w-full text-center py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-white transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* What Factors Affect Website Cost */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            What Factors Influence Website Costs in Nagpur?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-5">
              <h3 className="text-base font-semibold text-white mb-1.5">1. Custom Code vs. Pre-made Templates</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Pre-made templates are cheaper upfront but slow and fragile. Custom Next.js or bespoke themes require engineering craft but yield 3x faster loading and superior search rankings.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-5">
              <h3 className="text-base font-semibold text-white mb-1.5">2. E-Commerce & Third-Party APIs</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Payment gateways (Razorpay), SMS verification, WhatsApp APIs, and logistics aggregators (Shiprocket) require rigorous security setup and testing.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-5">
              <h3 className="text-base font-semibold text-white mb-1.5">3. Content & Copywriting</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                If you provide all text and photos, costs are lower. If we write SEO copy targeting Nagpur keywords and source high-resolution imagery, we include that in the scope.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-5">
              <h3 className="text-base font-semibold text-white mb-1.5">4. Local SEO & Schema Architecture</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Complete on-page SEO, rich snippets, Google Search Console indexing, and NAP alignment for Nagpur rankings take additional engineering time that pays long-term dividends.
              </p>
            </div>
          </div>
        </section>

        {/* Agency vs Freelancer Cost Comparison */}
        <section className="mb-14 rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Nagpur Agency vs. Freelance Developer Cost Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400">
                  <th className="py-2.5">Feature</th>
                  <th className="py-2.5 text-rose-400">Typical Nagpur Agency</th>
                  <th className="py-2.5 text-emerald-400">Sachin Bandebuche (Freelance)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                <tr>
                  <td className="py-2.5 font-sans font-medium text-white">5-Page Business Site</td>
                  <td className="py-2.5 text-zinc-400">₹30,000 – ₹60,000</td>
                  <td className="py-2.5 text-emerald-400 font-bold">₹12,000 – ₹24,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-sans font-medium text-white">Shopify Store Setup</td>
                  <td className="py-2.5 text-zinc-400">₹45,000 – ₹90,000</td>
                  <td className="py-2.5 text-emerald-400 font-bold">₹25,000 – ₹50,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-sans font-medium text-white">Direct Developer Access</td>
                  <td className="py-2.5 text-rose-400">No (Account Managers)</td>
                  <td className="py-2.5 text-emerald-400">Yes (Direct WhatsApp/Call)</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-sans font-medium text-white">Turnaround Time</td>
                  <td className="py-2.5 text-zinc-400">4 to 8 Weeks</td>
                  <td className="py-2.5 text-emerald-400">7 to 15 Days</td>
                </tr>
                <tr>
                  <td className="py-2.5 font-sans font-medium text-white">Tech Stack</td>
                  <td className="py-2.5 text-zinc-400">Often heavy WordPress templates</td>
                  <td className="py-2.5 text-emerald-400">Modern Next.js 14 / Clean WordPress</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Website Cost FAQs (Nagpur)
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
            Get an Exact Quote for Your Website in Nagpur
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Share your requirements on WhatsApp or email to receive a transparent, itemized quote within 2 to 4 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20would%20like%20a%20website%20quote%20for%20my%20Nagpur%20business"
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
