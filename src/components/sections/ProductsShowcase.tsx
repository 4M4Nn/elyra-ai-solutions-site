import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Send, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { SplitWords } from "@/components/motion/SplitWords";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { flagshipHighlights, leadManagementHighlights, products } from "@/lib/data";

const seoAgent = products.find((item) => item.slug === "seo-aeo-agent")!;
const leadAgent = products.find((item) => item.slug === "ai-lead-management")!;

function SeoAgentMock() {
  return (
    <div className="glass-panel relative rounded-3xl p-6 shadow-xl sm:p-8">
      <div className="flex items-center justify-between border-b border-slate-900/10 pb-4">
        <p className="text-sm font-semibold text-foreground">AI Visibility Overview</p>
        <span className="rounded-full bg-brand-emerald/10 px-2.5 py-1 text-xs font-semibold text-brand-emerald">
          Live
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {[
          { label: "Search visibility", value: "+38%" },
          { label: "AI answer citations", value: "126" },
          { label: "Issues auto-detected", value: "14" },
          { label: "Workspaces managed", value: "6" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white/60 p-4">
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="mt-1 font-heading text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-start gap-2 rounded-xl bg-primary/5 px-4 py-3 text-xs text-foreground">
        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
        Add FAQ schema to /pricing to improve AI answer citations.
      </div>
    </div>
  );
}

function LeadManagementMock() {
  return (
    <div className="glass-panel relative rounded-3xl p-6 shadow-xl sm:p-8">
      <div className="flex items-center justify-between border-b border-slate-900/10 pb-4">
        <p className="text-sm font-semibold text-foreground">Inbox, unified</p>
        <span className="rounded-full bg-brand-emerald/10 px-2.5 py-1 text-xs font-semibold text-brand-emerald">
          Live
        </span>
      </div>
      <div className="mt-5 flex items-center gap-3">
        {[
          { icon: MessageCircle, label: "WhatsApp" },
          { icon: Send, label: "Messenger" },
          { icon: InstagramIcon, label: "Instagram" },
        ].map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-foreground"
          >
            <Icon className="h-3.5 w-3.5 text-brand-emerald" />
            {label}
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2 text-sm text-primary-foreground">
          Do you have a 6pm slot tomorrow?
        </div>
        <div className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white/70 px-4 py-2 text-sm text-foreground">
          Yes — 6:00 PM is open. I&apos;ve booked it and added it to your calendar. Anything else?
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 rounded-xl bg-brand-emerald/10 px-4 py-3 text-xs text-brand-emerald">
        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
        Answered instantly · 24/7 · no staff online
      </div>
    </div>
  );
}

type StoryProps = {
  index: string;
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  href: string;
  reverse?: boolean;
  mock: React.ReactNode;
};

function ProductStory({ index, eyebrow, name, tagline, description, highlights, href, reverse, mock }: StoryProps) {
  return (
    <div className="relative py-16 sm:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none font-heading text-[9rem] font-black leading-none text-slate-900/[0.03] sm:left-0 sm:translate-x-0 sm:text-[14rem]"
      >
        {index}
      </span>

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal className={reverse ? "lg:order-2" : "lg:order-1"}>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
          <h3 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            <SplitWords text={tagline} scroll />
          </h3>
          <p className="mt-5 max-w-lg text-muted-foreground">{description}</p>

          <Reveal stagger className="mt-6 space-y-3">
            {highlights.map((point) => (
              <div key={point} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                {point}
              </div>
            ))}
          </Reveal>

          <Link href={href} className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
            {name}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className={reverse ? "lg:order-1" : "lg:order-2"}>
          <Parallax speed={reverse ? 40 : -40}>{mock}</Parallax>
        </Reveal>
      </div>
    </div>
  );
}

export function ProductsShowcase() {
  return (
    <section aria-labelledby="products-showcase-heading" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl pt-16 text-center sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Two agents. Live today.</p>
        <h2 id="products-showcase-heading" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          <SplitWords text="Meet the agents doing the work" scroll />
        </h2>
      </Reveal>

      <div className="divide-y divide-border">
        <ProductStory
          index="01"
          eyebrow={seoAgent.category}
          name={seoAgent.shortName}
          tagline={seoAgent.tagline}
          description={seoAgent.description}
          highlights={flagshipHighlights}
          href={`/products/${seoAgent.slug}`}
          mock={<SeoAgentMock />}
        />
        <ProductStory
          index="02"
          eyebrow={leadAgent.category}
          name={leadAgent.shortName}
          tagline={leadAgent.tagline}
          description={leadAgent.description}
          highlights={leadManagementHighlights}
          href={`/products/${leadAgent.slug}`}
          reverse
          mock={<LeadManagementMock />}
        />
      </div>
    </section>
  );
}
