/**
 * Industry-vertical landing pages. Built to compete on B2B intent queries
 * like "printing for pharma chennai", "automotive printing chennai",
 * "hospital printing chennai" — the industry-vertical positioning that
 * imprintwings.com uses on its homepage to attract enterprise leads.
 *
 * Each entry produces an /industries/<slug> page rendered by IndustryPage.tsx.
 */

export interface IndustryPage {
  slug: string;
  industry: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Typical products this industry orders, with one-line use case. */
  typicalProducts: { product: string; useCase: string }[];
  /** Industry-specific compliance / spec notes. */
  specs: string;
  /** Industry-specific FAQs. */
  faqs: { q: string; a: string }[];
}

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: "pharma-printing-chennai",
    industry: "Pharmaceutical",
    title: "Pharma Printing Chennai | Cartons, Inserts, Labels | Super Printers",
    metaDescription:
      "Pharmaceutical printing in Chennai — folding cartons, blister inserts, batch labels, patient info leaflets, GMP-compliant. Super Printers Pallavaram serves pharma OEMs across Chennai.",
    h1: "Printing for Pharmaceutical Companies in Chennai",
    intro:
      "Super Printers serves pharmaceutical manufacturers and distributors across Chennai with the high-precision, regulation-aware printing pharma demands. We handle folding cartons, blister-pack inserts, batch number labels, patient information leaflets, and tamper-evident packaging from our Pallavaram press with the small-batch flexibility OEM and contract-manufacturer customers need.",
    typicalProducts: [
      { product: "Folding cartons", useCase: "Outer cartons for tablet strips, syrup bottles, ointment tubes — GSM-300 to GSM-350 board, lamination, embossed brand area." },
      { product: "Patient information leaflets (PILs)", useCase: "Multi-fold leaflets in 50-60 GSM thin paper with regulatory mandatory text in multiple scripts (Tamil, Hindi, English) for OTC and prescription products." },
      { product: "Batch / serial labels", useCase: "Adhesive labels with batch number, manufacturing date, expiry date — die-cut, variable-data printed for full pharma traceability." },
      { product: "Blister pack inserts", useCase: "Small printed paper inserts that slot inside blister cartons — typically 70-80 GSM, full colour, both sides printed." },
      { product: "Cleanroom signage & SOP posters", useCase: "A3/A4 SOP posters in laminated finish, instructional signage with pictograms, lab safety stickers." },
    ],
    specs:
      "We follow standard pharma print specs: CMYK + spot Pantone for brand-critical colours, registration tolerance under 0.2 mm for folding cartons, food-grade inks for primary packaging contact, anti-counterfeit options (hologram strip, micro-text, UV-reactive ink) on request. Batch numbering and serial codes printed via digital variable-data on the same run.",
    faqs: [
      {
        q: "Can you handle regulated pharma packaging printing in Chennai?",
        a: "Yes — folding cartons, patient information leaflets, blister inserts, and batch labels. We follow registration-tolerant offset printing and use food-grade inks for primary-contact items. Full traceability via batch + serial variable-data on every run.",
      },
      {
        q: "Minimum order quantity for pharma cartons?",
        a: "Folding cartons from 1,000 pieces. PILs from 500 pieces. Batch labels from 100 sheets. We accept smaller batches for clinical-trial or new-product launches with proportionally higher per-piece cost.",
      },
      {
        q: "Can you print multilingual PILs (Tamil + Hindi + English)?",
        a: "Yes. Our design team works with Tamil (Unicode-aware), Hindi (Devanagari), English and pharmacology-specific terminology. We produce 6-fold and 8-fold patient info leaflets in 50-70 GSM thin paper.",
      },
    ],
  },
  {
    slug: "automotive-printing-chennai",
    industry: "Automotive",
    title: "Automotive Printing Chennai | Labels, Manuals, Dealer Collateral",
    metaDescription:
      "Automotive printing services in Chennai — service-record books, dealer brochures, vehicle labels, owner manuals, parts catalogues. Super Printers serves auto OEMs and dealerships.",
    h1: "Printing for Automotive Companies in Chennai",
    intro:
      "Chennai is a major automotive cluster — TVS, Ashok Leyland, Daimler, Renault-Nissan, Hyundai, Royal Enfield and dozens of tier-1/tier-2 suppliers operate here. Super Printers serves auto OEMs, component manufacturers, dealerships and service centres across Chennai with printed collateral that ranges from regulatory vehicle labels to dealer-network catalogues.",
    typicalProducts: [
      { product: "Service record books", useCase: "Spiral-bound service log books with checkbox columns, KM logs and stamp areas — dealership-branded, 32-48 pages." },
      { product: "Dealer brochures & catalogues", useCase: "8-16 page glossy A4 brochures showcasing model lineup, specs, financing options — perfect-bound or saddle-stitched." },
      { product: "Vehicle decals & VIN labels", useCase: "Weatherproof vinyl decals with adhesive backing — manufacturer info, VIN labels, dealer logos for door-pillars and windscreens." },
      { product: "Owner manuals", useCase: "Saddle-stitched or perfect-bound A5 manuals, 60-120 pages, full-colour figures, weatherproof cover stock." },
      { product: "Parts catalogues", useCase: "Multi-section perfect-bound catalogues for spare-parts distributors and service centres, with indexed sections and pricing pages." },
    ],
    specs:
      "Weatherproof vinyl stickers with industrial adhesive that survives temperature swings, fuel exposure, and outdoor weathering. Lamination on owner manual covers (matt or gloss). Section tabs and index pages on parts catalogues. Pantone matching on dealer-network branding.",
    faqs: [
      {
        q: "Do you print vehicle compliance labels for Chennai auto OEMs?",
        a: "Yes — VIN labels, manufacturer info plates, tyre pressure stickers, dealer warranty labels on weatherproof vinyl with industrial adhesive. Survives engine bay heat and outdoor weather.",
      },
      {
        q: "Can you handle dealer-network catalogues?",
        a: "Yes — multi-dealer catalogues with variable data (per-dealer pricing pages, branch contact details). We print 1,000-5,000 piece runs for state-wide and pan-South dealer networks.",
      },
      {
        q: "Service record book minimum order?",
        a: "From 500 books. Standard format: spiral-bound A5, 32-48 pages with checkbox columns, KM logs, service stamp areas. Dealer-network branding on cover.",
      },
    ],
  },
  {
    slug: "hospital-printing-chennai",
    industry: "Healthcare",
    title: "Hospital Printing Chennai | Patient Files, Prescription Pads, IDs",
    metaDescription:
      "Hospital printing services in Chennai — patient files, prescription pads, appointment cards, medical ID cards, NCR doctor's pads. Super Printers serves hospitals across Chennai.",
    h1: "Printing for Hospitals & Clinics in Chennai",
    intro:
      "Chennai's hospital network — Apollo, MIOT, Sri Ramachandra, Vijaya, Kauvery, Fortis Malar, MGM, Madras Medical Mission, plus hundreds of clinics and nursing homes — runs on printed paperwork. Super Printers supplies patient files, prescription pads, appointment cards, doctor visiting cards and PVC ID cards to hospitals across Anna Nagar, Adyar, Porur, Vadapalani, T. Nagar and the OMR healthcare belt.",
    typicalProducts: [
      { product: "Patient file covers", useCase: "300 GSM card stock with department tabs, patient ID space, hospital logo — standard and bespoke versions for OPD, IPD, casualty." },
      { product: "Prescription pads", useCase: "A5 100-sheet pads with doctor's name, qualifications, MCI registration number, clinic address. Carbonless 2-part on request." },
      { product: "Appointment cards", useCase: "Wallet-size 300 GSM cards with patient details, next-visit date, doctor name — printed in lots of 1,000-5,000." },
      { product: "Doctor visiting cards", useCase: "Premium 350 GSM matt visiting cards with raised UV on doctor name and qualifications — standard for senior consultants." },
      { product: "Hospital ID cards", useCase: "PVC ID cards for staff (doctors, nurses, support) with photo, role, department, blood group and emergency contact." },
      { product: "Discharge summary folders", useCase: "Multi-flap A4 folders with sections for discharge summary, prescriptions, lab reports, follow-up instructions." },
    ],
    specs:
      "Carbonless NCR 2-part and 3-part for prescription pads. Tear-off perforation on tear-off coupons. Lamination on ID cards (matt or gloss). Bilingual Tamil-English support for patient-facing content. PVC card thickness 0.76 mm (standard ISO ID-1) with optional magstripe.",
    faqs: [
      {
        q: "Can you print custom prescription pads for Chennai doctors?",
        a: "Yes — A5 100-sheet pads with doctor name, qualifications, MCI/State Medical Council number, clinic address. Carbonless 2-part option for patient + clinic copies. From ₹95/pad at 25-pad qty.",
      },
      {
        q: "Hospital ID cards for staff?",
        a: "Yes — PVC ID cards with photo, role, department, blood group, emergency contact. Standard PVC ₹35/card; with RFID inlay ₹75-95/card. 100-piece minimum, 5 working days.",
      },
      {
        q: "Patient file printing for Chennai hospitals?",
        a: "300 GSM card-stock file covers with department-specific tabs (OPD/IPD/casualty/maternity/pediatrics), hospital logo, patient ID barcode strip. From ₹18/cover at 500 qty.",
      },
    ],
  },
  {
    slug: "hospitality-printing-chennai",
    industry: "Hospitality",
    title: "Hotel & Restaurant Printing Chennai | Menus, Key-Card Sleeves",
    metaDescription:
      "Hotel and restaurant printing in Chennai — menu cards, key-card sleeves, do-not-disturb tags, table tents, breakfast vouchers. Super Printers serves Chennai hospitality industry.",
    h1: "Printing for Hotels & Restaurants in Chennai",
    intro:
      "Chennai's hospitality belt — Mount Road hotels (Taj Coromandel, Park Sheraton, ITC Grand Chola), airport-belt hotels (Hilton, Trident, Hyatt, Crowne Plaza), boutique resorts on ECR, and hundreds of standalone restaurants and cafés — uses printed collateral across every guest touchpoint. Super Printers supplies the full kit: menu cards, key-card sleeves, room collateral, breakfast vouchers and table tents.",
    typicalProducts: [
      { product: "Menu cards", useCase: "Fold-out 300 GSM laminated menu cards in A4 / A3 / custom sizes — wipeable matt or gloss laminate for food-service durability." },
      { product: "Key-card sleeves", useCase: "Hotel branded sleeves for magnetic-stripe and RFID room keys — 250 GSM card with cutout window, hotel logo, address printed on reverse." },
      { product: "Do-not-disturb / make-up-room hangers", useCase: "Double-sided 300 GSM card door hangers with die-cut hole — branded in hotel colours." },
      { product: "Breakfast vouchers", useCase: "Numbered perforated 1/4-A4 vouchers with hotel logo, room number space, daily-date printed area." },
      { product: "Table tents & tabletop cards", useCase: "Two- and three-fold tabletop tents for promotions, daily-special menus, cocktail lists; 350 GSM card with matt lamination." },
      { product: "Brochures & welcome packets", useCase: "Multi-page brochures detailing hotel facilities, services, local attractions; saddle-stitched or perfect-bound." },
    ],
    specs:
      "Wipeable matt or gloss lamination on menu cards (food-service ready). Pantone matching on hotel-brand colours. Die-cut sleeves with magnetic-stripe cutouts. Variable-data printing for sequential voucher numbering. Premium textured stocks for boutique hotels and resorts.",
    faqs: [
      {
        q: "Can you print durable menu cards for Chennai restaurants?",
        a: "Yes — fold-out A3 or A4 menu cards on 300 GSM card stock with matt or gloss lamination (wipe-clean, food-service grade). From ₹35/menu at 200-piece qty.",
      },
      {
        q: "Hotel key-card sleeves with hotel logo?",
        a: "Yes — custom-printed 250 GSM sleeves with magnetic-stripe / RFID cutout window, hotel logo and address. From ₹14/sleeve at 500 qty. 5 working days delivery to Chennai hotels.",
      },
      {
        q: "Numbered breakfast vouchers?",
        a: "Yes — perforated voucher pads with sequential numbering, room-number space, day-date area. Hotel-branded. From ₹85/pad of 50 vouchers; lower at 100+ pads.",
      },
    ],
  },
  {
    slug: "education-printing-chennai",
    industry: "Education",
    title: "School & College Printing Chennai | Magazines, IDs, Exam Papers",
    metaDescription:
      "Education printing in Chennai — school magazines, student ID cards, exam answer booklets, certificates, prospectuses. Super Printers serves Chennai schools, colleges, coaching centres.",
    h1: "Printing for Schools, Colleges & Coaching Centres in Chennai",
    intro:
      "Super Printers serves educational institutions across Chennai — from CBSE/ICSE/state-board schools in Anna Nagar, T. Nagar and Velachery to engineering colleges along OMR (SRM, Sairam), arts and science colleges (Loyola, Stella Maris, Presidency), and the coaching-centre cluster in Tambaram, Chromepet and Anna Nagar. Annual magazines, student ID cards, exam booklets, certificates and admissions collateral keep our presses busy through every academic cycle.",
    typicalProducts: [
      { product: "School / college magazines", useCase: "Saddle-stitched or perfect-bound A4 magazines (32-120 pages) with full-colour glossy cover and B/W or colour interior pages." },
      { product: "Student & staff ID cards", useCase: "PVC ID cards with photo, name, roll-number, class/department, emergency contact, blood group; magnetic-stripe / RFID optional." },
      { product: "Exam answer booklets", useCase: "Saddle-stitched answer booklets in 70 GSM maplitho with school logo, ruled pages, student details panel and tear-off rough-work pages." },
      { product: "Certificates & merit cards", useCase: "Premium 250 GSM textured or smooth-finish certificate stock with embossed school seal, foil-stamped logo, frame-able A4 portrait/landscape." },
      { product: "Prospectuses / admission brochures", useCase: "Perfect-bound A4 prospectuses (24-60 pages) showcasing courses, faculty, campus facilities, fee structure and admission process." },
      { product: "Question paper printing (secure)", useCase: "Sealed-cover question paper printing with confidential handling — for school internal exams and coaching-centre mock tests." },
    ],
    specs:
      "Bilingual Tamil-English support for primary-school content. Carbonless NCR option for hall-ticket attendance slips. Lamination on student ID cards. Pantone matching on school crests. Confidential / sealed-cover printing protocols for exam-paper printing.",
    faqs: [
      {
        q: "Annual school magazine printing in Chennai?",
        a: "Yes — saddle-stitched A4 magazines, 32-120 pages, full-colour glossy cover, B/W or colour interior. 100 copies of a 48-page magazine from ₹140-₹180 per copy.",
      },
      {
        q: "Student ID cards for Chennai schools?",
        a: "PVC ID cards with photo, name, class, roll number, blood group, emergency contact. ₹35 (basic PVC) to ₹85 (RFID). 100-card minimum, 5 working days. Lanyards with school colour included.",
      },
      {
        q: "Exam answer booklets in bulk?",
        a: "70 GSM maplitho saddle-stitched booklets with school logo, student details panel, ruled/unruled pages. From ₹12/booklet at 500-piece qty.",
      },
    ],
  },
  {
    slug: "it-printing-chennai",
    industry: "Information Technology",
    title: "IT Company Printing Chennai | ID Cards, Onboarding Kits, Branding",
    metaDescription:
      "IT printing services in Chennai — RFID employee ID cards, onboarding kits, conference badges, event lanyards, corporate brochures. Super Printers serves OMR, Manapakkam, Guindy IT corridor.",
    h1: "Printing for IT & ITES Companies in Chennai",
    intro:
      "Chennai's IT corridors — OMR (Sholinganallur, Thoraipakkam, Navalur, Siruseri SIPCOT), Manapakkam (DLF, RMZ Millenia), Guindy (Olympia, Tarapore Towers), Porur (DLF Cybercity), and the Mount Road head offices — generate steady print volume for employee onboarding, conference branding, customer-event collateral and corporate stationery. Super Printers serves Chennai IT/ITES companies with the bulk-batch, RFID-aware printing this sector demands.",
    typicalProducts: [
      { product: "RFID employee ID cards", useCase: "Mifare 1K / Plus / DESFire RFID PVC cards integrated with attendance and access-control systems — 100-1,000 piece batches per onboarding wave." },
      { product: "Onboarding kit folders", useCase: "Four-flap A4 presentation folders with welcome letter, training schedule, ID card slot, business-card holder — branded per company." },
      { product: "Conference badges & lanyards", useCase: "Printed delegate badges + sublimation-printed polyester lanyards with safety breakaway clip — for tech meetups, product launches, training programs." },
      { product: "Corporate brochures", useCase: "8-16 page A4 brochures with spot UV / soft-touch lamination — for sales-team customer pitches and trade-show handouts." },
      { product: "Roll-up standees & event branding", useCase: "800×2000 mm roll-up standees with aluminium base for booths at Sholinganallur SIPCOT events and customer-facing meeting rooms." },
      { product: "Branded notepads & corporate gifting", useCase: "A5 50-sheet branded notepads, desktop calendars, year-end corporate-gift print collateral." },
    ],
    specs:
      "Mifare 1K Classic, Mifare Plus, DESFire EV1/EV2 RFID inlays — compatible with most Chennai IT campus access-control systems (Honeywell, Bosch, Spintly, Matrix). Magnetic-stripe cards for cafeteria / canteen integration. Photo-capture workflow for batch ID printing — submit Excel + photo folder, we deliver ready-to-wear ID cards.",
    faqs: [
      {
        q: "RFID employee ID cards for OMR IT campuses?",
        a: "Yes — Mifare 1K (₹75-85/card), Mifare Plus (₹85-95/card), DESFire (₹105-125/card) at 200-piece qty. Compatible with most Chennai IT-campus access-control systems. 5 working days end-to-end.",
      },
      {
        q: "Bulk onboarding kit printing for new hires?",
        a: "Yes — A4 four-flap folder with welcome letter, ID card slot, business-card holder; full-colour 350 GSM with matt lamination. ₹95-₹120/folder at 100-piece qty. Bulk discount at 500+.",
      },
      {
        q: "Conference badges + lanyards for IT events?",
        a: "PVC delegate badges (₹35-65) + sublimation-printed 15mm polyester lanyards (₹38-55) bundle. 100-piece event kit complete in 4-5 working days.",
      },
    ],
  },
];
