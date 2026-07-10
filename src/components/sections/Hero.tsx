import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroPoints = [
  "AI visibility across search and AI answer engines",
  "Multi-tenant workspaces built for agencies",
  "Human-approved before anything publishes",
];

export function Hero() {
  return (
    <section className="bg-hero-gradient">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Now shipping: Elyra SEO+AEO Agent
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            AI agents that <span className="text-brand-gradient">run the work</span>, not just answer questions.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Elyra AI Solutions builds production-grade AI agent products for growing businesses —
            starting with an agent that keeps you visible in Google search and in AI answer engines
            like ChatGPT and Perplexity.
          </p>

          <ul className="mt-6 space-y-3">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/products/seo-aeo-agent" className={cn(buttonVariants({ size: "lg" }))}>
              Explore SEO+AEO Agent
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              View all products
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <p className="text-sm font-semibold text-foreground">AI Visibility Overview</p>
              <span className="rounded-full bg-brand-emerald/10 px-2.5 py-1 text-xs font-semibold text-brand-emerald">
                Live
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">Search visibility</p>
                <p className="mt-1 font-heading text-2xl font-bold text-foreground">+38%</p>
              </div>
              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">AI answer citations</p>
                <p className="mt-1 font-heading text-2xl font-bold text-foreground">126</p>
              </div>
              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">Issues auto-detected</p>
                <p className="mt-1 font-heading text-2xl font-bold text-foreground">14</p>
              </div>
              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">Workspaces managed</p>
                <p className="mt-1 font-heading text-2xl font-bold text-foreground">6</p>
              </div>
            </div>
          </div>
          <div className="relative z-10 -mt-6 ml-6 hidden max-w-[240px] rounded-xl border border-border bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-xs text-muted-foreground">Agent recommendation</p>
            <p className="mt-1 text-sm font-medium text-foreground">
              Add FAQ schema to /pricing to improve AI answer citations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
