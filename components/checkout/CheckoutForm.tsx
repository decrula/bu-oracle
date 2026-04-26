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