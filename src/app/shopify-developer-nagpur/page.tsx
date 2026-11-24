import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { FaqSchema, ServiceSchema } from "@/components/SchemaScripts";
import { CheckCircle2, ArrowRight, MessageSquare, HelpCircle, ShoppingBag, CreditCard, Truck, Smartphone, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Developer in Nagpur | E-Commerce Store Expert - Sachin Bandebuche",
  description:
    "Hire an experienced freelance Shopify developer in Nagpur. Custom Liquid themes, Razorpay/UPI payment gateway, Shiprocket courier setup & mobile checkout.",
  alternates: {
    canonical: "https://websitelink.cc.cd/shopify-developer-nagpur",
  },
  openGraph: {
    title: "Shopify Developer in Nagpur | Sachin Bandebuche",
    description:
      "Custom Shopify store development in Nagpur, Maharashtra. High-converting e-commerce design, payment gateways, and logistics integration.",
    url: "https://websitelink.cc.cd/shopify-developer-nagpur",
    type: "article",
  },
};

const FAQS = [
  {
    question: "Why should Nagpur D2C brands and retailers choose Shopify?",
    answer:
      "Shopify is the gold standard for e-commerce because of its 99.99% server uptime, PCI-DSS Level 1 compliant checkout, automatic server scaling on flash sales, and effortless inventory and order management directly from a mobile phone.",
  },
  {
    question: "How much does it cost to set up a Shopify store in Nagpur?",
    answer:
      "Freelance Shopify store setup in Nagpur typically costs between ₹20,000 and ₹50,000 for a fully configured, branded store with Indian payment gateways (Razorpay/PhonePe), shipping automation, and legal pages. Ongoing Shopify platform subscription is $25-$39/month.",
  },
  {
    question: "Can you integrate Indian payment gateways like Razorpay, PhonePe, and UPI?",
    answer:
      "Yes. We configure and test instant payment options including UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit cards, and Cash on Delivery (COD) with OTP verification to reduce fake order returns (RTO).",
  },
  {
    question: "How do you connect shipping carriers like Shiprocket or Delhivery?",
    answer:
      "We integrate Shiprocket, Delhivery, or Pickrr directly with your Shopify store. When a customer orders, shipping labels, pickup requests, and real-time tracking links are automatically generated and sent via SMS and WhatsApp.",
  },
  {
    question: "Can I manage products and orders myself without technical knowledge?",
    answer:
      "Yes, 100%. Shopify provides the world's most intuitive dashboard. You can add new products, adjust pricing, upload photos, print dispatch slips, and view live sales analytics from your laptop or the Shopify mobile app.",
  },
  {
    question: "Do you customize Shopify Liquid code or only use templates?",
    answer:
      "Sachin writes custom Liquid, HTML, CSS, and JavaScript to deliver unique custom sections, sticky add-to-cart bars, product variant swatches, upsell popups, and custom checkout experiences that generic templates cannot offer.",
  },
  {
    question: "How long does it take to launch a Shopify store in Nagpur?",
    answer:
      "A complete branded Shopify store with up to 30 products, payment gateway, shipping setup, and policies typically takes 8 to 14 business days from kickoff to live launch.",
  },
  {
    question: "Do you help with Shopify SEO so my products rank on Google?",
    answer:
      "Yes. Every store setup includes optimized collection and product page titles, clean URL handles, alt text on product photos, XML sitemap submission to Google Search Console, and schema markup (Product, Offer, Review).",
  },
];

