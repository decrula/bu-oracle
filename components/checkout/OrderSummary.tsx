"use client";

import { Shield, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import Image from "next/image";

const OrderSummary = () => {
  const product = PRODUCTS[0];
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
          <Image
            src={product.images?.[0] || "/images/ethereal-sleep.jpg"}
            alt={product.name}
            width={80}
            height={80}
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
          <span className="font-serif text-3xl text-tertiary">${(product.priceInCents / 100).toFixed(2)}</span>
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