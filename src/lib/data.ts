import type {
  DifferentiatorItem,
  FAQItem,
  HowItWorksStep,
  NavLink,
  PricingTier,
  ProblemSolutionItem,
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

export const problemSolutions: ProblemSolutionItem[] = [
  {
    problem: "Too many repetitive manual tasks",
    painDescription:
      "Your team spends hours every week on SEO audits, keyword checks, and content checklists that eat into real strategic work.",
    solution:
      "Elyra's agent runs full technical SEO audits, keyword clustering, and AEO content checks automatically, every day — no manual checklist required.",
  },
  {
    problem: "Disconnected tools and workflows",
    painDescription:
      "Search Console, analytics, spreadsheets, and content docs live in five different tabs that never talk to each other.",
    solution:
      "Elyra connects Google Search Console and GA4 into one workspace, so every recommendation is grounded in your site's real performance data.",
  },
  {
    problem: "Time wasted on routine operations",
    painDescription:
      "Junior team members burn entire days on repetitive SEO checklist work instead of strategy or client growth.",
    solution:
      "Your team reviews a single prioritized queue of AI-generated recommendations instead of running checklists by hand.",
  },
  {
    problem: "Slow business processes",
    painDescription:
      "By the time an issue is found, diagnosed, and fixed manually, competitors have already moved past you in the results.",
    solution: "Elyra detects and prioritizes issues the same day they appear, so fixes ship in hours, not weeks.",
  },
  {
    problem: "Missed opportunities due to manual work",
    painDescription:
      "AI answer engines like ChatGPT and Google AI Overviews are already citing competitors while you're still tracking classic rankings by hand.",
    solution:
      "Elyra tracks and optimizes for AI answer engines as well as classic search, so you stay visible wherever people ask questions.",
  },
  {
    problem: "High operational costs",
    painDescription:
      "Hiring a full in-house SEO team or paying an agency retainer for every client site adds up fast and doesn't scale with growth.",
    solution:
      "One AI agent replaces hours of manual SEO work per site, at a fraction of the cost of a team or retainer.",
  },
];

export const outcomeFeatures: ProductFeature[] = [
  {
    title: "Stay visible in AI search results",
    description:
      "Get cited and recommended inside ChatGPT, Perplexity, and Google AI Overviews — not just ranked in classic search.",
  },
  {
    title: "Cut manual audit time to zero",
    description:
      "Technical SEO issues are found and prioritized automatically, every day, without anyone running a manual crawl.",
  },
  {
    title: "Publish content that actually ranks",
    description:
      "AI-generated recommendations tell you exactly what to fix and why, in plain language your team can act on immediately.",
  },
  {
    title: "Manage every client from one place",
    description:
      "Multi-tenant workspaces let agencies run unlimited client sites from a single login, with reports that carry their own brand.",
  },
  {
    title: "Prove ROI to stakeholders",
    description:
      "White-label, automated reports show search and AI-answer visibility side by side, ready to share on a schedule.",
  },
  {
    title: "Keep full control over what changes",
    description:
      "Every recommendation is reviewed and approved by your team before anything publishes — automation without losing oversight.",
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
    ctaLabel: "Start free trial",
    highlighted: false,
  },
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
      "Plans start at ₹2,999/month for a single site (Starter), ₹6,999/month for growing teams (Growth), and ₹14,999/month for agencies managing unlimited client workspaces (Agency). Annual billing saves 20% on every plan.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can move between Starter, Growth, and Agency at any time as your number of workspaces and tracked keywords grows.",
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
      "Yes. Every plan is built on multi-tenant workspaces, and the Agency plan is specifically designed for agencies managing an unlimited number of client sites from a single login with white-label reporting.",
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
  "Elyra SEO+AEO Agent is our first product and is in active development with early access opening on a rolling basis. Elyra Cybersecurity Agent and Elyra ERP for Institutes are both in design and development, informed directly by conversations with prospective customers in security and education.";
