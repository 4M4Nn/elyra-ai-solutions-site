import type { Metadata } from "next";

import { PricingTable } from "@/components/pricing/PricingTable";
import { FAQAccordion } from "@/components/pricing/FAQAccordion";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Simple, transparent subscription pricing for Elyra SEO+AEO Agent — from single-site Starter plans to unlimited multi-tenant Agency plans.`,
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pricing</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-foreground">
          Simple pricing for Elyra SEO+AEO Agent
        </h1>
        <p className="mt-4 text-muted-foreground">
          Every plan includes AI visibility tracking across search and AI answer engines. Choose the
          plan that matches how many sites or clients you manage.
        </p>
      </div>

      <div className="mt-14">
        <PricingTable />
      </div>

      <div className="mt-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Common questions</h2>
        </div>
        <div className="mt-10">
          <FAQAccordion />
        </div>
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
