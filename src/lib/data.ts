import type {
  DifferentiatorItem,
  FAQItem,
  HowItWorksStep,
  LeadManagementPricingTier,
  NavLink,
  PricingTier,
  ProductFeature,
  ProductSummary,
  TrustedCompany,
} from "@/types";

export const siteUrl = "https://elyra-ai-solutions-site.vercel.app";

export const company = {
  name: "Elyra AI Solutions",
  shortName: "Elyra",
  tagline: "AI agents that run the work, not just answer questions.",
  description:
    "Elyra AI Solutions builds production-grade AI agent products for growing businesses — starting with SEO and Answer Engine Optimization and 24/7 AI lead response, and expanding into cybersecurity and education technology.",
  email: "hello@elyra.ai",
  foundingYear: 2026,
  address: "Remote-first · Serving clients worldwide",
};

// The deployed SEO+AEO Agent app (login / dashboard).
export const appUrl = process.env.NEXT_PUBLIC_AGENT_URL || "https://nexora-seo-agent-xi.vercel.app";

// The SEO+AEO Agent backend API, for future signup/login wiring.
export const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://nexora-seo-backend.onrender.com";

// The deployed Elyra AI Lead Management app — its own product, own login and
// own Razorpay subscription checkout at /subscribe. Not wired into this
// site's shared SEO-Agent auth (see Navbar) — CTAs link straight out to it.
export const leadManagementAppUrl =
  process.env.NEXT_PUBLIC_LEAD_MANAGEMENT_URL || "https://frontend-ten-lilac-94.vercel.app";

export const socialLinks = [
  { platform: "linkedin", href: "https://linkedin.com/company/elyra-ai-solutions" },
  { platform: "x", href: "https://x.com/elyraai" },
  { platform: "github", href: "https://github.com/elyra-ai" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const products: ProductSummary[] = [
  {
    slug: "seo-aeo-agent",
    name: "Elyra SEO+AEO Agent",
    shortName: "SEO+AEO Agent",
    tagline: "The AI agent that keeps you visible in Google and in AI answers.",
    description:
      "A multi-tenant AI agent platform that audits, optimizes, and monitors your website for traditional search engines and AI answer engines like ChatGPT, Perplexity, and Google AI Overviews — built for businesses and the agencies that manage them.",
    status: "live",
    category: "SEO & Answer Engine Optimization",
    audience: "Businesses, marketing teams, and agencies managing multiple client sites",
  },
  {
    slug: "ai-lead-management",
    name: "Elyra AI Lead Management",
    shortName: "AI Lead Management",
    tagline: "An AI agent that answers every lead on WhatsApp, Messenger, and Instagram — 24/7.",
    description:
      "A 24/7 AI agent that responds to every WhatsApp, Facebook Messenger, and Instagram DM the moment it arrives — qualifying leads, booking appointments, and handing off to your staff when needed, so no inquiry waits until business hours.",
    status: "live",
    category: "AI Lead Response & Booking",
    audience: "Service businesses — education, insurance & finance, salons & spas, and general services — that get leads outside business hours",
  },
  {
    slug: "cybersecurity-agent",
    name: "Elyra Cybersecurity Agent",
    shortName: "Cybersecurity Agent",
    tagline: "An always-on AI agent watching your attack surface.",
    description:
      "An AI agent that continuously scans infrastructure, flags vulnerabilities, and prioritizes remediation in plain language — designed for teams without a dedicated security operations center.",
    status: "coming-soon",
    category: "Cybersecurity",
    audience: "Small and mid-sized businesses without a dedicated security team",
  },
  {
    slug: "erp-for-institutes",
    name: "Elyra ERP for Institutes",
    shortName: "ERP for Institutes",
    tagline: "AI-powered operations for schools, colleges, and training institutes.",
    description:
      "An AI-powered ERP that automates admissions, attendance, fee tracking, and academic reporting for educational institutes, with an AI agent that answers staff and parent queries automatically.",
    status: "coming-soon",
    category: "Education Technology",
    audience: "Schools, colleges, and training institutes",
  },
];

export const flagshipFeatures: ProductFeature[] = [
  {
    title: "AI visibility tracking",
    description:
      "Track how often your brand is cited and recommended inside AI answers from ChatGPT, Perplexity, and Google AI Overviews — not just your position in classic search results.",
  },
  {
    title: "Automated technical SEO audits",
    description:
      "The agent continuously crawls your site, catches crawlability, indexing, speed, and structured-data issues, and prioritizes fixes by impact automatically.",
  },
  {
    title: "AEO-optimized content recommendations",
    description:
      "Get AI-generated, editable recommendations that restructure pages and answers so they're easy for both search crawlers and AI answer engines to cite accurately.",
  },
  {
    title: "AI-driven keyword & topic clustering",
    description:
      "The agent groups keywords into topic clusters based on real search and AI-query intent, so your content plan targets what people are actually asking.",
  },
  {
    title: "Multi-tenant workspaces",
    description:
      "Manage multiple client or brand workspaces from a single account, each with isolated data, reporting, and team access — built for agencies from day one.",
  },
  {
    title: "White-label client reporting",
    description:
      "Send branded, automated reports to clients or stakeholders on a schedule, with the agency's own logo and domain instead of Elyra's.",
  },
  {
    title: "Role-based team access",
    description:
      "Invite teammates or clients with granular roles — owner, editor, or read-only reviewer — scoped to individual workspaces.",
  },
  {
    title: "Search Console & analytics integrations",
    description:
      "Connect Google Search Console and GA4 so the agent's recommendations are grounded in your site's real performance data, not generic best practice.",
  },
];

export const businessBenefits: DifferentiatorItem[] = [
  {
    title: "Save time",
    description: "Automate the SEO busywork so your team spends hours on strategy, not checklists.",
  },
  {
    title: "Reduce costs",
    description: "Get agency-grade SEO and AEO monitoring for a fraction of the cost of a retainer or in-house hire.",
  },
  {
    title: "Increase productivity",
    description: "One prioritized queue of AI recommendations replaces a dozen scattered tools and reports.",
  },
  {
    title: "Improve decision making",
    description: "Every recommendation is grounded in real Search Console and GA4 data, not guesswork.",
  },
  {
    title: "Scale operations",
    description: "Add workspaces for new sites or clients in minutes, without adding headcount.",
  },
  {
    title: "Easy implementation",
    description: "Connect your site and start your 14-day free trial in under five minutes — no engineering work required.",
  },
];

export const trustedCompanies: TrustedCompany[] = [
  { name: "Future Optima IT Solutions" },
  { name: "LoopGen Technologies" },
  { name: "IPB Kochi" },
  { name: "KarelQ Healthtech Pvt Ltd" },
];

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: "Connect your site",
    description:
      "Add your domain and connect Google Search Console and GA4. The agent begins crawling and analyzing within minutes.",
  },
  {
    step: 2,
    title: "The agent audits and clusters",
    description:
      "Elyra runs a full technical SEO audit and builds AI-query-aware topic clusters based on how your audience actually searches and asks questions.",
  },
  {
    step: 3,
    title: "Review AI-generated recommendations",
    description:
      "Approve, edit, or dismiss prioritized fixes and content recommendations from a single queue — nothing publishes without your sign-off.",
  },
  {
    step: 4,
    title: "Monitor visibility over time",
    description:
      "Track search rankings and AI-answer citations side by side, with white-label reports ready to share with clients or leadership.",
  },
];

