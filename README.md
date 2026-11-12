# ugauniyal.github.io

Personal portfolio of **Utkarsh Gauniyal**, a software engineer focused on backend systems, mobile apps, and cloud infrastructure.

Live at **https://ugauniyal.github.io**

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) with **static export** for GitHub Pages
- **TypeScript** (strict)
- **CSS Modules** plus global design tokens (`src/app/globals.css`)
- [`next/font`](https://nextjs.org/docs/app/api-reference/components/font) for self-hosted Google Fonts (Hanken Grotesk, Inter, JetBrains Mono)
- [Lucide](https://lucide.dev) SVG icons
- ESLint (`eslint-config-next`) and Prettier

## Getting started

Requires Node.js **20.9+** (22 LTS recommended, see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script              | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Start the development server                            |
| `npm run build`     | Build the static site into `out/`                       |
| `npm run preview`   | Serve the built `out/` folder locally                   |
| `npm run lint`      | Lint with ESLint (`lint:fix` to auto-fix)               |
| `npm run typecheck` | Type-check with `tsc`                                   |
| `npm run format`    | Format with Prettier (`format:check` to verify only)    |
| `npm run check`     | Typecheck, lint, format check, and build (what CI runs) |

## Project structure

```
src/
├── app/                   # Routes, layout, metadata (App Router)
│   ├── layout.tsx         # Root layout: fonts, SEO metadata, navbar, footer
│   ├── page.tsx           # Home page
│   ├── projects/          # /projects page
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # /sitemap.xml
│   ├── robots.ts          # /robots.txt
│   ├── icon.svg           # Favicon
│   └── opengraph-image.png
├── assets/projects/       # Optimized project screenshots (WebP)
├── components/
│   ├── layout/            # Navbar (client component) and Footer
│   ├── sections/          # Home page sections
│   └── ui/                # Reusable building blocks (cards, headings, grids)
├── data/                  # All site content, typed (edit these to update the site)
└── hooks/                 # Client-side hooks (scroll-spy)
```

### Updating content

All copy lives in `src/data/`:

- `site.ts`: name, email, social links, navigation
- `projects.ts`: projects (set `featured: true` to show one on the home page)
- `reviews.ts`, `services.ts`, `profile.ts`: testimonials, services, stats, and the hero code snippet

To add a project screenshot, put a compressed `.webp` (around 1200px wide) in `src/assets/projects/` and import it in `projects.ts`.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which type-checks, lints, checks formatting, builds, and deploys `out/` to GitHub Pages. Pull requests run the same checks without deploying.

> In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.
