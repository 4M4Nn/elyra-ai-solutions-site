"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { pricingTiers, apiUrl, annualDiscountPercent } from "@/lib/data";
import { setAuthUser } from "@/lib/auth";
import { setPendingTokens } from "@/lib/agentAuth";
import type { PlanSlug, SignupFormErrors, SignupFormValues } from "@/types";

const initialValues: SignupFormValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

function validate(values: SignupFormValues): SignupFormErrors {
  const errors: SignupFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Please choose a password.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!values.acceptTerms) {
    errors.acceptTerms = "You must accept the terms to continue.";
  }

  return errors;
}

export function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const requestedPlan = searchParams.get("plan");
  const tier =
    pricingTiers.find((item) => item.slug === requestedPlan) ??
    pricingTiers.find((item) => item.highlighted) ??
    pricingTiers[0];

  const isAnnual = searchParams.get("cycle") === "annual";
  const displayPrice = isAnnual ? Math.round((tier.price * (100 - annualDiscountPercent)) / 100) : tier.price;

  const [values, setValues] = useState<SignupFormValues>(initialValues);
  const [errors, setErrors] = useState<SignupFormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange<K extends keyof SignupFormValues>(field: K, value: SignupFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleDetailsSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitError("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          username: values.email,
          password: values.password,
          full_name: values.fullName,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setSubmitError(
          res.status === 409
            ? "An account with this email already exists. Try logging in instead."
            : data.detail || "Could not create your account. Please try again.",
        );
        return;
      }

      setPendingTokens({ access_token: data.access_token, refresh_token: data.refresh_token });
      setAuthUser({ name: values.fullName, email: values.email, plan: tier.slug as PlanSlug });
      router.push("/dashboard?new=1");
    } catch {
      setSubmitError("Network error — please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between rounded-xl bg-muted p-4">
        <div>
          <p className="text-xs text-muted-foreground">14-day free trial, then</p>
          <p className="text-sm font-semibold text-foreground">
            {tier.name}
            {isAnnual && <span className="ml-1 font-normal text-muted-foreground">(billed annually)</span>}
          </p>
        </div>
        <p className="font-heading text-lg font-bold text-foreground">
          ₹{displayPrice.toLocaleString("en-IN")}
          <span className="text-xs font-normal text-muted-foreground">/month</span>
        </p>
      </div>

      {submitError && (
        <p className="mb-4 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{submitError}</p>
      )}

      <form onSubmit={handleDetailsSubmit} noValidate>
        <div className="space-y-5">
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-foreground">
              Full name
            </label>
            <Input
              id="fullName"
              value={values.fullName}
              onChange={(event) => handleChange("fullName", event.target.value)}
              className="mt-2"
              aria-invalid={Boolean(errors.fullName)}
            />
            {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={(event) => handleChange("email", event.target.value)}
              className="mt-2"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <PasswordInput
              id="password"
              value={values.password}
              onChange={(event) => handleChange("password", event.target.value)}
              className="mt-2"
              aria-invalid={Boolean(errors.password)}
            />
            {errors.password && <p className="mt-1 text-xs text-destructive">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
              Confirm password
            </label>
            <PasswordInput
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={(event) => handleChange("confirmPassword", event.target.value)}
              className="mt-2"
              aria-invalid={Boolean(errors.confirmPassword)}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-destructive">{errors.confirmPassword}</p>
            )}
          </div>

          <div>
            <label className="flex items-start gap-2 text-sm text-foreground">
              <input
                type="checkbox"
                checked={values.acceptTerms}
                onChange={(event) => handleChange("acceptTerms", event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-input text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              I agree to the Terms of Service and Privacy Policy.
            </label>
            {errors.acceptTerms && <p className="mt-1 text-xs text-destructive">{errors.acceptTerms}</p>}
          </div>
        </div>

        <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
          {isSubmitting ? "Starting your trial..." : "Start free trial"}
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          No card required. Cancel anytime during your 14-day trial.
        </p>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
