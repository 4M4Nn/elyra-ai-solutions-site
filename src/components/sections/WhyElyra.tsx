import { BarChart3, Clock, PlugZap, TrendingUp, Wallet, Workflow } from "lucide-react";

import { businessBenefits } from "@/lib/data";

const icons = [Clock, Wallet, TrendingUp, BarChart3, Workflow, PlugZap];

export function WhyElyra() {
  return (
    <section aria-labelledby="why-elyra-heading" className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Why Elyra</p>
          <h2 id="why-elyra-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Why businesses choose Elyra AI
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessBenefits.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
