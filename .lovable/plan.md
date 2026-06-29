## KELS Researcher Network — full site build

Recreate the KELS site from the screenshots as a TanStack Start app. All content is static (hardcoded) for now — "Admin" is just a page name (the Board Members page), no login or database. Shared top nav + footer come from the Home layout. The signature yellow highlight becomes a slowly drifting gradient glow.

### Pages / routes
- `/` — Home: huge bold headline "Korean Edutech & Learning Sciences Researcher Network", serif italic "Welcome Aboard!", intro paragraph, "Join Our Discord!" button.
- `/events` — Events: Upcoming event card (poster placeholder, title, dual US/KR date+time, location/Zoom, speakers) + Past Events grouped by year (2025, 2024) as expandable accordion cards.
- `/programs` — Programs: two cards (KELS Colloquium and Speakers Series, KELS Community) each with image placeholder, description, bullet list, "Learn more >".
- `/contributors` — Contributors: serif intro paragraph + "Board of KELS", then accordion sections (KELS Small Talk Panels, KELS Mentoring Mentors with the full doctor list, Edutech/Learning Sciences Korean Open Access Guide).
- `/admin` — Board Members: "2026 Board Members" grouped by role (Network Chair, Small Talk Committee, Colloquium & Speaker Series Committee, Mentoring Committee, Communication Officers, Resource Curators) as avatar grids. Clicking a member opens a profile modal (photo, name, title, affiliation, social/link icons, research blurb) matching the Member Modal screenshot.

### Shared layout (Header + Footer)
- Header: KELS logo block + wordmark on the left; nav links Home / Events / Programs / Contributors / Admin with active-state underline; globe (language) and moon (theme) icon buttons on the right. Sticky, white/blur background with bottom border.
- Footer: "2026 KELS Board", "© 2026. All rights reserved.", LinkedIn + Discord icon links.
- Both rendered once in a layout so every page shares them.

### Language toggle (EN / KO)
- A `LanguageProvider` (React context) storing `en | ko`, persisted to localStorage.
- All UI strings and content live in a typed dictionary `{ en: {...}, ko: {...} }`; components read via a `t()` helper. Globe button cycles EN↔KO.
- Initial pass: full English content (from screenshots) plus Korean translations for nav, section titles, and static labels; long body copy gets Korean where available and falls back to English otherwise.

### Dark mode
- A `ThemeProvider` toggling the `.dark` class on `<html>`, persisted to localStorage, honoring system preference on first load. Moon/sun icon reflects state. All colors use semantic tokens so dark mode works automatically.

### Animated drifting glow (the "yellow highlight")
- A soft warm-yellow radial/linear gradient anchored top-left of the page background that slowly drifts and breathes via a long CSS keyframe animation (subtle, ~20s loop, position + scale shift). Respects `prefers-reduced-motion`. Implemented as a fixed background layer behind page content, present on every page.

### Design system
- Headings: bold grotesque (Archivo / Inter Tight, heavy weights) matching the Helvetica-style screenshots.
- Accents ("Welcome Aboard!", "Board of KELS", Contributors intro): serif italic (Playfair Display).
- Body: clean sans (Figtree/Inter).
- Palette tokens in `src/styles.css` (oklch): navy primary (from the logo), warm cream/paper background, yellow accent for the glow, Discord/LinkedIn brand colors for those buttons. Light + dark values for each.
- Cards: rounded-2xl, soft shadow, generous padding — matching the screenshots.

### Technical notes
- Fonts via `@fontsource` packages installed with bun, imported in `src/main.tsx` (or app entry), wired into the theme — no CDN/`@import`.
- Logo: generate a small navy "KELS" mark asset (or render the lettered square in CSS) to match the screenshot.
- Image placeholders (event poster, program images, member avatars) rendered as neutral placeholder blocks/circles, ready to swap for real images later.
- Static data files (events, programs, board members, contributors) in `src/data/` so they're easy to edit.
- Each route sets its own `head()` metadata (title/description/og) for SEO.

### Out of scope (per your answer)
- No admin login, no database, no content editing UI. Toggling languages and theme only.
