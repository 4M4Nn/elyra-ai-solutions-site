import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTABand() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="bg-brand-gradient flex flex-col items-center gap-6 rounded-3xl px-6 py-14 text-center text-white sm:px-12">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ready to stay visible everywhere your customers search?</h2>
        <p className="max-w-2xl text-white/90">
          Request early access to Elyra SEO+AEO Agent and start tracking your visibility across
          search engines and AI answer engines from a single dashboard.
        </p>
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-white/90")}
        >
          Request early access
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
