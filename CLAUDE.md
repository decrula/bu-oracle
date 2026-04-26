# CLAUDE.md

## Project Overview

This is a Next.js 16 + React 19 + TypeScript app called "Bu – The Oracle of Dreams", deployed to Vercel.

## Commands

```bash
pnpm install         # Install dependencies
pnpm run dev         # Start dev server with Turbopack
pnpm run build       # Build for production
pnpm run start       # Start production server
pnpm run lint        # TypeScript type checking
```

## Environment Variables

- `STRIPE_SECRET_KEY` — Stripe secret key (server-side only)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Stripe publishable key (client-side)
- `STRIPE_WEBHOOK_SECRET` — Stripe webhook signature verification

## Architecture

- **App Router structure**: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- **Split components**: `components/` directory with Navbar, Hero, Steps, Omens, Testimonials, FinalCTA, Footer, MobileOracleFAB
- **API routes**: `app/api/payment-intents/route.ts`, `app/api/webhooks/route.ts`
- **Custom theme**: Tailwind CSS 4 via PostCSS with `@theme` directive in `app/globals.css`
- **Fonts**: Noto Serif (headings/serif), Inter (body/sans)
- **Styling utilities**: Custom classes in globals.css — `cloud-pattern`, `glass-nav`, `glass-card`
- **Animations**: Framer Motion (`motion/react`) — components using motion have `"use client"` directive
- **Icons**: Lucide React

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- `motion` for animations
- `lucide-react` for icons
- Stripe (server-side PaymentIntents + webhooks)
- Vercel Analytics + Speed Insights

## Static Images

Images are served from `public/images/`:
- misty-mountains.jpg, ethereal-sleep.jpg (Hero)
- elena.jpg, marcus.jpg (Testimonials)
- ancient-scroll.jpg (Testimonials)
