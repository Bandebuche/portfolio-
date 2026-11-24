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
        background: "#060709",
        aleph: {
          bg: "#060709",
          void: "#040406",
          surface: "#0d0f13",
          subtle: "#14171d",
          elevated: "#1c2027",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.18)",
          gold: "#d4b57f",
          champagne: "#fdf6ab",
          sage: "#6f888f",
          teal: "#405c59",
          muted: "#8e9da3",
          lightGrey: "#b8c3c3",
        },
        surface: {
          DEFAULT: "#0d0f13",
          subtle: "#14171d",
          elevated: "#1c2027",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(212, 181, 127, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
      },
      boxShadow: {
        "aleph-card": "0 0 0 1px rgba(255, 255, 255, 0.06), 0 20px 40px -15px rgba(0, 0, 0, 0.8)",
        "aleph-hover": "0 0 0 1px rgba(212, 181, 127, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.9)",
        "glow-gold": "0 0 30px -5px rgba(212, 181, 127, 0.3)",
        "glow-sage": "0 0 30px -5px rgba(111, 136, 143, 0.3)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
