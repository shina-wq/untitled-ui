# Untitled UI Dashboard

A pixel-accurate React build of the Untitled UI "Organization overview" dashboard (desktop and mobile, light and dark), using static mock data.

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, shadcn (Base UI primitives), Recharts and `@untitledui/icons`.

## Scripts

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build
npm run lint     # oxlint
```

## Structure

- `src/index.css`: design tokens (Untitled UI semantic colours, type scale, shadows, radii) mapped to Tailwind utilities, with shadcn aliases
- `src/components/ui`: shadcn primitives, restyled to Untitled UI
- `src/components/layout`: app shell (sidebar, page header)
