# Checkout Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a two-column checkout page with Sacred Artifact order summary on the left and Stripe-powered payment form on the right, matching the mystical spiritual wellness aesthetic.

**Architecture:** Two-column layout using CSS Grid. Left column: OrderSummary client component with glass-card styling. Right column: CheckoutForm client component using Stripe Elements provider with PaymentElement. Security badges displayed below the payment form.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, @stripe/react-stripe-js, motion/react, Tailwind CSS 4

---

## File Structure

```
app/checkout/
  page.tsx                       # Main checkout page (server component)
  success/page.tsx              # Success confirmation page
components/checkout/
  OrderSummary.tsx               # Left column order summary (client)
  CheckoutForm.tsx               # Right column payment form (client)
  SecurityBadges.tsx             # Security trust badges (client)
```

---

## Task 1: Create Checkout Page Route

**Files:**
- Create: `app/checkout/page.tsx`

- [ ] **Step 1: Create checkout directory**

```bash
mkdir -p app/checkout
```

- [ ] **Step 2: Create the checkout page server component**

```tsx
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 cloud-pattern">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column - Order Summary */}
          <div className="md:col-span-5 lg:col-span-4">
            <OrderSummary />
          </div>

          {/* Right Column - Checkout Form */}
          <div className="md:col-span-7 lg:col-span-8">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/checkout/page.tsx
git commit -m "feat: create checkout page route structure"
```

---

## Task 2: Create OrderSummary Component

**Files:**
- Create: `components/checkout/OrderSummary.tsx`
- Create: `components/checkout/index.ts` (barrel export)

- [ ] **Step 1: Create the components directory**

```bash
mkdir -p components/checkout
```

- [ ] **Step 2: Create OrderSummary component**

```tsx
"use client";

import { Shield, Sparkles } from "lucide-react";

const OrderSummary = () => {
  return (
    <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
      {/* Cloud pattern overlay */}
      <div className="absolute inset-0 cloud-pattern opacity-30 pointer-events-none" />

      {/* Subtle gold glow on edges */}
      <div className="absolute inset-0 rounded-3xl border border-tertiary/10 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-tertiary w-5 h-5" />
          <h2 className="font-serif text-2xl text-on-surface">Your Sacred Artifact</h2>
        </div>

        {/* Placeholder mystical image */}
        <div className="w-full h-48 rounded-2xl bg-surface-container-high mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
          <img
            src="/images/ethereal-sleep.jpg"
            alt="Ethereal dream imagery"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Product details */}
        <div className="space-y-4 mb-6">
          <h3 className="font-serif text-lg text-on-surface">Bu Dream Reading</h3>
          <p className="text-sm text-on-surface-variant font-light">The Oracle's Wisdom</p>

          <div className="border-t border-tertiary/20 pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Personalized Dream Analysis</span>
              <span className="text-on-surface">Included</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Zhou Gong's Ancient Wisdom</span>
              <span className="text-on-surface">Included</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Feng Shui Action Step</span>
              <span className="text-on-surface">Included</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-tertiary/20 my-6" />

        {/* Total */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-serif text-lg text-on-surface">Total</span>
          <span className="font-serif text-3xl text-tertiary">$29</span>
        </div>

        {/* Delivery note */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-on-surface-variant">
          <Shield className="w-4 h-4" />
          <span>Instant digital delivery to your inbox</span>
        </div>
      </div>
    </div>
  );
};

export { OrderSummary };
```

- [ ] **Step 3: Create barrel export**

```tsx
export { OrderSummary } from "./OrderSummary";
export { CheckoutForm } from "./CheckoutForm";
export { SecurityBadges } from "./SecurityBadges";
```

- [ ] **Step 4: Commit**

```bash
git add components/checkout/OrderSummary.tsx components/checkout/index.ts
git commit -m "feat: create OrderSummary component with sacred artifact styling"
```

---

## Task 3: Create SecurityBadges Component

**Files:**
- Create: `components/checkout/SecurityBadges.tsx`

- [ ] **Step 1: Create SecurityBadges component**

```tsx
"use client";

import { Lock } from "lucide-react";

const SecurityBadges = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
      <div className="flex items-center gap-2 text-on-surface-variant">
        <Lock className="w-4 h-4" />
        <span className="text-[11px] uppercase tracking-widest">256-bit SSL Encrypted</span>
      </div>

      <div className="hidden sm:block w-px h-4 bg-white/10" />

      <div className="flex items-center gap-2">
        <svg className="h-5" viewBox="0 0 60 25" fill="none">
          <path d="M30 0L0 25h60L30 0z" fill="#635BFF" />
          <text x="30" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">stripe</text>
        </svg>
      </div>

      <div className="hidden sm:block w-px h-4 bg-white/10" />

      <span className="text-[11px] text-on-surface-variant/70 text-center">
        Your payment is secured by Stripe
      </span>
    </div>
  );
};

export { SecurityBadges };
```

- [ ] **Step 2: Commit**

