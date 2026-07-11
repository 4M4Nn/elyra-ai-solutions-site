"use client";

import { useRef, useState, type FormEvent } from "react";
import { AlertTriangle, CheckCircle2, Download, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiUrl } from "@/lib/data";
import { cn } from "@/lib/utils";

type CriticalIssue = { issue: string; severity: string };

type AuditResult = {
  lead_id: number;
  seo_score: number;
  aeo_score: number;
  critical_issues: number;
  summary: { critical_issues?: CriticalIssue[] };
  message: string;
};

function scoreColor(score: number) {
  if (score >= 80) return "text-brand-emerald";
  if (score >= 60) return "text-amber-500";
  return "text-destructive";
}

const AUDIT_STEPS = [
  "Connecting to your website",
  "Crawling homepage content",
  "Checking SEO signals",
  "Checking AEO signals",
  "Calculating your score",
];

export function FreeAuditWidget() {
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const stepTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    setCurrentStep(0);

    stepTimer.current = setInterval(() => {
      setCurrentStep((prev) => Math.min(prev + 1, AUDIT_STEPS.length - 1));
    }, 900);

    try {
      const res = await fetch(`${apiUrl}/api/lead-audit/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website_url: websiteUrl }),
      });
      const data = await res.json();
      if (stepTimer.current) clearInterval(stepTimer.current);

      if (!res.ok) {
        setError(data.detail || "Could not audit that website. Please try again.");
        return;
      }

      setCurrentStep(AUDIT_STEPS.length - 1);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setResult(data);
    } catch {
      if (stepTimer.current) clearInterval(stepTimer.current);
      setError("Network error — please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const critical = result?.summary.critical_issues ?? [];
  const pdfHref = result
    ? `${apiUrl}/api/lead-audit/${result.lead_id}/pdf?email=${encodeURIComponent(email)}`
    : "";

  return (
    <section aria-label="Free website audit" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm sm:p-10">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Free, no account needed
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground">Audit your website in 60 seconds</h2>
          <p className="mt-3 text-muted-foreground">
            Enter your email and website URL to get your SEO score and the major problems holding you back.
            One free audit per website.
          </p>
        </div>

        {isSubmitting ? (
          <div className="mx-auto mt-8 max-w-lg space-y-2">
            {AUDIT_STEPS.map((step, i) => {
              const state = i < currentStep ? "done" : i === currentStep ? "active" : "pending";
              return (
                <div
                  key={step}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                    state === "active" && "bg-primary/5",
                  )}
                >
                  {state === "done" && <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-emerald" />}
                  {state === "active" && <Loader2 className="h-4 w-4 shrink-0 animate-spin text-primary" />}
                  {state === "pending" && <span className="h-4 w-4 shrink-0 rounded-full border border-border" />}
                  <span className={state === "pending" ? "text-muted-foreground" : "text-foreground"}>{step}</span>
                </div>
              );
            })}
          </div>
        ) : !result ? (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-lg space-y-4" noValidate>
            <div>
              <label htmlFor="audit-email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="audit-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-2"
              />
            </div>
            <div>
              <label htmlFor="audit-url" className="text-sm font-medium text-foreground">
                Website URL
              </label>
              <Input
                id="audit-url"
                type="text"
                required
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="yourwebsite.com"
                className="mt-2"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" size="lg" className="w-full">
              Get My Free Audit
            </Button>
            <p className="text-center text-xs text-muted-foreground">No credit card. No account. Just results.</p>
          </form>
        ) : (
          <div className="mx-auto mt-8 max-w-lg">
            <div className="flex items-center justify-center gap-10">
              <div className="flex flex-col items-center">
                <span className={`font-heading text-5xl font-black ${scoreColor(result.seo_score)}`}>
                  {result.seo_score.toFixed(0)}
                </span>
                <span className="text-sm text-muted-foreground">SEO Score</span>
              </div>
              <div className="flex flex-col items-center">
                <span className={`font-heading text-5xl font-black ${scoreColor(result.aeo_score)}`}>
                  {result.aeo_score.toFixed(0)}
                </span>
                <span className="text-sm text-muted-foreground">AEO Score</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-heading text-lg font-semibold text-foreground">Major Problems Found</h3>
              <div className="mt-3 space-y-2">
                {critical.length > 0 ? (
                  critical.map((issue, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                      {issue.issue}
                    </div>
                  ))
                ) : (
                  <div className="flex items-start gap-2 rounded-lg bg-brand-emerald/10 px-3 py-2 text-sm text-brand-emerald">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    No critical issues found — nice work!
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={pdfHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <a href="/signup" className="inline-flex flex-1 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90">
                Fix This — Start Free Trial
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setResult(null);
                setEmail("");
                setWebsiteUrl("");
              }}
              className="mt-4 w-full text-center text-xs text-muted-foreground hover:text-foreground"
            >
              ← Audit another website
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