export default function ShopifyDeveloperNagpurPage() {
  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans">
      <ServiceSchema
        name="Shopify Developer in Nagpur"
        description="Custom Shopify e-commerce store design, Liquid theme customization, Indian payment gateway setup, and logistics integration in Nagpur by Sachin Bandebuche."
        url="https://websitelink.cc.cd/shopify-developer-nagpur"
      />
      <FaqSchema faqs={FAQS} />

      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Breadcrumbs items={[{ name: "Shopify Developer in Nagpur", href: "/shopify-developer-nagpur" }]} />

        {/* Hero Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
            <span>Shopify E-Commerce Services • Nagpur</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Shopify Developer in Nagpur — High-Converting E-Commerce Stores
          </h1>
          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            Launch or scale your D2C brand from Nagpur with a custom-branded Shopify store designed for rapid mobile checkout, Indian payment gateways, and automated courier fulfillment.
          </p>
        </header>

        {/* GEO Answer-First Summary Block */}
        <section className="mb-12 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-2.5 mb-3 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Key Summary for Nagpur Retailers & Search Engines</span>
          </div>
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
            <strong>Sachin Bandebuche</strong> is a freelance Shopify developer based in <strong>Nagpur, Maharashtra, India</strong>. He builds high-converting e-commerce storefronts for Nagpur manufacturers, fashion brands, FMCG retailers, and organic farm businesses (such as <em>Just Farm Dairy</em> and <em>Hydra Audio</em>). Services include custom Liquid theme development, UPI/Razorpay payment gateway activation, Shiprocket courier integration, and conversion rate optimization (CRO).
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
            <span>📍 Base: Nagpur, Maharashtra (440001)</span>
            <span>💳 Integrations: Razorpay, PhonePe, UPI, Shiprocket, Delhivery</span>
            <span>📱 Direct WhatsApp: +91 9168727315</span>
          </div>
        </section>

        {/* Why Nagpur Businesses Need a Custom Shopify Store */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Why Nagpur Brands Need a Professional Shopify Developer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <CreditCard className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Frictionless Indian Checkout</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Indian shoppers abandon carts if UPI or their preferred wallet is missing. We implement native 1-click UPI checkout and phone-number logins that maximize conversions.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <Truck className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Automated Courier Dispatch</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Orders placed in your store sync instantly with Shiprocket or Delhivery, printing shipping labels and sending live tracking updates to your buyers via WhatsApp and SMS.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <Smartphone className="w-8 h-8 text-indigo-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">90%+ Mobile Optimized</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Over 85% of Indian e-commerce orders happen on smartphones. We design thumb-friendly mobile product galleries, sticky buy buttons, and instant-loading pages.
              </p>
            </div>
          </div>
        </section>

        {/* Core Shopify Capabilities */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Shopify Development Capabilities in Nagpur
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Custom Shopify Liquid Theme Development
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Bespoke store design that reflects your premium brand identity. We craft custom section blocks in Shopify OS 2.0 so you can effortlessly drag-and-drop banners, product carousels, and testimonials without writing a line of code.
              </p>
              <span className="text-xs font-mono text-cyan-400">Highlights: Zero template clutter, fast LCP, tailored typography</span>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                2. Indian Payment Gateway & Cash on Delivery (COD) Setup
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Full verification and onboarding with Razorpay, PhonePe, Cashfree, and Paytm. We configure automated COD verification via OTP to reduce Return to Origin (RTO) losses for your Nagpur business.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-surface-card p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                3. High-Converting D2C Store Features
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                Product bundle builders, quantity discount tiers, customer review integrations, size charts, urgent stock countdowns, and abandoned cart WhatsApp recovery workflows.
              </p>
              <Link href="/projects/justfarm" className="text-xs font-mono text-emerald-400 hover:underline">
                View D2C Dairy Case Study: Just Farm Dairy →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Shopify Development FAQs (Nagpur)
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
        <section className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Launch Your Online Store from Nagpur
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Schedule a free consultation with Sachin Bandebuche to plan your Shopify store architecture and get an accurate cost quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20want%20to%20build%20a%20Shopify%20store%20in%20Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all"
            >
              <MessageSquare className="w-4 h-4 text-zinc-950" />
              <span>WhatsApp: +91 9168727315</span>
            </a>
            <Link
              href="/ecommerce-website-development-nagpur"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-xs sm:text-sm font-mono transition-all"
            >
              <span>Explore E-Commerce Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer profile={DEFAULT_PROFILE} />
    </div>
  );
}
