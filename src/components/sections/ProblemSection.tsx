import { AlertTriangle, Clock3, DollarSign, PlugZap, Split, TrendingDown } from "lucide-react";

import { problemSolutions } from "@/lib/data";

const icons = [AlertTriangle, Split, Clock3, TrendingDown, PlugZap, DollarSign];

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Sound familiar?</p>
        <h2 id="problem-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Running SEO manually is quietly costing you customers
        </h2>
        <p className="mt-4 text-muted-foreground">
          Most teams don&apos;t lack effort — they lack a system. Here&apos;s what that usually looks like.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problemSolutions.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={item.problem} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{item.problem}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.painDescription}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
