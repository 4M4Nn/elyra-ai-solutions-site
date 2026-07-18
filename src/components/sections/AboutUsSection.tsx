import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company, missionStatement } from "@/lib/data";

export function AboutUsSection() {
  return (
    <section aria-labelledby="about-us-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">About us</p>
        <h2 id="about-us-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Built by a team obsessed with AI agents that do real work
        </h2>
        <p className="mt-4 text-muted-foreground">{missionStatement}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {company.name} · Founded {company.foundingYear} · {company.address}
        </p>
        <Link href="/about" className={cn(buttonVariants({ variant: "outline" }), "mt-6")}>
          Learn more about us
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