export const annualDiscountPercent = 20;

export const pricingTiers: PricingTier[] = [
  {
    slug: "starter",
    name: "Starter",
    price: 2999,
    billingPeriod: "month",
    description: "For a single site that needs consistent AI-driven SEO and AEO monitoring.",
    features: [
      "1 workspace / site",
      "Weekly automated technical audits",
      "AI visibility tracking (search + AI answers)",
      "Up to 100 tracked keywords",
      "Search Console & GA4 integration",
      "Email support",
    ],
    ctaLabel: "Start free trial",
    ctaHref: "/signup",
    highlighted: false,
  },
  {
    slug: "growth",
    name: "Growth",
    price: 6999,
    billingPeriod: "month",
    description: "For growing teams managing several brands or a larger content footprint.",
    features: [
      "Up to 5 workspaces / sites",
      "Daily automated technical audits",
      "AI visibility tracking (search + AI answers)",
      "Up to 1,000 tracked keywords",
      "AI content & AEO recommendations",
      "Role-based team access",
      "Priority email support",
    ],
    ctaLabel: "Start free trial",
    ctaHref: "/signup",
    highlighted: true,
  },
  {
    slug: "agency",
    name: "Agency",
    price: 14999,
    billingPeriod: "month",
    description: "Multi-tenant workspace management for agencies managing up to 15 active clients.",
    features: [
      "Up to 15 client workspaces",
      "Daily automated technical audits",
      "AI visibility tracking (search + AI answers)",
      "Unlimited tracked keywords",
      "White-label client reporting",
      "Role-based team & client access",
      "Dedicated onboarding support",
    ],
    ctaLabel: "Start free trial",
    ctaHref: "/signup",
    highlighted: false,
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    price: 0,
    billingPeriod: "month",
    description: "For large agencies and organizations that need unlimited scale, custom integrations, and dedicated support.",
    features: [
      "Unlimited client workspaces",
      "Custom tracked keyword volume",
      "Custom integrations & data exports",
      "Dedicated success manager",
      "Enterprise SSO & security review",
      "Custom contract, invoicing & SLA",
    ],
    ctaLabel: "Talk to Sales",
    ctaHref: "/contact",
    highlighted: false,
    customPricing: true,
  },
];

