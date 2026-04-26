"use client";

import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import Checkout from "@/components/checkout";
import { SecurityBadges } from "./SecurityBadges";

const CheckoutForm = () => {
  return (
    <div className="glass-card rounded-3xl p-8">
      <h2 className="font-serif text-2xl md:text-3xl text-on-surface mb-2">
        Complete Your Journey
      </h2>
      <p className="text-sm text-on-surface-variant mb-8">
        Begin your sacred dream reading for $66.66
      </p>

      <div className="bg-surface-container-low rounded-xl overflow-hidden">
        <Checkout productId="dream-reading" />
      </div>

      <SecurityBadges />
    </div>
  );
};

export { CheckoutForm };
