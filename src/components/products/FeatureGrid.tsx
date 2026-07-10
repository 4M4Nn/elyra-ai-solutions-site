import {
  BadgeCheck,
  BarChart3,
  Layers3,
  LineChart,
  Palette,
  ScanSearch,
  ShieldCheck,
  Users,
} from "lucide-react";

import type { ProductFeature } from "@/types";

const icons = [LineChart, ScanSearch, Palette, BarChart3, Layers3, BadgeCheck, Users, ShieldCheck];

export function FeatureGrid({ features }: { features: ProductFeature[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div key={feature.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
