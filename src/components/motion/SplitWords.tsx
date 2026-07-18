"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  scroll?: boolean;
};

export function SplitWords({ text, className, delay = 0, scroll = false }: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLSpanElement>("[data-word]");

    const ctx = gsap.context(() => {
      gsap.set(targets, { yPercent: 110, opacity: 0 });
      gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        ease: "power4.out",
        stagger: 0.06,
        scrollTrigger: scroll
          ? {
              trigger: el,
              start: "top 85%",
              once: true,
            }
          : undefined,
      });
    }, el);

    return () => ctx.revert();
  }, [delay, scroll, text]);

  return (
    <span ref={ref} className="inline">
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden align-top pb-1">
            <span data-word className={cn("inline-block will-change-transform", className)}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
