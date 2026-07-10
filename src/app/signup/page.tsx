import type { Metadata } from "next";
import { Suspense } from "react";

import { SignupForm } from "@/components/auth/SignupForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Create your account",
  description: `Create your ${company.shortName} account and subscribe to Elyra SEO+AEO Agent.`,
};

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Get started</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Create your account
        </h1>
        <p className="mt-3 text-muted-foreground">
          Set up your Elyra SEO+AEO Agent workspace in a couple of minutes.
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
