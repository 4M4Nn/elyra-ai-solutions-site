"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useLenis } from "@/lib/lenis-context";

const SESSION_KEY = "elyra-intro-seen";

export function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const [mounted, setMounted] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (reduced || seen) {
      // One-time client-only check (sessionStorage/matchMedia aren't available during SSR) — not a cascading update.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSkip(true);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = rootRef.current;
    if (!root) return;

    document.body.style.overflow = "hidden";
    lenis?.stop();

    const finish = () => {
      document.body.style.overflow = "";
      lenis?.start();
      setSkip(true);
    };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: finish });

      tl.set(".intro-orb-a", { xPercent: -160, opacity: 0 })
        .set(".intro-orb-b", { xPercent: 160, opacity: 0 })
        .set(".intro-mark", { opacity: 0, scale: 0.9 })
        .set(".intro-word", { opacity: 0, y: 24 })
        .set(".intro-line", { scaleX: 0 })
        .set(".intro-tagline", { opacity: 0, y: 12 })
        .set(".intro-veil", { opacity: 1 });

      tl.to(".intro-veil", { opacity: 0, duration: 0.6, ease: "power2.out" }, 0)
        .to(
          ".intro-orb-a",
          { xPercent: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
          0.1
        )
        .to(
          ".intro-orb-b",
          { xPercent: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
          0.1
        )
        .to(
          [".intro-orb-a", ".intro-orb-b"],
          { scale: 0.55, duration: 0.55, ease: "power2.inOut" },
          1.15
        )
        .to(
          ".intro-line",
          { scaleX: 1, duration: 0.45, ease: "power2.out" },
          1.5
        )
        .to(
          ".intro-mark",
          { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
          1.55
        )
        .to(
          ".intro-word",
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 },
          1.7
        )
        .to(
          ".intro-tagline",
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          2.35
        )
        .to({}, { duration: 0.7 })
        .to(
          root,
          { yPercent: -100, duration: 0.7, ease: "power4.inOut" },
          "curtain"
        )
        .to(
          [".intro-orb-a", ".intro-orb-b"],
          { opacity: 0, duration: 0.4 },
          "curtain"
        );
    }, root);

    return () => ctx.revert();
  }, [mounted, lenis]);

  function handleSkip() {
    document.body.style.overflow = "";
    lenis?.start();
    gsap.killTweensOf(rootRef.current);
    setSkip(true);
  }

  if (!mounted || skip) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#05060f]"
    >
      <div className="intro-veil absolute inset-0 bg-[#05060f]" />

      <div className="intro-orb-a absolute left-[8%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_#f59e0b_0%,_transparent_70%)] blur-2xl sm:h-72 sm:w-72" />
      <div className="intro-orb-b absolute right-[8%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_#0ea5e9_0%,_transparent_70%)] blur-2xl sm:h-72 sm:w-72" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="intro-mark flex items-center gap-3">
          <span className="intro-line h-px w-10 origin-right bg-gradient-to-r from-transparent to-white/60 sm:w-16" />
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl font-bold text-white ring-1 ring-white/15 backdrop-blur sm:h-16 sm:w-16">
            E
          </span>
          <span className="intro-line h-px w-10 origin-left bg-gradient-to-l from-transparent to-white/60 sm:w-16" />
        </div>

        <h1 className="mt-6 overflow-hidden font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {["Two", "agents.", "One", "mission."].map((word) => (
            <span key={word} className="intro-word mx-1.5 inline-block sm:mx-2">
              {word}
            </span>
          ))}
        </h1>

        <p className="intro-tagline mt-5 text-sm uppercase tracking-[0.35em] text-white/50 sm:text-base">
          Elyra AI Solutions
        </p>
      </div>

      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 text-xs font-medium text-white/40 transition-colors hover:text-white/80"
      >
        Skip intro
      </button>
    </div>
  );
}
