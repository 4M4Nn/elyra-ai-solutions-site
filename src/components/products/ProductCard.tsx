import Link from "next/link";
import { ArrowRight, Search, ShieldCheck, GraduationCap, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProductSummary } from "@/types";

const iconMap = {
  "seo-aeo-agent": Search,
  "ai-lead-management": MessageCircle,
  "cybersecurity-agent": ShieldCheck,
  "erp-for-institutes": GraduationCap,
};

export function ProductCard({ product }: { product: ProductSummary }) {
  const Icon = iconMap[product.slug as keyof typeof iconMap] ?? Search;
  const isLive = product.status === "live";

  return (
    <Card className="flex h-full flex-col border-border/80 shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
          <Icon className="h-5 w-5" />
        </span>
        <Badge
          className={cn(
            "border-0",
            isLive ? "bg-brand-emerald/10 text-brand-emerald" : "bg-brand-amber/10 text-brand-amber"
          )}
        >
          {isLive ? "Live" : "Coming soon"}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <h3 className="font-heading text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{product.tagline}</p>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{product.description}</p>
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {product.category}
        </p>
        {isLive ? (
          <Link
            href={`/products/${product.slug}`}
            className={cn(buttonVariants({ variant: "outline" }), "mt-5 w-full justify-center")}
          >
            Explore product
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "ghost" }), "mt-5 w-full justify-center text-muted-foreground")}
          >
            Register interest
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
