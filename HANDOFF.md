# LLISR Website — Handoff

**Owner:** Liran Louzon

**Live URL:** https://llisr.com

**Repository:** https://github.com/liranlouzon-maker/L.L.Israel
**Deployment:** GitHub Pages from `main`

## Current architecture

The site is a static bilingual English/Hebrew website using vanilla HTML, CSS, and JavaScript. The homepage is `index.html`; legal pages are `privacy.html` and `tos.html`. Language and accessibility preferences are stored locally in the visitor's browser.

The contact form posts to a Google Apps Script endpoint, which stores inquiries in a private Google Sheet. If the request cannot be sent, the site opens a prefilled email addressed to `liranlouzon@gmail.com`.

## Brand and contact standards

- Use the brand name **LLISR** everywhere.
- Use `images/logo-llisr.svg` for the current visual identity.
- Primary phone and WhatsApp: **+972-52-395-4958**.
- Contact email: **liranlouzon@gmail.com**.
- Do not publish a private residential address.

## Domain and search configuration

- `CNAME`, canonical URLs, structured data, `robots.txt`, and `sitemap.xml` use `llisr.com`.
- `www.llisr.com` should redirect to `https://llisr.com`.
- The former domain `llisrconsulting.com` should return a permanent redirect to `https://llisr.com`, not a 404.
- GitHub Pages “Enforce HTTPS” must remain enabled; this setting is managed outside the repository.

## Privacy and tracking

The current site uses essential browser storage for language and accessibility preferences. It does not currently load analytics or marketing tracking. If analytics is added later, update the privacy policy and implement consent before loading any non-essential tracker.

## Pre-launch verification

1. Confirm the deployed commit matches `main`.
2. Test a real form submission and verify receipt in Google Sheets.
3. Test all phone, WhatsApp, Telegram, SMS, and email actions.
4. Test English and Hebrew at mobile and desktop widths.
5. Verify HTTPS enforcement and the old-domain redirect.
6. Re-run internal-link, HTML, JavaScript, accessibility, and metadata checks.
