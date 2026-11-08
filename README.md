# ayradvice.it

Website of AYR Advice di Marco Mazzanti. Static site built with [Astro](https://astro.build), served by a Cloudflare Worker that also handles the contact form.

## Structure

- `src/pages/`: one file per page
- `src/components/`: shared UI (header, footer, buttons, CTA, …)
- `src/data/`: services and work experiences
- `src/assets/`: images and icons (resized by Astro at build time)
- `worker/`: Cloudflare Worker; handles `POST /api/contact`, everything else is served from `dist/`

## Development

```sh
pnpm install
pnpm dev       # Astro dev server (no contact form API)
pnpm preview   # build + wrangler dev, full site including /api/contact
pnpm check     # typecheck, lint, format check
pnpm lint
pnpm format
```

`pnpm preview` reads `TURNSTILE_SECRET_KEY` from `.dev.vars`; use Cloudflare's test secret `1x0000000000000000000000000000000AA`. Emails are not sent locally, wrangler writes them to `.wrangler/tmp/email/`.

## Contact form

The form posts to `/api/contact`. The worker checks the [Turnstile](https://developers.cloudflare.com/turnstile/) token and emails the message to each address in `CONTACT_TO`, one email per recipient, from `CONTACT_FROM`. `CONTACT_TO` is a comma-separated list kept as a Worker secret (`pnpm wrangler secret put CONTACT_TO`) and in `.dev.vars` locally.

Sending uses the `send_email` binding with Email Routing, which is free when the recipients are verified destination addresses (Email Routing → Destination addresses). Each verified send allows a single recipient, hence one email per address. To add a recipient, verify it in the dashboard and update the `CONTACT_TO` secret.

## Deploy

```sh
pnpm deploy
```
