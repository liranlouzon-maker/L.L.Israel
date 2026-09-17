# LLISR Website

## Business and contact

- Brand: LLISR
- Owner: Liran Louzon
- Email: liranlouzon@gmail.com
- Primary phone and WhatsApp: +972-52-395-4958

## Project

Bilingual English/Hebrew single-page website built with vanilla HTML, CSS, and JavaScript. There is no build system or CMS. The site is deployed from the `main` branch through GitHub Pages.

- Live URL: https://llisr.com
- Repository: https://github.com/liranlouzon-maker/L.L.Israel
- Custom domain: `llisr.com` in `CNAME`
- English is the default language; the language preference is stored in `localStorage`.
- Contact inquiries are posted to Google Apps Script and stored in a private Google Sheet. A mailto fallback uses `liranlouzon@gmail.com`.
- The site currently uses no analytics or marketing cookies.

## Source files

- `index.html`: page content, metadata, accessibility statement, and contact form
- `css/style.css`: layout, responsive design, RTL rules, and accessibility styles
- `js/app.js`: translations, interactions, accessibility controls, and form submission
- `privacy.html`: bilingual privacy policy
- `tos.html`: bilingual terms of service
- `images/logo-llisr.svg`: current LLISR logo

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Launch checks

- Test English and Hebrew layouts on mobile and desktop.
- Submit a real contact-form test and confirm the row appears in Google Sheets.
- Confirm all phone and WhatsApp actions use +972-52-395-4958.
- Keep canonical, sitemap, and structured-data URLs on `https://llisr.com`.
- Keep the old domain redirected permanently to `https://llisr.com`.
- Keep GitHub Pages “Enforce HTTPS” enabled.
