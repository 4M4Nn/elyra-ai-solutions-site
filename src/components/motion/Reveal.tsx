"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Animate the wrapper's direct children in a stagger instead of the wrapper itself. */
  stagger?: boolean;
  staggerAmount?: number;
  delay?: number;
  y?: number;
  start?: string;
};

export function Reveal({
  children,
  className,
  stagger = false,
  staggerAmount = 0.12,
  delay = 0,
  y = 40,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? Array.from(el.children) : [el];

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger: stagger ? staggerAmount : 0,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, staggerAmount, delay, y, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
