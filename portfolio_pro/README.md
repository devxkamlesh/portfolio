# Portfolio Pro

Production-grade, conversion-oriented portfolio website for **Kamlesh Choudhary** built with Next.js App Router, strict TypeScript, Tailwind CSS, and Framer Motion.

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS
- Framer Motion
- next/font
- JSON-LD structured data

## Source of Truth
The website content is sourced from:
- `data/PORTFOLIO_COPY.json`
- `data/PORTFOLIO_COPY.md`

All project-reported metrics are preserved exactly from these files.

## Folder Structure
```txt
portfolio_pro/
├── app
├── components
├── config
├── data
├── hooks
├── lib
├── public
├── scripts
├── styles
├── ARCHITECTURE.md
└── README.md
```

## Run Locally
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
npm run start
```

## Self-Audit
Runs type checks, content validation, and production build:
```bash
npm run self-audit
```

## Validation Coverage
- Metric integrity checks against markdown source
- Positioning consistency checks (Full Stack + AI)
- Supporting-skill scope checks (SEO + WordPress)
- Required section checks
- SEO metadata completeness checks

Dev mode includes an on-screen checklist panel.

## Deployment (Vercel)
1. Import `portfolio_pro` as a Vercel project.
2. Build command: `npm run build`
3. Output handled by Next.js defaults.
4. Optional environment variable:
   - `NEXT_PUBLIC_ANALYTICS_ID` for analytics script placeholder.

## Performance Notes
- Static data-driven rendering for predictable TTFB.
- Minimal client JavaScript: only motion wrapper and error boundary are client components.
- Optimized local font loading with `next/font`.
- Optimized image handling through `next/image`.
- Tailwind utility-first styling for compact CSS output.

## Conversion Strategy
- Hero communicates value proposition in under 20 seconds.
- Project cards prioritize problem -> solution -> outcomes -> metrics flow.
- Service cards map directly to recruiter/client buying intent.
- CTA includes clear action paths (GitHub, LinkedIn, Portfolio, Contact).
