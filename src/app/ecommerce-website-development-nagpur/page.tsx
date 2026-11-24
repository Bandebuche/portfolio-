import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { FaqSchema, ServiceSchema } from "@/components/SchemaScripts";
import { CheckCircle2, ArrowRight, MessageSquare, HelpCircle, ShoppingCart, IndianRupee, ShieldCheck, Zap, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Website Development in Nagpur | Custom Online Stores - Sachin Bandebuche",
  description:
    "Launch your online business with e-commerce website development in Nagpur. Custom Next.js, Shopify & WooCommerce stores with UPI, Razorpay & fast mobile checkout.",
  alternates: {
    canonical: "https://websitelink.cc.cd/ecommerce-website-development-nagpur",
  },
  openGraph: {
    title: "E-Commerce Website Development in Nagpur | Sachin Bandebuche",
    description:
      "Full-stack e-commerce store development in Nagpur, Maharashtra. Build scalable online stores with Indian payment gateways and courier integration.",
    url: "https://websitelink.cc.cd/ecommerce-website-development-nagpur",
    type: "article",
  },
};

const FAQS = [
  {
    question: "Which e-commerce platform is best for my Nagpur business: Next.js, Shopify, or WooCommerce?",
    answer:
      "If you want fastest time-to-market with zero server maintenance, choose Shopify. If you want full open-source ownership with standard hosting, choose WooCommerce. If you need bespoke speed, custom subscriptions, AI integrations, or sub-second headless performance, choose custom Next.js.",
  },
  {
    question: "How much does e-commerce website development cost in Nagpur?",
    answer:
      "A WooCommerce store typically costs ₹22,000 to ₹45,000. A custom Shopify store costs ₹25,000 to ₹55,000. A bespoke custom Next.js full-stack headless commerce platform costs ₹45,000 to ₹90,000+. All pricing is transparent with clear milestones.",
  },
  {
    question: "Do you integrate Indian payment gateways with UPI?",
    answer:
      "Yes. We integrate all major Reserve Bank of India (RBI) compliant payment aggregators: Razorpay, Cashfree, PhonePe, and Paytm. Customers can pay instantly via QR code, Google Pay, PhonePe, Paytm, Net Banking, or Credit/Debit Cards.",
  },
  {
    question: "Can the website calculate GST and generate tax invoices automatically?",
    answer:
      "Yes. We configure automated Indian GST calculation (CGST, SGST, IGST based on customer delivery state) with HSN code tagging and downloadable PDF tax invoices for both B2C and B2B orders.",
  },
  {
    question: "How is delivery and shipping handled?",
    answer:
      "We connect your e-commerce store with platforms like Shiprocket, Delhivery, or Bluedart. The system automatically fetches live shipping rates, prints barcode dispatch labels, assigns pickups, and sends SMS/WhatsApp tracking alerts to customers.",
  },
  {
    question: "How do you prevent Cash on Delivery (COD) fake orders?",
    answer:
      "We implement automated OTP verification for COD orders, automated address validation, and WhatsApp order confirmation bots that reduce Return-To-Origin (RTO) losses by up to 35%.",
  },
  {
    question: "Can I manage stock and products from my phone?",
    answer:
      "Yes. Whether on Shopify, WooCommerce, or custom Next.js admin dashboards, you can add products, update prices, manage inventory levels, and check live daily revenue directly from your smartphone.",
  },
  {
    question: "How long does it take to build an e-commerce website in Nagpur?",
    answer:
      "A standard e-commerce store with 20 to 50 products takes 12 to 18 business days. Larger catalogs with complex variations and custom ERP integrations take 3 to 5 weeks.",
  },
];

