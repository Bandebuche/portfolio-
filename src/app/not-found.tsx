import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DEFAULT_PROFILE } from "@/data/profile";
import { Home, ArrowLeft, MessageSquare, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090D] text-zinc-100 selection:bg-indigo-600/30 selection:text-white font-sans flex flex-col justify-between">
      <Navbar profile={DEFAULT_PROFILE} />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center my-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-indigo-300 mb-4">
          <span>Error 404 • Page Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
          Looking for a Website Developer in Nagpur?
        </h1>

        <p className="text-base text-zinc-400 leading-relaxed mb-8">
          The page you are looking for has moved or does not exist. Explore our Nagpur web development services or visit the live project index:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-zinc-950 px-5 py-2.5 text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            href="/website-developer-nagpur"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 text-xs font-mono transition-all"
          >
            <span>Nagpur Web Services</span>
          </Link>

          <Link
            href="/website-design-cost-nagpur"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 text-xs font-mono transition-all"
          >
            <span>Cost Guide</span>
          </Link>
        </div>

        <div className="p-4 rounded-xl border border-white/[0.08] bg-surface-card text-xs font-mono text-zinc-400">
          Need immediate assistance?{" "}
          <a
            href="https://wa.me/919168727315"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline font-bold"
          >
            Chat with Sachin on WhatsApp (+91 9168727315)
          </a>
        </div>
      </main>

      <Footer profile={DEFAULT_PROFILE} />
    </div>
  );
}
