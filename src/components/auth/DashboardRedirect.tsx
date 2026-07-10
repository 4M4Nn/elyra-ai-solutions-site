"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, Sparkles } from "lucide-react";

import { appUrl } from "@/lib/data";

const REDIRECT_DELAY_MS = 3000;

export function DashboardRedirect() {
  const searchParams = useSearchParams();
  const isNewSignup = searchParams.get("new") === "1";
  const [secondsLeft, setSecondsLeft] = useState(Math.ceil(REDIRECT_DELAY_MS / 1000));

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = appUrl;
    }, REDIRECT_DELAY_MS);

    const countdownTimer = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-3xl border border-border bg-white px-8 py-14 text-center shadow-sm">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white">
        <Sparkles className="h-6 w-6" />
      </span>
      <h1 className="font-heading text-2xl font-bold text-foreground">Welcome to Elyra SEO+AEO Agent</h1>
      <p className="text-sm text-muted-foreground">
        {isNewSignup
          ? "Your account is being set up."
          : "You're logged in."}
      </p>
      <div className="flex items-center gap-2 text-sm font-medium text-primary">
        <Loader2 className="h-4 w-4 animate-spin" />
        Redirecting to your dashboard in {secondsLeft}s...
      </div>
      <a href={appUrl} className="text-xs font-medium text-muted-foreground hover:text-foreground hover:underline">
        Not redirected automatically? Click here.
      </a>
    </div>
  );
}
