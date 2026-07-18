import { Reveal } from "@/components/motion/Reveal";
import { FAQAccordion } from "@/components/pricing/FAQAccordion";
import { faqItems } from "@/lib/data";

export function FAQSection() {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
        <h2 id="faq-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Questions, answered
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to know about Elyra&apos;s live agents.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <FAQAccordion items={faqItems} />
      </Reveal>
    </section>
  );
}
