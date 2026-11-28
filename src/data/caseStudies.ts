export interface ScreenshotSection {
  title: string;
  subtitle: string;
  image: string;
  caption?: string;
  highlights: string[];
}

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
  screenshots?: ScreenshotSection[];
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
    title: "Support Desk • Query Tracker & Live Analytics",
    subtitle: "Enterprise support operations console, live 3D ticket preview, dual Card/Table records database, and connected Google Sheets analytics engine.",
    client: "Student Support Desk & Operations",
    location: "Nagpur / India",
    category: "Dashboards & Web Applications",
    url: "https://supports.cc.cd/",
    liveDomain: "supports.cc.cd",
    customThumb: "/projects/supports-desk/01_Analytics_Dashboard.png",
    problem:
      "Student support and operations teams were facing high inquiry volumes with scattered communications, slow manual ticket logging, and zero real-time visibility into agent allocation, category trends, and response times. Because the live production console requires internal staff credentials, public visitors and stakeholders could not view the internal workflows and real-time dashboard capabilities.",
    solution:
      "Engineered a high-performance Student Support Operations Desk featuring a 3D interactive inquiry entry form with holographic ticket preview, dual visual database views (Interactive Card Grid and dense Tabular List), seamless bi-directional synchronization with Google Sheets API, and a real-time analytics KPI dashboard tracking submission volume, agent workload, and hourly traffic flow.",
    techStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Google Apps Script API",
      "Google Sheets Database",
      "Lucide Icons",
    ],
    keyFeatures: [
      "Live Analytics & KPI Dashboard with hourly trends and category breakdown",
      "3D Interactive Student Query Ticket with real-time input mirroring",
      "Standardized Membership tier classification (PMP, Gold, Diamond, Silver, Chakravyuh)",
      "Dual-view Records Database: Card Box view for rapid visual scanning & dense Table view",
      "Automated Bi-directional sync with Google Sheets backend via Google Apps Script API",
      "Direct staff assignment and real-time agent workload balancing (Sachin, Pragati)",
      "Strict 10-digit phone validation, optional email handling, and quick 'Set to Now' time-pickers",
    ],
    screenshots: [
      {
        title: "1. 📊 Live Analytics & KPI Dashboard",
        subtitle: "Full-featured analytics showing real-time query metrics, agent allocation, categorization breakdowns, and hourly trends.",
        image: "/projects/supports-desk/01_Analytics_Dashboard.png",
        caption: "01 - Live Analytics Dashboard",
        highlights: [
          "Real-time KPIs: Total Queries (19), Today's Volume, Active Inquiries, and Agent Assignment breakdown.",
          "Interactive charts: Category breakdown (PMP, Gold, Diamond, Silver), Agent workload split, and Hourly submission flow.",
          "Quick date filtering and one-click refresh synced to Google Sheets.",
        ],
      },
      {
        title: "2. 📝 Student Inquiry Entry Form & 3D Interactive Ticket Preview",
        subtitle: "The core query logging interface featuring English-only labels, optional Email, Phone/WhatsApp fields, and live interactive 3D Ticket preview.",
        image: "/projects/supports-desk/02_Query_Entry_Form_and_Ticket.png",
        caption: "02 - Student Query Entry Form and 3D Ticket",
        highlights: [
          "Clean English input fields: Student Name, Phone / WhatsApp (10 digits), Email ID (Optional), Query Description.",
          "Standardized Membership selection: Gold, Diamond, Silver, PMP, and Chakravyuh.",
          "Custom Typing Time picker with white calendar icon and 'Set to Now' quick button.",
          "Dynamic 3D support ticket on the right displaying live input mirror with holographic badge.",
        ],
      },
      {
        title: "3. 🗂️ Records Database — Card & Box View",
        subtitle: "Grid view designed for fast visual scanning of student inquiries with quick action filters and search.",
        image: "/projects/supports-desk/03_Records_Database_Card_View.png",
        caption: "03 - Records Database Card View",
        highlights: [
          "Filter chips by category (All, PMP, Chakravyuh, Gold, Diamond, Silver) and Assigned Staff (Sachin, Pragati).",
          "Search by Student Name or Query keyword in real-time.",
          "Structured card tags for phone numbers, email IDs, timestamps, and assigned agent.",
        ],
      },
      {
        title: "4. 📋 Records Database — Tabular List View",
        subtitle: "Dense tabular data grid providing structured row-level tracking with export and sorting features.",
        image: "/projects/supports-desk/04_Records_Database_Table_View.png",
        caption: "04 - Records Database Table View",
        highlights: [
          "Complete column representation: Student Name, Contact Details (Phone + Email), Category badge, Query description, Submission Date/Time, and Assigned Handler.",
          "Alternating row styling with hover illumination.",
          "View switchers between Card Grid and Tabular List.",
        ],
      },
      {
        title: "5. 📑 Connected Google Sheets Database",
        subtitle: "The live backend spreadsheet database syncing every web app submission seamlessly.",
        image: "/projects/supports-desk/05_Google_Sheet_Database.png",
        caption: "05 - Google Sheet Database",
        highlights: [
          "8 Structured columns: Timestamp, Name, Phone, Email, Category, Query, Typing Time, Assigned By.",
          "Fully integrated with Google Apps Script doPost / doGet API.",
          "Accurate data column mapping preserving optional emails and 10-digit phone numbers.",
        ],
      },
    ],
    metricsPlaceholder: [
      "[METRIC PLACEHOLDER: Insert query resolution time improvement, e.g. 50% faster ticket logging and triage]",
      "[METRIC PLACEHOLDER: Insert daily volume processed, e.g. 500+ daily student inquiries smoothly synchronized to Google Sheets]",
      "[METRIC PLACEHOLDER: Insert SLA or response improvement, e.g. 99.8% Google Sheet API uptime and zero lost submissions]",
    ],
    testimonialPlaceholder: {
      quote:
        "[TESTIMONIAL PLACEHOLDER: Insert quote from operations lead, e.g. 'The 3D interactive ticket and instant Google Sheets sync completely eliminated our student query backlog. Highly reliable system.']",
      author: "[Operations Lead / Support Manager]",
      role: "Head of Student Support Operations",
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
