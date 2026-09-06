# Architecture

## Content model

Clinic-wide details live in `config/site.ts`. Page content lives in typed modules under `content/`. Reusable layouts and interactive controls live in `components/`. This keeps routine updates possible without editing rendering logic.

## Routing

The App Router provides explicit top-level pages and statically generated dynamic detail pages for treatments, academy courses and articles. Route data also supplies metadata, breadcrumbs and structured data so visible content and SEO cannot silently drift apart.

## Rendering

Pages and content sections are Server Components by default. Client Components are limited to interactions that need browser state: the mobile menu, hero carousel, Calendly popup and validated form feedback.

## Assets

Selected originals from the verified mirror are copied into `public/images` with descriptive filenames. The historic crawler directory is a source archive only and is not shipped with the application.

## Integrations

- `NEXT_PUBLIC_CALENDLY_URL` controls the clinic booking event shown in a modal iframe.
- The contact route validates requests on the server. A delivery adapter will be enabled only after the email provider is selected.
- `NEXT_PUBLIC_SITE_URL` controls canonical URLs and sitemap output.

## Deployment boundary

The repository remains platform-neutral and runs through standard Next.js scripts. Production hosting, DNS, environment variables, monitoring and analytics are intentionally deferred until the local build is approved.
