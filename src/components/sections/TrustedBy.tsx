import { Building2 } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { trustedCompanies } from "@/lib/data";

export function TrustedBy() {
  return (
    <section aria-labelledby="trusted-by-heading" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p id="trusted-by-heading" className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Trusted by early customers
      </p>

      <Reveal stagger className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {trustedCompanies.map((company) => (
          <div
            key={company.name}
            className="glass-panel flex items-center gap-2 rounded-full px-5 py-3 shadow-sm"
          >
            <Building2 aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{company.name}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
