# Architecture Overview

## Goals
- Keep content immutable and source-driven.
- Separate data, configuration, domain logic, and presentation layers.
- Support scale: easy extension for more pages, sections, and data sources.
- Enforce validation rules and metric integrity.

## Architectural Pattern
Clean, modular architecture with clear boundaries:

1. **Data Layer**
   - `data/PORTFOLIO_COPY.json`
   - `data/PORTFOLIO_COPY.md`
   - Immutable source-of-truth content.

2. **Domain Layer**
   - `lib/types.ts`
   - `lib/content.ts`
   - `lib/validation.ts`
   - `lib/seo.ts`
   - Pure logic for typing, loading, validation, and metadata generation.

3. **Configuration Layer**
   - `config/site.ts`
   - Centralized site constants, links, and navigation.

4. **Presentation Layer**
   - `components/layout/*`
   - `components/portfolio/*`
   - `components/seo/*`
   - Reusable UI units, semantic sections, and rendering composition.

5. **Application Layer**
   - `app/layout.tsx`
   - `app/page.tsx`
   - Route-level loading/error/fallback states.

## Key Design Decisions
- **SectionWrapper + Container**: ensures consistent spacing, headings, semantics, and future theming.
- **Motion-safe architecture**: animation is opt-out for reduced-motion users.
- **Server-first rendering**: primary content rendered on server for SEO and performance.
- **Dev-only validation panel**: continuous feedback during iteration without affecting production.
- **JSON-LD multi-schema output**: Person + WebSite + ItemList.

## Accessibility Strategy
- Landmark tags (`nav`, `main`, `section`, `header`, `aside`).
- Skip-to-content link in layout.
- High-contrast typography and controls.
- Focus-visible styles on interactive controls.
- Reduced-motion support via CSS and hook-aware motion wrapper.

## SEO Strategy
- Metadata built from structured content (`buildMetadata`).
- Canonical URL support.
- OpenGraph and Twitter metadata.
- JSON-LD rendered in page for rich result eligibility.
- Static semantic content designed for crawl clarity.

## Reliability Strategy
- `app/error.tsx` for runtime error containment.
- `app/loading.tsx` skeleton for user feedback.
- `app/not-found.tsx` fallback route.
- `scripts/self-audit.ts` checks validation compliance before release.

## Extension Path
- Add more routes in `app/` with shared layout primitives.
- Expand JSON source with testimonials/blog/experience modules.
- Add analytics provider implementation in `components/seo/analytics-placeholder.tsx`.
- Add internationalization by duplicating data files and locale routing.
