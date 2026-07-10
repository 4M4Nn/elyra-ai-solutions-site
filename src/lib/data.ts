import type {
  DifferentiatorItem,
  FAQItem,
  HowItWorksStep,
  NavLink,
  PricingTier,
  ProductFeature,
  ProductSummary,
} from "@/types";

export const company = {
  name: "Elyra AI Solutions",
  shortName: "Elyra",
  tagline: "AI agents that run the work, not just answer questions.",
  description:
    "Elyra AI Solutions builds production-grade AI agent products for growing businesses — starting with SEO and Answer Engine Optimization, and expanding into cybersecurity and education technology.",
  email: "hello@elyra.ai",
  foundingYear: 2026,
  address: "Remote-first · Serving clients worldwide",
};

// The deployed SEO+AEO Agent app (login / dashboard).
export const appUrl = process.env.NEXT_PUBLIC_AGENT_URL || "https://nexora-seo-agent-xi.vercel.app";

// The SEO+AEO Agent backend API, for future signup/login wiring.
export const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://nexora-seo-backend.onrender.com";

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
      "Manage unlimited client or brand workspaces from a single account, each with isolated data, reporting, and team access — built for agencies from day one.",
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
    ctaLabel: "Subscribe Now",
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
    ctaLabel: "Subscribe Now",
    highlighted: true,
  },
  {
    slug: "agency",
    name: "Agency",
    price: 14999,
    billingPeriod: "month",
    description: "Multi-tenant workspace management built for agencies serving many clients.",
    features: [
      "Unlimited client workspaces",
      "Daily automated technical audits",
      "AI visibility tracking (search + AI answers)",
      "Unlimited tracked keywords",
      "White-label client reporting",
      "Role-based team & client access",
      "Dedicated onboarding support",
    ],
    ctaLabel: "Subscribe Now",
    highlighted: false,
  },
];

export const pricingFAQ: FAQItem[] = [
  {
    question: "Is Elyra SEO+AEO Agent available now?",
    answer:
      "Yes. Elyra SEO+AEO Agent is live. Choose a plan on the pricing page and create your account in a few minutes.",
  },
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "AEO is the practice of structuring your content so AI answer engines — like ChatGPT, Perplexity, and Google AI Overviews — can accurately find, understand, and cite it when responding to user questions. It sits alongside traditional SEO rather than replacing it.",
  },
  {
    question: "Can agencies manage multiple clients on one account?",
    answer:
      "Yes. Every plan is built on multi-tenant workspaces, and the Agency plan is specifically designed for agencies managing an unlimited number of client sites from a single login with white-label reporting.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes. Toggle to annual billing on the pricing page for a 20% discount on every plan, billed once a year.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can move between Starter, Growth, and Agency at any time as your number of workspaces and tracked keywords grows.",
  },
  {
    question: "What other products is Elyra building?",
    answer:
      "Elyra SEO+AEO Agent is our first product. Elyra Cybersecurity Agent and Elyra ERP for Institutes are both in development — visit the Products page for details and to register interest.",
  },
];

export const differentiators: DifferentiatorItem[] = [
  {
    title: "Built for both search and AI answers",
    description:
      "Most SEO tools only track classic rankings. Elyra tracks and optimizes for AI answer engines too, so you stay visible as more discovery moves into AI conversations.",
  },
  {
    title: "Multi-tenant from the ground up",
    description:
      "Elyra products are architected for agencies and teams managing many clients or brands, not retrofitted from a single-site tool.",
  },
  {
    title: "Agent-driven, human-approved",
    description:
      "Every recommendation is generated by the agent but reviewed and approved by your team before anything changes — automation without losing control.",
  },
  {
    title: "One platform, growing product line",
    description:
      "Elyra AI Solutions is building a family of AI agent products under one account — starting with SEO and AEO, expanding into cybersecurity and education operations.",
  },
];

export const missionStatement =
  "Elyra AI Solutions exists to build AI agents that do real, verifiable work inside a business — not chat interfaces bolted onto old software. We start narrow, ship agents that are genuinely useful in their first week, and expand from there.";

export const roadmapNote =
  "Elyra SEO+AEO Agent is our first product and is in active development with early access opening on a rolling basis. Elyra Cybersecurity Agent and Elyra ERP for Institutes are both in design and development, informed directly by conversations with prospective customers in security and education.";
