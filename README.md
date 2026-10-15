# jonathanraxa.com

My personal portfolio site, live at [jonathanraxa.com](https://jonathanraxa.com).

Built with React 19, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui components.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Scripts

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start the local dev server                     |
| `npm run build`     | Build the site into `dist/`                    |
| `npm run preview`   | Serve the built `dist/` locally                |
| `npm run lint`      | Lint all `.ts`/`.tsx`/`.js` files with ESLint  |
| `npm run typecheck` | Type-check the project with TypeScript         |
| `npm run check`     | Run lint and typecheck together                |
| `npm run pretty`    | Format everything with Prettier                |
| `npm run deploy`    | Run checks, build, and publish to GitHub Pages |

## Deploying

The site is hosted on GitHub Pages from the `gh-pages` branch, with the custom domain set in `public/CNAME`.

```bash
git push          # push source changes to main
npm run deploy    # check, build, and publish dist/ to gh-pages
```

`npm run deploy` stops if lint or the type check fails. Changes usually go live within a minute or two.

## Project structure

```
src/
  components/     Page sections (hero, about-me, experience, portfolio, ...)
    helpers/      Shared pieces (SocialLinks, ProjectDetails, ScrollToTopButton)
    resume/       The /resume page
    ui/           shadcn/ui components
  data/           Experience and portfolio content
  pages/          Home and resume pages
  routes/         Router setup and link URLs (routes.ts)
  types/          Shared TypeScript types
public/           Static files copied as-is (CNAME, 404.html, og-image.jpg)
```

To update content, edit `src/data/experience-data.ts` (jobs and years of experience) or `src/data/portfolio-data.ts` (projects).

## Notes

- **Deep links on GitHub Pages:** GitHub Pages serves `public/404.html` for unknown paths like `/resume`. It saves the path and redirects to `/`, and `src/routes/index.tsx` restores it.
- **Link previews:** Open Graph tags live in `index.html` and use `public/og-image.jpg`.
