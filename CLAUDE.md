# CLAUDE.md — L.L Israel Security

## Client
- Name: Liran Louzon
- Business: L.L Israel Security
- Email: liranlouzon@gmail.com
- Phone: 054-3038542 / 052-3954958
- WhatsApp: +972543038542
- Business line: 04-3172139
- Years active: 3

## Project
Single-page landing site — no routing, no CMS, no backend.
Stack: Vanilla HTML + CSS (custom properties) + vanilla JS. No frameworks.
Deploy target: Vercel.

## Language
English (default/LTR) + Hebrew (RTL). Language switcher in nav persists to localStorage.
`dir` and `lang` attributes on `<html>` are set dynamically by `setLang()` in app.js.
Arabic and Russian to be added in a future phase.

## Key Placeholders (client to fill before launch)
- Stats bar: `[NUMBER]+ VIP Clients` and `[NUMBER]+ Operations` — Liran to supply real numbers
- Testimonials: 3 scaffolded cards — Liran to supply real testimonials with names and roles
- Hero imagery: Generated via Higgsfield CLI — confirm with Liran before launch

## Sections (in order)
1. Header/Nav — fixed glass-morphism, EN/HE switcher, WhatsApp button
2. Hero — dark, 100svh, headline + subtext + 2 CTAs + trust badges
3. Stats bar — curved arch divider, 4 stats with animated counters
4. Services — 6 cards in 2-col grid, spotlight hover
5. About — company story + credential badges
6. How It Works — 3-step process with connector line animation
7. Target Audience — 3 audience cards, spotlight hover
8. Testimonials — 3 scaffolded cards (placeholders)
9. FAQ — 5-question accordion
10. CTA / Contact — form + WhatsApp button
11. Footer — contact info, nav links, copyright

## Design Tokens
- Background: #0D0F14
- Surface (cards): #131620
- Accent (decorative): #C9A84C (gold)
- Accent (text): #D4B86A (gold — 10.7:1 contrast ratio on bg)
- Text primary: #F0F0F0
- Text mid: #9BA3B8

## Commands
```bash
python3 -m http.server 8000 --directory ~/Desktop/Clients/Liran\ Louzon
```
Open: http://localhost:8000

## Pre-Launch Checklist
- [ ] Replace [NUMBER] placeholders in stats bar with real metrics from Liran
- [ ] Replace testimonial placeholders with real client quotes
- [ ] Confirm hero imagery with Liran
- [ ] Test EN/HE language switch — verify dir="rtl" flips correctly
- [ ] Test on 375px, 768px, 1440px
- [ ] Verify WhatsApp link (+972543038542) opens correctly
- [ ] Run site-audit skill before delivery
