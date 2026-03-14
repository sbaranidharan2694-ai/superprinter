

# Full Site Restructuring Plan — Super Printers

## Problem Summary

The project has TWO separate websites:
- **Homepage** (`Index.tsx`): A 1143-line monolith with its own dark-themed navbar, footer, inline styles, scroll-based anchor navigation, and framer-motion animations.
- **All other pages** (`/about`, `/services`, `/gallery`, etc.): Use `Layout.tsx` which wraps a completely different white-themed `SiteHeader.tsx` and `SiteFooter.tsx` with `react-router-dom` Link-based navigation.

These share no components, no design tokens, and no layout structure. The result is a jarring brand mismatch when navigating between pages.

---

## Architecture Overview

```text
src/
├── components/
│   ├── layout/
│   │   ├── UnifiedHeader.tsx      ← dark sticky navbar (extracted from Index.tsx)
│   │   ├── UnifiedFooter.tsx      ← dark footer (extracted from Index.tsx)
│   │   ├── TopInfoBar.tsx         ← thin top bar (from Index.tsx)
│   │   └── UnifiedLayout.tsx      ← replaces Layout.tsx, wraps all routes
│   ├── shared/
│   │   ├── HeroSection.tsx        ← reusable page hero (dark bg, image, title, breadcrumb)
│   │   ├── ServiceCards.tsx       ← image-based service card grid
│   │   ├── ProductCards.tsx       ← product cards with pricing
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── GalleryGrid.tsx        ← filterable image grid
│   │   ├── ContactForm.tsx        ← unified contact/quote form
│   │   ├── QuoteWizard.tsx        ← multi-step quote flow
│   │   ├── StatsCounter.tsx       ← animated counter bar
│   │   ├── SectionHeading.tsx     ← consistent section title pattern
│   │   └── FloatingWhatsApp.tsx   ← (existing, keep)
│   └── ui/ (existing shadcn, unchanged)
├── pages/
│   ├── Index.tsx                  ← refactored: uses shared components
│   ├── Products.tsx               ← NEW: /products overview
│   ├── VisitingCards.tsx           ← NEW: /visiting-cards (full page)
│   ├── WeddingCards.tsx            ← NEW: /wedding-cards (full page)
│   ├── Services.tsx               ← refactored: image cards, category filters
│   ├── Gallery.tsx                ← refactored: real images, category filters
│   ├── About.tsx                  ← refactored: unified theme
│   ├── Contact.tsx                ← refactored: unified theme
│   ├── GetQuote.tsx               ← refactored: improved wizard
│   ├── Orders.tsx                 ← NEW: /orders tracking page
│   └── NotFound.tsx               ← refactored: branded 404
├── data/
│   ├── business.ts                ← (keep)
│   ├── services.ts                ← (keep, extend)
│   └── images.ts                  ← merge IMG maps from Index.tsx + images.ts
└── App.tsx                        ← updated routes
```

---

## Phase 1: Design System Unification

### 1a. Extract Homepage Components into Shared Layout

The homepage navbar, top bar, and footer will be extracted from `Index.tsx` into standalone components that ALL pages use.

- **`UnifiedHeader.tsx`**: The dark navbar from `Index.tsx` (lines 274-329) — sticky, transparent-to-solid on scroll, with `react-router-dom` `<Link>` instead of `scrollTo()` anchor buttons. Navigation items become proper routes.
- **`TopInfoBar.tsx`**: The thin dark bar (lines 261-272) with phone/email.
- **`UnifiedFooter.tsx`**: The dark footer from `Index.tsx` (lines 1085-1137) with `<Link>` navigation.
- **`UnifiedLayout.tsx`**: Replaces current `Layout.tsx`. Wraps `TopInfoBar` + `UnifiedHeader` + `<Outlet />` + `UnifiedFooter` + `FloatingWhatsApp`.

### 1b. Update CSS Variables

Update `src/index.css` to make the dark theme the default:
- `--background`: dark charcoal (currently maps to white)
- `--foreground`: white/light grey
- `--card`: dark surface
- Keep `--primary` (green) and `--secondary` (gold) as-is
- Add utility classes for section backgrounds (dark, slightly lighter dark, etc.)

### 1c. Route Structure Update in `App.tsx`

```text
<Route element={<UnifiedLayout />}>
  <Route path="/" element={<Index />} />
  <Route path="/products" element={<Products />} />
  <Route path="/visiting-cards" element={<VisitingCards />} />
  <Route path="/wedding-cards" element={<WeddingCards />} />
  <Route path="/services" element={<Services />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/get-quote" element={<GetQuote />} />
  <Route path="/orders" element={<Orders />} />
  <Route path="*" element={<NotFound />} />
</Route>
```

All routes inside one layout. No standalone pages.

---

## Phase 2: Refactor Homepage (`Index.tsx`)

Strip the monolith down by removing:
- Inline navbar/footer (now in layout)
- Inline top bar (now in layout)
- Mobile menu logic (now in header)

