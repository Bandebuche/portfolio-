import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webtree-portfolio.vercel.app"),
  title: "Sachin Bandebuche — Full-Stack Engineer & AI Solutions Developer",
  description:
    "Explore the portfolio of Sachin Bandebuche. Building intelligent AI-powered web applications, data-driven dashboards, scalable SaaS platforms, and modern web architectures.",
  keywords: [
    "Sachin Bandebuche",
    "Full-Stack Engineer",
    "AI Solutions Developer",
    "AI Web Apps",
    "Custom Dashboards",
    "Next.js Developer",
    "React Developer",
    "SaaS Engineer",
    "Shopify Expert",
    "WordPress Specialist",
    "Bento Portfolio"
  ],
  authors: [{ name: "Sachin Bandebuche", url: "https://webtree-portfolio.vercel.app" }],
  creator: "Sachin Bandebuche",
  openGraph: {
    title: "Sachin Bandebuche — Full-Stack Engineer & AI Solutions Developer",
    description:
      "Intelligent AI web applications, real-time analytics dashboards, and high-performance digital products that scale businesses.",
    url: "https://webtree-portfolio.vercel.app",
    siteName: "Weblink — Sachin Bandebuche",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Weblink Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Bandebuche — Weblink Portfolio",
    description:
      "SaaS systems, Next.js web applications, headless commerce, and client platforms.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Weblink",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sachin Bandebuche",
    jobTitle: "Full-Stack Developer",
    url: "https://webtree-portfolio.vercel.app",
    sameAs: [
      "https://github.com/Bandebuche",
      "https://www.linkedin.com/in/sachin-bandebuche-47b1a8257",
      "https://wa.me/919168727315",
      "https://sbresume.lovable.app/"
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Shopify",
      "WordPress",
      "Node.js",
      "FastAPI",
      "Tailwind CSS"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance & Consulting"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
