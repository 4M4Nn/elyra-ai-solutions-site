import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Target, Users } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company, missionStatement, products, roadmapNote } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `The mission behind ${company.name} and how we build AI agent products.`,
};

const principles = [
  {
    icon: Target,
    title: "Narrow first, expand deliberately",
    description:
      "We ship one agent that is genuinely useful in its first week before opening a second product line. Elyra SEO+AEO Agent came first for that reason.",
  },
  {
    icon: Users,
    title: "Human-approved automation",
    description:
      "Our agents generate recommendations and take routine actions, but nothing publishes or changes without a person reviewing it first.",
  },
  {
    icon: Layers,
    title: "Multi-tenant from the start",
    description:
      "Every product is architected around workspaces from day one, so agencies and teams managing multiple brands are never an afterthought.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability over hype",
    description:
      "We would rather ship a smaller feature set that works consistently than a long list of features that are unreliable in production.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">About {company.shortName}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Building AI agents that do real work
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{missionStatement}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <principle.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Roadmap</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Where the product line is headed</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{roadmapNote}</p>
          </div>

          <ol className="mt-12 space-y-6">
            {products.map((product, index) => (
              <li key={product.slug} className="flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-heading text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-base font-semibold text-foreground">{product.name}</h3>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                        product.status === "live"
                          ? "bg-brand-emerald/10 text-brand-emerald"
                          : "bg-brand-amber/10 text-brand-amber"
                      )}
                    >
                      {product.status === "live" ? "Live" : "In development"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Want to help shape the roadmap?</h2>
        <p className="max-w-xl text-muted-foreground">
          We build our upcoming products directly from conversations with prospective customers. Tell us about your team.
        </p>
        <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
