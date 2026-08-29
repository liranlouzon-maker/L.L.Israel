# L.L Israel Security — Handoff Document
**Client:** Liran Louzon
**Project:** L.L Israel Security — Landing Site
**Date:** 2026-05-12
**Stack:** Vanilla HTML + CSS (custom properties) + vanilla JS. No build system, no framework.
**Live URL:** https://ll-israel-security.vercel.app
**Repo:** https://github.com/Seanarium/L.L.Israel

---

## Goal

Deliver a production-ready bilingual landing site for L.L Israel Security that generates leads via WhatsApp and email. The site needs to communicate trust, professionalism, and premium positioning to an international audience (tourists, corporates, VIPs) visiting Israel.

Immediate goal: implement Liran's pending design + text feedback, then run a full SEO/AEO pass before launch.

---

## What This Site Is

A single-page bilingual landing site (English/Hebrew, LTR/RTL) for L.L Israel Security — a VIP security, concierge, and transportation service based in Israel. The site has no backend, no CMS, no database. All interactivity is vanilla JS.

---

## Files

| File | Status | Role |
|------|--------|------|
| `index.html` | **Actively edited** | All sections — the only HTML file |
| `css/style.css` | **Actively edited** | All CSS — design tokens, layout, animations, RTL overrides, responsive |
| `js/app.js` | **Actively edited** | All JS — carousel, panels, language switcher, counters, FAQ, contact form, accessibility |
| `images/` | Reference | Hero background, about section background, logos |
| `privacy.html` | Stable | Privacy policy (Hebrew) |
| `tos.html` | Stable | Terms of service (Hebrew) |
| `vercel.json` | Stable | Vercel deploy config + security headers |
| `CLAUDE.md` | Reference | Project context for Claude Code sessions |

---

## Design System

| Token | Value | Use |
|-------|-------|-----|
| `--color-bg` | `#F5F3EE` | Page background (warm off-white) |
| `--color-surface` | `#EDEAE3` | Card backgrounds |
| `--color-border` | `rgba(0,0,0,0.08)` | Borders |
| `--color-accent` | `#C9A84C` | Decorative — borders, glows (not text) |
| `--color-accent-text` | `#8B6914` | Text/icons — WCAG AA on light bg |
| `--color-text` | `#1A1A1A` | Body text |
| `--color-text-mid` | `#5C5C5C` | Secondary text |

---

## Sections (in order)

1. **Header/Nav** — fixed, glass-morphism on scroll, EN/HE switcher, WhatsApp button
2. **Hero** — full-height, headline + subtext + 2 CTAs + trust badges, background image
3. **Stats bar** — curved arch divider, 4 animated counters
4. **Services** — 6 cards in 2-col grid, spotlight hover effect
5. **About** — full-section background photo (`images/about-professional.jpg`), gradient overlay, credential badges
6. **How It Works** — 3-step process with animated connector line
7. **Who We Serve** — 3 expanding panels (click to expand), vertical labels when collapsed, gold top border on active
8. **Testimonials** — auto-advancing carousel (4s), progress bar indicators, left/right arrows, decorative quote mark
9. **FAQ** — 5-question accordion, single-open
10. **CTA / Contact** — form (opens mailto) + WhatsApp button
11. **Footer** — contact info, nav links, copyright, links to privacy/ToS

---

## Key Interactions

### Language Switcher
- `setLang(lang)` in `app.js` sets `dir` + `lang` on `<html>`, updates all `data-i18n` elements, and persists to `localStorage`.
- All translation strings live in the `TRANSLATIONS` object at the top of `app.js`.
- RTL-specific CSS overrides use `[dir="rtl"]` selectors throughout `style.css`.

### Testimonials Carousel
- `initTestimonialsCarousel()` — 3 cards, auto-advances every 4s.
- Progress bars (`.tc-bar`) use a CSS `::after` pseudo-element with `scaleX(0→1)` over 4s.
- `void bar.offsetWidth` reflow trick is required to restart the CSS animation when switching cards.
- RTL: bar fills right-to-left (`transform-origin: right`), arrows swap direction.

### Who We Serve Panels
- `initAudiencePanels()` — click any panel to expand it (`flex: 1 1 auto`), others collapse to `72px`.
- Transition: `flex 0.5s cubic-bezier(0.4,0,0.2,1)`.
- Mobile (≤768px): stacks vertically as an accordion.

### Contact Form
- Client-side only — `e.preventDefault()`, builds a `mailto:` URL and opens the user's email client.
- No data is sent to any server. No rate limiting needed.

---

## Images

