# Astrolads Website

Productie-website voor Astrolads B.V. — communicatiebureau & productiehuis in Den Haag. Statische site gebouwd met Astro, tweetalig (NL/EN), deployed op Netlify.

**Live**: [astrolads-website.netlify.app](https://astrolads-website.netlify.app) (binnenkort: [astrolads.com](https://astrolads.com))
**Repo**: [github.com/Astrolads-NL/astrolads-website](https://github.com/Astrolads-NL/astrolads-website) (public)

---

## 🚀 Quickstart

```bash
npm install        # Install dependencies
npm run dev        # Dev server op poort 4321
npm run build      # Production build
npm run preview    # Preview production build
```

**Folder**: `/Users/daveverwey/Documents/Website Projects/astrolads/`
**Node**: 24.15.0

---

## 📊 Performance

**Lighthouse productie scores** (gemeten 25 mei 2026):

| Metric | Score |
|---|---|
| Performance | **100** |
| Accessibility | 96 |
| Best Practices | **100** |
| SEO | **100** |

**Core Web Vitals**: FCP 0.8s, LCP 1.9s, TBT 30ms, CLS 0
**Build**: 87 pagina's in ~2.2s

---

## 🏗️ Tech Stack

- **Framework**: Astro v4 (static site generation)
- **Styling**: Vanilla CSS met CSS variables
- **Beelden**: WebP voor content, JPG voor OG, PNG/SVG voor favicons
- **Deployment**: Netlify (Free tier, public repo)
- **Versioning**: Git via GitHub

---

## 📁 Folder structuur

```
astrolads/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Homepage NL
│   │   ├── over-ons.astro, contact.astro, community.astro
│   │   ├── veelgestelde-vragen.astro
│   │   ├── diensten/                # 11 dienstpagina's NL
│   │   ├── cases/[slug].astro       # 6 cases (NL)
│   │   ├── team/[slug].astro        # 15 mensen (NL)
│   │   ├── community/               # Community sub-pages
│   │   └── en/                      # Engelse mirror
│   │       ├── services/, cases/, team/, community/
│   ├── layouts/
│   │   ├── Layout.astro             # NL standard (wit thema)
│   │   ├── LayoutEN.astro
│   │   ├── LayoutNight.astro        # NL community (donker)
│   │   └── LayoutNightEN.astro
│   ├── components/
│   │   ├── Nav.astro + 3 varianten
│   │   ├── Footer.astro + 3 varianten
│   │   ├── Breadcrumb.astro, CookieBanner.astro
│   │   └── CasesSlider.astro
│   └── styles/global.css
├── public/
│   ├── images/
│   │   ├── cases/, team/, diensten/    # WebP content
│   │   └── og/                          # 33 OG-images (1200x630 JPG)
│   │       ├── cases/ (6)
│   │       ├── team/ (15)
│   │       └── diensten/ (12)
│   ├── robots.txt, llms.txt, site.webmanifest
│   └── favicons + logo
├── astro.config.mjs
├── netlify.toml
└── .gitignore
```

---

## 🎨 Design system

### CSS Variables (`global.css`)

```css
--orange: #F4622A         /* primary brand */
--orange-dark: #D84F1A    /* hover */
--navy: #1A2744           /* dark backgrounds */
--bg: #EDEDED             /* page background */
--white: #FFFFFF
--text: #1A1A1A
--muted: #6B6B6B
--radius: 16px
--font: 'Inter', system-ui, sans-serif
```

### Night thema (community)
```css
--night-bg: #0a0e1a
--night-surface: #1a2238
--night-border: rgba(255,255,255,.1)
--night-text: #ffffff
--night-muted: rgba(255,255,255,.6)
```

### Style guide
- Informele NL tone of voice ("je" niet "u")
- Geen em-dashes (—), wel ellipsis (…)
- Mobile-first niet, wel volledig `@media (max-width: 768px)` block per component

---

## 🌍 Routing

### Structuur
- NL = root paths
- EN = `/en/...` prefix

### Slug-mapping NL → EN (in `Layout.astro`)
```javascript
const nlToEn = {
  '/': '/en',
  '/over-ons': '/en/about',
  '/contact': '/en/contact',
  '/diensten': '/en/services',
  '/cases': '/en/cases',
  '/community': '/en/community',
  '/veelgestelde-vragen': '/en/faq',
};

const dienstenSlugMap = {
  'vormgeving': 'graphic-design',
  'communicatiestrategie': 'communication-strategy',
  'onderwijsinnovatie': 'education-innovation',
  'ai-implementatie': 'ai-implementation',
  'fotografie': 'photography',
};
// Andere diensten hebben zelfde slug NL/EN
```

Cases & team slugs zijn taal-onafhankelijk.

---

## 🔍 SEO

### Schema.org JSON-LD
- `Organization` + `LocalBusiness` (combined, @id #organization) in alle layouts
- `WebSite` schema voor sitelinks searchbox
- Cases: `Article` schema per case
- Team: `Person` schema per persoon
- Diensten: `Service` schema per pagina
- FAQ: `FAQPage` schema

### Open Graph & Twitter Cards
Per-pagina OG-images (1200×630 JPG):
- Cases: `/images/og/cases/{slug}.jpg`
- Team: `/images/og/team/{slug}.jpg`
- Diensten: `/images/og/diensten/{slug}.jpg`
- Anders: `/images/og-default.jpg`

### Crawling
- `robots.txt` met 16 AI-bot configs (GPTBot, Claude-Web, etc.)
- `llms.txt` voor LLM-friendly content discovery
- Sitemap auto-gegenereerd via `@astrojs/sitemap`
- Canonical + hreflang in alle layouts (NL/EN/x-default)

---

## 🚢 Deployment

### Netlify config
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Workflow
```bash
git add -A
git commit -m "feat: description"
git push
# → Netlify auto-deploys binnen 1-2 min
```

### Post-launch checklist
- [ ] Custom domain `astrolads.com` koppelen aan Netlify
- [ ] DNS A-records + CNAME bij registrar
- [ ] Google Analytics 4 ID in `CookieBanner.astro`
- [ ] Search Console + Bing Webmaster sitemap submission
- [ ] Netlify form notifications → info@astrolads.com

---

## 🖼️ Beeldoptimalisatie

Alle conversie/resize via `sharp-cli@5.2.0`, vooraf gegenereerd (geen runtime processing).

### Voorbeeld: OG-image genereren
```bash
npx sharp -i "public/images/cases/deelmobiliteit.webp" \
  -o "public/images/og/cases/deelmobiliteit.jpg" \
  -f jpeg -q 85 \
  resize 1200 630 --fit cover --position center
```

### Quirks
- ⚠️ `--withoutEnlargement` flag werkt NIET in sharp-cli
- ⚠️ Squoosh-CLI werkt NIET met spaces in paden
- ✅ WebP: `npx sharp -i in.png -o out.webp -f webp -q 85`

### Resultaten
- Public folder: 137 → 52 MB na full conversie
- Cases foto's: 16 → 5 MB (resize 1400 breed)

---

## 🛠️ Maintenance

### Nieuwe case toevoegen
1. Foto's in `public/images/cases/{slug}-*.webp`
2. OG-image genereren (zie sharp-cli voorbeeld)
3. Entry in `src/pages/cases/[slug].astro` (NL)
4. Entry in `src/pages/en/cases/[slug].astro` (EN)
5. Slug toevoegen aan `getStaticPaths()` in beide

### Nieuw teamlid
1. Foto's in `public/images/team/{voornaam}-*.webp`
2. OG-image: target naar `og/team/{voornaam-achternaam}.jpg`
3. Entry + slug in beide `[slug].astro` files

---

## 🎯 Open todos

### Hoge prioriteit
- [ ] Custom domain koppelen
- [ ] GA4 ID configureren
- [ ] Search Console setup

### Medium
- [ ] Community pagina's eigen OG-images
- [ ] NavNightEN.astro Agency tab → wit
- [ ] EN FooterNight Astrolads B.V. regel
- [ ] Nieuwe cases: MBO Rijnland, Hart voor de Zaak, OOMT, NKL Nederland, NL Hydrogen, We Build

### Laag
- [ ] Sanity Events CMS voor community events
- [ ] Per-teamlid fotoPosities fine-tuning
- [ ] Echte mobile tests

---

## 🐛 Bekende quirks

| Quirk | Workaround |
|---|---|
| zsh interpreteert `[...]` als glob | Quote paths: `'src/pages/team/[slug].astro'` |
| Squoosh-CLI breekt met spaces in path | Gebruik sharp-cli ipv |
| Favicons cachen agressief | Cmd+Shift+R hard refresh |
| LinkedIn OG-cache 7 dagen | Use Post Inspector om te refreshen |
| `display: contents` breekt centering | Gebruik `flex column + align-items: center` |
| Astrolads-NL org private = $20/mnd | Repo is public gemaakt |

---

## 📚 Sessie-historie

- **Sessie 1-12**: Initiële opbouw — alle 87 pagina's
- **Sessie 13**: SEO/AI optimalisatie (robots, llms.txt, sitemap, Breadcrumbs, FAQ, WebP-conversie)
- **Sessie 14**: Deploy naar Netlify, Lighthouse 100/96/100/100
- **Sessie 15**: Content tweaks, klikbare podcast covers, OG-images per pagina, mobile nav scrollable

---

**Contact**: info@astrolads.com
**Adres**: Grote Markt 22, 2511 BG Den Haag
**Built by**: Dave Verwey (met dank aan Claude)