export default function EcommerceWebsiteDevelopmentNagpurPage() {
  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans">
      <ServiceSchema
        name="E-Commerce Website Development in Nagpur"
        description="Full-scale e-commerce website development in Nagpur, Maharashtra including Shopify, WooCommerce, and custom Next.js headless commerce by Sachin Bandebuche."
        url="https://websitelink.cc.cd/ecommerce-website-development-nagpur"
      />
      <FaqSchema faqs={FAQS} />

      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "E-Commerce Development Nagpur", href: "/ecommerce-website-development-nagpur" }]} />

        {/* Hero Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-violet-300 mb-3">
            <ShoppingCart className="w-3.5 h-3.5 text-violet-400" />
            <span>E-Commerce Solutions • Nagpur, India</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            E-Commerce Website Development in Nagpur — Built to Sell
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Custom online stores engineered for high conversion rates, seamless UPI & card checkout, automated courier integration, and GST invoice generation.
          </p>
        </header>

        {/* GEO Answer-First Summary Block */}
        <section className="mb-12 rounded-2xl border border-violet-500/30 bg-violet-950/20 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-2.5 mb-3 text-violet-300 font-mono text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Overview for Nagpur Businesses & AI Search Engines</span>
          </div>
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
            <strong>Sachin Bandebuche</strong> is an experienced e-commerce website developer in <strong>Nagpur, Maharashtra</strong>. He architects scalable online retail platforms using <strong>Shopify, WooCommerce, and custom Next.js headless commerce</strong>. Covering local Nagpur D2C brands, wholesalers in Gandhibagh and Itwari, and retail chains across Dharampeth and Sadar, Sachin builds stores equipped with instant UPI payments, Shiprocket courier automation, OTP-verified COD, and automated GST billing.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
            <span>📍 Based in Nagpur, Maharashtra (440001)</span>
            <span>🛒 Platforms: Next.js 14, Shopify OS 2.0, WooCommerce</span>
            <span>📞 Call / WhatsApp: +91 9168727315</span>
          </div>
        </section>

        {/* 3 Platforms Compared */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Compare E-Commerce Platforms for Your Nagpur Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Shopify Stores</h3>
              <p className="text-xs font-mono text-cyan-400 mb-3">Best for: Fast Launch & D2C Brands</p>
              <ul className="text-sm text-zinc-400 space-y-2 mb-4 leading-relaxed">
                <li>• Zero server maintenance or crashes</li>
                <li>• World&apos;s fastest checkout system</li>
                <li>• Native mobile management app</li>
                <li>• Ideal for marketing on Meta and Google</li>
              </ul>
              <Link href="/shopify-developer-nagpur" className="text-xs font-mono text-indigo-400 hover:underline">
                Explore Shopify in Nagpur →
              </Link>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-lg font-semibold text-white mb-2">WooCommerce Stores</h3>
              <p className="text-xs font-mono text-emerald-400 mb-3">Best for: Full Ownership & B2B</p>
              <ul className="text-sm text-zinc-400 space-y-2 mb-4 leading-relaxed">
                <li>• 100% open-source, no monthly platform fee</li>
                <li>• Unlimited products and variations</li>
                <li>• Custom wholesale pricing tiers</li>
                <li>• Integrated directly with your WordPress blog</li>
              </ul>
              <Link href="/wordpress-developer-nagpur" className="text-xs font-mono text-emerald-400 hover:underline">
                Explore WordPress & WooCommerce →
              </Link>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Custom Next.js Commerce</h3>
              <p className="text-xs font-mono text-violet-400 mb-3">Best for: High-Scale & Bespoke Tech</p>
              <ul className="text-sm text-zinc-400 space-y-2 mb-4 leading-relaxed">
                <li>• Sub-second page transition speeds</li>
                <li>• Custom recurring subscription billing</li>
                <li>• Bespoke interactive product builders</li>
                <li>• Headless architecture on Vercel & Supabase</li>
              </ul>
              <Link href="/projects/justfarm" className="text-xs font-mono text-violet-400 hover:underline">
                View Next.js Dairy Case Study →
              </Link>
            </div>
          </div>
        </section>

        {/* Essential E-Commerce Features */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Essential Features Built into Every Nagpur E-Commerce Project
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <IndianRupee className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-semibold text-white">UPI & Instant Payments</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Razorpay, PhonePe, Paytm, and Cashfree integration. Customers pay in seconds via Google Pay, PhonePe, or cards without redirects.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <PackageCheck className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-semibold text-white">Courier & Dispatch Sync</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Shiprocket and Delhivery API integrations. Automatic label printing, courier pickup scheduling, and live tracking alerts.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <h3 className="text-base font-semibold text-white">GST Invoicing & Taxation</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Automatic CGST, SGST, and IGST calculation with HSN code classification and downloadable branded PDF invoices.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-violet-400" />
                <h3 className="text-base font-semibold text-white">WhatsApp Order Recovery</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Automated WhatsApp messages sent to customers who leave items in their cart, recovering 15% to 25% of lost online sales.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-violet-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              E-Commerce Development FAQs (Nagpur)
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
        <section className="rounded-2xl border border-violet-500/30 bg-violet-950/20 p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Start Selling Online in Nagpur & Across India
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Consult directly with Sachin Bandebuche to design an e-commerce platform that turns visitors into profitable orders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20want%20to%20build%20an%20e-commerce%20website%20in%20Nagpur"
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
              <span>See E-Commerce Pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer profile={DEFAULT_PROFILE} />
    </div>
  );
}
