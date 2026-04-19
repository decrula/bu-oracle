# CLAUDE.md

## Project Overview

This is a React + Vite + TypeScript app called "Bu – The Oracle of Dreams", deployed to Vercel.

## Commands

```bash
npm install          # Install dependencies
npm run dev         # Start dev server on port 3000
npm run build       # Build for production
npm run lint        # TypeScript type checking
npm run clean       # Remove dist folder
```

## Environment Variables


## Architecture

- **Single-file component structure**: All UI components (Navbar, Hero, Steps, Omens, Testimonials, FinalCTA, Footer) are defined in `src/App.tsx`
- **Custom theme**: Tailwind CSS 4 with custom colors defined in `src/index.css` via `@theme` directive (primary, tertiary, surface colors)
- **Fonts**: Noto Serif (headings/serif), Inter (body/sans)
- **Styling utilities**: Custom classes in index.css — `cloud-pattern`, `glass-nav`, `glass-card`
- **Animations**: Framer Motion (`motion/react`) for entrance animations and hover effects
- **Icons**: Lucide React

## Tech Stack

- React 19 + TypeScript
- Vite 6 (with `@vitejs/plugin-react`)
- Tailwind CSS 4 (`@tailwindcss/vite` plugin)
- `motion` for animations
- `lucide-react` for icons
- `express` + `dotenv` (server-side integration)
