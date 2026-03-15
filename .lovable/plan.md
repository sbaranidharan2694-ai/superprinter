

# Super Printers — Complete Redesign Plan

This is a massive restructuring covering the color system, every homepage section, header, footer, floating buttons, SEO, and build error fixes. Due to scope, this will be implemented across multiple batches.

---

## Build Error Fixes (Immediate)

**File: `src/components/home/BenefitsListSection.tsx` (line 74)**
- Duplicate `className` attribute on `<section>`. Merge the two into one.

**File: `src/components/home/ProductBenefitsSection.tsx` (line 79)**
- `cardVariants.visible` uses `ease: [0.34, 1.56, 0.64, 1]` which is a `number[]` — Framer Motion expects a named easing or `[number, number, number, number]` tuple. Cast it properly.

---

## Phase 1: Design System & Color Palette

**`src/index.css`** — Replace CSS variables:
- `--color-primary: #1A1A2E` (Deep Navy)
- `--gold: #C9A84C` (Rich Gold — replaces current `#D4A843`)
- `--color-gold-light: #F5D88A`
- `--color-cream: #F5F0E8` (Warm Cream)
- `--color-cta: #E63946` (Signal Red for WhatsApp CTA)
- `--color-text: #2D2D2D`
- `--color-dark-section: #111122`
- Update `--bg-white`, `--bg-cream`, `--ink-black`, `--navy`, etc. to match
- Keep shadcn vars as white-based (they're for UI primitives)

**`index.html`** — Add `DM Sans` and `Poppins` to Google Fonts import:
```
family=DM+Sans:wght@400;500;700&family=Poppins:wght@600;700&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700
```
- Update `<title>` and `<meta description>` per spec
- Update JSON-LD schema with Sunday hours and `areaServed`

**`tailwind.config.ts`** — Add font families: `font-display`, `font-body` (DM Sans), `font-accent` (Poppins)

---

## Phase 2: Header & Ticker

**`src/components/layout/TopInfoBar.tsx`** — Update:
- Background: `--gold` (`#C9A84C`), text: `--color-primary` (`#1A1A2E`)
- Update `MARQUEE_ITEMS` in `src/data/v2.ts` to exact specified ticker text
- Font: DM Sans 14px Bold

**`src/components/layout/UnifiedHeader.tsx`** — Rebuild:
- Left: logo + "Est. 1990" gold text below
- Center links: Home | Services | Wedding Cards | Gallery | About | Contact
- Right: gold phone number `tel:` link + red WhatsApp pill button (`#E63946`)
- Remove `WhatsAppStatus` component from header (remove the "Offline" indicator)
- Dark navy background on scroll with `backdrop-filter: blur(10px)`
- Mobile: hamburger → full-screen overlay with same links

---

## Phase 3: Hero Section

**`src/components/home/HeroSection.tsx`** — Major rewrite:
- **Background**: Remove stock photo. Use `linear-gradient(135deg, #1A1A2E 0%, #2C2C54 50%, #1A1A2E 100%)` with subtle gold geometric SVG pattern overlay
- **Left column** (60%):
  - Micro-label: "PALLAVARAM'S MOST TRUSTED SINCE 1990" (gold, uppercase, DM Sans 12px)
  - H1: "Professional Printing in Chennai." (Playfair Display, 56px desktop / 36px mobile, white)
  - Gold italic accent: "Wedding Cards · Business Cards · Brochures · More"
  - Body text (DM Sans 16px, `#CBD5E1`)
  - CTA Row: Red WhatsApp button (`#E63946`) + gold outline "View All Products"
  - Trust micro-badges: pill badges with gold border
  - Remove `WhatsAppStatus` from hero
- **Right column** (40%): Keep product card grid, fix Visiting Cards image to `photo-1606293926075-69a00dbfde81`
- Remove the "Watch how we print" button and stats row (stats move to social proof bar)

---

## Phase 4: New Social Proof Bar (after Hero)

**Create `src/components/home/SocialProofBar.tsx`** (NEW):
- Full-width, background `#F5F0E8` (warm cream)
- Row 1: Stats — 35+ Years | 10,000+ Clients | 4.8 ⭐ Google | 147 Reviews | 48hr Delivery
  - Numbers: Playfair Display 36px Bold gold, labels: DM Sans 14px grey
  - Vertical dividers between stats
- Row 2: "Trusted by:" + client logos from `CLIENTS` data (grey, opacity 0.6)

---

## Phase 5: Section Reordering on Homepage

**`src/pages/Index.tsx`** — New section order:
1. HeroSection
2. **SocialProofBar** (NEW)
3. ProductsSection (services grid)
4. **WeddingCardsSection** (MOVED UP — currently position 10)
5. **WhyChooseUsConsolidated** (merge WhyChooseUs + BenefitsListSection + ProductBenefitsSection into ONE)
6. PortfolioSection
7. HowItWorksSection (process)
8. SocialProofSection (testimonials — renamed)
9. **QuoteFormSection** (MOVED UP — before About)
10. AboutSection
11. FAQSectionNew
12. ContactSection

**Remove from Index**: MarqueeProductStrip, ProductVideoSection, CredibilityStrip, StatsBarSection, FinishesSection, CTASection (content absorbed into other sections)

---

## Phase 6: Section Updates

### Services/Products Section
- Add starting price + "Order on WhatsApp" link + "48hr delivery" gold badge to each card
- Active tab: gold background + dark text

### Wedding Cards Section
- Background: dark navy `#1A1A2E`
- Two-column: left text + CTA, right 3-photo masonry
- Section label: "WEDDING INVITATIONS PALLAVARAM"
- Feature list with gold checkmarks
- Red CTA button linking to WhatsApp

### Why Choose Us (Consolidated)
- Merge 3 existing sections into one
- Background: warm cream `#F5F0E8`
- H2: "Why 10,000+ Chennai Customers Choose Us"
- 6-item grid (2×3 desktop, 1 col mobile) with the specified items
- Gold icon + Poppins bold title + DM Sans description

### Process Section
- Update step copy with time estimates ("2 minutes", "Within 24 hours", etc.)
- Add note below: "Average order turnaround: 48 hours..."

### Testimonials
- Add product ordered + location to each card
- Fix star display
- Add "Read All 147 Reviews on Google" CTA
- Add decorative gold quote marks

### Quote Form
- Add service dropdown, quantity, date picker, file upload hint, WhatsApp number
- Red submit button (`#E63946`)
- Reassurance text: "We respond within 30 minutes..."

### About Section
- Add founder bio block with "NB" initials avatar before timeline
- Keep timeline

### FAQ Section
- Add 5 new FAQ items per spec

### Contact Section
- Update Google Maps embed coordinates
- Keep "Get Directions" button below map
- Update hours to include Sunday: 10AM–4PM

---

## Phase 7: Footer Rebuild

**`src/components/layout/UnifiedFooter.tsx`**:
- Background: `#111122`
- 4 columns: Brand | Services links | Contact details | (Social only if real URLs)
- Remove generic facebook.com/instagram.com/youtube.com links
- Keep WhatsApp link (it's real)
- Add GST Registered, 4.8 Google Rating
- Hours: Mon–Sat 9AM–8PM, Sunday 10AM–4PM
- Bottom bar: "© 2026 Super Printers & Wedding Cards..." gold text, centered

---

## Phase 8: Floating Buttons

**`src/components/FloatingWhatsApp.tsx`**:
- WhatsApp button: green `#25D366`, pulsing glow, tooltip "Chat with us on WhatsApp"
- Phone button (bottom-left): navy `#1A1A2E` background, white icon, "Call Now" tooltip
- Both visible on mobile at 52px with 8px gap

**`src/components/layout/MobileBottomCTA.tsx`**: Keep as-is (already handles mobile bottom bar)

---

## Phase 9: Counters Fix

**`src/components/home/StatsBarSection.tsx`** — Note: This section is being removed from Index, but the `CountUp` component is reused in SocialProofBar:
- Initialize `count` to `target` instead of `0` so the number is visible before animation
- Or use CSS `content` fallback

---

## Phase 10: SEO & Cleanup

- Update `index.html` title, description, OG tags per spec
- Update JSON-LD with Sunday hours, `areaServed`, `priceRange: "₹₹"`
- Update `src/data/business.ts`:
  - `hours` → "Mon–Sat: 9:00 AM – 8:00 PM"
  - Add `hoursSunday: "Sunday: 10:00 AM – 4:00 PM"`
  - Remove generic social URLs from `sameAs`

---

## Files Changed Summary

| Action | Count | Files |
|--------|-------|-------|
| Create | 1 | `SocialProofBar.tsx` |
| Major rewrite | 8 | `HeroSection`, `UnifiedHeader`, `UnifiedFooter`, `TopInfoBar`, `Index.tsx`, `WhyChooseUsSection` (consolidated), `QuoteFormSection`, `WeddingCardsSection` |
| Update | 8 | `ContactSection`, `HowItWorksSection`, `SocialProofSection`, `AboutSection`, `FAQSectionNew`, `FloatingWhatsApp`, `index.html`, `index.css` |
| Update data | 2 | `business.ts`, `v2.ts` |
| Fix bugs | 2 | `BenefitsListSection.tsx`, `ProductBenefitsSection.tsx` |
| Remove from Index | 5 | `MarqueeProductStrip`, `ProductVideoSection`, `CredibilityStrip`, `StatsBarSection`, `CTASection` (components kept but not imported) |

Total: ~25 file changes. Will implement in batches starting with bug fixes + design system, then section-by-section.

