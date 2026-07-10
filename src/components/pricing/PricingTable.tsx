"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { annualDiscountPercent, pricingTiers } from "@/lib/data";

type BillingCycle = "monthly" | "annual";

export function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const isAnnual = billingCycle === "annual";

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span className={cn("text-sm font-medium", !isAnnual ? "text-foreground" : "text-muted-foreground")}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={isAnnual}
          onClick={() => setBillingCycle(isAnnual ? "monthly" : "annual")}
          className={cn(
            "relative h-6 w-11 shrink-0 rounded-full transition-colors",
            isAnnual ? "bg-primary" : "bg-border"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
              isAnnual ? "translate-x-5" : "translate-x-0.5"
            )}
          />
        </button>
        <span className={cn("text-sm font-medium", isAnnual ? "text-foreground" : "text-muted-foreground")}>
          Annual
        </span>
        <span className="rounded-full bg-brand-emerald/10 px-2.5 py-1 text-xs font-semibold text-brand-emerald">
          Save {annualDiscountPercent}%
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => {
          const displayPrice = isAnnual
            ? Math.round((tier.price * (100 - annualDiscountPercent)) / 100)
            : tier.price;

          return (
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
                  ₹{displayPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-muted-foreground">/ {tier.billingPeriod}</span>
              </div>
              {isAnnual && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Billed annually as ₹{(displayPrice * 12).toLocaleString("en-IN")}
                </p>
              )}

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/signup?plan=${tier.slug}`}
                className={cn(
                  buttonVariants({ variant: tier.highlighted ? "default" : "outline" }),
                  "mt-8 w-full justify-center"
                )}
              >
                {tier.ctaLabel}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
