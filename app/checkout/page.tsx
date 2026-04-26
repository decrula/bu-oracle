import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Checkout — Bu The Oracle of Dreams",
  description: "Complete your sacred dream reading purchase",
};

export default function CheckoutPage() {
  const product = PRODUCTS[0];

  return (
    <div className="min-h-screen pt-24 pb-16 cloud-pattern">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column - Order Summary */}
          <div className="md:col-span-5 lg:col-span-4">
            <OrderSummary product={product} />
          </div>

          {/* Right Column - Checkout Form */}
          <div className="md:col-span-7 lg:col-span-8">
            <CheckoutForm product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
