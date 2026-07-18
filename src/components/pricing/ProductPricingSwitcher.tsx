"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Search } from "lucide-react";

import { PricingTable } from "@/components/pricing/PricingTable";
import { FAQAccordion } from "@/components/pricing/FAQAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { faqItems, leadManagementFaqItems, leadManagementPricingTiers, products } from "@/lib/data";

type ProductSlug = "seo-aeo-agent" | "ai-lead-management";

const seoAgent = products.find((item) => item.slug === "seo-aeo-agent")!;
const leadAgent = products.find((item) => item.slug === "ai-lead-management")!;

const pickerOptions: { slug: ProductSlug; product: typeof seoAgent; icon: typeof Search }[] = [
  { slug: "seo-aeo-agent", product: seoAgent, icon: Search },
  { slug: "ai-lead-management", product: leadAgent, icon: MessageCircle },
];

function LeadManagementPricingGrid() {
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <span className="rounded-full bg-brand-emerald/10 px-4 py-1.5 text-sm font-semibold text-brand-emerald">
          Cancel or change plans anytime
        </span>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {leadManagementPricingTiers.map((tier) => (
          <div
            key={tier.slug}
            className={cn(
              "flex flex-col rounded-3xl border p-8",
              tier.highlighted ? "border-primary bg-white shadow-xl lg:-translate-y-3" : "border-border bg-white shadow-sm"
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
            <Link
              href={`/products/ai-lead-management#pricing`}
              className={cn(buttonVariants({ variant: tier.highlighted ? "default" : "outline" }), "mt-6 w-full justify-center")}
            >
              Subscribe to {tier.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductPricingSwitcher() {
  const [selected, setSelected] = useState<ProductSlug | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pickerOptions.map(({ slug, product, icon: Icon }) => {
          const isActive = selected === slug;
          return (
            <button
              key={slug}
              type="button"
              onClick={() => setSelected(slug)}
              aria-pressed={isActive}
              className={cn(
                "rounded-3xl border p-6 text-left transition-all",
                isActive
                  ? "border-primary bg-white shadow-xl ring-2 ring-primary/40"
                  : "border-border bg-white shadow-sm hover:border-primary/40 hover:shadow-md"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl text-white",
                    isActive ? "bg-brand-gradient" : "bg-foreground/80"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-brand-emerald/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-emerald">
                  Live
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{product.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
              <span
                className={cn(
                  "mt-4 inline-flex items-center gap-1 text-sm font-medium",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {isActive ? "Showing plans below" : "See plans"}
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          );
        })}
      </div>

      {selected ? (
        <Reveal key={selected} className="mt-14">
          <div className="mt-14">
            {selected === "seo-aeo-agent" ? <PricingTable /> : <LeadManagementPricingGrid />}
          </div>

          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">
                Common questions about {selected === "seo-aeo-agent" ? seoAgent.shortName : leadAgent.shortName}
              </h2>
            </div>
            <div className="mt-10">
              <FAQAccordion items={selected === "seo-aeo-agent" ? faqItems : leadManagementFaqItems} />
            </div>
          </div>
        </Reveal>
      ) : (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Choose a product above to see its plans.
        </p>
      )}
    </div>
  );
}
