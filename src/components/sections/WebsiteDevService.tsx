import Link from "next/link";
import { ArrowRight, Check, Clock3, IndianRupee, Rocket } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { websiteDevPackages, websiteDevService } from "@/lib/data";

const usps = [
  { icon: IndianRupee, label: `Starting at ₹${websiteDevService.startingPrice.toLocaleString("en-IN")}` },
  { icon: Clock3, label: `${websiteDevService.deliveryDays}-day delivery` },
  { icon: Rocket, label: "Next-day prototype" },
];

export function WebsiteDevService() {
  return (
    <section aria-labelledby="website-dev-heading" className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Also from Elyra</p>
          <h2 id="website-dev-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {websiteDevService.name}
          </h2>
          <p className="mt-4 text-muted-foreground">{websiteDevService.tagline}</p>
        </Reveal>

        <Reveal stagger className="mt-8 flex flex-wrap justify-center gap-3">
          {usps.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="glass-panel flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground"
            >
              <Icon className="h-4 w-4 text-primary" />
              {label}
            </span>
          ))}
        </Reveal>

        <Reveal stagger className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {websiteDevPackages.map((pkg) => (
            <div
              key={pkg.slug}
              className={cn(
                "glass-panel flex flex-col rounded-3xl p-8 shadow-sm",
                pkg.highlighted && "border-primary lg:-translate-y-3"
              )}
            >
              {pkg.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Most popular
                </span>
              )}
              <h3 className="font-heading text-xl font-semibold text-foreground">{pkg.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold text-foreground">
                  ₹{pkg.price.toLocaleString("en-IN")}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link href="/services" className={cn(buttonVariants({ size: "lg" }))}>
            Explore website development
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
