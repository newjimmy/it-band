# IT Band Website

Static Astro website for IT Band: hybrid cloud, DevOps, network and platform engineering consulting.

## Local Development

Use Node.js 24 (pinned in `.node-version`).

```bash
npm ci
npm run dev
```

Astro serves the site at `http://localhost:4321/`. The production canonical URL is `https://it-band.net`.

## Build

```bash
npm run build
npm run preview
```

Build output is generated in `dist/`.

## Deployment

Hosting is Cloudflare Pages; GitHub stores the source. `.github/workflows/deploy.yml` validates builds only and does not publish to GitHub Pages.

Configure a Cloudflare Pages Git-integrated project with:

- Repository: `newjimmy/it-band`; production branch: `main` after review.
- Build command: `npm run build`; build output: `dist`; root directory: repository root.
- Node version: 24, using `.node-version` (or `NODE_VERSION=24`).
- Add `it-band.net` through the project's Custom domains page. Cloudflare manages HTTPS certificates.

Keep the old GitHub Pages site until the Cloudflare site and custom domain have been verified. Then disable GitHub Pages hosting, not the repository.

## Contact

Public contact address: `info@it-band.net`, hosted by Zoho Mail EU.
The inquiry form opens a draft in the visitor's email client; it does not submit to a server, store form data or provide live chat.
