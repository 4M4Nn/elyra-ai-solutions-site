import type { Metadata } from "next";

import { LoginForm } from "@/components/auth/LoginForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Login",
  description: `Log in to your ${company.shortName} account.`,
};

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Welcome back</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">Log in</h1>
        <p className="mt-3 text-muted-foreground">Access your Elyra SEO+AEO Agent workspace.</p>
      </div>

      <div className="mt-10">
        <LoginForm />
      </div>
    </div>
  );
}
