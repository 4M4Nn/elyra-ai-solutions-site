import { HowItWorksSteps } from "@/components/products/HowItWorksSteps";
import { howItWorks } from "@/lib/data";

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">How it works</p>
        <h2 id="how-it-works-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          From connected site to visibility report
        </h2>
        <p className="mt-4 text-muted-foreground">Four simple steps — no engineering work required.</p>
      </div>

      <div className="mt-12">
        <HowItWorksSteps steps={howItWorks} />
      </div>
    </section>
  );
}
