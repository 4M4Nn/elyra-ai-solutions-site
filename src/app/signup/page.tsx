import type { Metadata } from "next";
import { Suspense } from "react";

import { SignupForm } from "@/components/auth/SignupForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Start your free trial",
  description: `Create your ${company.shortName} account and start a 14-day free trial of Elyra SEO+AEO Agent — no card required.`,
};

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Start your 14-day free trial</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Create your account
        </h1>
        <p className="mt-3 text-muted-foreground">
          No card required. You&apos;ll get full access for 14 days — 1 website and up to 5 blog posts —
          then choose a plan to keep going.
        </p>
      </div>

      <div className="mt-10">
        <Suspense fallback={null}>
          <SignupForm />
        </Suspense>
      </div>
    </div>
  );
}
