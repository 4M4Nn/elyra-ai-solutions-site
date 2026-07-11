import { ArrowRight, Sparkles } from "lucide-react";

import { problemSolutions } from "@/lib/data";

export function SolutionSection() {
  return (
    <section aria-labelledby="solution-heading" className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">The Elyra way</p>
          <h2 id="solution-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Meet the agent that does the work for you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Elyra SEO+AEO Agent replaces manual SEO work with an AI agent built specifically to fix it.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {problemSolutions.map((item) => (
            <div
              key={item.problem}
              className="grid grid-cols-1 items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm lg:grid-cols-[1fr_auto_1fr]"
            >
              <p className="text-sm font-medium text-muted-foreground line-through decoration-destructive/40">
                {item.problem}
              </p>
              <ArrowRight
                aria-hidden="true"
                className="hidden h-5 w-5 shrink-0 rotate-90 text-primary lg:block lg:rotate-0"
              />
              <p className="flex items-start gap-2 text-sm font-medium text-foreground">
                <Sparkles aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
