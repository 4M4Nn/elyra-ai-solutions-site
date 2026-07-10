import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { WhyElyra } from "@/components/sections/WhyElyra";
import { CTABand } from "@/components/sections/CTABand";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: `${company.name} — AI Agent Products for Growing Businesses`,
  description: company.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <WhyElyra />
      <CTABand />
    </>
  );
}
