# V2 Portfolio — Design Document

## Overview

High-end editorial portfolio inspired by Awwwards-style designer portfolios. Dark theme, luxury aesthetic, fashion-magazine layouts, oversized typography, and intentional motion.

**Route:** `/v2`
**Stack:** Next.js 14 App Router, React, Tailwind CSS, GSAP

---

## Design Language

- Minimal, luxury, editorial aesthetic
- Dark theme with near-black background and soft off-white typography
- Heavy use of whitespace and oversized typography
- Fashion-magazine inspired layouts
- Confident, calm, premium tone — no flashy colors

---

## Color Palette

| Token              | Hex       | Usage                              |
| ------------------ | --------- | ---------------------------------- |
| `--v2-bg`          | `#0a0a0a` | Page background                    |
| `--v2-bg-elevated` | `#111111` | Elevated surfaces                  |
| `--v2-bg-subtle`   | `#161616` | Subtle background differentiation  |
| `--v2-text`        | `#e8e4df` | Primary text (warm off-white)      |
| `--v2-text-muted`  | `#8a857e` | Secondary text, body copy          |
| `--v2-text-dim`    | `#4a4843` | Labels, tertiary text              |
| `--v2-accent`      | `#c9b99a` | Warm gold accent for emphasis      |
| `--v2-border`      | `#1e1e1e` | Dividers, horizontal rules         |
| `--v2-border-light`| `#2a2a2a` | Lighter borders, separators        |

**Selection color:** Accent gold background with dark text.

---

## Typography

### Fonts

| Font               | Variable            | Role        | Weights Used   |
| ------------------ | ------------------- | ----------- | -------------- |
| Cormorant Garamond | `--font-cormorant`  | Headlines   | 300, 400, 500, 600, 700 |
| Inter              | `--font-inter`      | Body / Meta | 300, 400, 500 |

Loaded via `next/font/google` with `display: 'swap'` in `src/app/v2/layout.tsx`.

### Typography Scale

| Element             | Font    | Size                          | Weight | Line Height | Letter Spacing |
| ------------------- | ------- | ----------------------------- | ------ | ----------- | -------------- |
| Hero headline       | Serif   | `clamp(48px, 9vw, 160px)`    | 300    | 0.92        | -0.03em        |
| Section headline    | Serif   | `clamp(36px, 5vw, 80px)`     | 300    | 1.0         | -0.02em        |
| Contact headline    | Serif   | `clamp(40px, 7vw, 120px)`    | 300    | 0.95        | -0.03em        |
| About statement     | Serif   | `clamp(28px, 3.5vw, 52px)`   | 300    | 1.15        | -0.01em        |
| Project title       | Serif   | `clamp(22px, 2.5vw, 36px)`   | 400    | 1.1         | —              |
| Marquee text        | Serif   | `clamp(24px, 3.5vw, 56px)`   | 300    | —           | -0.01em        |
| Nav wordmark        | Serif   | `clamp(20px, 2vw, 26px)`     | 300    | —           | 0.02em         |
| Body text           | Sans    | `clamp(14px, 1.1vw, 16px)`   | 300    | 1.7         | —              |
| List items          | Sans    | `clamp(13px, 1vw, 15px)`     | 300    | —           | —              |
| Nav links / labels  | Sans    | `11px`                        | 400    | —           | 0.18em         |
| Meta / category     | Sans    | `11px`                        | 400    | —           | 0.14em         |

All nav links and labels use `text-transform: uppercase`.

---

## Layout

- **Max width:** 1440px, centered
- **Side padding:** `clamp(24px, 5vw, 80px)`
- **Grid:** 12-column via `.v2-grid` class with `gap: clamp(16px, 2vw, 32px)`
- **Vertical spacing:** Sections use `clamp(80px, 12vw, 200px)` padding — each feels like a standalone page
- **Asymmetric layout:** About section uses columns 1-3 for label, columns 5-12 for content

### Responsive Breakpoints

| Breakpoint | Behavior |
| ---------- | -------- |
| Desktop    | 2-column project grid, 12-column about grid |
| < 1024px   | Single-column projects (`max-lg:grid-cols-1`) |
| < 768px    | Single-column capabilities/experience (`max-md:grid-cols-1`) |

---

## Sections

### Navigation (`Navigation.tsx`)
- Fixed position, z-50
- Serif wordmark left, uppercase sans nav links right (Work, About, Contact)
- Scroll-triggered backdrop blur at 100px scroll
- Links have underline-on-hover via `::after` pseudo-element

### Hero (`HeroSection.tsx`)
- Full viewport height, content aligned to bottom
- 4-line headline with intentional line breaks:
  - "Designing" — primary text
  - "with intent," — muted text
  - "building" — primary text
  - "with craft" — accent gold
- Horizontal rule below headline (animates from left via scaleX)
- Meta line: role + location in uppercase sans

### Marquee (`MarqueeSection.tsx`)
- Scroll-linked horizontal movement (GSAP ScrollTrigger scrub)
- Capabilities listed in serif with alternating normal/italic styles
- Dot separators between items
- Bordered top and bottom

### Work (`WorkSection.tsx`)
- "Selected Work" label + "Recent projects" headline
- 2-column grid with varying aspect ratios (16/11 and 16/10)
- Cards show project image with:
  - Hover: 1.04x scale on image, gradient overlay from bottom, meta slide-up
  - Parallax: images shift -30px to +30px on scroll
- 6 featured projects from the existing portfolio

### About (`AboutSection.tsx`)
- 12-column asymmetric layout
- Left column (1-3): "About" label
- Right column (5-12):
  - Large serif statement
  - Sans body paragraph (max-width 560px)
  - 2-column sub-grid: Capabilities list + Experience list
  - Items styled with bottom borders

