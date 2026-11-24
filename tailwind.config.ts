import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08090D",
        surface: {
          DEFAULT: "#0E1017",
          subtle: "#141722",
          elevated: "#1A1F2E",
          card: "#0D0F16",
          cardHover: "#131622",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.16)",
          active: "rgba(99, 102, 241, 0.4)",
        },
        tech: {
          blue: "#3B82F6",
          indigo: "#6366F1",
          cyan: "#06B6D4",
          emerald: "#10B981",
          violet: "#8B5CF6",
          slate: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      boxShadow: {
        "tech-card": "0 0 0 1px rgba(255, 255, 255, 0.07), 0 8px 24px -4px rgba(0, 0, 0, 0.7)",
        "tech-hover": "0 0 0 1px rgba(99, 102, 241, 0.35), 0 16px 36px -6px rgba(0, 0, 0, 0.85), 0 0 24px -4px rgba(99, 102, 241, 0.15)",
        "tech-glow-blue": "0 0 40px -10px rgba(59, 130, 246, 0.25)",
        "tech-glow-indigo": "0 0 40px -10px rgba(99, 102, 241, 0.25)",
        "tech-glow-emerald": "0 0 30px -8px rgba(16, 185, 129, 0.3)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        marquee: "marquee 34s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