Keep in `Index.tsx`:
- Hero slider with 3D scene
- Trust bar (stats counter)
- Product categories grid
- Product cards
- How-it-works steps
- Gallery preview
- Testimonials
- Contact form
- "Why Choose Us" section

Each section will import from `src/components/shared/` where possible.

Fix the **Counter** component: show the label text (e.g., "35+") initially instead of "0+", then animate. The counter will start from the target value and only animate when visible, preventing the flash of "0+".

Fix **hero slides**: Ensure unique content per slide (no duplication).

Add **"1-4 Day Delivery"** as the 4th stat (already in TRUST data, just needs to render correctly).

---

## Phase 3: New Pages

### Products Page (`/products`)
- Hero section with page title
- Category cards linking to `/visiting-cards`, `/wedding-cards`, and service detail pages
- Featured products grid with pricing

### Visiting Cards Page (`/visiting-cards`)
- Hero with visiting card background image
- Card types section (Gloss, Matt, Spot UV, Velvet, Gold Foil, Synthetic)
- Pricing table
- Material/finish options
- Sample gallery grid
- FAQ accordion
- WhatsApp order CTA

### Wedding Cards Page (`/wedding-cards`)
- Hero with wedding imagery
- Card styles section (Traditional, Modern, Minimalist, Premium)
- Premium invitations showcase
- Gallery of wedding card samples
- Customization options
- Bulk pricing table
- WhatsApp order CTA

### Orders Page (`/orders`)
- Simple lookup form: Order ID + Phone Number
- Status display with steps: Processing → Printing → Ready for Pickup → Completed
- WhatsApp fallback for real-time tracking

### Branded 404 Page
- Dark theme consistent with site
- SP logo, "Page not found" message
- Quick links to Home, Products, Services, Contact
- WhatsApp contact button

---

## Phase 4: Refactor Existing Pages

### Services Page
- Replace emoji cards with image-based cards using Pexels photos from the unified IMG set
- Add category filter tabs: Corporate / Personal / Events
- Full list: Offset Printing, Visiting Cards, Wedding Invitations, Brochures, Bill Books, Banners, T-Shirts, Rubber Stamps, Stickers, Letterheads, Catalogues, Pamphlets, Screen Printing, PVC ID Cards
- Dark theme styling

### Gallery Page
- Remove placeholder/emoji content
- Image grid with real photos from IMG set
- Category filters: Wedding Cards, Visiting Cards, Brochures, Banners, Stickers, Bill Books, Corporate Printing
- Lightbox on click
- Dark theme

### Contact Page
- Dark themed
- Correct address formatting from `BUSINESS` data
- Email field in form
- Form success confirmation state
- Consistent business hours display (9:30 AM - 6:30 PM)
- Google Maps embed

### Get Quote Page
- Improved wizard with step preview header
- Trust signals: "Average response time: under 2 hours"
- Step 1: Select Service, Step 2: Choose Options, Step 3: Upload Design, Step 4: Contact Details
- Dark theme

### About Page
- Dark theme
- Reuse StatsCounter, Testimonials components

---

## Phase 5: Cleanup

- Delete `src/components/SiteHeader.tsx` (replaced by UnifiedHeader)
- Delete `src/components/SiteFooter.tsx` (replaced by UnifiedFooter)
- Delete `src/components/Layout.tsx` (replaced by UnifiedLayout)
- Remove unused home section components that were for the old white theme (`HeroSection.tsx`, `StatsBar.tsx`, `ServiceGrid.tsx`, `ServicesRows.tsx`, `TrustedClients.tsx`, etc.)
- Merge the two IMG maps (from `Index.tsx` inline and `data/images.ts`) into one `data/images.ts`
- Remove `src/App.css` (unused Vite boilerplate)

---

## File Change Summary

| Action | Files |
|--------|-------|
| **Create** | `UnifiedHeader.tsx`, `UnifiedFooter.tsx`, `TopInfoBar.tsx`, `UnifiedLayout.tsx`, `SectionHeading.tsx`, `HeroSection.tsx` (shared), `ServiceCards.tsx`, `ProductCards.tsx`, `TestimonialsCarousel.tsx`, `GalleryGrid.tsx`, `ContactForm.tsx`, `QuoteWizard.tsx`, `StatsCounter.tsx`, `Products.tsx`, `VisitingCards.tsx`, `WeddingCards.tsx`, `Orders.tsx` |
| **Major refactor** | `Index.tsx`, `App.tsx`, `index.css`, `data/images.ts` |
| **Theme refactor** | `Services.tsx`, `Gallery.tsx`, `Contact.tsx`, `GetQuote.tsx`, `About.tsx`, `NotFound.tsx` |
| **Delete** | `SiteHeader.tsx`, `SiteFooter.tsx`, `Layout.tsx`, `App.css`, ~10 unused home section components |

---

## Implementation Note

This is a large restructuring involving ~25+ file changes. It will be implemented incrementally — layout and design system first, then page-by-page refactoring, then new pages, then cleanup. The homepage content and all Pexels images will be preserved and reused throughout.

