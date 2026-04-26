# Checkout Page Design — Bu The Oracle of Dreams

## Overview

A two-column checkout page that maintains the mystical spiritual wellness aesthetic of the homepage while providing a secure, trustworthy payment experience using Stripe Elements.

## Layout

### Desktop (md+)
- **Left column (40%)**: Sacred Artifact Order Summary — sticky positioned, vertically centered
- **Right column (60%)**: Checkout Form with Stripe Elements
- Two columns centered vertically in viewport

### Mobile
- Single column stack
- Order summary displayed first (collapsible)
- Checkout form below

## Left Column — Sacred Artifact Order Summary

### Visual Design
- Dark glass card using existing `glass-card` class
- Subtle gold border glow effect on card edges
- `cloud-pattern` overlay to match homepage hero
- Background: `bg-surface-container-low/40`

### Content
- Header: "Your Sacred Artifact" in `font-serif`, `text-2xl`
- Decorative mystical image area (placeholder for ethereal imagery, 200px height, rounded)
- Product name: "Bu Dream Reading — The Oracle's Wisdom"
- Itemized details:
  - "Personalized Dream Analysis"
  - "Zhou Gong's Ancient Wisdom"
  - "Feng Shui Action Step"
- Divider line (gold, `opacity-20`)
- Total price: "$29" in large serif font with gold accent
- Footer text: "Instant digital delivery to your inbox"

## Right Column — Checkout Form

### Visual Design
- Max-width container (480px) for form fields
- `glass-card` styled form container
- Input fields: dark background (`bg-surface-container-low`), subtle border, focus state with gold glow
- Labels: uppercase, `tracking-widest`, `text-[11px]`, `text-on-surface-variant`

### Sections
1. **Header**: "Complete Your Journey" in `font-serif`
2. **Email Field**: For receipt delivery
3. **Stripe PaymentElement**: Mounted in a styled container
4. **Submit Button**:
   - Full width, gold background (`bg-tertiary`)
   - Text: "Complete My Reading — $29"
   - Uppercase, tracking-widest, bold
   - Hover: slight scale + glow effect matching homepage CTA

### Security Badges
- Below submit button
- Lock icon + "256-bit SSL Encrypted"
- Stripe logo/branding
- Small text: "Your payment is secured by Stripe"

## Component Structure

```
app/checkout/page.tsx          # Main checkout page
components/checkout/
  OrderSummary.tsx             # Left column order summary
  CheckoutForm.tsx             # Right column form with Stripe
  SecurityBadges.tsx           # Security trust indicators
```

## Technical Approach

- **Page**: Server component at `app/checkout/page.tsx` importing client components
- **Stripe Elements**: Client component using `@stripe/react-stripe-js` `Elements` provider
- **Payment Intent**: Fetch client secret from existing `/api/payment-intents` endpoint
- **CheckoutForm**: `"use client"` directive, handles payment submission
- **Styling**: Use existing `globals.css` utilities (`glass-card`, `cloud-pattern`, theme colors)
- **Fonts**: Inherit from layout (Noto Serif headings, Inter body)

## Responsive Breakpoints

- **Mobile (< md)**: Single column, order summary top
- **Desktop (md+)**: Two columns, 40/60 split

## Error Handling

- Stripe errors displayed inline below PaymentElement
- Form validation for email field
- Loading state on submit (button shows spinner)
- Success redirect to a confirmation page (placeholder: `/checkout/success`)
