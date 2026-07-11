import { FeatureGrid } from "@/components/products/FeatureGrid";
import { outcomeFeatures } from "@/lib/data";

export function CoreFeaturesSection() {
  return (
    <section aria-labelledby="features-heading" className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">What you get</p>
          <h2 id="features-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Built for outcomes, not just features
          </h2>
        </div>

        <div className="mt-12">
          <FeatureGrid features={outcomeFeatures} />
        </div>
      </div>
    </section>
  );
}
