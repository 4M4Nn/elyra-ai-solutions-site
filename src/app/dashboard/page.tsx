import type { Metadata } from "next";
import { Suspense } from "react";

import { DashboardRedirect } from "@/components/auth/DashboardRedirect";

export const metadata: Metadata = {
  title: "Redirecting to your dashboard",
  description: "Taking you to your Elyra SEO+AEO Agent dashboard.",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <Suspense fallback={null}>
        <DashboardRedirect />
      </Suspense>
    </div>
  );
}
