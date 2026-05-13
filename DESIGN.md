# Design

## Theme

**Light with dark accent surfaces.**

Scene: A shop owner checking their phone after closing time, or a restaurant manager browsing on a tablet between shifts. These are working people in well-lit commercial spaces — offices, shops, restaurants. Light mode reads as clean, professional, and approachable in these environments. Dark surfaces are used sparingly for emphasis (the hero, the CTA) to create contrast without intimidation.

## Color Palette

OKLCH throughout.

| Token | Value | Usage |
|-------|-------|-------|
| --bg | oklch(0.97 0.005 75) | Page background, warm ivory |
| --surface | oklch(0.94 0.008 75) | Card and section backgrounds |
| --surface-raised | oklch(1 0 0) | Elevated elements, white |
| --text | oklch(0.15 0.012 70) | Body text, warm charcoal |
| --text-muted | oklch(0.55 0.018 70) | Secondary text |
| --accent | oklch(0.55 0.18 50) | Primary accent, warm rust-amber |
| --accent-strong | oklch(0.45 0.2 48) | Hover and active states |
| --accent-muted | oklch(0.75 0.08 50) | Subtle accent backgrounds |
| --teal | oklch(0.45 0.06 190) | Secondary/"secure" color |
| --teal-muted | oklch(0.88 0.02 190) | Teal tint for backgrounds |
| --border | oklch(0.88 0.008 75) | Subtle borders |

Color strategy: **Committed** — the warm rust-amber carries roughly 15-25% of surface area (CTAs, accent elements, decorative marks). This avoids the generic "IT blue" while still feeling professional.

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display headings | Sora | 700 | clamp(2.5rem, 5vw, 4.5rem) |
| Section headings | Sora | 600 | clamp(1.75rem, 3vw, 2.5rem) |
| Subheadings | Sora | 500 | clamp(1.1rem, 1.5vw, 1.25rem) |
| Body | Onest | 400 | clamp(1rem, 1.2vw, 1.125rem) |
| Labels/CTAs | Onest | 600 | 0.875rem, uppercase, 0.05em tracking |
| Small | Onest | 400 | 0.875rem |

Sora (headings): Geometric warmth, distinctive而又 approachable. The rounded terminals soften the technical subject matter. Google Fonts variable axis: wght 300-800.

Onest (body): Clean, highly readable at small sizes. Slightly condensed geometry saves horizontal space — important for bilingual layouts where French text runs longer.

Line-height: body 1.6, headings 1.15. Measure: 65-70ch max.

## Components

### Navigation
- Sticky top nav, transparent on hero, surface-colored on scroll
- Logo left, nav links center, language toggle and CTA right
- Mobile: hamburger with slide-in panel
- Language toggle shows FR/EN as active state, with clear current-lang indicator

### Hero
- Full-viewport dark section (surface-raised on dark bg)
- Left-aligned headline + supporting text + dual CTAs (primary "Get a consultation", secondary "View services")
- Subtle decorative element: abstract stitch/thread motif
- Background: deep warm charcoal with subtle radial gradient

### Service Cards
- Four-column grid on desktop, two on tablet, single on mobile
- Icon + heading + short description
- Subtle border, generous padding, hover lift (translateY -4px, shadow deepen)
- Icons: simple line-art style (not the template-y big rounded icons)

### Section Rhythm
- Padding: clamp(4rem, 8vw, 8rem) top and bottom
- Alternating background: page-bg → surface → page-bg
- Section headings centered, body left-aligned within grid

### Language Toggle
- Pill-shaped toggle: [ EN | FR ]
- Active state filled with accent color
- Smooth slide transition between languages

### CTA Section
- Dark background matching hero depth
- Centered headline + supporting text + primary CTA button
- Subtle decorative accent element

### Footer
- Three-column: logo+tagline, services quick links, contact
- Contact includes phone and email placeholders
- Dark background, lighter than hero

## Motion

- Page load: staggered fade-up for hero elements (trigger instantly)
- Scroll-triggered: service cards fade-up as they enter viewport
- Language toggle: content fades out, slides, fades in (250ms)
- Nav background: 200ms ease transition on scroll
- Respect prefers-reduced-motion: no animations if set

## Spacing

Scale: 4/8/12/16/20/24/32/40/48/64/80/96/128
Section gap: 80-128px
Card gap: 24-32px
Content max-width: 1200px (75rem)
