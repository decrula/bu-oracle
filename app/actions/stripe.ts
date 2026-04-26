"use server";

import { stripe } from "../../lib/stripe";
import { PRODUCTS } from "../../lib/products";

export async function startCheckoutSession(productId: string) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`);
  }

  const session = await stripe.checkout.sessions.create({
    // @ts-expect-error - ui_mode: "embedded" is supported in Stripe SDK v22+
    ui_mode: "embedded",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.images,
          },
          unit_amount: product.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  });

  return session.client_secret!;
}
