import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { FreeAuditWidget } from "@/components/sections/FreeAuditWidget";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { DemoVideoSection } from "@/components/sections/DemoVideoSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CoreFeaturesSection } from "@/components/sections/CoreFeaturesSection";
import { WhyElyra } from "@/components/sections/WhyElyra";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { PricingHighlight } from "@/components/sections/PricingHighlight";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";
import { company, faqItems, pricingTiers, products, siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI SEO + AEO Agent — 14-Day Free Trial | Elyra AI Solutions",
  description:
    "Stop losing customers to competitors who show up first. Elyra AI automates your SEO and Answer Engine Optimization across Google and AI answer engines like ChatGPT. Start your 14-day free trial — no card required.",
  keywords: [
    "AI SEO agent",
    "AEO agent",
    "answer engine optimization software",
    "AI visibility tracking",
    "multi-tenant SEO platform for agencies",
    "SEO automation software",
    "14-day free trial SEO tool",
    "Elyra AI Solutions",
  ],
  alternates: { canonical: siteUrl },
};

const flagshipProduct = products.find((item) => item.slug === "seo-aeo-agent")!;

function buildStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
    description: company.description,
  };

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: flagshipProduct.name,
    url: `${siteUrl}/products/seo-aeo-agent`,
    description: flagshipProduct.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: pricingTiers.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      price: tier.price,
      priceCurrency: "INR",
      description: tier.description,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [organization, softwareApplication, faqPage];
}

export default function Home() {
  const schemas = buildStructuredData();

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          id={`structured-data-${index}`}
        />
      ))}
      <Hero />
      <FreeAuditWidget />
      <ProblemSection />
      <SolutionSection />
      <DemoVideoSection />
      <HowItWorksSection />
      <CoreFeaturesSection />
      <WhyElyra />
      <AboutUsSection />
      <TrustedBy />
      <PricingHighlight />
      <FAQSection />
      <CTABand />
    </>
  );
}
