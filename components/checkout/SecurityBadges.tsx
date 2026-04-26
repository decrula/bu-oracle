"use client";

import { Lock } from "lucide-react";

const SecurityBadges = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
      <div className="flex items-center gap-2 text-on-surface-variant">
        <Lock className="w-4 h-4" />
        <span className="text-[11px] uppercase tracking-widest">SSL Encrypted</span>
      </div>

      <div className="hidden sm:block w-px h-4 bg-white/10" />

      <span className="text-[11px] text-on-surface-variant/70 text-center">
        Your payment is secured by Stripe
      </span>
    </div>
  );
};

export { SecurityBadges };
