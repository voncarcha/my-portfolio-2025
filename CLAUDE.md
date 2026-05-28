# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for a front-end developer, built with TypeScript, React, and TailwindCSS. It's a single-page application with sections for about, CV/experience, selected works, and contact.

## Development Commands

```bash
# Development server (runs on port 4042)
npm run dev

# Production build
npm run build

# Start production server (runs on port 8024)
npm start

# Lint
npm run lint
```

Note: The dev server runs on **port 4042** (not the default 3000), and production runs on **port 8024**.

## Architecture

### Component Structure

The application follows a section-based architecture where `src/app/page.tsx` imports and renders sequential sections:

- `HeaderSection` - Hero/landing section
- `AboutSection` - About information
- `CvSection` - Career experience timeline
- `WorksSection` - Portfolio projects carousel
- `ContactSection` - Contact form
- `FooterSection` - Footer

Each section is a self-contained component in `src/components/home/[SectionName]/`.

### Key Patterns

**Component Organization:**
- Each section has its own directory with `index.tsx` and `constants.ts`
- Shared/reusable components live in `src/components/global/`
- Section-specific components use their own `constants.ts` for data

**Data Management:**
- Portfolio projects are defined in `src/components/home/WorksSection/constants.ts` as the `PROJECTS` array
- CV/experience items are in `src/components/home/CvSection/constants.ts` as the `ITEMS` array
- Global UI state (contact modal, nav state, etc.) is managed via Zustand in `src/hooks/useGlobalStore.tsx`

**Forms:**
- Contact form uses `react-hook-form` with Zod validation
- Form schema is defined in `src/types` as `ContactFormSchema`
- Email sending is handled by a server action in `src/actions/sendEmail.tsx` using Resend API

### Styling

**Tailwind Configuration:**
- Custom color palette with `primary` (#6D18EF) and `secondary` (#186EF2) as brand colors
- Custom gradient utilities: `gradient-app`, `gradient-app-hover`, `gradient-app-vertical`, `gradient-app-diagonal`
- App-specific gray scale: `app-100` through `app-500`
- Custom breakpoint: `3xl` at 2000px
- Font variables: `font-poppins` (body) and `font-dm-serif-text` (headings)

**Fonts:**
- Google Fonts loaded via `next/font` in `layout.tsx`
- Poppins (400, 500, 600, 700) for body text
- DM Serif Text (400) for headings

### Adding New Projects

When adding projects to the portfolio:

1. Add the project background image to `/public/images/` with naming convention `bg-[project-name].png`
2. Update `src/components/home/WorksSection/constants.ts` by adding a new entry to the `PROJECTS` array:
   ```typescript
   {
     name: 'Project Name',
     image: '/images/bg-project-name.png',
     services: ['Web Development', 'UI/UX Design'], // or just ['Web Development']
     link: 'https://project-url.com/',
   }
   ```
3. Projects appear in the carousel in the order they're defined in the array

### Environment Variables

Required environment variable:
- `RESEND_API_KEY` - API key for Resend email service (used in contact form)

The contact form sends emails to `voncarcha@gmail.com` (configured in `src/actions/sendEmail.tsx`).

### State Management

Global state via Zustand (`useGlobalStore`):
- `isContactOpen` - Controls contact modal visibility
- `isContactSuccess` - Tracks successful form submission
- `isNavOpen` - Mobile navigation state
- `isVideoLoaded` - Video loading state

### Third-Party Integrations

- **Vercel Analytics** - Integrated in `layout.tsx`
- **Resend** - Email service for contact form
- **react-slick** - Carousel for projects section (custom styles in `src/styles/slick.css` and `slick-theme.css`)

## File Locations

- Public assets: `/public/images/` (project backgrounds, logos, icons)
- Global styles: `/src/styles/index.css` (includes Tailwind imports)
- Server actions: `/src/actions/`
- Type definitions: `/src/types/`
- Custom hooks: `/src/hooks/`
