"use client";

import { useState } from "react";
import { Lock, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

interface RazorpayCheckoutButtonProps {
  planName: string;
  amountInRupees: number;
  billingLabel: string;
  customerName: string;
  customerEmail: string;
  onSuccess: () => void;
}

export function RazorpayCheckoutButton({
  planName,
  amountInRupees,
  billingLabel,
  customerName,
  customerEmail,
  onSuccess,
}: RazorpayCheckoutButtonProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

  function handlePay() {
    if (!razorpayKeyId || !window.Razorpay) {
      setShowComingSoon(true);
      return;
    }

    const razorpay = new window.Razorpay({
      key: razorpayKeyId,
      amount: amountInRupees * 100,
      currency: "INR",
      name: "Elyra AI Solutions",
      description: `${planName} plan — ${billingLabel}`,
      prefill: { name: customerName, email: customerEmail },
      theme: { color: "#4f46e5" },
      handler: () => onSuccess(),
    });
    razorpay.open();
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">{planName} plan</p>
          <p className="text-xs text-muted-foreground">{billingLabel}</p>
        </div>
        <p className="font-heading text-xl font-bold text-foreground">
          ₹{amountInRupees.toLocaleString("en-IN")}
        </p>
      </div>

      {showComingSoon ? (
        <div className="mt-4 rounded-xl border border-brand-amber/30 bg-brand-amber/5 p-4">
          <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4 text-brand-amber" />
            Online payments launching soon
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Card and UPI checkout isn&apos;t live yet. Continue as an early access account — our team
            will follow up to complete billing, with no charge until then.
          </p>
          <Button type="button" className="mt-3 w-full" onClick={onSuccess}>
            Continue as early access
          </Button>
        </div>
      ) : (
        <Button type="button" onClick={handlePay} className="mt-4 w-full">
          <Lock className="h-4 w-4" />
          Complete payment
        </Button>
      )}

      <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5" />
        Secured by Razorpay
      </p>
    </div>
  );
}
