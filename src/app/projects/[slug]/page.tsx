import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";
import { ArrowUpRight, CheckCircle2, Globe, MapPin, Tag, Terminal, MessageSquare, ArrowLeft, Sparkles, Layers } from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${study.title} | Nagpur Web Developer Case Study`,
    description: `Case study: How Sachin Bandebuche built ${study.title}. Problem, full-stack solution, tech stack, and results.`,
    alternates: {
      canonical: `https://websitelink.cc.cd/projects/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} — Case Study`,
      description: study.subtitle,
      url: `https://websitelink.cc.cd/projects/${study.slug}`,
      images: [study.customThumb],
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!study) {
    notFound();
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    headline: study.title,
    description: study.subtitle,
    url: `https://websitelink.cc.cd/projects/${study.slug}`,
    image: study.customThumb,
    creator: {
      "@type": "Person",
      name: "Sachin Bandebuche",
      jobTitle: "Website Developer in Nagpur",
      url: "https://websitelink.cc.cd",
    },
    author: {
      "@type": "Person",
      name: "Sachin Bandebuche",
    },
    keywords: `Website Developer Nagpur, ${study.category}, ${study.techStack.join(", ")}`,
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Projects", href: "/#projects" },
            { name: study.title, href: `/projects/${study.slug}` },
          ]}
        />

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-mono text-indigo-300">
              <Tag className="w-3 h-3" />
              {study.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-zinc-400">
              <MapPin className="w-3 h-3 text-emerald-400" />
              {study.location}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
            {study.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition-all active:scale-95"
            >
              <span>Visit Live Website ({study.liveDomain})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>
          </div>
        </header>

        {/* Thumbnail Preview Banner */}
        <div className="relative mb-12 h-64 sm:h-96 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black/60">
          <Image
            src={study.customThumb}
            alt={`${study.title} - Website Development by Sachin Bandebuche Nagpur`}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-black/80 border border-white/10 px-3 py-1 text-xs font-mono text-zinc-300">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Deployed Live: {study.liveDomain}</span>
          </div>
        </div>

        {/* Case Study Details */}
        <article className="space-y-10">
          {/* 1. Problem Statement */}
          <section className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              1. The Challenge & Business Problem
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {study.problem}
            </p>
          </section>

          {/* 2. Technical Solution */}
          <section className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              2. The Engineering Solution & Architecture
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {study.solution}
            </p>

            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Technologies & Frameworks Deployed:
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {study.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-white/10 bg-black/40 px-3 py-1 text-xs font-mono text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-3">
              Key Features Delivered:
            </h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              {study.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Visual Showcase: High-Resolution Screenshots & Operational Architecture */}
          {study.screenshots && study.screenshots.length > 0 && (
            <section className="space-y-8 rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
              <div className="border-b border-white/[0.08] pb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Production Visual Documentation & Telemetry</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  🌟 {study.slug.startsWith("digital-azadi") ? "Digital Azadi Support System — Complete Dashboard Portfolio Showcase" : (study.slug === "supports-desk" ? "Student Support Desk & Analytics Portfolio Showcase" : `${study.title} Portfolio Showcase`)}
                </h2>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4 max-w-3xl">
                  A complete portfolio showcase containing high-resolution screenshots of the entire working system. Since the live application requires login credentials, these screenshots document every interface, operational feature, and real-time backend synchronization.
                </p>
                <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 text-xs sm:text-sm font-sans flex items-start gap-3">
                  <span className="text-base shrink-0">🔒</span>
                  <p className="leading-relaxed">
                    <strong>Operational Notice:</strong> Full production interface documentation. All operational dashboards, ticket workflows, and bi-directional Google Sheet connections are captured below in high resolution.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {study.screenshots.map((screen, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-white/[0.08] bg-black/40 overflow-hidden hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
                  >
                    {/* Module Title Header */}
                    <div className="p-5 sm:p-6 border-b border-white/[0.06] bg-white/[0.02]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full border border-indigo-500/40 bg-indigo-500/20 text-[11px] font-mono text-indigo-300 font-semibold">
                          MODULE 0{idx + 1}
                        </span>
                        {screen.caption && (
                          <span className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-mono text-zinc-300">
                            {screen.caption}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                        {screen.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed italic">
                        {screen.subtitle}
                      </p>
                    </div>

                    {/* Image Preview Container in macOS Style Browser Frame */}
                    <div className="relative border-b border-white/[0.06] bg-zinc-950">
                      {/* Window Controls */}
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.04] bg-white/[0.02]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="text-[11px] font-mono text-zinc-400 ml-2 truncate">
                            {screen.caption || screen.title.replace(/^[^a-zA-Z0-9]+/, "")}
                          </span>
                        </div>
                        <a
                          href={screen.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-indigo-300 hover:text-white transition-colors"
                          title="Open original high-resolution screenshot in new tab"
                        >
                          <span>Open High-Res</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-black/60">
                        <Image
                          src={screen.image}
                          alt={`${screen.caption || screen.title} - ${study.title}`}
                          fill
                          sizes="(max-width: 896px) 100vw, 896px"
                          className="object-contain sm:object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                        />
                      </div>

                      {screen.caption && (
                        <div className="px-4 py-2 bg-zinc-950/90 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Caption: <strong className="text-zinc-200">{screen.caption}</strong></span>
                          </div>
                          <span className="text-zinc-500">1920 × 1080 Native PNG</span>
                        </div>
                      )}
                    </div>

                    {/* Key Highlights */}
                    <div className="p-5 sm:p-6 bg-white/[0.01]">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {screen.highlights.map((item, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3. Results & Metrics (Clearly Marked Placeholders) */}
          <section className="rounded-2xl border border-indigo-500/30 bg-indigo-950/20 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                3. Business Results & Performance Metrics
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-mono mb-4">
              *Verified outcome data and performance indicators:
            </p>
            <div className="space-y-3">
              {study.metricsPlaceholder.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg border border-dashed border-indigo-500/40 bg-black/40 text-xs sm:text-sm font-mono text-zinc-200"
                >
                  {metric}
                </div>
              ))}
            </div>
          </section>

          {/* 4. Client Testimonial (Clearly Marked Placeholder) */}
          <section className="rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              4. Client Feedback & Review
            </h2>
            <div className="p-4 rounded-xl border border-dashed border-white/20 bg-black/30">
              <blockquote className="text-sm sm:text-base text-zinc-300 italic mb-3">
                {study.testimonialPlaceholder.quote}
              </blockquote>
              <div className="text-xs font-mono text-zinc-400">
                <strong className="text-white">{study.testimonialPlaceholder.author}</strong> —{" "}
                <span>{study.testimonialPlaceholder.role}</span>
              </div>
            </div>
          </section>
        </article>

        {/* Project CTA */}
        <section className="mt-14 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Want a Similar Solution Built for Your Business?
          </h2>
          <p className="text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Get in touch with Sachin Bandebuche in Nagpur to discuss your project requirements, timeline, and budget.
          </p>
          <a
            href={`https://wa.me/919168727315?text=Hi%20Sachin,%20I%20saw%20your%20case%20study%20on%20${encodeURIComponent(
              study.title
            )}%20and%20want%20to%20discuss%20a%20project`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all"
          >
            <MessageSquare className="w-4 h-4 text-zinc-950" />
            <span>Chat on WhatsApp (+91 9168727315)</span>
          </a>
        </section>
      </main>

      <Footer profile={DEFAULT_PROFILE} />
    </div>
  );
}
