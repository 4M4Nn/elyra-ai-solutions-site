"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/data";
import type { ContactFormErrors, ContactFormValues } from "@/types";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  interest: "Elyra SEO+AEO Agent",
  message: "",
};

const interestOptions = [
  "Elyra SEO+AEO Agent",
  "Elyra Cybersecurity Agent",
  "Elyra ERP for Institutes",
  "Something else",
];

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a little about what you need.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please add a few more details (at least 10 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof ContactFormValues, value: string) {
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
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="h-10 w-10 text-brand-emerald" />
        <h3 className="font-heading text-xl font-semibold text-foreground">Thanks, {values.name.split(" ")[0]}!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your message has been received. Our team will get back to you at {values.email} within one business day.
        </p>
        <p className="text-xs text-muted-foreground">
          You can also reach us directly at{" "}
          <a href={`mailto:${company.email}`} className="font-medium text-primary hover:underline">
            {company.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-white p-8 shadow-sm">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <Input
            id="name"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="mt-2"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
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
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company <span className="text-muted-foreground">(optional)</span>
          </label>
          <Input
            id="company"
            value={values.company}
            onChange={(event) => handleChange("company", event.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <label htmlFor="interest" className="text-sm font-medium text-foreground">
            I&apos;m interested in
          </label>
          <select
            id="interest"
            value={values.interest}
            onChange={(event) => handleChange("interest", event.target.value)}
            className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {interestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="mt-2"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
