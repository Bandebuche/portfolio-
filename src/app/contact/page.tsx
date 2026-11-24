import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { MapPin, Mail, Phone, MessageSquare, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Sachin Bandebuche | Website Developer in Nagpur, Maharashtra",
  description:
    "Get in touch with freelance website developer Sachin Bandebuche in Nagpur. WhatsApp +91 9168727315 or email sachinbandebuche@gmail.com for free project quotes.",
  alternates: {
    canonical: "https://websitelink.cc.cd/contact",
  },
  openGraph: {
    title: "Contact Website Developer Sachin Bandebuche — Nagpur",
    description:
      "Direct contact details, WhatsApp inquiry, and office location in Nagpur, Maharashtra. Request a free quote for website development.",
    url: "https://websitelink.cc.cd/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sachin Bandebuche - Website Developer in Nagpur",
    url: "https://websitelink.cc.cd/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Sachin Bandebuche - Website Developer in Nagpur",
      telephone: "+91 9168727315",
      email: "sachinbandebuche@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        postalCode: "440001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 21.1458,
        longitude: 79.0882,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

        {/* Header */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-emerald-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Inquiry & Quote</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Contact Sachin Bandebuche — Website Developer in Nagpur
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
            Have an upcoming project, website redesign, or questions about pricing? Get in touch directly via WhatsApp, phone, or email. Responses within 2 to 4 hours.
          </p>
        </header>

        {/* NAP & Quick Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Direct Contact Methods */}
          <div className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-6">
                Direct Contact Channels (NAP Details)
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-0.5">WhatsApp (Instant Response):</span>
                    <a
                      href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20want%20to%20discuss%20a%20website%20project%20in%20Nagpur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-mono font-medium text-emerald-400 hover:underline"
                    >
                      +91 9168727315
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-0.5">Phone Call:</span>
                    <a
                      href="tel:+919168727315"
                      className="text-base font-mono font-medium text-white hover:text-cyan-300 underline"
                    >
                      +91 9168727315
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-0.5">Email Address:</span>
                    <a
                      href="mailto:sachinbandebuche@gmail.com"
                      className="text-base font-mono font-medium text-white hover:text-indigo-300 underline"
                    >
                      sachinbandebuche@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-0.5">Location & Office:</span>
                    <p className="text-sm text-zinc-200">
                      Nagpur, Maharashtra, India — PIN 440001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block mb-0.5">Working Hours:</span>
                    <p className="text-sm text-zinc-200">
                      Monday to Saturday: 9:00 AM – 8:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <a
                href="https://wa.me/919168727315?text=Hi%20Sachin,%20I%20want%20to%20discuss%20a%20website%20project%20in%20Nagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all"
              >
                <MessageSquare className="w-4 h-4 text-zinc-950" />
                <span>Start Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Consultation & Meeting Info */}
          <div className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">
                In-Person & Virtual Meetings
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Prefer an in-person meeting in Nagpur? Sachin is available for on-site visits and coffee consultations across Nagpur&apos;s prime commercial centers:
              </p>

              <div className="space-y-2.5 text-xs font-mono text-zinc-300 mb-6">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Sadar, Civil Lines & Dharampeth
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Ramdaspeth, Sitabuldi & Wardha Road
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Pratap Nagar, Khamla & Trimurti Nagar
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Hingna MIDC, Gandhibagh & Itwari
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Virtual Meetings via Google Meet / Zoom worldwide
                </div>
              </div>

              <h3 className="text-sm font-bold text-white mb-2">
                What to Include in Your Inquiry:
              </h3>
              <ul className="text-xs text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• Your business or venture name and location</li>
                <li>• Type of website needed (Corporate, E-Commerce, Web App)</li>
                <li>• Approximate number of pages and target deadline</li>
                <li>• Reference websites you like (if any)</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <Link
                href="/website-design-cost-nagpur"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-xs sm:text-sm font-mono transition-all"
              >
                <span>Review 2026 Nagpur Pricing Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer profile={DEFAULT_PROFILE} />
    </div>
  );
}
