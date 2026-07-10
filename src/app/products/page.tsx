import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/products/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company, products, roadmapNote } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description: `Explore the full ${company.name} product line — Elyra SEO+AEO Agent, live today, plus Elyra Cybersecurity Agent and Elyra ERP for Institutes, both in development.`,
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Products</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-foreground">A growing family of AI agents</h1>
        <p className="mt-4 text-muted-foreground">{roadmapNote}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-muted/50 px-6 py-12 text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground">Have a product you&apos;d like to see next?</h2>
        <p className="max-w-xl text-muted-foreground">
          Tell us what your team needs and we&apos;ll factor it into our roadmap for Elyra Cybersecurity Agent and Elyra ERP for Institutes.
        </p>
        <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
          Talk to us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