```bash
git add components/checkout/SecurityBadges.tsx
git commit -m "feat: create SecurityBadges component"
```

---

## Task 4: Create CheckoutForm Component with Stripe Elements

**Files:**
- Create: `components/checkout/CheckoutForm.tsx`

- [ ] **Step 1: Create CheckoutForm with Stripe Elements provider**

```tsx
"use client";

import { useState } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { SecurityBadges } from "./SecurityBadges";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreatePaymentIntent = async () => {
    try {
      const response = await fetch("/api/payment-intents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 29, currency: "usd" }),
      });
      const data = await response.json();
      return data.clientSecret;
    } catch {
      throw new Error("Failed to initialize payment");
    }
  };

  const initializePayment = async () => {
    if (!clientSecret) {
      const secret = await handleCreatePaymentIntent();
      setClientSecret(secret);
    }
  };

  return (
    <div className="glass-card rounded-3xl p-8">
      <h2 className="font-serif text-2xl md:text-3xl text-on-surface mb-2">
        Complete Your Journey
      </h2>
      <p className="text-sm text-on-surface-variant mb-8">
        Enter your details below to receive your sacred dream reading
      </p>

      {/* Email field */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-[11px] uppercase tracking-widest text-on-surface-variant mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="seeker@domain.com"
          className="w-full px-4 py-3.5 rounded-xl bg-surface-container-low border border-white/5 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-tertiary/50 focus:ring-1 focus:ring-tertiary/20 transition-all"
        />
      </div>

      {/* Initialize payment on interaction */}
      <div onMouseEnter={initializePayment} onFocus={initializePayment}>
        {clientSecret ? (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: {
                theme: "night",
                variables: {
                  colorPrimary: "#e9c349",
                  colorBackground: "#1d1c16",
                  colorText: "#e7e2d8",
                  colorDanger: "#ff6b6b",
                  fontFamily: "Inter, sans-serif",
                  borderRadius: "12px",
                  spacingUnit: "4px",
                },
                rules: {
                  ".Input": {
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    padding: "14px",
                  },
                  ".Input:focus": {
                    border: "1px solid rgba(233, 195, 73, 0.5)",
                    boxShadow: "0 0 0 1px rgba(233, 195, 73, 0.2)",
                  },
                  ".Label": {
                    color: "#c8c5cd",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  },
                },
              },
            }}
          >
            <PaymentForm />
          </Elements>
        ) : (
          <div className="h-32 flex items-center justify-center">
            <Loader2 className="w-6 h-6 text-tertiary animate-spin" />
          </div>
        )}
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-400 text-center">{error}</p>
      )}

      <SecurityBadges />
    </div>
  );
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (error) {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <PaymentElement />
      </div>

      <motion.button
        type="submit"
        disabled={!stripe || isProcessing}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-tertiary text-on-tertiary py-4.5 rounded-full font-sans text-sm uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(233,195,73,0.2)] hover:shadow-[0_0_40px_rgba(233,195,73,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </span>
        ) : (
          "Complete My Reading — $29"
        )}
      </motion.button>
    </form>
  );
};

export { CheckoutForm };
```

- [ ] **Step 2: Commit**

```bash
git add components/checkout/CheckoutForm.tsx
git commit -m "feat: create CheckoutForm with Stripe Elements"
```

---

## Task 5: Create Success Page

**Files:**
- Create: `app/checkout/success/page.tsx`

- [ ] **Step 1: Create success page**

```tsx
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 cloud-pattern flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-xl mx-auto text-center glass-card rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 cloud-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary/20 mb-6">
              <Sparkles className="text-tertiary w-8 h-8" />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-on-surface mb-4">
              Your Journey Begins
            </h1>

            <p className="text-on-surface-variant mb-8 leading-relaxed">
              The Oracle has received your offering. Check your inbox for your sacred dream reading, delivered within minutes.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-tertiary hover:text-tertiary/80 transition-colors"
            >
              Return to the Temple
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/checkout/success/page.tsx
git commit -m "feat: create checkout success page"
```

---

## Task 6: Update RootLayout for Checkout Metadata

**Files:**
- Modify: `app/checkout/page.tsx` (add metadata export)

- [ ] **Step 1: Add metadata to checkout page**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — Bu The Oracle of Dreams",
  description: "Complete your sacred dream reading purchase",
};
```

- [ ] **Step 2: Commit**

```bash
git add app/checkout/page.tsx
git commit -m "feat: add metadata to checkout page"
```

---

## Spec Coverage Check

| Spec Section | Task |
|-------------|------|
| Two-column layout (40/60) | Task 1 |
| Left column Sacred Artifact order summary | Task 2 |
| Right column checkout form with Stripe | Task 4 |
| Security badges | Task 3 |
| Responsive (mobile stacked) | Task 1 (CSS grid) |
| Success redirect | Task 5 |
| Mystical styling (glass-card, cloud-pattern, gold accents) | Tasks 1-5 |

---

**Plan complete and saved to `docs/superpowers/plans/2026-04-26-checkout-page-implementation.md`**

**Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**