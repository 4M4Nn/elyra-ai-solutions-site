import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock3, IndianRupee, Rocket, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company, websiteDevPackages, websiteDevService, websiteDevServiceTypes } from "@/lib/data";

export const metadata: Metadata = {
  title: websiteDevService.name,
  description: `${websiteDevService.description} Starting at ₹${websiteDevService.startingPrice.toLocaleString("en-IN")}, next-day prototype, ${websiteDevService.deliveryDays}-day delivery.`,
};

const usps = [
  { icon: IndianRupee, label: `Starting at ₹${websiteDevService.startingPrice.toLocaleString("en-IN")}` },
  { icon: Clock3, label: `${websiteDevService.deliveryDays}-day delivery` },
  { icon: Rocket, label: "Next-day prototype" },
];

const process = [
  {
    step: 1,
    title: "Share your requirements",
    description: "Tell us what the site needs to do and the look you want — no technical spec required.",
  },
  {
    step: 2,
    title: "Prototype, next day",
    description: "You get a working prototype to review within 1 day of kickoff.",
  },
  {
    step: 3,
    title: "Revisions & delivery",
    description: `We refine based on your feedback and deliver the finished site within ${websiteDevService.deliveryDays} days.`,
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-hero-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
            Also from {company.shortName}
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">{websiteDevService.name}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{websiteDevService.description}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {usps.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#packages" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              See packages
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">What we build</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Three kinds of websites, one team
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {websiteDevServiceTypes.map((type) => (
            <div key={type.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground">{type.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">How it works</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Prototype tomorrow, live in {websiteDevService.deliveryDays} days
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient font-heading text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Pricing</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Simple pricing, no hidden fees
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {websiteDevPackages.map((pkg) => (
            <div
              key={pkg.slug}
              className={cn(
                "flex flex-col rounded-3xl border p-8",
                pkg.highlighted ? "border-primary bg-white shadow-xl lg:-translate-y-3" : "border-border bg-white shadow-sm"
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

              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: pkg.highlighted ? "default" : "outline" }),
                  "mt-6 w-full justify-center"
                )}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">Ready to get your website built?</h2>
        <p className="max-w-xl text-muted-foreground">
          Tell us what you need and we&apos;ll get back to you with a prototype the next day.
        </p>
        <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
          Talk to us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
