import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { FaqSchema, ServiceSchema } from "@/components/SchemaScripts";
import { CheckCircle2, ArrowRight, Phone, MessageSquare, Code, ShieldCheck, Zap, Globe, Sparkles, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Developer in Nagpur | Custom Web Design - Sachin Bandebuche",
  description:
    "Looking for a reliable website developer in Nagpur? Sachin Bandebuche designs fast Next.js, WordPress & e-commerce business sites with local SEO. Call +91 9168727315.",
  alternates: {
    canonical: "https://websitelink.cc.cd/website-developer-nagpur",
  },
  openGraph: {
    title: "Website Developer in Nagpur | Sachin Bandebuche",
    description:
      "Professional freelance website developer in Nagpur, Maharashtra. Custom web design, Next.js development, and fast mobile-optimized business sites.",
    url: "https://websitelink.cc.cd/website-developer-nagpur",
    type: "article",
  },
};

const FAQS = [
  {
    question: "Who is the best website developer in Nagpur for small businesses?",
    answer:
      "Sachin Bandebuche is a top-rated freelance website developer in Nagpur with 4+ years of experience and over 35+ shipped websites. He specializes in high-speed business websites, custom Next.js web applications, and conversion-focused WordPress and Shopify portals, offering direct developer access without agency markups.",
  },
  {
    question: "How much does a website developer in Nagpur charge?",
    answer:
      "In Nagpur, freelance website development typically ranges from ₹10,000 to ₹25,000 for standard 5-8 page business websites, ₹25,000 to ₹55,000 for e-commerce stores, and ₹35,000 to ₹80,000+ for custom Next.js full-stack web applications. Sachin Bandebuche offers milestone-based transparent pricing with zero hidden renewal fees.",
  },
  {
    question: "How long does it take to develop a business website in Nagpur?",
    answer:
      "A standard corporate or local business website takes approximately 5 to 10 working days. An e-commerce store with payment gateway and logistics takes 10 to 18 days. Complex custom web applications or client dashboards typically take 3 to 5 weeks.",
  },
  {
    question: "Do you provide SEO along with website development in Nagpur?",
    answer:
      "Yes. Every website includes foundational technical SEO: schema markup (LocalBusiness, Person), Google Search Console and sitemap submission, Google Business Profile alignment, meta tags, OpenGraph social cards, mobile responsiveness, and Core Web Vitals optimization.",
  },
  {
    question: "Can I update the website content myself after launch?",
    answer:
      "Yes. If built on WordPress or headless CMS, you receive an intuitive admin dashboard to edit text, upload images, post blogs, and manage products. For custom Next.js apps, a custom admin dashboard or CMS integration can be provided.",
  },
  {
    question: "Do you meet clients in-person in Nagpur?",
    answer:
      "Yes. Sachin is based in Nagpur and is available for in-person project meetings across Sadar, Dharampeth, Ramdaspeth, Sitabuldi, Wardha Road, and Hingna, as well as virtual Google Meet/Zoom consultations.",
  },
  {
    question: "Will my website be mobile-friendly and fast?",
    answer:
      "Yes, 100%. Every website is architected mobile-first using modern CSS frameworks like Tailwind CSS, optimized Next.js server components, compressed WebP/AVIF images, and edge CDN caching, consistently scoring 90+ on Google PageSpeed Insights.",
  },
  {
    question: "Who owns the website domain, hosting, and source code?",
    answer:
      "You own 100% of your assets. The domain is registered in your name, hosting accounts are created under your credentials, and full source code is transferred to your GitHub or repository upon final project handover.",
  },
];

