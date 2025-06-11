# Portfolio

## Next.js 15 & React 19 Migration

- All dependencies updated to latest versions (Next.js 15, React 19, etc.)
- Tailwind config updated for App Router compatibility
- To use the App Router, see the new `app/` directory structure below

## App Router Migration Steps

1. All new pages should be placed in the `app/` directory (see below for structure).
2. Global styles should be imported in `app/layout.tsx`.
3. Use `next/navigation` for routing in the `app/` directory.
4. Use new data fetching patterns (async server components, etc.).

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server

---

## Minimum Node.js Version

- Node.js >= 18.17.0 is required for Next.js 15+

## Portfolio source code

- Built with Next.js
- Visit - [adiamar.vercel.app](https://adiamar.vercel.app)