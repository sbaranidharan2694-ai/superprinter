# AGENTS.md

## Repository Overview
- Frontend: React 18 + TypeScript + Vite.
- Styling: Tailwind CSS + shadcn-ui (Radix UI).
- Routing: react-router-dom.
- Tests: Vitest + React Testing Library (jsdom).
- Path alias: `@/*` -> `./src/*`.
- No Cursor or Copilot rules detected in `.cursor/rules`, `.cursorrules`, or `.github/copilot-instructions.md`.

---

## Build / Lint / Test Commands

### Install
- `npm install`

### Dev Server
- `npm run dev` (Vite dev server on port 8080)

### Build
- `npm run build`
- `npm run build:dev` (development build mode)

### Preview Build
- `npm run preview`

### Lint
- `npm run lint`

### Tests
- `npm run test` (Vitest run)
- `npm run test:watch` (watch mode)

### Run a Single Test
- Run a file:
  - `npx vitest run src/test/example.test.ts`
  - `npx vitest run src/**/MyComponent.test.tsx`
- Run by name/pattern:
  - `npx vitest run -t "quote form"`
  - `npx vitest -t "renders hero"`
- Watch a single file:
  - `npx vitest src/**/MyComponent.test.tsx`

---

## Code Style Guidelines

### General
- Use TypeScript for all new code (`.ts` / `.tsx`).
- Prefer functional components and hooks.
- Keep components small and composable.
- Do not add comments unless they clarify non-obvious logic.
- Prefer minimal, readable JSX over abstraction.

### Imports
- Use absolute imports via alias: `@/components/...`, `@/data/...`.
- Group imports in this order:
  1) React / third-party
  2) Local alias imports (`@/...`)
  3) Relative imports
- Keep imports sorted alphabetically within each group.

### File & Folder Layout
- Pages: `src/pages/`
- Reusable components: `src/components/`
  - `home/` -> homepage sections
  - `layout/` -> header/footer/layout
  - `shared/` -> shared UI blocks
  - `ui/` -> shadcn/radix components
- Data: `src/data/` (static content)
- Hooks: `src/hooks/`
- Utils: `src/utils/`
- Contexts: `src/contexts/`

### Naming Conventions
- Components: `PascalCase` (e.g., `HeroSection`).
- Hooks: `useCamelCase` (e.g., `useInView`).
- Files: match exported component (e.g., `HeroSection.tsx`).
- Constants: `UPPER_SNAKE_CASE` for shared constants.
- CSS classes: Tailwind utility strings only.

### Types
- Prefer explicit interfaces for structured data (e.g., `ServiceData`).
- Co-locate types at top of file if file-specific.
- Avoid `any` unless there is no alternative; prefer `unknown` + narrowing.
- Keep function signatures explicit when logic is non-trivial.

### Props & State
- Destructure props in the function signature when practical.
- Keep prop surfaces minimal and stable.
- Use `useState` for local state; avoid premature `useMemo`/`useCallback`.
- Clean up side effects and event listeners in `useEffect` return handlers.

### Error Handling
- Guard optional data reads from static sources with null checks.
- Wrap async calls in try/catch and provide user-safe fallback UI.
- Do not throw errors from render paths.

### Routing
- Add routes in `src/App.tsx`.
- Use `React.lazy` for new pages.
- Keep `NotFound` route last.

### SEO
- Use `SEOHead` on all pages with `title`, `description`, `canonical`, and `keywords`.

### Styling
- Use Tailwind utilities for layout, spacing, and typography.
- Use CSS variables for brand colors (see `src/index.css`).
- Avoid large inline styles unless values are dynamic.

### Accessibility
- Provide `aria-label` for icon-only buttons.
- Always include descriptive `alt` text for images.
- Ensure form inputs have labels or `aria-label`.

### Images
- Use `loading="lazy"` for non-critical images.
- Use `loading="eager"` for above-the-fold hero assets.
- Provide fallback images when using dynamic sources.

---

## Tests
- Place tests near features or under `src/test/`.
- Prefer React Testing Library over snapshot tests.
- Keep tests deterministic and avoid time-based flakiness.

---

## ESLint Notes
- ESLint runs on all `.ts`/`.tsx` files.
- React Hooks rules are enabled.
- `@typescript-eslint/no-unused-vars` is off (do not rely on it).

---

## Recommended Workflow
1. Create a branch for feature work.
2. Keep changes scoped and focused.
3. Run `npm run lint`.
4. Run targeted tests with Vitest.
5. Summarize changes clearly in the PR or commit message.

---

## Notes for Agentic Tools
- This repo is optimized for Vite and React Router.
- Keep bundle size in mind; avoid heavy new dependencies.
- Preserve the existing visual language: cream + gold palette, serif display.
