import type { HowItWorksStep } from "@/types";

export function HowItWorksSteps({ steps }: { steps: HowItWorksStep[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <div key={step.step} className="relative rounded-2xl border border-border bg-white p-6 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient font-heading text-sm font-bold text-white">
            {step.step}
          </span>
          <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
