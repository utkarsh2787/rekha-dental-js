# Rekha Dental — Next.js website

A clean, developer-maintained rebuild of the Rekha Dental public website. It uses Next.js App Router, TypeScript and Tailwind CSS, with local images selected from the verified website mirror.

## Requirements

- Node.js 20.9 or newer
- pnpm 11 or newer

## Run locally

```powershell
Copy-Item .env.example .env.local
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```powershell
pnpm lint
pnpm build
```

The application statically generates every public route from the captured website. The contact endpoint remains dynamic so it can validate and deliver enquiries at request time.

## Where developers edit content

- `config/site.ts` — phone, email, address, canonical base URL and Calendly URL.
- `content/home.ts` — homepage treatments, clinicians, statistics, principles and selected reviews.
- `content/pages.ts` — treatment pages, courses, articles, locations, patient information and legal content.
- `public/images` — locally hosted clinic, clinician and treatment imagery.
- `components` — shared layouts and interactive controls.

## Environment settings

- `NEXT_PUBLIC_SITE_URL` — canonical production origin, without a trailing slash.
- `NEXT_PUBLIC_CALENDLY_URL` — the one clinic-wide Calendly event URL.
- `CONTACT_WEBHOOK_URL` — optional server-side delivery endpoint for validated contact enquiries.
- `CONTACT_EMAIL_TO` — documented destination for the future email adapter.

The form intentionally returns a clear unavailable message when no delivery endpoint exists. It never displays a false success message.

## Project documents

- `docs/PRD.md` — confirmed scope and acceptance criteria.
- `docs/ARCHITECTURE.md` — content, rendering, asset and integration decisions.

Deployment is intentionally excluded from this phase. Hosting, DNS, analytics and production secrets will be handled after local approval.
