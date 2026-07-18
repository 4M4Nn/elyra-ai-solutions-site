import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { SplitWords } from "@/components/motion/SplitWords";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data";

const liveProducts = products.filter((product) => product.status === "live");

export function Hero() {
  return (
    <section aria-label="Introduction" className="bg-cinematic relative overflow-hidden">
      <Parallax speed={-70} className="pointer-events-none absolute inset-0">
        <div className="animate-float-orb absolute left-[6%] top-[12%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_#f59e0b_0%,_transparent_70%)] opacity-40 blur-3xl" />
      </Parallax>
      <Parallax speed={90} className="pointer-events-none absolute inset-0">
        <div className="animate-float-orb absolute right-[4%] top-[35%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_#0ea5e9_0%,_transparent_70%)] opacity-40 blur-3xl" />
      </Parallax>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-emerald" />2 AI agents · Live today
          </span>
        </Reveal>

        <h1 className="mt-8 max-w-5xl font-heading text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
          <SplitWords text="AI agents that run" delay={0.15} />
          <br />
          <SplitWords text="the work." delay={0.55} className="text-brand-gradient" />
        </h1>

        <Reveal delay={0.15} className="mt-8 max-w-2xl">
          <p className="text-lg text-white/60 sm:text-xl">
            Not chat interfaces bolted onto old software. Elyra builds AI agents that do real, verifiable
            work — optimizing your visibility in search and AI answers, and answering every lead the moment
            it arrives.
          </p>
        </Reveal>

        <Reveal delay={0.25} stagger className="mt-10 flex flex-wrap gap-3">
          {liveProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="glass-panel-dark group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {product.shortName}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </Reveal>

        <Reveal delay={0.35} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/products" className={cn(buttonVariants({ size: "lg" }), "bg-white text-[#05060f] hover:bg-white/90")}>
            Explore both agents
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            )}
          >
            Talk to us
          </Link>
        </Reveal>

        <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden flex-col items-center gap-2 text-white/40 sm:flex">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown aria-hidden="true" className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
