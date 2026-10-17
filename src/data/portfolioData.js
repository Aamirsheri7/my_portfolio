export const personalInfo = {
  name: "Mohammad Aamir",
  title: "React Native & React.js Developer",
  experienceYears: "3 Years 10 Months",
  experienceSummary: "Nearly 3 years in React Native & 9+ months in React.js / Next.js",
  location: "Noida Sector-62, India",
  email: "moaamir845@gmail.com",
  phone: "+91 6395682862",
  whatsappUrl: "https://wa.me/916395682862?text=Hi%20Mohammad%20Aamir,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
  linkedin: "https://linkedin.com/in/aamir-react-native",
  linkedinHandle: "in/aamir-react-native",
  github: "https://github.com",
  bio: "Passionate cross-platform mobile and frontend engineer specializing in high-performance React Native (iOS & Android) and modern React.js/Next.js web applications. Proven track record delivering 8+ production apps across e-commerce, fintech, blockchain, logistics, and healthcare with 10K+ Play Store downloads and ultra-responsive real-time architectures.",
  stats: [
    { label: "Production Apps", value: "8+", detail: "Across iOS, Android & Web" },
    { label: "Play Store Downloads", value: "10K+", detail: "On live flagship apps" },
    { label: "Experience", value: "3.8+ Yrs", detail: "Hands-on engineering" },
    { label: "API Latency Tuning", value: "~80ms", detail: "Optimistic UI & caching" },
  ],
};

export const skillsData = {
  mobile: {
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: 95, highlight: true },
      { name: "iOS Development", level: 85 },
      { name: "Android Development", level: 88 },
      { name: "Cross-Platform Apps", level: 95, highlight: true },
      { name: "WebView & Native Modules", level: 85 },
      { name: "FlatList Virtualization & Tuning", level: 92, highlight: true },
      { name: "App Store & Play Store Deployment", level: 90, highlight: true },
    ],
  },
  web: {
    title: "Web & Frontend",
    skills: [
      { name: "React.js", level: 92, highlight: true },
      { name: "Next.js", level: 85, highlight: true },
      { name: "TypeScript", level: 90, highlight: true },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Responsive UI Architecture", level: 94 },
      { name: "Figma to Code", level: 92 },
    ],
  },
  stateAndRealtime: {
    title: "State & Real-Time Sync",
    skills: [
      { name: "Redux Toolkit", level: 92, highlight: true },
      { name: "Zustand", level: 90, highlight: true },
      { name: "RTK Query", level: 88, highlight: true },
      { name: "WebSockets", level: 88, highlight: true },
      { name: "WebRTC", level: 80 },
      { name: "Context API", level: 90 },
      { name: "Live Data Synchronization", level: 88 },
    ],
  },
  backendAndCloud: {
    title: "APIs, Auth & Cloud",
    skills: [
      { name: "REST APIs & JSON", level: 95, highlight: true },
      { name: "Firebase Auth & Realtime DB", level: 90, highlight: true },
      { name: "HTTP Interceptors & Retry Logic", level: 92 },
      { name: "JWT & Token Management", level: 90 },
      { name: "AWS Integration", level: 82 },
      { name: "Performance Profiling", level: 88 },
    ],
  },
  toolsAndDevOps: {
    title: "Tools & Ecosystem",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Android Studio & Xcode", level: 88 },
      { name: "Tamagui & Material UI", level: 85 },
      { name: "Linux & macOS", level: 88 },
      { name: "Agile & Scrum Sprints", level: 90 },
      { name: "Staged Rollouts & Versioning", level: 90 },
    ],
  },
};

