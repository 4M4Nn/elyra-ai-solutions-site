import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/products/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data";

export function ProductsShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">The Elyra product line</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          One platform. A growing family of AI agents.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Elyra SEO+AEO Agent is live today. Cybersecurity and education operations agents are next.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/products" className={cn(buttonVariants({ variant: "link" }))}>
          Compare all Elyra products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
