"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { SecurityBadges } from "./SecurityBadges";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 29, currency: "usd" }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Failed to start checkout");
        setIsLoading(false);
      }
    } catch {
      setError("Failed to start checkout");
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card rounded-3xl p-8">
      <h2 className="font-serif text-2xl md:text-3xl text-on-surface mb-2">
        Complete Your Journey
      </h2>
      <p className="text-sm text-on-surface-variant mb-8">
        Begin your sacred dream reading for $29
      </p>

      <motion.button
        onClick={handleCheckout}
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-tertiary text-on-tertiary py-4.5 rounded-full font-sans text-sm uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(233,195,73,0.2)] hover:shadow-[0_0_40px_rgba(233,195,73,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Redirecting to Secure Checkout...
          </>
        ) : (
          "Begin My Reading — $29"
        )}
      </motion.button>

      {error && (
        <p className="mt-4 text-sm text-red-400 text-center">{error}</p>
      )}

      <SecurityBadges />
    </div>
  );
};

export { CheckoutForm };
