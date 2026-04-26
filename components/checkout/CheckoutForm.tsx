"use client";

import Checkout from "@/components/checkout";
import { SecurityBadges } from "./SecurityBadges";
import { PRODUCTS } from "@/lib/products";

const CheckoutForm = () => {
  
  const product = PRODUCTS[0];


  return (
    <div className="glass-card rounded-3xl p-8">
      <h2 className="font-serif text-2xl md:text-3xl text-on-surface mb-2">
        Complete Your Journey
      </h2>
      <p className="text-sm text-on-surface-variant mb-8">
        Begin your sacred dream reading for $66.66.
      </p>

      <Checkout productId="{product.id}" />

      <SecurityBadges />
    </div>
  );
};

export { CheckoutForm };
