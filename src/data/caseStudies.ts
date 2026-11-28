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
  {
    slug: "digital-azadi-support",
    title: "Digital Azadi Support Portal — Student Support Operations & Live Ticket Desk",
    subtitle: "Student-facing public inquiry gateway, automated WhatsApp validation, self-service status tracker, and complete 11-module operational architecture.",
    client: "Digital Azadi Education & Community",
    location: "Nagpur / Maharashtra, India",
    category: "Dashboards & Web Applications",
    url: "https://digital-azadi-support.vercel.app/",
    liveDomain: "digital-azadi-support.vercel.app",
    customThumb: "/projects/digital-azadi-support/01_public_ticket_submission_form.png",
    problem:
      "Digital Azadi was receiving hundreds of student and franchise inquiries across WhatsApp, email, and social media without a structured queue or real-time tracking mechanism. Students had no way to verify their ticket status, while support engineers struggled to balance general technical queries (hosting, LMS, CRM) with Meta Ads and pixel issues without cross-channel clutter.",
    solution:
      "Engineered an enterprise-grade Support Operations System consisting of an intuitive public ticket submission portal with instant WhatsApp phone validation, a self-service student ticket tracker, dual-role administrative authentication (Sachin Sir & Onkar Sir), dense tabular & modular card views with ticking stopwatches, an agile Kanban board, an executive SLA analytics deck, automated cloud data management with tombstones, and live bi-directional synchronization with Google Sheets via Apps Script.",
    techStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Google Apps Script API",
      "Google Sheets Database",
      "Lucide Icons",
      "Vercel Edge",
    ],
    keyFeatures: [
      "Public Ticket Submission Portal with 10-digit WhatsApp validation",
      "Self-service Student Ticket Tracker (/track) with live SLA progress bar",
      "Dual-role authentication gateway for Super Admin & Meta Specialist",
      "Super Admin Operations Dashboard with live ticking stopwatches",
      "Modular Cards View with priority color badges (Urgent, High, Normal, Low)",
      "4-column Agile Kanban Board (New, In Progress, Waiting, Resolved)",
      "Slide-over Ticket Detail Drawer with audit logs & WhatsApp dispatch",
      "Dedicated Onkar Kulkarni Meta Specialist Desk (/onkar)",
      "Executive SLA Analytics Deck (/analytics) with resolution histograms",
      "Cloud Sync & Data Management Panel with anti-resurrection tombstones",
      "Central Master Google Spreadsheet database with bidirectional sync",
    ],
    screenshots: [
      {
        title: "1. 🎫 Public Ticket Submission Portal (/submit)",
        subtitle: "Clean, student-facing public gateway featuring black & white minimalist aesthetics, mobile WhatsApp validation, ecosystem selection, and real-time IST clock.",
        image: "/projects/digital-azadi-support/01_public_ticket_submission_form.png",
        caption: "01 - Public Ticket Submission Portal",
        highlights: [
          "Responsive mobile layout with WhatsApp 10-digit validation and real-time auto-formatting.",
          "Zero-duplicate ticket ID generation (DA-YYYY-XXXX) for instant student tracking.",
          "Membership tier selection: Diamond, Silver, Chakravyuh, Franchise, and PMP.",
          "Specialist assignment routing between Sachin Sir (All Technical Operations) and Onkar Kulkarni (Meta Ads Specialist).",
        ],
      },
      {
        title: "2. 🔍 Public Self-Service Ticket Tracker (/track)",
        subtitle: "Fast, self-service tracking interface where students enter their Ticket ID or WhatsApp Phone number to check resolution status and active duration.",
        image: "/projects/digital-azadi-support/02_public_ticket_tracker.png",
        caption: "02 - Public Ticket Tracker",
        highlights: [
          "Real-time query lookup by Ticket ID or WhatsApp Phone number.",
          "Live SLA progress bar, assigned specialist badge, and public status milestones.",
          "Transparent resolution notes and active handling duration indicators.",
        ],
      },
      {
        title: "3. 🔐 Admin Security & Role-Based Authentication Gateway (/admin)",
        subtitle: "Modern, branded security gate supporting dedicated role profiles for Sachin Sir (Super Admin) and Onkar Kulkarni (Meta Specialist Lead).",
        image: "/projects/digital-azadi-support/03_admin_secure_login_gate.png",
        caption: "03 - Admin Secure Login Gate",
        highlights: [
          "Role tab toggle between Sachin Sir (All Ops) and Onkar Sir (Meta Ads).",
          "Secure session credentials and direct link back to public portal.",
          "Branded royal blue dark aesthetic with high-contrast typography.",
        ],
      },
      {
        title: "4. 📊 Super Admin Operations Dashboard — Dense Table View",
        subtitle: "Comprehensive central command deck for Sachin Sir managing all franchise, tech, hosting, LMS, and CRM queries with real-time stopwatches.",
        image: "/projects/digital-azadi-support/04_super_admin_operations_table_view.png",
        caption: "04 - Super Admin Operations Table View",
        highlights: [
          "Real-time ticking stopwatch for In-Progress queries to maintain SLA guarantees.",
          "4 Top KPI cards: Total Tickets (8), Active In Progress (38%), Pending & New (25%), Resolved & Closed (38%).",
          "Multi-column sorting, bulk selection & deletion, multi-tab filtering, and daily activity flow graph.",
        ],
      },
      {
        title: "5. 🗂️ Operations Dashboard — Modular Cards View",
        subtitle: "Card grid view grouping student queries with visual priority badges, requester details, and quick WhatsApp action buttons.",
        image: "/projects/digital-azadi-support/05_super_admin_operations_cards_view.png",
        caption: "05 - Super Admin Operations Cards View",
        highlights: [
          "Visual priority indicators: Urgent, High, Normal, and Low with colored chips.",
          "Elapsed stopwatch counters and active session indicators per card.",
          "Direct resolve modal triggers and one-tap WhatsApp chat dispatch.",
        ],
      },
      {
        title: "6. 📋 Operations Dashboard — Kanban Agile Board",
        subtitle: "Visual drag-and-drop workflow across 4 operational states: New, In Progress, Waiting for User, and Resolved.",
        image: "/projects/digital-azadi-support/06_super_admin_operations_kanban_board.png",
        caption: "06 - Super Admin Operations Kanban Board",
        highlights: [
          "Swimlane counters displaying real-time ticket counts in each status column.",
          "Agile workflow visualization enabling immediate bottleneck detection.",
          "Fast 1-click status transitions across operational columns.",
        ],
      },
      {
        title: "7. 📑 Interactive Ticket Detail Slide-Over Drawer",
        subtitle: "In-depth ticket inspection panel showing full student query, caller metadata, active support stopwatch timer, internal staff notes, and resolution actions.",
        image: "/projects/digital-azadi-support/07_ticket_detail_live_drawer.png",
        caption: "07 - Ticket Detail Live Drawer",
        highlights: [
          "Stopwatch timer start/stop with manual timing override modal.",
          "Internal audit notes log and reassign specialist dropdown.",
          "Direct WhatsApp chat trigger with pre-filled ticket context and diagnosis.",
        ],
      },
      {
        title: "8. 🎯 Onkar Kulkarni Dedicated Meta Specialist Operations Deck (/onkar)",
        subtitle: "Isolated specialist desk exclusively showing Meta Ads, Pixel, CAPI, Business Manager, and Instagram DM queries for Onkar Sir.",
        image: "/projects/digital-azadi-support/08_onkar_meta_specialist_desk.png",
        caption: "08 - Onkar Meta Specialist Desk",
        highlights: [
          "Role-scoped query isolation (general operations queries are automatically filtered out).",
          "Specialized Meta Ads category badges and tailored workflow queues.",
          "Independent SLA timers dedicated to advertising and tracking issues.",
        ],
      },
      {
        title: "9. 📈 Executive SLA Analytics & Performance Deck (/analytics)",
        subtitle: "Data visualization reporting deck showing response time distributions, platform breakdowns, and SLA compliance scores.",
        image: "/projects/digital-azadi-support/09_sla_analytics_operations_deck.png",
        caption: "09 - SLA Analytics Operations Deck",
        highlights: [
          "100% SLA Target Met gauge (<45 min goal) with 35m average resolution time.",
          "Resolution duration distribution bar chart (<15m, 15-30m, 30-45m, 45-60m, >60m).",
          "Tickets by Ecosystem breakdown (Chakravyuh, Digital Azadi Hub, WordPress) and Tier Proportions donut chart.",
        ],
      },
      {
        title: "10. ⚙️ Cloud Sync & Data Management Control Panel",
        subtitle: "Full admin control center for cloud health monitoring, permanent deletion with anti-resurrection tombstones, Recycle Bin, and audit logs.",
        image: "/projects/digital-azadi-support/10_cloud_sync_data_management_panel.png",
        caption: "10 - Cloud Sync Data Management Panel",
        highlights: [
          "Live roundtrip cloud ping (ms), connection status, and real-time synchronization toggle.",
          "Nuclear 'Clear All' action with safety confirmation modal and downloadable backup first.",
          "Automated old data cleanup (>7 days, >30 days, Resolved) and Recycle Bin with 1-click restore.",
          "Protected tombstones preventing zombie resurrection from offline client caches.",
        ],
      },
      {
        title: "11. 📑 Central Master Database — Google Spreadsheet",
        subtitle: "Authoritative master Google Sheet integrated via Apps Script webhook for real-time bidirectional synchronization.",
        image: "/projects/digital-azadi-support/11_central_google_spreadsheet_database.png",
        caption: "11 - Central Google Spreadsheet Database",
        highlights: [
          "Auto-appends new student tickets and logs support start/end timestamps.",
          "Structured columns: Timestamp, Name, Mobile Number, Email ID, Membership, Query, Remark, Time Taken.",
          "Bi-directional sync via Google Apps Script webhooks acting as single source of truth.",
        ],
      },
    ],
    metricsPlaceholder: [
      "[METRIC PLACEHOLDER: Insert ticket resolution time, e.g. Average resolution under 35 minutes with 100% SLA target hit]",
      "[METRIC PLACEHOLDER: Insert total student volume processed, e.g. 1,200+ student queries triaged without a single lost ticket]",
      "[METRIC PLACEHOLDER: Insert specialist efficiency score, e.g. 60% faster resolution for Meta Ads queries via isolated /onkar desk]",
    ],
    testimonialPlaceholder: {
      quote:
        "[TESTIMONIAL PLACEHOLDER: Insert quote from Digital Azadi management, e.g. 'Sachin built a state-of-the-art support command center. Our students get instant resolution updates and our internal team works with crystal clarity.']",
      author: "Digital Azadi Team",
      role: "Operations & Student Success Lead",
    },
  },
  {
    slug: "digital-azadi-admin",
    title: "DA Support Ops & SLA Deck — Command Center & Real-Time Telemetry",
    subtitle: "Super-admin operations console, Kanban status triage, dedicated Meta specialist desk, SLA compliance analytics, and cloud data management.",
    client: "Digital Azadi Technical Operations",
    location: "Nagpur / Maharashtra, India",
    category: "Dashboards & Web Applications",
    url: "https://digital-azadi-support.vercel.app/admin",
    liveDomain: "digital-azadi-support.vercel.app/admin",
    customThumb: "/projects/digital-azadi-support/04_super_admin_operations_table_view.png",
    problem:
      "Managing technical support SLAs across multiple specialists required a real-time command deck with active session tracking, automated stopwatch timers, and role-based access to prevent cross-team noise and maintain sub-45-minute response times.",
    solution:
      "Engineered the DA Support Ops & SLA Command Center featuring multi-role authentication, active query stopwatches, Kanban agile queues, isolated Meta specialist desk, automated cloud data cleanup with tombstone deletion protection, and executive SLA compliance reporting.",
    techStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Google Apps Script API",
      "Google Sheets DB",
      "Vercel Edge",
    ],
    keyFeatures: [
      "Super-Admin Operations Deck with live stopwatch timers",
      "Executive SLA compliance analytics with 100% target met tracking",
      "Isolated Meta Ads specialist desk (/onkar) for focused troubleshooting",
      "Agile Kanban status queues with real-time swimlane metrics",
      "Cloud Sync & Data Management with safe Nuclear wipe & Recycle Bin",
      "Central Google Spreadsheet synchronization with millisecond latency",
    ],
    screenshots: [
      {
        title: "1. 📊 Super Admin Operations Dashboard — Dense Table View",
        subtitle: "Comprehensive central command deck for Sachin Sir managing all franchise, tech, hosting, LMS, and CRM queries with real-time stopwatches.",
        image: "/projects/digital-azadi-support/04_super_admin_operations_table_view.png",
        caption: "04 - Super Admin Operations Table View",
        highlights: [
          "Real-time ticking stopwatch for In-Progress queries to maintain SLA guarantees.",
          "4 Top KPI cards: Total Tickets (8), Active In Progress (38%), Pending & New (25%), Resolved & Closed (38%).",
          "Multi-column sorting, bulk selection & deletion, multi-tab filtering, and daily activity flow graph.",
        ],
      },
      {
        title: "2. 🗂️ Operations Dashboard — Modular Cards View",
        subtitle: "Card grid view grouping student queries with visual priority badges, requester details, and quick WhatsApp action buttons.",
        image: "/projects/digital-azadi-support/05_super_admin_operations_cards_view.png",
        caption: "05 - Super Admin Operations Cards View",
        highlights: [
          "Visual priority indicators: Urgent, High, Normal, and Low with colored chips.",
          "Elapsed stopwatch counters and active session indicators per card.",
          "Direct resolve modal triggers and one-tap WhatsApp chat dispatch.",
        ],
      },
      {
        title: "3. 📋 Operations Dashboard — Kanban Agile Board",
        subtitle: "Visual drag-and-drop workflow across 4 operational states: New, In Progress, Waiting for User, and Resolved.",
        image: "/projects/digital-azadi-support/06_super_admin_operations_kanban_board.png",
        caption: "06 - Super Admin Operations Kanban Board",
        highlights: [
          "Swimlane counters displaying real-time ticket counts in each status column.",
          "Agile workflow visualization enabling immediate bottleneck detection.",
          "Fast 1-click status transitions across operational columns.",
        ],
      },
      {
        title: "4. 📑 Interactive Ticket Detail Slide-Over Drawer",
        subtitle: "In-depth ticket inspection panel showing full student query, caller metadata, active support stopwatch timer, internal staff notes, and resolution actions.",
        image: "/projects/digital-azadi-support/07_ticket_detail_live_drawer.png",
        caption: "07 - Ticket Detail Live Drawer",
        highlights: [
          "Stopwatch timer start/stop with manual timing override modal.",
          "Internal audit notes log and reassign specialist dropdown.",
          "Direct WhatsApp chat trigger with pre-filled ticket context and diagnosis.",
        ],
      },
      {
        title: "5. 🎯 Onkar Kulkarni Dedicated Meta Specialist Operations Deck (/onkar)",
        subtitle: "Isolated specialist desk exclusively showing Meta Ads, Pixel, CAPI, Business Manager, and Instagram DM queries for Onkar Sir.",
        image: "/projects/digital-azadi-support/08_onkar_meta_specialist_desk.png",
        caption: "08 - Onkar Meta Specialist Desk",
        highlights: [
          "Role-scoped query isolation (general operations queries are automatically filtered out).",
          "Specialized Meta Ads category badges and tailored workflow queues.",
          "Independent SLA timers dedicated to advertising and tracking issues.",
        ],
      },
      {
        title: "6. 📈 Executive SLA Analytics & Performance Deck (/analytics)",
        subtitle: "Data visualization reporting deck showing response time distributions, platform breakdowns, and SLA compliance scores.",
        image: "/projects/digital-azadi-support/09_sla_analytics_operations_deck.png",
        caption: "09 - SLA Analytics Operations Deck",
        highlights: [
          "100% SLA Target Met gauge (<45 min goal) with 35m average resolution time.",
          "Resolution duration distribution bar chart (<15m, 15-30m, 30-45m, 45-60m, >60m).",
          "Tickets by Ecosystem breakdown (Chakravyuh, Digital Azadi Hub, WordPress) and Tier Proportions donut chart.",
        ],
      },
      {
        title: "7. ⚙️ Cloud Sync & Data Management Control Panel",
        subtitle: "Full admin control center for cloud health monitoring, permanent deletion with anti-resurrection tombstones, Recycle Bin, and audit logs.",
        image: "/projects/digital-azadi-support/10_cloud_sync_data_management_panel.png",
        caption: "10 - Cloud Sync Data Management Panel",
        highlights: [
          "Live roundtrip cloud ping (ms), connection status, and real-time synchronization toggle.",
          "Nuclear 'Clear All' action with safety confirmation modal and downloadable backup first.",
          "Automated old data cleanup (>7 days, >30 days, Resolved) and Recycle Bin with 1-click restore.",
          "Protected tombstones preventing zombie resurrection from offline client caches.",
        ],
      },
      {
        title: "8. 📑 Central Master Database — Google Spreadsheet",
        subtitle: "Authoritative master Google Sheet integrated via Apps Script webhook for real-time bidirectional synchronization.",
        image: "/projects/digital-azadi-support/11_central_google_spreadsheet_database.png",
        caption: "11 - Central Google Spreadsheet Database",
        highlights: [
          "Auto-appends new student tickets and logs support start/end timestamps.",
          "Structured columns: Timestamp, Name, Mobile Number, Email ID, Membership, Query, Remark, Time Taken.",
          "Bi-directional sync via Google Apps Script webhooks acting as single source of truth.",
        ],
      },
      {
        title: "9. 🔐 Admin Security & Role-Based Authentication Gateway (/admin)",
        subtitle: "Modern, branded security gate supporting dedicated role profiles for Sachin Sir (Super Admin) and Onkar Kulkarni (Meta Specialist Lead).",
        image: "/projects/digital-azadi-support/03_admin_secure_login_gate.png",
        caption: "03 - Admin Secure Login Gate",
        highlights: [
          "Role tab toggle between Sachin Sir (All Ops) and Onkar Sir (Meta Ads).",
          "Secure session credentials and direct link back to public portal.",
          "Branded royal blue dark aesthetic with high-contrast typography.",
        ],
      },
      {
        title: "10. 🎫 Public Ticket Submission Portal (/submit)",
        subtitle: "Clean, student-facing public gateway featuring black & white minimalist aesthetics, mobile WhatsApp validation, ecosystem selection, and real-time IST clock.",
        image: "/projects/digital-azadi-support/01_public_ticket_submission_form.png",
        caption: "01 - Public Ticket Submission Portal",
        highlights: [
          "Responsive mobile layout with WhatsApp 10-digit validation and real-time auto-formatting.",
          "Zero-duplicate ticket ID generation (DA-YYYY-XXXX) for instant student tracking.",
          "Membership tier selection: Diamond, Silver, Chakravyuh, Franchise, and PMP.",
          "Specialist assignment routing between Sachin Sir (All Technical Operations) and Onkar Kulkarni (Meta Ads Specialist).",
        ],
      },
      {
        title: "11. 🔍 Public Self-Service Ticket Tracker (/track)",
        subtitle: "Fast, self-service tracking interface where students enter their Ticket ID or WhatsApp Phone number to check resolution status and active duration.",
        image: "/projects/digital-azadi-support/02_public_ticket_tracker.png",
        caption: "02 - Public Ticket Tracker",
        highlights: [
          "Real-time query lookup by Ticket ID or WhatsApp Phone number.",
          "Live SLA progress bar, assigned specialist badge, and public status milestones.",
          "Transparent resolution notes and active handling duration indicators.",
        ],
      },
    ],
    metricsPlaceholder: [
      "[METRIC PLACEHOLDER: Insert SLA target met percentage, e.g. 100% SLA target achieved with sub-45 minute average response]",
      "[METRIC PLACEHOLDER: Insert multi-specialist query routing efficiency, e.g. 40% reduction in ticket bounce rate between tech & Meta ads]",
      "[METRIC PLACEHOLDER: Insert uptime and synchronization reliability, e.g. 99.9% real-time cloud and Google Sheet sync uptime]",
    ],
    testimonialPlaceholder: {
      quote:
        "[TESTIMONIAL PLACEHOLDER: Insert quote from Super Admin or Operations Lead, e.g. 'The Operations Dashboard and SLA Deck gave us complete mastery over incoming support volume and engineer efficiency.']",
      author: "Technical Operations Management",
      role: "Lead Systems Administrator, Digital Azadi",
    },
  },
];
