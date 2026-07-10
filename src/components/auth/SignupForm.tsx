"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RazorpayCheckoutButton } from "@/components/checkout/RazorpayCheckoutButton";
import { pricingTiers } from "@/lib/data";
import { setAuthUser } from "@/lib/auth";
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

  const [step, setStep] = useState<"details" | "payment">("details");
  const [values, setValues] = useState<SignupFormValues>(initialValues);
  const [errors, setErrors] = useState<SignupFormErrors>({});
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

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setStep("payment");
  }

  function handlePaymentSuccess() {
    setAuthUser({ name: values.fullName, email: values.email, plan: tier.slug as PlanSlug });
    router.push("/dashboard?new=1");
  }

  if (step === "payment") {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-medium text-brand-emerald">
          <CheckCircle2 className="h-4 w-4" />
          Account details confirmed
        </div>
        <h2 className="mt-3 font-heading text-xl font-semibold text-foreground">Complete your subscription</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          One last step, {values.fullName.split(" ")[0]}. Confirm payment for the {tier.name} plan to finish
          setting up your workspace.
        </p>

        <div className="mt-6">
          <RazorpayCheckoutButton
            planName={tier.name}
            amountInRupees={tier.price}
            billingLabel="Billed monthly"
            customerName={values.fullName}
            customerEmail={values.email}
            onSuccess={handlePaymentSuccess}
          />
        </div>

        <button
          type="button"
          onClick={() => setStep("details")}
          className="mt-4 text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          Back to account details
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between rounded-xl bg-muted p-4">
        <div>
          <p className="text-xs text-muted-foreground">Selected plan</p>
          <p className="text-sm font-semibold text-foreground">{tier.name}</p>
        </div>
        <p className="font-heading text-lg font-bold text-foreground">
          ₹{tier.price.toLocaleString("en-IN")}
          <span className="text-xs font-normal text-muted-foreground">/month</span>
        </p>
      </div>

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
            <Input
              id="password"
              type="password"
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
            <Input
              id="confirmPassword"
              type="password"
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
          {isSubmitting ? "Creating account..." : "Create Account"}
        </Button>
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
