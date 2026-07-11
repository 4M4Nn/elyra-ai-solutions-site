export type ProductStatus = "live" | "coming-soon";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface ProductSummary {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  category: string;
  audience: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export type PlanSlug = "starter" | "growth" | "agency";

export interface PricingTier {
  slug: PlanSlug;
  name: string;
  price: number;
  billingPeriod: "month";
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DifferentiatorItem {
  title: string;
  description: string;
}

export interface ProblemSolutionItem {
  problem: string;
  painDescription: string;
  solution: string;
}

export interface TrustedCompany {
  name: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  message?: string;
}

export interface SignupFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface SignupFormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  acceptTerms?: string;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormErrors {
  email?: string;
  password?: string;
}

export interface AuthUser {
  name: string;
  email: string;
  plan: PlanSlug;
}
