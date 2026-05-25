# Astrolads Website — README & Briefing Sessie 14

**Datum laatste sessie:** 25 mei 2026 (sessie 13)
**Status:** SEO-perfect, AI-vriendelijk, snel. Klaar voor deploy! 🚀

---

## 🎯 PROJECT CONTEXT

### Tech stack
- **Framework:** Astro (static site generator)
- **Lokaal:** `/Users/daveverwey/Documents/Website Projects/astrolads/`
- **Node:** 24.15.0
- **Dev server:** `npm run dev` (port 4321)
- **Build:** `npm run build` → 87 pages
- **Preview:** `npm run preview`

### Design tokens (CSS variabelen)
```css
--orange: #F4622A
--orange-dark: #D84F1A
--navy: #1A2744
--bg: #EDEDED
--white: #FFFFFF
--text: #1A1A1A
--muted: #6B6B6B
--radius: 16px
```

### Tone of voice
- **NL informeel** ("je" niet "u")
- **Geen em-dashes** (ook niet in EN)
- **Geen en-dashes** voor regulier gebruik
- Team functies **bold + hoofdletters consistent**
- Domein: `astrolads.com`

---

## 📊 HUIDIGE STATUS

### Bouw status
- ✅ **87 pages** clean built, 0 errors
- ✅ **Lighthouse (localhost):** 91 Performance / 96 Accessibility / 100 Best Practices / 100 SEO
- ✅ **Verwacht op Netlify:** 95+ Performance (CDN + brotli)

### Content compleet
- ✅ NL + EN volledig (homepage, cases, diensten, team, community, contact, FAQ)
- ✅ 15 teamleden NL + EN
- ✅ 6 cases NL + EN
- ✅ 11 dienst-detailpagina's NL + EN
- ✅ FAQ-pagina's (`/veelgestelde-vragen` + `/en/faq`)
- ✅ Privacy, algemene voorwaarden, 404

