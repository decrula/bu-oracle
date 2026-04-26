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
