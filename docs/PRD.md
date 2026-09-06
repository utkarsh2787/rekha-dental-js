# Rekha Dental Website — Product Requirements

## Objective

Rebuild the complete Rekha Dental website as a maintainable, responsive Next.js application. The new site should preserve the existing brand and information architecture while improving code quality, local editability, SEO, accessibility and performance.

## Confirmed requirements

- Next.js App Router, TypeScript and Tailwind CSS.
- English-only website covering all 58 routes captured from the existing public website.
- Content edited by developers in typed source files; no CMS or WordPress administration.
- Responsive layouts for mobile, tablet and desktop.
- One clinic-wide Calendly URL opened inside an accessible popup.
- Local image assets selected from the verified website mirror; no Cloudinary account dependency.
- Clickable phone, email and WhatsApp actions throughout the site.
- Contact form with validation and a provider-ready server endpoint. It must never report success unless delivery is configured and accepted.
- Per-page titles, descriptions, canonicals, social metadata, sitemap, robots rules and structured data.
- Local development and verification now; deployment is a later, separately approved phase.

## Acceptance criteria

1. Every captured public route resolves without a 404.
2. Navigation, mobile menu, appointment popup, contact actions and forms work with keyboard and touch input.
3. Important images are stored locally with human-readable names and rendered responsively.
4. The production build and lint checks complete successfully.
5. Representative desktop and mobile pages receive visual verification before handoff.
6. Environment-specific values are documented in `.env.example` and no secret is committed.

## Deferred inputs

- Final Calendly event URL.
- Final email delivery provider and credentials.
- Any updated phone numbers, addresses, legal copy or clinician credentials supplied by the owner.
- Hosting platform, analytics identifiers and production domain cutover.
