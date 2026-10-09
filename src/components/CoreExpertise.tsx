"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, BarChart3, Zap, Sparkles, CheckCircle2 } from "lucide-react";

export function CoreExpertise() {
  const offerings = [
    {
      id: "ai-apps",
      icon: <Bot className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />,
      iconBg: "bg-cyan-500/10 dark:bg-cyan-950/50 border-cyan-500/20 dark:border-cyan-800/60",
      badge: "Intelligent Workflows",
      badgeColor: "text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/70 border-cyan-200 dark:border-cyan-800/60",
      title: "🤖 AI-Powered Websites & Web Apps",
      description:
        "Custom web apps integrated with LLMs, autonomous agents, RAG search, and smart workflow automation.",
      tags: ["LLM Integration", "Autonomous Agents", "RAG Pipelines", "FastAPI / Python", "Smart Automation"],
      gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
      borderColor: "hover:border-cyan-500/50 dark:hover:border-cyan-500/50",
    },
    {
      id: "dashboards",
      icon: <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      iconBg: "bg-emerald-500/10 dark:bg-emerald-950/50 border-emerald-500/20 dark:border-emerald-800/60",
      badge: "Real-Time Telemetry",
      badgeColor: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200 dark:border-emerald-800/60",
      title: "📊 Modern Analytics & Admin Dashboards",
      description:
        "High-performance interactive dashboards, real-time data visualization, KPI tracking, and seamless API integrations.",
      tags: ["Real-Time KPIs", "Interactive Charts", "Admin Panels", "REST / GraphQL", "Speed & Performance"],
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      borderColor: "hover:border-emerald-500/50 dark:hover:border-emerald-500/50",
    },
    {
      id: "saas-ecommerce",
      icon: <Zap className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      iconBg: "bg-amber-500/10 dark:bg-amber-950/50 border-amber-500/20 dark:border-amber-800/60",
      badge: "Full-Cycle Scale",
      badgeColor: "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/70 border-amber-200 dark:border-amber-800/60",
      title: "⚡ SaaS Platforms & E-Commerce",
      description:
        "End-to-end scalable SaaS engineering, bespoke stores, secure payment gateways, and subscription architecture.",
      tags: ["SaaS Architecture", "Stripe Checkout", "Headless Shopify", "Custom WordPress", "Sub-Second Delivery"],
      gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
      borderColor: "hover:border-amber-500/50 dark:hover:border-amber-500/50",
    },
  ];

  return (
    <section id="expertise" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          {/* Badge Pill with crisp light & dark mode styles */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-50 dark:bg-cyan-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 mb-3 backdrop-blur-md shadow-sm dark:shadow-none">
            <Sparkles className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Core Expertise • What I Build</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Engineered for Intelligent Scale
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl tracking-tight">
            Specialized engineering capabilities delivering AI autonomy, high-density analytical dashboards, and conversion-focused SaaS engines.
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
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none ${card.borderColor}`}
          >
            {/* Ambient Radial Gradient Inside Card */}
            <div
              className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${card.gradient} blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
            />

            <div>
              {/* Card Header with Icon & Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-inner ${card.iconBg}`}>
                  {card.icon}
                </div>
                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-tight backdrop-blur-sm ${card.badgeColor}`}>
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2.5">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed tracking-tight mb-6">
                {card.description}
              </p>
            </div>

            {/* Bullet / Tag Highlights */}
            <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/60 flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-md bg-zinc-100/90 dark:bg-zinc-950/80 px-2.5 py-1 text-[11px] font-medium tracking-tight text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800/70"
                >
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
