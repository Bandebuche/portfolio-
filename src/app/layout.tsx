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
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://websitelink.cc.cd"),
  title: {
    default: "Website Developer in Nagpur | Next.js, WordPress & Shopify - Sachin Bandebuche",
    template: "%s | Sachin Bandebuche - Nagpur Web Developer",
  },
  description:
    "Looking for a top website developer in Nagpur? Sachin Bandebuche builds fast Next.js, WordPress & Shopify e-commerce sites. Get a free quote today!",
  authors: [{ name: "Sachin Bandebuche", url: "https://websitelink.cc.cd" }],
  creator: "Sachin Bandebuche",
  publisher: "Sachin Bandebuche",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://websitelink.cc.cd",
  },
  openGraph: {
    title: "Website Developer in Nagpur | Next.js, WordPress & Shopify - Sachin Bandebuche",
    description:
      "Freelance website developer in Nagpur crafting high-speed business websites, custom WordPress, Shopify e-commerce, and modern Next.js applications.",
    url: "https://websitelink.cc.cd",
    siteName: "Sachin Bandebuche - Website Developer Nagpur",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sachin Bandebuche — Website Developer in Nagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Developer in Nagpur | Sachin Bandebuche",
    description:
      "Freelance website developer in Nagpur specializing in Next.js, WordPress, Shopify, and custom AI web applications.",
    images: ["/og-image.png"],
    creator: "@sachin_bandebuche",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sachin Bandebuche",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Comprehensive Schema.org JSON-LD for Local Business + Person + ProfessionalService
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://websitelink.cc.cd/#business",
    name: "Sachin Bandebuche - Website Developer in Nagpur",
    alternateName: "Webtree Solutions Nagpur",
    legalName: "Sachin Bandebuche",
    url: "https://websitelink.cc.cd",
    logo: "https://websitelink.cc.cd/logo.png",
    image: "https://websitelink.cc.cd/og-image.png",
    description:
      "Sachin Bandebuche is a professional freelance website developer based in Nagpur, Maharashtra, India. Specialized in custom business websites, Next.js React web applications, WordPress, Shopify, and e-commerce development.",
    telephone: "+91 9168727315",
    email: "sachinbandebuche@gmail.com",
    priceRange: "₹₹ (INR)",
    currenciesAccepted: "INR, USD, EUR",
    paymentAccepted: "UPI, Bank Transfer, Card, PayPal",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Nagpur",
      },
      {
        "@type": "AdministrativeArea",
        name: "Maharashtra",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    sameAs: [
      "https://github.com/Bandebuche",
      "https://www.linkedin.com/in/sachin-bandebuche-47b1a8257",
      "https://wa.me/919168727315",
      "https://sbresume.lovable.app/",
      "https://instagram.com/sachin.bandebuche_",
      "https://youtube.com/@sachinbandebuche104",
    ],
    founder: {
      "@type": "Person",
      "@id": "https://websitelink.cc.cd/#person",
      name: "Sachin Bandebuche",
      jobTitle: "Freelance Website Developer & Full-Stack Engineer",
      url: "https://websitelink.cc.cd",
      sameAs: [
        "https://github.com/Bandebuche",
        "https://www.linkedin.com/in/sachin-bandebuche-47b1a8257",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Development Services in Nagpur",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development in Nagpur",
            description: "High-performance business websites using Next.js 14 and React.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WordPress Development in Nagpur",
            description: "Custom WordPress themes, Elementor setup, and WooCommerce stores.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Shopify E-Commerce Development in Nagpur",
            description: "High-converting Shopify online stores with Indian payment gateway integration.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce Website Development in Nagpur",
            description: "Full-stack e-commerce platforms with cart, inventory, and logistics integration.",
          },
        },
      ],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://websitelink.cc.cd/#website",
    url: "https://websitelink.cc.cd",
    name: "Sachin Bandebuche — Website Developer in Nagpur",
    description: "Portfolio and web development services by Sachin Bandebuche in Nagpur, India.",
    publisher: {
      "@id": "https://websitelink.cc.cd/#business",
    },
    inLanguage: "en-IN",
  };

  return (
    <html lang="en-IN" className={`${inter.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="bg-[#08090D] text-zinc-100 antialiased selection:bg-indigo-600/30 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
