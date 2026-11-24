export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  category: string;
  url: string;
  liveDomain: string;
  customThumb: string;
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  // Placeholders for user to fill as requested
  metricsPlaceholder: string[];
  testimonialPlaceholder: {
    quote: string;
    author: string;
    role: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fruffles",
    title: "Fruffles Thickshakes & Desserts — Nagpur QSR Digital Ordering Platform",
    subtitle: "High-speed digital menu, direct WhatsApp order routing, and live kitchen dispatch for Nagpur's dessert chain.",
    client: "Fruffles Thickshakes & Desserts",
    location: "Nagpur, Maharashtra, India",
    category: "E-Commerce / Restaurant SaaS",
    url: "https://fruffles.cc.cd/",
    liveDomain: "fruffles.cc.cd",
    customThumb: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&h=630&q=85",
    problem:
      "Fruffles, a popular dessert and thickshake brand in Nagpur, needed a frictionless digital menu and direct ordering platform that allowed customers to browse artisanal shakes, customize toppings, and order directly on WhatsApp without paying high commissions to third-party food delivery aggregators.",
    solution:
      "Sachin Bandebuche engineered a responsive, sub-second digital ordering web app using Next.js 14 and Tailwind CSS. The app features high-resolution dessert imagery, interactive topping selectors, direct WhatsApp cart dispatch with customer delivery address, and an instant kitchen notification feed.",
    techStack: ["Next.js 14", "React", "Tailwind CSS", "WhatsApp Cloud API", "Vercel Edge"],
    keyFeatures: [
      "Sub-1-second mobile page load speed",
      "Interactive thickshake and dessert visual menu",
      "One-click WhatsApp cart checkout with delivery location",
      "Zero commission per order compared to aggregator platforms",
      "Mobile-first responsive design for local Nagpur customers",
    ],
    metricsPlaceholder: [
      "[METRIC PLACEHOLDER: Insert monthly order volume or increase in direct WhatsApp orders, e.g. +45% direct orders in first 60 days]",
      "[METRIC PLACEHOLDER: Insert delivery aggregator commission saved, e.g. Saved ₹25,000+ in monthly aggregator commissions]",
      "[METRIC PLACEHOLDER: Average mobile page load speed, e.g. 0.8s mobile LCP score on 4G networks]",
    ],
    testimonialPlaceholder: {
      quote:
        "[TESTIMONIAL PLACEHOLDER: Insert quote from Fruffles management, e.g. 'Sachin built exactly what our Nagpur stores needed. Our customers love ordering directly on WhatsApp, and we save thousands in aggregator fees every month.']",
      author: "[Client Name / Founder]",
      role: "Owner, Fruffles Thickshakes & Desserts, Nagpur",
    },
  },
  {
    slug: "justfarm",
    title: "Just Farm Dairy Hingoli — D2C Fresh Milk & Desi Ghee Subscription",
    subtitle: "Farm-to-doorstep subscription commerce platform for 100% pure raw A2 milk and Vedic Desi Ghee.",
    client: "Just Farm Dairy",
    location: "Hingoli / Vidarbha, Maharashtra, India",
    category: "D2C E-Commerce / Subscription",
    url: "https://justfarm.cc.cd/",
    liveDomain: "justfarm.cc.cd",
    customThumb: "https://justfarm.cc.cd/assets/buffalo-milk-farm.jpg",
    problem:
      "Just Farm Dairy produces premium raw cow/buffalo milk and traditional Bilona Desi Ghee in Hingoli. They needed an online direct-to-consumer platform to educate health-conscious families, manage recurring dairy subscriptions, and accept digital UPI payments without manual spreadsheet reconciliation.",
    solution:
      "Built a modern D2C e-commerce platform equipped with milk delivery calendar options, ghee jar ordering, Razorpay UPI payment integration, and customer order management, connecting rural dairy production directly with urban Maharashtra households.",
    techStack: ["Next.js 14", "React", "Tailwind CSS", "Razorpay / UPI", "Supabase"],
    keyFeatures: [
      "Vedic Bilona Ghee and pure milk educational storytelling",
      "Recurring delivery schedule selection",
      "Instant UPI QR and wallet checkout",
      "Direct customer WhatsApp support integration",
      "Automated order confirmation and dispatch notices",
    ],
    metricsPlaceholder: [
      "[METRIC PLACEHOLDER: Insert monthly active subscribers, e.g. 150+ active daily milk and ghee subscribers]",
      "[METRIC PLACEHOLDER: Insert repeat customer rate, e.g. 72% repeat order rate for Desi Ghee jars]",
      "[METRIC PLACEHOLDER: Insert checkout conversion rate, e.g. 4.2% conversion rate on mobile traffic]",
    ],
    testimonialPlaceholder: {
      quote:
        "[TESTIMONIAL PLACEHOLDER: Insert quote from Just Farm owner, e.g. 'Our digital store helped us reach customers directly without middlemen. Sachin understood our farm's ethos and built a trustworthy, fast website.']",
      author: "[Farm Owner / Founder]",
      role: "Founder, Just Farm Dairy",
    },
  },
  {
    slug: "supports-desk",
    title: "Support Desk • Real-Time Query Tracker & Live Operations Analytics",
    subtitle: "Enterprise support operations console, ticket triage queue, and SLA escalation dashboard.",
    client: "Support Desk OS",
    location: "Nagpur / India",
    category: "Dashboards & Web Applications",
    url: "https://supports.cc.cd/",
    liveDomain: "supports.cc.cd",
    customThumb: "https://supports.cc.cd/logo.png",
    problem:
      "Customer support teams were struggling with scattered ticket communications across email and WhatsApp, missing SLA resolution windows and lacking visibility into team resolution metrics.",
    solution:
      "Architected a high-density operations console with real-time ticket categorization, priority badges, automated SLA breach countdown timers, and live agent resolution analytics.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebSockets", "Supabase PostgreSQL"],
    keyFeatures: [
      "Sub-second live ticket queue streaming",
      "Kanban triage and ticket assignment board",
      "Automated SLA escalation thresholds and notifications",
      "Live agent resolution speed telemetry widgets",
      "Role-based authentication and secure session state",
    ],
    metricsPlaceholder: [
      "[METRIC PLACEHOLDER: Insert ticket resolution time improvement, e.g. 45% reduction in average ticket resolution time]",
      "[METRIC PLACEHOLDER: Insert SLA compliance rate, e.g. 99.4% SLA adherence achieved within 30 days]",
      "[METRIC PLACEHOLDER: Insert daily ticket volume handled, e.g. 2,000+ daily inquiries processed smoothly]",
    ],
    testimonialPlaceholder: {
      quote:
        "[TESTIMONIAL PLACEHOLDER: Insert quote from operations lead, e.g. 'The speed and clarity of this dashboard transformed our support team. We resolve tickets twice as fast now.']",
      author: "[Operations Manager]",
      role: "Lead, Customer Operations",
    },
  },
  {
    slug: "piush-bhandari",
    title: "Piush Bhandari — Executive Water Treatment & Chemical Engineering Portfolio",
    subtitle: "Executive showcase for Senior Projects Leader, CAPM®, and ISO 9001 Lead Auditor.",
    client: "Piush Bhandari",
    location: "Global / India",
    category: "Executive Portfolios & Web Apps",
    url: "https://me.piushbhandari.cc.cd/",
    liveDomain: "me.piushbhandari.cc.cd",
    customThumb: "https://me.piushbhandari.cc.cd/logo.png",
    problem:
      "A senior international project leader in industrial water treatment required an authoritative personal branding platform to showcase multi-million dollar plant installations, certifications (CAPM, ISO 9001), and technical publications.",
    solution:
      "Designed an elegant, high-craft personal engineering portal highlighting project milestones, chemical treatment methodologies, executive credentials, and direct consultation booking.",
    techStack: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    keyFeatures: [
      "Interactive industrial project timeline and plant galleries",
      "CAPM® and ISO lead auditor credential verification links",
      "Executive consultation scheduling",
      "Global CDN caching for sub-second international loading",
      "Clean downloadable CV and project dossiers",
    ],
    metricsPlaceholder: [
      "[METRIC PLACEHOLDER: Insert executive inquiries or speaking invitations generated, e.g. 15+ international consulting inquiries received]",
      "[METRIC PLACEHOLDER: Insert portfolio view engagement, e.g. Average session duration 3m 40s]",
      "[METRIC PLACEHOLDER: Insert Lighthouse performance score, e.g. 98/100 Lighthouse Performance score]",
    ],
    testimonialPlaceholder: {
      quote:
        "[TESTIMONIAL PLACEHOLDER: Insert quote from Piush Bhandari, e.g. 'Sachin did an outstanding job translating complex chemical engineering projects into a crisp, sophisticated executive showcase.']",
      author: "Piush Bhandari",
      role: "Senior Projects Leader & Water Treatment Specialist",
    },
  },
];