| File | Source | Notes |
|------|--------|-------|
| `images/hero-bg.jpg` | Higgsfield `cinematic_studio_2_5` | Professional in navy suit, hotel lobby. Confirm with Liran before launch. |
| `images/about-professional.jpg` | Higgsfield `cinematic_studio_2_5` | Professional in Jaffa/sea backdrop. Used as full-section background with gradient overlay. |
| `images/logo.png` | Client-supplied | Nav logo |
| `images/logo-footer.png` | Client-supplied | Footer logo |

---

## Current State

- Site is live at https://ll-israel-security.vercel.app and deployed on Vercel.
- All 11 sections built and functional in both EN and HE.
- Code is on GitHub (`main` branch) at `Seanarium/L.L.Israel`.
- **Who We Serve** panels: 3 expanding panels, `height: 280px` fixed container, content vertically centered. Mobile stacks as accordion.
- **Testimonials**: progress bar indicators (3px `::after` fill animation), left/right arrows, 4s auto-advance. RTL-aware.
- **About section**: full-section `background-image` with `linear-gradient` overlay for text readability. RTL gradient direction flips correctly.
- **Phone numbers**: wrapped in `dir="ltr"` spans to prevent RTL reversal of numeric strings.
- **Contact form**: client-side only — builds a `mailto:` URL, no server involved.
- **Color scheme**: light theme (`#F5F3EE` background). CLAUDE.md still shows old dark theme tokens — trust the CSS file, not CLAUDE.md.
- **Placeholders still in code**: stats bar numbers (`[NUMBER]+`) and all 3 testimonial cards.

---

## Pending — Waiting on Liran

- [ ] **Stats bar numbers** — `[NUMBER]+ VIP Clients` and `[NUMBER]+ Operations` are placeholders. Liran to supply real figures.
- [ ] **Testimonials** — all 3 cards have placeholder text. Liran to supply real quotes, names, and roles.
- [ ] **Hero image confirmation** — confirm the Higgsfield-generated image is approved before launch.
- [ ] **Design + text fixes** — Liran has feedback in progress (received 2026-05-12). Implement before SEO work.

---

## What Changed This Session (2026-05-12)

- **Who We Serve panels sizing fix** — removed `min-height: 360px`, added `height: 280px` fixed container, made `.audience-panel` a flex column, added `flex: 1` to `.panel-expanded` so content fills and centers. Mobile override resets to `height: auto`.
- **GitHub repo connected** — initialized git in the project folder, linked to `Seanarium/L.L.Israel`, pushed all files.
- **`.gitignore` updated** — added `.env`, `.env.*`, `*.env` patterns.
- **HANDOFF.md created** — this file.

---

## What Failed / Dead Ends

### Who We Serve — panel height
- **Tried `min-height: 360px` removal alone** — panels collapsed to near-zero because the active panel's height was no longer constrained. Content just floated at the top with massive empty space below.
- **Tried `justify-content: center` on `.panel-expanded` without setting a height on the container** — centering had nothing to work against; content still sat at the top because the panel had no defined height to center within.
- **Browser cache served stale CSS** — after editing `height: 280px` into the file, Playwright screenshots still showed the old `min-height: 360px` (570px computed height). Fix: `location.reload(true)` hard-refresh in the browser. Confirmed via `getComputedStyle` before trusting screenshots.

### About section image
- **First attempt placed the image as a small card** (`<img>` element inside the grid layout). User wanted it as a full-section background — had to switch to `background-image` on the `#about` element with a semi-transparent `linear-gradient` overlay.

### Testimonials — multi-card bug
- Initial carousel CSS was missing `flex-shrink: 0` and `flex-wrap: nowrap` on `.tc-track`. This caused multiple cards to show side-by-side on desktop instead of one at a time.

### Higgsfield image generation
- First generation attempt (`higgsfield generate create cinematic_studio_2_5`) returned `not_enough_credits`. User had to add credits at higgsfield.ai before the image could be generated.

### CSS animation restart for progress bars
- CSS `transition` doesn't re-fire when a class is removed and immediately re-added in the same JS tick. Removing `.active`, then calling `bar.classList.add('active')` in the next line did nothing. Fix: `void bar.offsetWidth` between the two operations forces a browser reflow and restarts the animation.

---

## Next Steps (in order)

1. Receive and implement Liran's design + text fixes.
2. Run SEO/AEO pass — page title, meta description, Open Graph tags, JSON-LD structured data.
3. Replace all placeholder content with real data from Liran.
4. Run pre-launch checklist (see CLAUDE.md).
5. Final deploy + confirm on mobile (375px, 768px, 1440px).

---

## Commands

```bash
# Local dev server
python3 -m http.server 8000 --directory ~/Desktop/Clients/Liran\ Louzon
# Open: http://localhost:8000

# Deploy to production
cd ~/Desktop/Clients/Liran\ Louzon && vercel --prod

# Push changes to GitHub
cd ~/Desktop/Clients/Liran\ Louzon && git add -p && git commit -m "..." && git push
```
