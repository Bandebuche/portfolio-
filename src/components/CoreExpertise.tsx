"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, BarChart3, Zap, Sparkles } from "lucide-react";

export function CoreExpertise() {
  const offerings = [
    {
      id: "ai-apps",
      icon: <Bot className="h-5 w-5 text-aleph-gold" />,
      badge: "AI Autonomy & Agents",
      title: "AI-Powered Systems & Autonomous Agents",
      description:
        "Engineered AI workflows integrated with frontier LLMs, multi-agent frameworks, vector search (RAG), and smart automated dispatch engines.",
      tags: ["Autonomous Agents", "RAG Pipelines", "FastAPI / Python", "Function Calling", "Smart Automation"],
      accentColor: "border-aleph-gold/30 hover:border-aleph-gold/60",
      haloGradient: "from-aleph-gold/10 via-transparent to-transparent",
    },
    {
      id: "dashboards",
      icon: <BarChart3 className="h-5 w-5 text-aleph-sage" />,
      badge: "Real-Time Telemetry",
      title: "High-Density Analytics & Operations Consoles",
      description:
        "Sub-second interactive consoles, real-time KPI data streaming, Kanban operations queues, SLA metrics decks, and mission-critical admin hubs.",
      tags: ["Real-Time KPIs", "Operations OS", "Kanban Triage", "REST & WebSockets", "Sub-Second UX"],
      accentColor: "border-aleph-sage/30 hover:border-aleph-sage/60",
      haloGradient: "from-aleph-sage/10 via-transparent to-transparent",
    },
    {
      id: "saas-ecommerce",
      icon: <Zap className="h-5 w-5 text-aleph-champagne" />,
      badge: "Conversion & SaaS",
      title: "Scalable SaaS Platforms & Bespoke Funnels",
      description:
        "End-to-end cloud architectures, subscription billing, high-converting webinar registration engines, and custom headless commerce platforms.",
      tags: ["SaaS Architecture", "Stripe Billing", "Conversion Funnels", "Next.js 14", "Global Scale"],
      accentColor: "border-aleph-champagne/30 hover:border-aleph-champagne/60",
      haloGradient: "from-aleph-champagne/10 via-transparent to-transparent",
    },
  ];

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#060709] text-white">
      {/* Section Header */}
      <div className="mb-12 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-aleph-champagne mb-3 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-aleph-gold" />
            <span>Core Pillars • Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Architected for <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-aleph-champagne to-aleph-gold">Intelligence & Scale</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl font-normal">
            Specialized engineering capabilities across generative intelligence, high-density telemetry, and conversion engines.
          </p>
        </div>
      </div>

      {/* Bento Grid: 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {offerings.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0e12] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 shadow-aleph-card hover:shadow-aleph-hover ${card.accentColor}`}
          >
            {/* Ambient Radial Gradient Inside Card */}
            <div
              className={`pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br ${card.haloGradient} blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-80`}
            />

            <div>
              {/* Card Header with Icon & Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] shadow-inner">
                  {card.icon}
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium tracking-tight text-white mb-2 group-hover:text-aleph-champagne transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-5">
                {card.description}
              </p>
            </div>

            {/* Tags Pills */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
              {card.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-0.5 text-[10px] font-mono text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
