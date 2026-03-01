# alexvey.com

Personal blog by Alex Vey about AI, software engineering, and engineering culture. Built with Astro, Tailwind CSS, and MDX.

## Tech Stack

- [Astro](https://astro.build) (SSG)
- [Tailwind CSS](https://tailwindcss.com) v4
- MDX for interactive components
- Auto-generated Open Graph images via Satori
- RSS feed, sitemap, SEO-friendly URLs

## Development

```bash
pnpm install     # Install dependencies
pnpm dev         # Start dev server at localhost:4321
pnpm build       # Build for production
pnpm preview     # Preview production build
```

## Project Structure

```
src/
├── content/blog/   # Blog posts (Markdown/MDX)
├── components/     # Astro & interactive components
├── layouts/        # Page layouts
├── pages/          # Routes (index, about, blog, rss, og)
└── styles/         # Global styles
public/             # Static assets
```

## Writing

Blog posts live in `src/content/blog/` as `.md` or `.mdx` files. Frontmatter fields:

| Field         | Required | Description                                              |
| :------------ | :------- | :------------------------------------------------------- |
| `title`       | yes      | Post title                                               |
| `description` | yes      | Short summary for SEO and previews                       |
| `pubDate`     | yes      | Publication date (determines sort order)                 |
| `visualTheme` | no       | Header animation (`neural-network`, `mesh`, `towers`, `growth`, `vertical-stack`, `roundtable`) |
| `prompt`      | no       | Prompt or teaser text                                    |
