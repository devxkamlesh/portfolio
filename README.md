# Chatgptcode Portfolio Workspace

This repository contains two Next.js portfolio codebases plus resume assets.

## Live Links
- Main portfolio: https://devxkamlesh.vercel.app/
- Daily Habit OS: https://dailyhabitos.online
- Nitionz Pvt Ltd: https://nitionz-pvt-ltd.vercel.app/
- Kiro Powers: https://kiro-powers.vercel.app/

## Projects in This Repo
- `app/`, `components/`, `lib/`: root portfolio app (Next.js 16 + React 19).
- `portfolio_pro/`: advanced portfolio build with content validation, dark mode, dev checklist, and polished UI states.
- `resume.md` and `resume-full-stack*.pdf`: resume source and styled PDF exports.

## Tech Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS (inside `portfolio_pro`)
- Framer Motion (inside `portfolio_pro`)

## Run Locally

### Root portfolio
```bash
npm install
npm run dev
```

### portfolio_pro
```bash
cd portfolio_pro
npm install
npm run dev
```

## Build

### Root portfolio
```bash
npm run build
```

### portfolio_pro
```bash
cd portfolio_pro
npm run build
```

## Resume Files
- Source: `resume.md`
- PDF styles:
  - `resume-design-classic.css`
  - `resume-design-aurora.css`
  - `resume-design-slate.css`
- Generated PDFs:
  - `resume-full-stack.pdf`
  - `resume-full-stack-classic.pdf`
  - `resume-full-stack-aurora.pdf`
  - `resume-full-stack-slate.pdf`

## Notes
- The repository is configured with `.gitignore` entries for `node_modules`, `.next`, logs, and local env files.
- `portfolio_pro` includes content validation scripts and a self-audit command:
```bash
cd portfolio_pro
npm run self-audit
```