export const projectsData = [
  {
    id: "annalaxmi",
    title: "AnnaLaxmi E-Commerce Ecosystem",
    subtitle: "3 Connected Production Apps (Customer, Driver & Store)",
    category: "mobile",
    secondaryCategory: "ecommerce",
    description:
      "Engineered and maintained a full 3-app multi-sided ecosystem serving customers, delivery drivers, and grocery/retail merchants with seamless order dispatching and live tracking.",
    metrics: ["3 Interconnected Apps", "~80ms API Response", "Optimistic Local Cart", "Live on Google Play"],
    technologies: ["React Native", "TypeScript", "REST APIs", "Local Cart Cache", "Google Play Store"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.iqannalaxmi",
    featured: true,
    highlights: [
      "Built instant UI cart quantity feedback with local optimistic state before server confirmation",
      "Achieved sub-80ms response times for key shopping and catalog browsing operations",
      "Integrated real-time order lifecycle status, driver dispatch routing, and store notifications",
      "Published and maintained stable releases on Google Play Store",
    ],
  },
  {
    id: "vicard",
    title: "Vicard – Digital Business Card",
    subtitle: "Production App with 10,000+ Google Play Store Installs",
    category: "mobile",
    secondaryCategory: "social",
    description:
      "A high-growth digital visiting card creation, contact synchronization, and contactless networking platform with over 10K active installs worldwide.",
    metrics: ["10K+ Play Store Installs", "Dynamic QR Generation", "Instant Contact Export"],
    technologies: ["React Native", "Firebase", "Redux Toolkit", "QR Scanner/Generator", "Play Store"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vicard",
    featured: true,
    highlights: [
      "Engineered responsive digital business card designer with instant preview and custom branding",
      "Scaled the application to achieve 10,000+ organic Google Play Store installations",
      "Integrated seamless vCard export, QR code generation, and fast offline-first caching",
      "Managed versioning, automated bundle generation, and staged rollouts",
    ],
  },
  {
    id: "orlla",
    title: "Orlla – Blockchain Mining Rewards Platform",
    subtitle: "Real-Time Token Tracking & Mining Mobile App",
    category: "mobile",
    secondaryCategory: "fintech",
    description:
      "Next-generation mobile platform for cryptocurrency coin mining status, automated reward payouts, wallet balances, and real-time token tracking.",
    metrics: ["Live Token Tracking", "Zustand State", "RTK Query Cache", "High-Security Auth"],
    technologies: ["React Native", "TypeScript", "Zustand", "RTK Query", "WebSockets"],
    featured: true,
    highlights: [
      "Implemented Zustand for scalable client-side UI states and RTK Query for intelligent server caching",
      "Integrated secure authentication with biometric/token verification and wallet address validation",
      "Delivered real-time mining state streaming, earning counters, and push notifications",
    ],
  },
  {
    id: "cryptowater",
    title: "CryptoWater – Crypto Trading App",
    subtitle: "Low-Latency Market Data & High-Frequency Streaming",
    category: "mobile",
    secondaryCategory: "fintech",
    description:
      "High-performance cryptocurrency trading mobile application with live order books, real-time WebSocket price tickers, and instant order execution.",
    metrics: ["Sub-second Ticker Feeds", "WebSocket Integration", "Memoized FlatLists"],
    technologies: ["React Native", "WebSockets", "Memoization", "Financial Charts", "REST APIs"],
    featured: false,
    highlights: [
      "Integrated high-throughput WebSockets for real-time cryptocurrency tick updates without frame drops",
      "Optimized rendering pipelines through React memoization and virtualized list tuning",
      "Secured API communication with custom HTTP interceptors and auto-refreshing JWT tokens",
    ],
  },
  {
    id: "motiontss",
    title: "MotionTss – School Transport Management",
    subtitle: "Real-Time GPS Vehicle Tracking & QR Student Security",
    category: "mobile",
    secondaryCategory: "logistics",
    description:
      "Mission-critical school transit safety system connecting school administrators, bus drivers, and parents with live GPS vehicle telematics and QR verification.",
    metrics: ["Live GPS Map Tracking", "QR Code Verification", "Zero-Latency Alerts"],
    technologies: ["React Native", "GPS Geolocation", "QR Code Scanner", "Push Notifications"],
    featured: false,
    highlights: [
      "Developed live driver location tracking on interactive map view with speed and route telemetry",
      "Implemented QR code scanning for instantaneous student boarding and alighting verification",
      "Engineered automated notifications for geofence entry, delay alerts, and emergency beacons",
    ],
  },
  {
    id: "owndata",
    title: "OwnData – Professional Networking Platform",
    subtitle: "LinkedIn-Style Web Platform with Dynamic Job Board",
    category: "web",
    secondaryCategory: "social",
    description:
      "Modern professional networking web application featuring rich user profiles, talent discovery, job listings, application tracking, and post feeds.",
    metrics: ["Figma-to-Code Precision", "Next.js SSR/SSG", "Reusable Component Library"],
    technologies: ["React.js", "Next.js", "TypeScript", "REST APIs", "Modular CSS"],
    featured: true,
    highlights: [
      "Built clean, modular, reusable component design system based on high-fidelity Figma specifications",
      "Engineered job search, advanced multi-parameter filtering, and applicant submission workflows",
      "Optimized page load speed and SEO performance using Next.js hybrid rendering",
    ],
  },
  {
    id: "bietnami",
    title: "Bietnami – NFT & Music Marketplace",
    subtitle: "Digital Audio Assets & Web3 Creator Platform",
    category: "web",
    secondaryCategory: "fintech",
    description:
      "Decentralized digital asset ecosystem allowing musicians, creators, and collectors to buy, sell, and stream exclusive music NFTs with digital rights management.",
    metrics: ["Audio Waveform Streaming", "Web3 Asset Flows", "Cross-Browser Compatible"],
    technologies: ["React.js", "Next.js", "Web Audio API", "REST APIs", "Modern CSS"],
    featured: false,
    highlights: [
      "Engineered smooth in-browser audio preview player with live waveform visualizer",
      "Constructed digital asset catalog with instant search, category filtering, and checkout flows",
      "Ensured rigorous cross-browser compatibility across Safari, Chrome, Edge, and Firefox",
    ],
  },
  {
    id: "drz",
    title: "DRZ – Dental Referral Zone",
    subtitle: "Enterprise Healthcare Referral & Clinic Portal",
    category: "mobile",
    secondaryCategory: "healthcare",
    description:
      "Enterprise healthcare referral solution streamlining patient transfer records and diagnostics between dental clinics and specialist hospitals.",
    metrics: ["Role-Based Access Control", "HIPAA-Friendly REST APIs", "Clinic Network"],
    technologies: ["React Native", "TypeScript", "REST APIs", "Role Management"],
    featured: false,
    highlights: [
      "Engineered multi-role permission systems for clinic staff, consulting dentists, and hospital admins",
      "Implemented secure encrypted patient record transmissions and attachment uploads",
      "Built custom offline draft forms allowing doctors to compile referrals in low-connectivity areas",
    ],
  },
  {
    id: "diaspowire",
    title: "Diaspowire – AWS-Powered Job Platform",
    subtitle: "Cloud-Scale Job Marketplace Connecting Global Talent",
    category: "web",
    secondaryCategory: "recruitment",
    description:
      "Global employment marketplace connecting expatriates and diaspora professionals with international recruiters using AWS cloud infrastructure.",
    metrics: ["AWS S3 Resume Storage", "Elastic Search Filters", "Real-Time Application Tracking"],
    technologies: ["React.js", "AWS Services", "REST APIs", "JWT Auth"],
    featured: false,
    highlights: [
      "Integrated AWS cloud services for resume document storage and high-throughput application intake",
      "Built recruiter analytics dashboard tracking application conversion funnels and interview schedules",
    ],
  },
  {
    id: "callisdiary",
    title: "Calli's Diary – Pet Social Media Platform",
    subtitle: "Community App for Dog & Cat Owners",
    category: "web",
    secondaryCategory: "social",
    description:
      "Delightful photo and story sharing community for pet parents featuring pet profiles, veterinarian Q&A forums, and pet-friendly place recommendations.",
    metrics: ["Interactive Media Feed", "Social Engagement Likes & Comments", "Responsive UI"],
    technologies: ["React.js", "Next.js", "REST APIs", "CSS Modules"],
    featured: false,
    highlights: [
      "Created dynamic visual story feeds with instant photo uploads and comment threading",
      "Implemented responsive card layouts optimized for mobile web and tablet viewports",
    ],
  },
];

export const experienceData = [
  {
    company: "MetaflowX Pvt. Ltd.",
    website: "https://www.metaflowx.com",
    role: "Software Developer – React Native",
    period: "Jun 2025 – Present",
    displayPeriod: "Current Role",
    location: "Sector 15, Noida, India",
    type: "Full-Time",
    description:
      "Leading architecture and feature delivery for flagship e-commerce and blockchain mobile products built with React Native and TypeScript.",
    achievements: [
      "Architected and delivered the Orlla blockchain-based mining rewards mobile app featuring real-time token tracking and secure cryptographic auth",
      "Adopted Zustand for ultra-lean client state management alongside RTK Query for automated cache invalidation and background synchronization",
      "Conducted rigorous peer code reviews enforcing strict TypeScript standards, atomic component design, and zero memory leak patterns",
      "Collaborated closely with cross-functional product leads and backend engineers in fast-paced two-week agile sprints",
    ],
    skills: ["React Native", "TypeScript", "Zustand", "RTK Query", "Blockchain", "WebSockets"],
  },
  {
    company: "Apponward Technologies",
    website: "https://apponward.com",
    role: "Software Developer – React Native",
    period: "Jun 2023 – Apr 2025",
    displayPeriod: "1 Year 11 Months",
    location: "Noida Sector-62, India",
    type: "Full-Time",
    description:
      "Core mobile developer responsible for shipping 6+ production iOS & Android applications across logistics, e-commerce, and enterprise domains.",
    achievements: [
      "Spearheaded end-to-end development of 6+ cross-platform mobile apps using React Native and TypeScript from scratch to store publication",
      "Engineered resilient REST API integration layer with custom Axios HTTP interceptors, automatic retry logic, and centralized error boundaries",
      "Implemented Firebase Authentication, JWT session token auto-renewal, and real-time database listener syncing",
      "Significantly boosted FPS and reduced startup time through FlatList windowing, memoized selectors, and lazy bundle loading",
      "Independently managed Apple App Store and Google Play Store build submission, metadata management, and staged rollout releases",
    ],
    skills: ["React Native", "iOS (Xcode)", "Android (Studio)", "Firebase", "App Store", "Google Play Store", "FlatList Tuning"],
  },
  {
    company: "Mobiloitte Technologies India Pvt. Ltd.",
    website: "https://www.mobiloitte.com",
    role: "Frontend Developer – React.js",
    period: "Jul 2022 – Mar 2023",
    displayPeriod: "9 Months",
    location: "New Delhi, India",
    type: "Full-Time",
    description:
      "Specialized in modern responsive web applications, design system implementations, and high-performance React.js and Next.js interfaces.",
    achievements: [
      "Translated complex Figma design systems into pixel-perfect, accessible, and responsive React.js & Next.js user interfaces",
      "Built standardized, reusable UI component libraries integrated with JSON REST endpoints",
      "Delivered Bietnami (NFT & Music Marketplace with digital asset management) and OwnData (LinkedIn-style professional network)",
      "Guaranteed cross-browser compatibility across desktop and mobile browsers, optimizing Lighthouse performance scores",
    ],
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Figma to Code", "REST APIs", "CSS3 / Responsive"],
  },
];

export const achievementsData = [
  {
    title: "10,000+ Google Play Store Installs",
    description: "Successfully built and deployed Vicard, scaling to over 10K organic installations on the Google Play Store.",
    icon: "TrendingUp",
    metric: "10K+ Installs",
  },
  {
    title: "8+ Multi-Platform Production Deliveries",
    description: "Shipped and supported 8+ mobile and web platforms spanning e-commerce, fintech, blockchain, healthcare, and logistics.",
    icon: "Award",
    metric: "8+ Apps Live",
  },
  {
    title: "Sub-80ms API Response & Optimistic UX",
    description: "Engineered local state caching and optimistic cart synchronization in AnnaLaxmi, reducing user-perceived latency to near zero.",
    icon: "Zap",
    metric: "~80ms Latency",
  },
  {
    title: "Full App Store & Play Store Lifecycle Ownership",
    description: "Complete ownership from architecture, native configuration, permissions, and certs to staged production rollouts.",
    icon: "ShieldCheck",
    metric: "100% End-to-End",
  },
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Engineering",
  institution: "Mewat Engineering College",
  affiliation: "Affiliated to Maharshi Dayanand University (MDU), Rohtak, Haryana",
  period: "2018 – 2022",
  status: "Completed",
};

export const interactiveSimulators = [
  {
    id: "annalaxmi",
    appName: "AnnaLaxmi",
    category: "E-Commerce",
    badge: "Live on Play Store",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.iqannalaxmi",
    accentColor: "#10b981", // Emerald
    batteryLevel: "98%",
    signal: "5G",
    screenData: {
      headerTitle: "Fresh Groceries & Essentials",
      headerSub: "Express 15-min delivery • Sector 62",
      activeCartCount: 3,
      items: [
        { name: "Organic Farm Fresh Milk", qty: "2 Packs", price: "₹120", tag: "Fast Delivery" },
        { name: "Cold-Pressed Olive Oil", qty: "1 Litre", price: "₹540", tag: "Best Seller" },
        { name: "Brown Whole Wheat Bread", qty: "1 Loaf", price: "₹45", tag: "Fresh Baked" },
      ],
      totalAmount: "₹705",
      statusMessage: "⚡ Optimistic Cart Update: Saved 80ms server latency",
    },
  },
  {
    id: "vicard",
    appName: "Vicard",
    category: "Digital Business Card",
    badge: "10K+ Installs",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vicard",
    accentColor: "#06b6d4", // Cyan
    batteryLevel: "100%",
    signal: "5G",
    screenData: {
      headerTitle: "Digital Profile Card",
      headerSub: "NFC & QR Instant Sharing",
      cardName: "Mohammad Aamir",
      cardRole: "React Native & React.js Developer",
      company: "MetaflowX | Apponward",
      quickActions: ["Share via QR", "Export vCard", "Save Contact", "Analytics"],
      statsSummary: "482 card views this week • 98 contacts synced",
      statusMessage: "🚀 10K+ Google Play Store users active",
    },
  },
  {
    id: "orlla",
    appName: "Orlla Mining",
    category: "Blockchain & Fintech",
    badge: "RTK Query + Zustand",
    accentColor: "#8b5cf6", // Purple
    batteryLevel: "94%",
    signal: "Wi-Fi",
    screenData: {
      headerTitle: "Mining Operations Live",
      headerSub: "Hashrate: 142.6 MH/s • Status: Active",
      tokenBalance: "4,289.45 ORL",
      fiatEquivalent: "≈ $1,286.83 USD",
      rewardsToday: "+48.20 ORL (+3.8%)",
      recentMiningBlock: "Block #849,201 validated",
      statusMessage: "🔒 Biometric token session & real-time sync active",
    },
  },
  {
    id: "cryptowater",
    appName: "CryptoWater",
    category: "Real-Time Trading",
    badge: "Sub-Second WebSockets",
    accentColor: "#f59e0b", // Amber
    batteryLevel: "89%",
    signal: "5G",
    screenData: {
      headerTitle: "Spot Trading Market",
      headerSub: "WebSocket Stream: Connected (0ms lag)",
      pairs: [
        { symbol: "BTC/USDT", price: "$64,320.50", change: "+4.12%", up: true },
        { symbol: "ETH/USDT", price: "$3,490.15", change: "+6.85%", up: true },
        { symbol: "SOL/USDT", price: "$152.80", change: "-1.20%", up: false },
      ],
      orderBookSpread: "Spread: 0.01% • 24h Vol: $4.2B",
      statusMessage: "⚡ Memoized FlatList & zero dropped frames",
    },
  },
];
