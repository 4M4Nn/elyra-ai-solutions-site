import type { Metadata } from "next";

import { ProductPricingSwitcher } from "@/components/pricing/ProductPricingSwitcher";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing for both live Elyra AI agents — Elyra SEO+AEO Agent and Elyra AI Lead Management. Choose a product to see its plans.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pricing</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-foreground">Choose a product to see its plans</h1>
        <p className="mt-4 text-muted-foreground">
          Elyra SEO+AEO Agent and Elyra AI Lead Management are priced and billed separately — pick one below.
        </p>
      </div>

      <div className="mt-14">
        <ProductPricingSwitcher />
      </div>

      <p className="mt-16 text-center text-sm text-muted-foreground">
        Have questions about which plan fits your team?{" "}
        <a href="/contact" className="font-medium text-primary hover:underline">
          Talk to us
        </a>
        .
      </p>
    </div>
  );
}
