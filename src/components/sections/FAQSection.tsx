import { FAQAccordion } from "@/components/pricing/FAQAccordion";
import { faqItems } from "@/lib/data";

export function FAQSection() {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
        <h2 id="faq-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Questions, answered
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to know before starting your free trial.
        </p>
      </div>

      <div className="mt-12">
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
