import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { FeatureGrid } from "@/components/products/FeatureGrid";
import { HowItWorksSteps } from "@/components/products/HowItWorksSteps";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { flagshipFeatures, howItWorks, products } from "@/lib/data";

const product = products.find((item) => item.slug === "seo-aeo-agent")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.description,
};

const audienceHighlights = [
  "Businesses that want to stay visible as search moves toward AI answers",
  "Marketing teams tired of manual technical SEO audits",
  "Agencies that need one dashboard for every client site",
];

export default function SeoAeoAgentPage() {
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
              <Link href="/signup" className={cn(buttonVariants({ size: "lg" }))}>
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                See pricing
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">14-day free trial &middot; No card required</p>
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
          <FeatureGrid features={flagshipFeatures} />
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">How it works</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">From connected site to visibility report</h2>
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
              Businesses and the agencies that manage them
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
            <h3 className="font-heading text-xl font-semibold text-foreground">Multi-tenant, from day one</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Every plan runs on isolated workspaces. Agencies can manage every client from one login,
              with white-label reporting that carries their own branding — not Elyra&apos;s.
            </p>
            <Link href="/pricing" className={cn(buttonVariants(), "mt-6 w-full justify-center")}>
              View plans for agencies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