### Contact (`ContactSection.tsx`)
- Centered large serif headline with word-staggered animation
- "create" in accent gold, "together" in italic
- Email link with border-bottom hover effect

### Footer (`FooterSection.tsx`)
- Copyright left, social links right (LinkedIn, GitHub, Dribbble)
- Uppercase sans-serif, dim color with hover brightening

---

## Motion & Animation

### Library
GSAP with ScrollTrigger plugin. All animations use `power4.out` easing for a slow, luxury feel.

### Easing Curves (CSS)
```css
--v2-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--v2-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

### Animation Inventory

| Element                | Type              | Duration | Easing       | Trigger              |
| ---------------------- | ----------------- | -------- | ------------ | -------------------- |
| Hero headline lines    | Fade + Y(80) + skewY(3) | 1.4s | power4.out | Page load (delay 0.3s), stagger 0.12s |
| Hero horizontal rule   | ScaleX from left  | 1.2s     | power4.out   | Sequenced after headline |
| Hero meta text         | Fade + Y(20)      | 1.0s     | power4.out   | Sequenced after rule |
| Navigation             | Fade + Y(-20)     | 1.2s     | power4.out   | Page load (delay 0.8s) |
| Section headings       | Fade + Y(60)      | 1.2s     | power4.out   | Scroll (top 85%), once |
| Project cards          | Fade + Y(80)      | 1.4s     | power4.out   | Scroll (top 88%), once |
| Project images         | Parallax Y(-30 to 30) | scrub | linear      | Scroll (scrub 1.5) |
| Project card hover     | Scale 1.04, overlay fade, meta slide | 0.6-1.2s | CSS ease-out | Hover |
| About blocks           | Fade + Y(50)      | 1.2s     | power4.out   | Scroll (top 85%), once |
| Contact words          | Fade + Y(60)      | 1.2s     | power4.out   | Scroll (top 80%), stagger 0.08s |
| Marquee                | xPercent(-50)     | scrub    | linear       | Scroll (scrub 1) |
| Nav backdrop blur      | Background opacity | 0.7s    | CSS ease-out | Scroll > 100px |
| Nav link underline     | Width 0 to 100%   | 0.6s     | CSS ease-out | Hover |

### Custom Cursor (`CustomCursor.tsx`)
- 16px circle, mix-blend-mode: difference
- Follows mouse with GSAP (duration 0.5s, power4.out)
- Expands to 64px on interactive elements (a, button, .v2-project-card)
- Desktop only (pointer: fine media query)

---

## Visual Effects

### Noise Overlay
SVG-based fractal noise texture applied as `::before` pseudo-element on `<main>`. Fixed position, covers viewport, `opacity: 0.025`, `pointer-events: none`, `z-index: 9998`.

### Text Selection
Accent gold (`#c9b99a`) background with dark (`#0a0a0a`) text.

### Font Smoothing
Antialiased on both WebKit and Firefox for crisp serif rendering on dark backgrounds.

---

## File Structure

```
src/
├── app/v2/
│   ├── layout.tsx          # V2 layout, font loading, metadata
│   ├── page.tsx            # Page composition (client component)
│   ├── v2.css              # Design system, CSS variables, utility classes
│   └── DESIGN.md           # This document
│
└── components/v2/
    ├── CustomCursor.tsx     # Mix-blend-mode cursor with GSAP tracking
    ├── Navigation.tsx       # Fixed nav with scroll-triggered blur
    ├── HeroSection.tsx      # Full-viewport hero with staggered type reveal
    ├── MarqueeSection.tsx   # Scroll-linked horizontal text marquee
    ├── WorkSection.tsx      # Project grid with parallax + hover effects
    ├── AboutSection.tsx     # Asymmetric 12-col layout with lists
    ├── ContactSection.tsx   # CTA section with word-stagger animation
    └── FooterSection.tsx    # Minimal footer with social links
```

---

## Dependencies

| Package | Version | Purpose |
| ------- | ------- | ------- |
| `gsap`  | ^3.x    | Scroll animations, parallax, reveals, cursor tracking |

All other dependencies (Next.js, React, Tailwind) are shared with the main site.

---

## CSS Class Reference

| Class                  | Purpose                                          |
| ---------------------- | ------------------------------------------------ |
| `.v2-root`             | Root container, sets CSS variables and base styles |
| `.v2-noise`            | Adds fixed noise texture overlay via `::before`  |
| `.v2-grid`             | 12-column CSS grid                               |
| `.v2-hr`               | 1px horizontal rule using border color           |
| `.v2-reveal`           | Base state for scroll-reveal elements            |
| `.v2-reveal.is-visible`| Revealed state                                   |
| `.v2-cursor`           | Custom cursor base                               |
| `.v2-cursor.is-hovering`| Expanded cursor state                           |
| `.v2-project-card`     | Project card with hover states                   |
| `.v2-project-image`    | Image inside project card (hover scale)          |
| `.v2-project-overlay`  | Gradient overlay (hover fade-in)                 |
| `.v2-project-meta`     | Title/category (hover slide-up)                  |
| `.v2-nav-link`         | Link with underline-on-hover pseudo-element      |
| `.v2-parallax-container`| Overflow hidden wrapper for parallax images     |

---

## Design Principles

1. **Typography-first hierarchy** — Size, weight, and color do all the work. No decorative elements needed.
2. **Fluid scaling** — All type and spacing uses `clamp()` for seamless responsiveness.
3. **Slow, intentional motion** — Animations are 1.0-1.4s with power4.out. Never bouncy or playful.
4. **Generous negative space** — Sections breathe with large vertical padding.
5. **Warm neutrals** — Off-whites and warm grays over pure white/gray for editorial warmth.
6. **Restraint** — Every element earns its place. If it doesn't serve hierarchy or rhythm, it's removed.
