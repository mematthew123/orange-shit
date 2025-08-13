# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 15.4.2 documentation and archival website focused on presenting factual information about Trump-Epstein connections, sexual assault allegations, and legal proceedings. The site uses interactive timelines, quote displays, and testimonial sections with content sourced from mainstream media and court records.

## Key Commands

### Development
```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Create production build (also validates TypeScript)
npm run start    # Run production server
npm run lint     # Run ESLint to check code quality
```

### Pre-commit Workflow
Always run before committing:
```bash
npm run lint && npm run build
```

## Architecture

### Technology Stack
- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript with strict mode (ES2017 target)
- **Styling**: Tailwind CSS v4 (CSS-based configuration in `app/globals.css`)
- **UI Libraries**: @headlessui/react, @heroicons/react
- **Fonts**: Geist fonts via next/font/google

### Component Architecture
- **12 components** in flat structure under `/components`
- **Client components** (4): Hero, Navigation, LineTimeline, FadeIn - use `'use client'` directive
- **Server components** (8): Static content components (QuoteSection, TestimonyQuoteSection, etc.)
- **Pattern**: Single responsibility - each component handles one content section

### Key Patterns

#### Import Convention
Use `@/` alias for all imports:
```typescript
import { Component } from '@/components/Component'
```

#### TypeScript Patterns
- Strict mode enabled with comprehensive checking
- Polymorphic components using generics (e.g., `Container<T>`)
- All components properly typed with React.FC or explicit return types

#### Styling System
- **545-line globals.css** with comprehensive CSS custom properties
- **Color scales**: Primary (orange), semantic (error/warning/success), neutral
- **Dark/light mode**: Automatic via CSS media queries
- **Animations**: Intersection Observer-based FadeIn components

#### Data Management
- **Static data**: All content stored as constants within components
- **No external APIs**: Pure static generation
- **Timeline structure**: Events categorized as 'relationship', 'allegation', 'legal', 'scandal'
- **Interactive filtering**: Category-based timeline filtering with state management

### Content Flow (app/page.tsx)
```typescript
<Hero />                         // Landing section with statistics
<EpsteinBirthdayQuoteSection />  // Quote display
<QuoteSection />                 // Trump's 2002 quote about Epstein
<TrumpEpsteinTies />            // Relationship documentation section
<LineTimeline />                 // 470+ line interactive timeline
<IvankaQuoteSection />           // Additional testimonials
<TestimonyQuoteSection />        // Court testimony quotes
```

### Accessibility Considerations
- Skip navigation links implemented
- Proper ARIA labeling throughout
- Focus management for interactive elements
- Reduced motion support via `prefers-reduced-motion`
- Semantic HTML structure

## Important Implementation Notes

### Client vs Server Components
- Use `'use client'` only when needed (interactivity, hooks, browser APIs)
- Keep static content in server components for optimal performance

### Timeline Component
The LineTimeline component contains 470+ lines of event data. When modifying:
- Maintain chronological order
- Follow existing event structure with required fields
- Ensure proper category assignment for filtering

### Styling Updates
- Tailwind classes directly in JSX
- Global styles and CSS variables in `app/globals.css`
- Maintain consistency with existing color palette and spacing

### No Testing Framework
Currently no Jest or testing setup. Manual testing via development server required.

## File Structure
```
/app              # Next.js App Router files
  layout.tsx      # Root layout with fonts and metadata
  page.tsx        # Home page component composition
  globals.css     # Global styles and Tailwind configuration
/components       # All UI components (flat structure)
/public/images    # Static assets organized by category
```