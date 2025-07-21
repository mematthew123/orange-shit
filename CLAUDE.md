# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.4.2 application using the App Router, TypeScript, and Tailwind CSS v4. The project appears to be focused on displaying quotes and testimonials with components for timeline, statistics, and various quote sections.

## Key Commands

### Development
- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint to check code quality

### Common Development Workflow
```bash
# Install dependencies
npm install

# Start development
npm run dev

# Before committing, always run:
npm run lint
npm run build  # Ensures TypeScript types are correct
```

## Architecture

### Technology Stack
- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 (uses CSS-based configuration, no tailwind.config.js)
- **UI Components**: @headlessui/react and @heroicons/react

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout wrapping all pages
  - `page.tsx` - Home page component
  - `globals.css` - Global styles and Tailwind imports
- `/components` - React components organized by feature
  - Quote-related components (QuoteSection, IvankaQuoteSection, TestimonyQuoteSection, EpsteinBirthdayQuoteSection)
  - Layout components (Navigation, Hero, Timeline, Stats)
- `/public` - Static assets (SVGs, images)

### Key Patterns
1. **Component Organization**: Components are in flat structure under `/components`
2. **TypeScript**: Strict mode enabled, use proper typing for all components
3. **Imports**: Use `@/` alias for imports from root (e.g., `import { Component } from '@/components/Component'`)
4. **Styling**: Tailwind CSS classes directly in JSX, global styles in `app/globals.css`

## Important Notes

- No testing framework is currently set up
- No environment variables configuration exists yet
- ESLint is configured with Next.js recommended rules
- The project uses the latest React 19.1.0 and Next.js features