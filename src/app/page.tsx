import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { FreeAuditWidget } from "@/components/sections/FreeAuditWidget";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { WhyElyra } from "@/components/sections/WhyElyra";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { PricingHighlight } from "@/components/sections/PricingHighlight";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABand } from "@/components/sections/CTABand";
import {
  company,
  faqItems,
  leadManagementPricingTiers,
  pricingTiers,
  products,
  siteUrl,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "2 Live AI Agents — SEO+AEO & 24/7 Lead Response | Elyra AI Solutions",
  description:
    "Elyra AI Solutions runs two live AI agents: one that keeps you visible in Google and AI answers, and one that answers every WhatsApp, Messenger, and Instagram lead 24/7. Explore both — free trial and live demos available.",
  keywords: [
    "AI SEO agent",
    "AEO agent",
    "AI lead response",
    "WhatsApp AI agent",
    "answer engine optimization software",
    "AI visibility tracking",
    "multi-tenant SEO platform for agencies",
    "Elyra AI Solutions",
  ],
  alternates: { canonical: siteUrl },
};

const seoAgent = products.find((item) => item.slug === "seo-aeo-agent")!;
const leadAgent = products.find((item) => item.slug === "ai-lead-management")!;

function buildStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
    description: company.description,
  };

  const seoApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: seoAgent.name,
    url: `${siteUrl}/products/seo-aeo-agent`,
    description: seoAgent.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: pricingTiers
      .filter((tier) => !tier.customPricing)
      .map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        price: tier.price,
        priceCurrency: "INR",
        description: tier.description,
      })),
  };

  const leadApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: leadAgent.name,
    url: `${siteUrl}/products/ai-lead-management`,
    description: leadAgent.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: leadManagementPricingTiers.map((tier) => ({
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

  return [organization, seoApplication, leadApplication, faqPage];
}

export default function Home() {
  const schemas = buildStructuredData();

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${schema["@type"] as string}-${index}`}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          id={`structured-data-${index}`}
        />
      ))}
      <Hero />
      <FreeAuditWidget />
      <ProductsShowcase />
      <WhyElyra />
      <AboutUsSection />
      <TrustedBy />
      <PricingHighlight />
      <FAQSection />
      <CTABand />
    </>
  );
}
