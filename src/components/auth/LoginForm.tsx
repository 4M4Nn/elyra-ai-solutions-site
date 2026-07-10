"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setAuthUser } from "@/lib/auth";
import type { LoginFormErrors, LoginFormValues } from "@/types";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

function validate(values: LoginFormValues): LoginFormErrors {
  const errors: LoginFormErrors = {};

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Please enter your password.";
  }

  return errors;
}

export function LoginForm() {
  const router = useRouter();
  const [values, setValues] = useState<LoginFormValues>(initialValues);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(field: keyof LoginFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);

    setAuthUser({ name: values.email.split("@")[0], email: values.email, plan: "growth" });
    router.push("/dashboard");
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
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
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <Link href="/contact" className="text-xs font-medium text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
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
        </div>

        <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
