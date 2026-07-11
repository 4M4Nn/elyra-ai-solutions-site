import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTABand() {
  return (
    <section aria-labelledby="final-cta-heading" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="bg-brand-gradient flex flex-col items-center gap-6 rounded-3xl px-6 py-14 text-center text-white sm:px-12">
        <h2 id="final-cta-heading" className="font-heading text-3xl font-bold sm:text-4xl">
          Stop losing visibility to competitors. Start today.
        </h2>
        <p className="max-w-2xl text-white/90">
          Start your 14-day free trial of Elyra SEO+AEO Agent and track your visibility across search
          engines and AI answer engines from a single dashboard. No card required.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/signup"
            className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-white/90")}
          >
            Start 14-Day Free Trial
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            )}
          >
            <CalendarClock aria-hidden="true" className="h-4 w-4" />
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