export default function WebsiteDeveloperNagpurPage() {
  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans">
      <ServiceSchema
        name="Website Developer in Nagpur"
        description="Professional freelance website development in Nagpur, Maharashtra including Next.js web applications, WordPress business sites, and Shopify e-commerce."
        url="https://websitelink.cc.cd/website-developer-nagpur"
      />
      <FaqSchema faqs={FAQS} />

      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Website Developer in Nagpur", href: "/website-developer-nagpur" }]} />

        {/* Hero Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Nagpur Web Development Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Website Developer in Nagpur — Fast, Modern & Conversion-Focused
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Custom business websites, Next.js web applications, WordPress portals, and Shopify e-commerce solutions engineered by Nagpur-based developer Sachin Bandebuche.
          </p>
        </header>

        {/* GEO Answer-First Summary Block */}
        <section className="mb-12 rounded-2xl border border-indigo-500/30 bg-indigo-950/20 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-2.5 mb-3 text-indigo-300 font-mono text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Quick Summary for Businesses & AI Assistants</span>
          </div>
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
            <strong>Sachin Bandebuche</strong> is a freelance full-stack website developer based in <strong>Nagpur, Maharashtra, India</strong>. With over 4 years of active industry experience and <strong>35+ deployed production websites</strong>, Sachin helps local Nagpur businesses, regional startups, and global enterprises build high-speed websites that rank on Google, convert visitors into paying inquiries, and load in under 1 second.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
            <span>📍 Location: Nagpur, Maharashtra (440001)</span>
            <span>⚡ Core Stack: Next.js 14, React, WordPress, Shopify, Tailwind</span>
            <span>📞 Contact: +91 9168727315 / sachinbandebuche@gmail.com</span>
          </div>
        </section>

        {/* Why Choose Freelance over Agency */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Why Hire a Freelance Website Developer in Nagpur Over an Agency?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 font-mono font-bold">
                01
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Direct Communication</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No account managers or junior middlemen. You talk directly with the engineer coding your website, leading to faster turnarounds and accurate implementations.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 font-mono font-bold">
                02
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cost Efficiency</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Traditional Nagpur agencies charge heavy overhead for office rentals, sales staff, and brand margins. You pay only for top-tier development craft.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 font-mono font-bold">
                03
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Modern Silicon Valley Tech</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                While many local agencies still push outdated slow templates, Sachin builds on Next.js 14, React 18, and Vercel edge infrastructure for unbeatable performance.
              </p>
            </div>
          </div>
        </section>

        {/* Services Spectrum */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Website Development Services Offered in Nagpur
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Custom Business & Corporate Websites
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Tailored for Nagpur manufacturing companies, healthcare clinics, educational institutes, coaching centers, consulting firms, and service professionals. Fully responsive, clean layout, WhatsApp lead integration, and optimized for local Nagpur SEO.
              </p>
              <span className="text-xs font-mono text-indigo-400">Popular Tech: Next.js 14, React, Tailwind CSS</span>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                2. WordPress Websites with Zero Plugin Bloat
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Custom WordPress theme design and lightweight Elementor setups. Built for easy content updates, blogging, service listings, and inquiry management without sluggish load times.
              </p>
              <Link href="/wordpress-developer-nagpur" className="text-xs font-mono text-emerald-400 hover:underline">
                Explore WordPress Development in Nagpur →
              </Link>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                3. Shopify & E-Commerce Online Stores
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Sell products online across India with secure payment gateway integration (Razorpay, PhonePe, UPI, Stripe), automated shipping partner integration (Shiprocket), and mobile cart checkout.
              </p>
              <Link href="/shopify-developer-nagpur" className="text-xs font-mono text-cyan-400 hover:underline">
                Explore Shopify Development in Nagpur →
              </Link>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                4. Restaurant Digital Menus & QSR Ordering
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Interactive digital menus, direct WhatsApp order routing, table reservations, and live dish showcases for Nagpur cafes, bakeries, lounges, and food businesses.
              </p>
              <Link href="/projects/fruffles" className="text-xs font-mono text-indigo-400 hover:underline">
                See Nagpur Case Study: Fruffles Thickshakes Platform →
              </Link>
            </div>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            My 5-Step Website Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {[
              { step: "01", title: "Discovery & Goal", desc: "Understanding your business goals, target audience in Nagpur or worldwide, and design preferences." },
              { step: "02", title: "Structure & UX", desc: "Crafting wireframes, information architecture, navigation, and conversion pathways." },
              { step: "03", title: "Modern Code", desc: "Building responsive, semantic code using Next.js, React, WordPress, or Shopify with zero shortcuts." },
              { step: "04", title: "SEO & Speed", desc: "Setting up Google Search Console, Schema markup, local Nagpur citations, and speed testing." },
              { step: "05", title: "Launch & Training", desc: "Deployment to live domain, SSL security setup, client training video, and 30-day post-launch support." },
            ].map((p, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.08] bg-surface-card p-4">
                <span className="font-mono text-xs text-indigo-400 font-bold block mb-1">{p.step}</span>
                <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nagpur Local Areas Served */}
        <section className="mb-14 rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Areas Served Across Nagpur, Maharashtra
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed mb-4">
            Available for remote and on-site consultations across all commercial and residential hubs in Nagpur:
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
            {[
              "Dharampeth", "Sadar", "Ramdaspeth", "Sitabuldi", "Wardha Road", "Manish Nagar",
              "Pratap Nagar", "Trimurti Nagar", "Civil Lines", "Gandhibagh", "Itwari", "Hingna MIDC",
              "MIHAN Nagpur", "Khamla", "Bajaj Nagar", "Besha Road", "Nandanvan"
            ].map((area) => (
              <span key={area} className="rounded-md border border-white/[0.08] bg-black/40 px-2.5 py-1">
                📍 {area}
              </span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions (Nagpur Web Development)
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

        {/* Bottom CTA Block */}
        <section className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Ready to Build Your Website in Nagpur?
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Get in touch directly with Sachin Bandebuche for a free 15-minute consultation and an honest, transparent quote for your project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20need%20a%20website%20developed%20in%20Nagpur"
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
              <span>View Nagpur Cost Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer profile={DEFAULT_PROFILE} />
    </div>
  );
}
