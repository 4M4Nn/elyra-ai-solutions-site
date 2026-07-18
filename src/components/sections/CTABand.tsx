import Link from "next/link";
import { ArrowRight, MessageCircle, Search } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTABand() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-16 sm:px-6 lg:px-8">
      <div className="bg-cinematic relative overflow-hidden rounded-3xl px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <Parallax speed={-30} className="pointer-events-none absolute inset-0">
          <div className="animate-float-orb absolute left-[10%] top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_#f59e0b_0%,_transparent_70%)] opacity-30 blur-3xl" />
        </Parallax>
        <Parallax speed={40} className="pointer-events-none absolute inset-0">
          <div className="animate-float-orb absolute right-[10%] bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_#0ea5e9_0%,_transparent_70%)] opacity-30 blur-3xl" />
        </Parallax>

        <Reveal className="relative flex flex-col items-center gap-6">
          <h2 id="final-cta-heading" className="font-heading text-3xl font-bold sm:text-4xl">
            Two agents. Zero manual busywork. Start today.
          </h2>
          <p className="max-w-2xl text-white/70">
            Track your visibility across search and AI answers, and answer every WhatsApp, Messenger, and
            Instagram lead the moment it arrives — both from Elyra, both live now.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className={cn(buttonVariants({ size: "lg" }), "bg-white text-[#05060f] hover:bg-white/90")}
            >
              <Search aria-hidden="true" className="h-4 w-4" />
              Try SEO+AEO Agent free
            </Link>
            <Link
              href="/products/ai-lead-management"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              )}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Connect your inbox
            </Link>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white">
            Or book a demo with our team
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