export const leadManagementPricingTiers: LeadManagementPricingTier[] = [
  {
    slug: "small",
    name: "Small",
    price: 2999,
    description: "For a single location that needs its WhatsApp inbox handled around the clock.",
    features: ["WhatsApp AI agent", "Booking + CRM", "1 staff seat"],
    highlighted: false,
  },
  {
    slug: "medium",
    name: "Medium",
    price: 5999,
    description: "For teams ready to bring Instagram and Messenger into the same AI-handled inbox.",
    features: ["Everything in Small", "Instagram DM + Messenger", "5 staff seats"],
    highlighted: true,
  },
  {
    slug: "high",
    name: "High",
    price: 9999,
    description: "For growing teams that need priority support and no seat limits.",
    features: ["Everything in Medium", "Priority support", "Unlimited staff seats"],
    highlighted: false,
  },
];

export const leadManagementHighlights: string[] = [
  "One Meta Business Login connects WhatsApp, Messenger & Instagram",
  "Instant AI replies to every lead, 24/7 — nights, weekends, holidays",
  "Books appointments and qualifies leads inside the conversation",
  "Staff can take over anytime — the AI auto-resumes if they go quiet",
];

export const flagshipHighlights: string[] = [
  "AI visibility tracking across Google and AI answer engines",
  "Automated technical SEO audits, prioritized by impact",
  "Multi-tenant workspaces built for agencies from day one",
  "White-label client reporting on a schedule",
];

export const faqItems: FAQItem[] = [
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. Every new account gets a 14-day free trial with no card required — 1 website and up to 5 blog posts, full audit and AEO tracking included. Choose a plan any time during or after the trial to unlock more workspaces and keywords.",
  },
  {
    question: "What happens after my 14-day trial ends?",
    answer:
      "You can choose a plan and continue seamlessly, or do nothing — your workspace simply pauses until you subscribe. You are never charged automatically without picking a plan.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most teams connect their site and see their first audit results in under 10 minutes — no engineering work required.",
  },
  {
    question: "Is Elyra SEO+AEO Agent available now?",
    answer:
      "Yes. Elyra SEO+AEO Agent is live. Start your 14-day free trial from the pricing page and create your account in a few minutes.",
  },
  {
    question: "How much does Elyra SEO+AEO Agent cost?",
    answer:
      "Plans start at ₹2,999/month for a single site (Starter), ₹6,999/month for growing teams (Growth), and ₹14,999/month for agencies managing up to 15 client workspaces (Agency). Annual billing saves 20% on every plan. Larger agencies and organizations needing unlimited workspaces get custom Enterprise pricing — talk to sales.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can move between Starter, Growth, and Agency at any time as your number of workspaces and tracked keywords grows. If you outgrow Agency's 15-client limit, our team will move you to a custom Enterprise plan.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest, and each workspace is isolated so client data never mixes across accounts.",
  },
  {
    question: "What support do you offer?",
    answer:
      "Every plan includes email support, with priority email support on Growth and dedicated onboarding support on Agency.",
  },
  {
    question: "What integrations does Elyra support?",
    answer:
      "Elyra connects directly with Google Search Console and Google Analytics 4 today, with more integrations planned as we grow.",
  },
  {
    question: "Do you share my data with third parties?",
    answer:
      "No. Your site and account data is used only to power your own recommendations and reports — it is never sold or shared with third parties.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel during your free trial or at any time after with no cancellation fee — your workspace stays active until the end of your current billing period.",
  },
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "AEO is the practice of structuring your content so AI answer engines — like ChatGPT, Perplexity, and Google AI Overviews — can accurately find, understand, and cite it when responding to user questions. It sits alongside traditional SEO rather than replacing it.",
  },
  {
    question: "Can agencies manage multiple clients on one account?",
    answer:
      "Yes. Every plan is built on multi-tenant workspaces. The Agency plan is designed for agencies managing up to 15 client sites from a single login with white-label reporting — agencies managing more than 15 clients can move to a custom Enterprise plan with unlimited workspaces.",
  },
  {
    question: "What other products is Elyra building?",
    answer:
      "Elyra SEO+AEO Agent is our first product. Elyra Cybersecurity Agent and Elyra ERP for Institutes are both in development — visit the Products page for details and to register interest.",
  },
];

export const missionStatement =
  "Elyra AI Solutions exists to build AI agents that do real, verifiable work inside a business — not chat interfaces bolted onto old software. We start narrow, ship agents that are genuinely useful in their first week, and expand from there.";

export const roadmapNote =
  "Elyra SEO+AEO Agent and Elyra AI Lead Management are both live today. Elyra Cybersecurity Agent and Elyra ERP for Institutes are both in design and development, informed directly by conversations with prospective customers in security and education.";
