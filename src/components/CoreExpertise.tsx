"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, BarChart3, Zap, ShieldCheck, Terminal, Cpu, Database, Cloud } from "lucide-react";

export function CoreExpertise() {
  const pillars = [
    {
      id: "ai-agents",
      icon: <Bot className="h-5 w-5 text-indigo-400" />,
      tag: "01 • INTELLIGENT SYSTEMS",
      title: "Autonomous AI & Agent Workflows",
      description:
        "Engineered AI workflows powered by frontier LLMs, function calling, vector RAG search, and automated multi-agent triage systems.",
      stack: ["OpenAI / Claude APIs", "FastAPI & Python", "RAG Embeddings", "Multi-Agent Queues"],
    },
    {
      id: "dashboards",
      icon: <BarChart3 className="h-5 w-5 text-cyan-400" />,
      tag: "02 • REAL-TIME TELEMETRY",
      title: "High-Density Operations & SLA Consoles",
      description:
        "Sub-second interactive consoles, real-time KPI streaming, Kanban operations queues, and enterprise SLA escalation desks.",
      stack: ["WebSockets Streaming", "Kanban Triage", "SLA Escalation", "Sub-100ms Latency"],
    },
    {
      id: "nextjs-systems",
      icon: <Zap className="h-5 w-5 text-emerald-400" />,
      tag: "03 • PRODUCTION FRONTEND",
      title: "High-Performance Next.js 14 Web Apps",
      description:
        "Edge-rendered React 18 architectures, server components, fluid animations, and high-converting marketing funnels.",
      stack: ["Next.js 14 App Router", "Server Components", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "cloud-scale",
      icon: <Cloud className="h-5 w-5 text-violet-400" />,
      tag: "04 • INFRASTRUCTURE & SCALE",
      title: "Cloud Services, Databases & Payments",
      description:
        "Robust backend integrations with Stripe subscription billing, Supabase PostgreSQL, edge caching, and serverless compute.",
      stack: ["Stripe Billing", "Supabase / PostgreSQL", "Vercel & Cloudflare", "REST & GraphQL"],
    },
  ];

  return (
    <section id="architecture" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#08090D] text-white">
      {/* Section Header */}
      <div className="mb-12 border-b border-white/[0.08] pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3">
          <Terminal className="h-3.5 w-3.5 text-indigo-400" />
          <span>Core Engineering Disciplines</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Architected for Production & Speed
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
          Four specialized engineering pillars designed to scale applications from initial concept to high-volume production.
        </p>
      </div>

      {/* 4-Card Silicon Valley Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {pillars.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-card p-6 sm:p-7 hover:border-indigo-500/40 hover:bg-surface-cardHover transition-all duration-300 shadow-tech-card"
          >
            <div>
              {/* Header: Tag + Icon */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                  {item.tag}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-colors">
                  {item.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-indigo-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Tech Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/[0.06]">
              {item.stack.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="rounded-md border border-white/[0.06] bg-black/40 px-2.5 py-1 text-[11px] font-mono text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
