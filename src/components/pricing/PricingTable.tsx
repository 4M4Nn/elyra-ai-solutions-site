import Link from "next/link";
import { Check } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingTiers } from "@/lib/data";

export function PricingTable() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier) => (
        <div
          key={tier.name}
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
            <span className="font-heading text-4xl font-bold text-foreground">${tier.price}</span>
            <span className="text-sm text-muted-foreground">/ {tier.billingPeriod}</span>
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
            href="/contact"
            className={cn(
              buttonVariants({ variant: tier.highlighted ? "default" : "outline" }),
              "mt-8 w-full justify-center"
            )}
          >
            {tier.ctaLabel}
          </Link>
        </div>
      ))}
    </div>
  );
}
