# Ammar Fitwalla - Portfolio

Personal portfolio for Ammar Fitwalla, Senior AI/ML Engineer.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` creates the production site in `dist/` and also writes
`dist/404.html` so client-side routes such as `/about` and `/work` work when
served by GitHub Pages.

## Analytics

The site uses privacy-friendly, cookie-free analytics from Umami Cloud. The
tracker only runs on `ammarf.com` and `www.ammarf.com`.

Custom events:

- `Resume Download` - About and Contact CV buttons
- `Contact Submit` - successful contact form submission
- `Project Click` - project cards, with project and destination data
- `Social Click` - LinkedIn, GitHub, and email links
- `Website Click` - links back to ammarf.com
- `Work Filter` - Work page filter changes
- `GitHub Archive Click` - Work page GitHub button
- `CTA Click` - Get in touch call-to-action

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` through
`.github/workflows/deploy.yml`.

- Repository: `https://github.com/ammarfitwalla/ammarf-portfolio`
- Custom domain: `https://ammarf.com`
- Pages URL: `https://ammarfitwalla.github.io/ammarf-portfolio/`

### DNS records

The domain DNS is managed at BigRock. The Framer records must be replaced with:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ammarfitwalla.github.io` |

Optional IPv6 records:

| Type | Host | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

After DNS propagates, GitHub Pages issues the HTTPS certificate automatically.
