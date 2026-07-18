import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { leadManagementPricingTiers, pricingTiers, products } from "@/lib/data";

const seoStarter = pricingTiers.find((tier) => tier.slug === "starter")!;
const leadStarter = leadManagementPricingTiers.find((tier) => tier.slug === "small")!;
const seoAgent = products.find((item) => item.slug === "seo-aeo-agent")!;
const leadAgent = products.find((item) => item.slug === "ai-lead-management")!;

const snapshots = [
  {
    name: seoAgent.shortName,
    tagline: "Try free for 14 days — no card required",
    price: seoStarter.price,
    features: seoStarter.features.slice(0, 3),
    href: "/pricing",
    cta: "See full plan comparison",
  },
  {
    name: leadAgent.shortName,
    tagline: "Cancel or change plans anytime",
    price: leadStarter.price,
    features: leadStarter.features,
    href: "/products/ai-lead-management#pricing",
    cta: "See full plan comparison",
  },
];

export function PricingHighlight() {
  return (
    <section aria-labelledby="pricing-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pricing</p>
        <h2 id="pricing-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Simple pricing for both agents
        </h2>
        <p className="mt-4 text-muted-foreground">Plans start here — full comparisons and FAQ on each product.</p>
      </Reveal>

      <Reveal stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {snapshots.map((snapshot) => (
          <div key={snapshot.name} className="glass-panel rounded-3xl p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-foreground">{snapshot.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{snapshot.tagline}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-heading text-4xl font-bold text-foreground">
                ₹{snapshot.price.toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-muted-foreground">/ month, starting</span>
            </div>
            <ul className="mt-6 space-y-3">
              {snapshot.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={snapshot.href} className={cn(buttonVariants({ variant: "outline" }), "mt-6 w-full justify-center")}>
              {snapshot.cta}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
