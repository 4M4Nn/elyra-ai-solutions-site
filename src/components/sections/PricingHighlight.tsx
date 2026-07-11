import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PricingTable } from "@/components/pricing/PricingTable";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingHighlight() {
  return (
    <section aria-labelledby="pricing-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pricing</p>
        <h2 id="pricing-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Simple pricing, 14 days free
        </h2>
        <p className="mt-4 text-muted-foreground">
          Try Elyra SEO+AEO Agent free for 14 days. No card required, cancel anytime.
        </p>
      </div>

      <div className="mt-12">
        <PricingTable />
      </div>

      <div className="mt-10 text-center">
        <Link href="/pricing" className={cn(buttonVariants({ variant: "link" }))}>
          See full plan comparison and FAQ
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