### SEO/AI optimalisatie compleet
- ✅ Organization + LocalBusiness schema in Layout (NL + EN)
- ✅ WebSite schema
- ✅ Article-schema op alle cases
- ✅ Person-schema op alle teamleden (met @id worksFor → #organization)
- ✅ FAQPage-schema op FAQ-pagina's
- ✅ BreadcrumbList-schema op 60+ detail-pagina's
- ✅ `robots.txt` met 16 AI-bots toegestaan (GPTBot, ChatGPT, Claude, Perplexity)
- ✅ `llms.txt` AI-standaard
- ✅ Sitemap.xml auto-gegenereerd
- ✅ Meta-descriptions 49 pagina's (150-160 chars met "Astrolads" keyword)
- ✅ Alt-tags geupgraded (Jelle, Dave, Floor, Ellen met functies)

### Performance optimalisatie
- ✅ **WebP-conversie:** alle 329 images (94 MB → ~50 MB)
- ✅ **Cases resize:** 16 MB → 5 MB (max 1400px breed)
- ✅ `og-default.jpg` behouden als JPG (voor LinkedIn/Facebook compatibility)
- ✅ `logo.png` behouden voor schema referenties

### UX fixes
- ✅ Hero slider klikbaar (NL + EN, met pointer-events op active slide)
- ✅ Breadcrumbs op alle detail-pagina's (light + dark theme)
- ✅ Footer-links naar FAQ (Contact-kolom + bottom-bar)
- ✅ Taal-switcher mapping volledig (NL ↔ EN)
- ✅ WeBuild logo verwijderd uit klantenslider

### Backup
- 🛡️ `src.backup/` (backup voor WebP-conversie)
- 🛡️ `public/images/cases-original/` (originele case-foto's)
- Beide kunnen weg na deploy + visuele check

---

## 📋 TO-DO LIJST (PRIORITEIT)

### 🔴 HOOG PRIO — Tot livegang

#### 1. Deploy voorbereiding (~5 min)
```bash
# Backup folders opruimen
rm -rf src.backup
rm -rf public/images/cases-original

# Check folder size
du -sh public/images/
du -sh src/

# Final build check
npm run build
```

#### 2. Git initialisatie (~10 min)
```bash
git init
```

Maak `.gitignore` aan in root:
```
node_modules/
dist/
.DS_Store
.env
.env.local
.env.*.local
src.backup/
public/images/cases-original/
*.log
.vscode/
.idea/
```

Daarna:
```bash
git add .
git commit -m "Initial commit: Astrolads website ready for deploy"
```

#### 3. GitHub setup (~10 min)
1. Maak GitHub organisatie "Astrolads" (of gebruik bestaand account)
2. Maak **privé** repo `astrolads-website`
3. Pushen:
```bash
git remote add origin https://github.com/Astrolads/astrolads-website.git
git branch -M main
git push -u origin main
```

#### 4. Netlify deploy (~15 min)
1. Account aanmaken op netlify.com (kan met GitHub-login)
2. "Add new site" → "Import from Git"
3. Selecteer Astrolads/astrolads-website
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 24 (in environment variables of netlify.toml)
5. Deploy → krijgt random URL zoals `astrolads-website.netlify.app`

#### 5. Lighthouse test op productie URL
- Open Netlify staging URL in incognito
- F12 → Lighthouse → Mobile → Analyze
- **Verwachting: 95+ Performance**

#### 6. Mobile tests echte devices (~30 min)
- iPhone Safari: body-scroll-lock mobile menu testen
- Android Chrome: touch-swipe sliders
- Cookieconsent banner werkt
- Alle interne links nalopen
- FAQ-accordeon werkt
- Taal-switcher werkt op alle pagina's

#### 7. Custom domain astrolads.com koppelen (~30 min)
- In Netlify: Domain settings → Add custom domain → astrolads.com
- DNS records bij domein-registrar instellen (A record + CNAME)
- Automatic HTTPS via Netlify
- Wacht 1-24 uur op DNS propagatie

---

### 🟡 MIDDEL PRIO — Voor of vlak na live

#### 8. Google Analytics 4
1. GA4 property aanmaken
2. Measurement ID kopiëren (`G-XXXXXXXXXX`)
3. In `src/components/CookieBanner.astro` regel met `var GA_ID = ...` invullen
4. Commit + push → auto-deploy

#### 9. Content team afwachten
- **AI-implementatie header-foto** (`ai-header.jpg` → wordt `ai-header.webp`)
- **Vormgeving header-foto** (`vormgeving-header.jpg` → wordt `vormgeving-header.webp`)
- Eventueel scherpere SVG favicon

#### 10. Search engine submission
- Google Search Console: site toevoegen + sitemap inschrijven
- Bing Webmaster Tools: idem
- Verifieer dat alle 87 pages indexable zijn

#### 11. Netlify form-notifications
- Contact-form notificaties naar `info@astrolads.com`
- Spam-bescherming check

---

### 🟢 LAGE PRIO — Post-launch

#### 12. Image-optimalisatie restjes
- Sommige team/diensten foto's nog te groot voor display size
- Optioneel: meer compressie of resize

#### 13. Sanity Events CMS
- Voor de 2-3 events/maand op community pagina
- Of via Netlify Forms voor simpele submissions

#### 14. Nieuwe cases toevoegen
- MBO Rijnland
- Hart voor de Zaak
- OOMT
- NKL Nederland
- NL Hydrogen
- We Build

#### 15. Per-teamlid `fotosPosities` array
- Fine-tuning object-position van foto's in slider
- Voor optimale gezichten in beeld

---

## 🗂️ BELANGRIJKE FILES & LOCATIES

### Layouts
- `src/layouts/Layout.astro` — NL hoofdlayout met Organization+LocalBusiness+WebSite schemas
- `src/layouts/LayoutEN.astro` — EN versie
- `src/layouts/LayoutNight.astro` — Dark mode NL (community pagina's)
- `src/layouts/LayoutNightEN.astro` — Dark mode EN

### Components
- `src/components/Breadcrumb.astro` — Herbruikbaar met `theme="dark"` prop
- `src/components/Footer.astro` — NL footer met FAQ link
- `src/components/FooterEN.astro` — EN footer met FAQ link
- `src/components/Navbar.astro` — Met taal-switcher
- `src/components/CasesSlider.astro` — Cases carousel
- `src/components/CookieBanner.astro` — GA-ID hier invullen

### Belangrijke pages
- `src/pages/index.astro` — Homepage NL (hero slider klikbaar)
- `src/pages/en/index.astro` — Homepage EN
- `src/pages/veelgestelde-vragen.astro` — FAQ NL met FAQPage-schema
- `src/pages/en/faq.astro` — FAQ EN
- `src/pages/cases/[slug].astro` — Dynamic case detail NL
- `src/pages/en/cases/[slug].astro` — Dynamic case detail EN
- `src/pages/team/[slug].astro` — Dynamic team detail NL
- `src/pages/en/team/[slug].astro` — Dynamic team detail EN

### Public/SEO files
- `public/robots.txt` — 16 AI-bots toegestaan
- `public/llms.txt` — AI-standaard
- `public/images/logo.png` — 512×512 (blijft PNG voor schema's)
- `public/images/og-default.jpg` — 1200×630 (blijft JPG voor social media)

---

## 🎨 PATTERNS & CONVENTIES

### Breadcrumb pattern
```astro
<!-- Light theme (default) -->
<Breadcrumb items={[
  { name: 'Cases', url: '/cases' },
  { name: 'Deelmobiliteit' }
]} />

<!-- EN versie -->
<Breadcrumb lang="en" items={[...]} />

<!-- Dark theme (community pagina's) -->
<Breadcrumb theme="dark" items={[...]} />
```
- Plaats binnen `<div class="section-inner">` net na opening
- Laatste item zonder URL = huidige pagina
- Vervangt oude "← Terug" link of "Community/X" eyebrow

### Article-schema (cases)
- `@type: "Article"` (niet CreativeWork)
- `author + publisher` beide `@id` naar `#organization`
- `about: data.tag` (opdrachtgever)
- `keywords: data.diensten.join(", ")`
- `mainEntityOfPage: volledige URL`

### Person-schema (team)
- `jobTitle: data.rollen[0]`
- `description: data.bio`
- `image: full URL met astrolads.com prefix`
- `worksFor: @id reference naar globale #organization`
- `knowsAbout: alle rollen array`
- `sameAs: conditional spread op LinkedIn` (`...(data.linkedin ? { "sameAs": [data.linkedin] } : {})`)

### FAQ structuur
- Losse URL `/veelgestelde-vragen` (NL) en `/en/faq` (EN)
- FAQPage-schema met `mainEntity` array
- Visueel: `<details>`/`<summary>` accordeon met animated icon
- CTA blok onderaan ("Nog vragen? Kennismaken")

### Image strategy
- **Algemeen:** WebP (alles geconverteerd)
- **Cases:** max 1400px breed (geresized)
- **OG image:** `og-default.jpg` blijft JPG (Facebook/LinkedIn compatibility)
- **Logo schema:** `logo.png` blijft PNG (crawler compatibility)

### Hero slider patroon (NL + EN)
- Foto's klikbaar via `<a href="/cases/slug">`
- `pointer-events: none` op inactive slides
- `pointer-events: auto` op active slide
- Geen hover-underline

---

## ⚠️ BEKENDE QUIRKS

### Sharp-cli CLI flags
- `--withoutEnlargement` werkt NIET (zoals bij sharp library)
- `npx sharp -i ... -o ... -f webp -q 80 resize 1400` is correcte syntax
- Output naar zelfde dir overschrijft origineel → gebruik tijdelijke dir

### Astro import tags moeten matchen
- `import LayoutNight from '../layouts/LayoutNightEN.astro'` werkt NIET als tag `<LayoutNightEN>` is
- Import-naam moet exact matchen met JSX tag-naam

### Netlify forms
- HTML forms automatisch detected door Netlify
- Geen extra setup nodig, maar wel `netlify` attribuut op `<form>`

### Spaties in paths
- Folder `Website Projects` heeft spatie → veroorzaakte Squoosh CLI bug
- Sharp werkt wel met spaties

---

## 🚀 QUICK START VOOR VOLGENDE SESSIE

```bash
# 1. Naar project folder
cd "/Users/daveverwey/Documents/Website Projects/astrolads"

# 2. Dev server (om visueel te checken)
npm run dev

# 3. Build check
npm run build

# 4. Preview (productie-build lokaal)
npm run preview
```

**Eerste actie volgende sessie:** Backups opruimen + Git init + GitHub setup.

---

## 📞 BRIEFING VOOR VOLGENDE CHAT

**Plak dit aan het begin van de volgende chat:**

> Hi! We werken aan de Astrolads website (Astro static site). Sessie 13 is afgerond, alle SEO/AI optimalisatie + WebP-conversie is gedaan. Lighthouse score lokaal: 91/96/100/100. Site heeft 87 pages clean built.
>
> Tone: NL informeel, geen em-dashes. Folder: `/Users/daveverwey/Documents/Website Projects/astrolads/`. Node 24.15.0.
>
> Doel deze sessie: **GitHub + Netlify deploy** zodat we een staging URL hebben om mobile te testen, daarna custom domain astrolads.com koppelen.
>
> Lees voor context het README bestand `astrolads-readme.md` dat ik bijvoeg, dan weet je alles wat we al gedaan hebben en wat de patterns/conventies zijn.

---

## 🎯 GESCHATTE TIJD TOT LIVE

| Stap | Tijd |
|---|---|
| Deploy voorbereiding (cleanup) | 5 min |
| Git init + .gitignore | 10 min |
| GitHub repo + push | 10 min |
| Netlify setup + eerste deploy | 15 min |
| Lighthouse test op staging | 5 min |
| Mobile tests echte devices | 30 min |
| Custom domain koppelen | 30 min |
| Wachten op DNS propagatie | 1-24u |
| Final tests | 30 min |
| **Totaal effectief** | **~2.5-3 uur** |

---

🚀 **Je bent klaar om live te gaan. Veel succes!**