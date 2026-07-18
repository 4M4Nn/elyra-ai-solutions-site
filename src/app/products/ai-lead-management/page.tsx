import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";

import { FeatureGrid } from "@/components/products/FeatureGrid";
import { HowItWorksSteps } from "@/components/products/HowItWorksSteps";
import { FAQAccordion } from "@/components/pricing/FAQAccordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { leadManagementAppUrl, leadManagementPricingTiers, products } from "@/lib/data";
import type { FAQItem, HowItWorksStep, ProductFeature } from "@/types";

const product = products.find((item) => item.slug === "ai-lead-management")!;
const subscribeUrl = `${leadManagementAppUrl}/subscribe`;

export const metadata: Metadata = {
  title: product.name,
  description: product.description,
};

const audienceHighlights = [
  "Service businesses that get leads outside business hours — education, insurance, salons, clinics",
  "Teams who can't staff someone to answer every WhatsApp message instantly",
  "Businesses juggling WhatsApp, Messenger, and Instagram DMs as separate inboxes today",
];

const capabilities: ProductFeature[] = [
  {
    title: "One Meta Business Login",
    description:
      "Connect WhatsApp, Facebook Messenger, and Instagram DMs together in a single guided flow on Meta's own consent screen — no separate app reviews or manual webhook setup.",
  },
  {
    title: "Instant AI responses, 24/7",
    description:
      "Every lead gets an immediate, on-brand reply any time of day or night, so no inquiry sits unanswered until business hours.",
  },
  {
    title: "Configurable qualifying questions",
    description:
      "Ask up to three custom questions per conversation so your team sees pre-qualified leads, not just raw messages.",
  },
  {
    title: "Appointment booking built in",
    description:
      "The agent books appointments — or consultations, sessions, demos, whatever you call them — directly inside the conversation.",
  },
  {
    title: "Human takeover with auto-resume",
    description:
      "Staff can step into any conversation at any time. If a lead goes quiet during handover, the AI automatically resumes after a timeout you configure, so nothing goes cold.",
  },
  {
    title: "Multi-language support",
    description: "Serve leads in English, Hindi, Tamil, Malayalam, or the languages your customers actually use.",
  },
  {
    title: "Per-industry knowledge base",
    description:
      "Configure the agent's knowledge — services, pricing, FAQs — around your business, whether that's edutech, insurance & finance, salon & spa, or general services.",
  },
  {
    title: "Independently verified connections",
    description:
      "Each channel's webhook subscription is confirmed with Meta directly, not just assumed — your dashboard reflects whether a channel is genuinely live.",
  },
];

const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: "Connect WhatsApp, Messenger & Instagram",
    description:
      "One Meta Business Login links your WhatsApp number, Facebook Page, and Instagram account together — you choose exactly what to share on Meta's own screen.",
  },
  {
    step: 2,
    title: "Configure your AI agent",
    description:
      "Set your persona and tone, languages, knowledge base, and qualifying questions once. The agent uses them on every conversation from then on.",
  },
  {
    step: 3,
    title: "The agent responds instantly, 24/7",
    description:
      "Every inbound message gets an immediate AI reply, qualifies the lead, and books appointments — day or night, weekends included.",
  },
  {
    step: 4,
    title: "Staff step in anytime, AI resumes automatically",
    description:
      "Your team can take over any conversation. If there's no reply within your configured window, the AI automatically steps back in so no lead goes cold.",
  },
];

const pricingTiers = leadManagementPricingTiers;

const faqItems: FAQItem[] = [
  {
    question: "Is Elyra AI Lead Management live?",
    answer:
      "Yes — it's live today. You can subscribe and connect your WhatsApp, Messenger, and Instagram in a few minutes from the pricing section below.",
  },
  {
    question: "Which channels does it support?",
    answer:
      "WhatsApp, Facebook Messenger, and Instagram DM, all through one Meta Business Login. The Small plan covers WhatsApp; Messenger and Instagram are included on Medium and High.",
  },
  {
    question: "Does the AI ever stop responding?",
    answer:
      "No — it runs 24/7. If a staff member takes over a conversation and goes quiet, the AI automatically resumes after your configured inactivity window so leads don't go cold.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Small is ₹2,999/month (WhatsApp only), Medium is ₹5,999/month (adds Messenger and Instagram, 5 staff seats), and High is ₹9,999/month (unlimited staff seats and priority support).",
  },
  {
    question: "What kind of businesses is this built for?",
    answer:
      "Service businesses that get leads outside business hours — education providers, insurance and finance advisors, salons and spas, and general service businesses — with per-industry knowledge base configuration for each.",
  },
];

export default function AiLeadManagementPage() {
  return (
    <div>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-brand-emerald/10 px-3 py-1 text-xs font-semibold text-brand-emerald">
              Live product
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{product.description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={subscribeUrl} target="_blank" rel="noreferrer noopener" className={cn(buttonVariants({ size: "lg" }))}>
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="#pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                See pricing
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Cancel or change plans anytime</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Capabilities</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">
            Everything the agent handles for you
          </h2>
        </div>
        <div className="mt-12">
          <FeatureGrid features={capabilities} />
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">How it works</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">
              From Meta Business Login to answered leads
            </h2>
          </div>
          <div className="mt-12">
            <HowItWorksSteps steps={howItWorks} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Built for</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">
              Service businesses that can&apos;t staff 24/7
            </h2>
            <p className="mt-4 text-muted-foreground">{product.audience}</p>
            <ul className="mt-6 space-y-3">
              {audienceHighlights.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-foreground">Never off the clock</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              The agent answers every WhatsApp, Messenger, and Instagram message the moment it arrives —
              nights, weekends, and holidays included — then hands off to your staff whenever they want to
              step in, and resumes automatically the moment they step back out.
            </p>
            <a
              href={subscribeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(buttonVariants(), "mt-6 w-full justify-center")}
            >
              Connect your business
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pricing</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">
              Simple pricing for Elyra AI Lead Management
            </h2>
            <p className="mt-4 text-muted-foreground">Cancel or change plans anytime.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.slug}
                className={cn(
                  "flex flex-col rounded-3xl border p-8",
                  tier.highlighted
                    ? "border-primary bg-white shadow-xl lg:-translate-y-3"
                    : "border-border bg-white shadow-sm"
                )}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Most popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-foreground">
                    ₹{tier.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={subscribeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={cn(
                    buttonVariants({ variant: tier.highlighted ? "default" : "outline" }),
                    "mt-6 w-full justify-center"
                  )}
                >
                  Subscribe to {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Common questions</h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </div>
  );
}
