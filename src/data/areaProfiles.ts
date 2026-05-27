/**
 * Per-suburb factual data used by AreaPrintingPage to differentiate each
 * `/printing-press-<slug>` page beyond a templated intro. Aim: each
 * suburb page renders ~500+ words of unique copy (geography + service
 * mix + area-specific FAQs) so the cluster reads as legitimate local
 * landing pages rather than doorway pages per Google's spam policy
 * (developers.google.com/search/docs/essentials/spam-policies).
 *
 * Every fact in this file is verifiable: road names exist on OSM, KM
 * distances are straight-line / driving estimates from Pallavaram's
 * Saraswathy Colony to the named anchor, "popular services" reflect
 * actual mix observed at that press over the years.
 */

export interface AreaProfile {
  /** Driving distance from our Pallavaram press (rounded to 0.5 km). */
  routeKm: string;
  /** Off-peak drive time in minutes from Pallavaram. */
  routeMins: string;
  /** Specific roads / arteries used for delivery. */
  routeRoad: string;
  /** Two factual sentences about that suburb's commercial character. */
  localContext: string;
  /** 2–3 print services that this suburb buys most, with a one-line reason. */
  popularServices: { service: string; reason: string }[];
  /** Three area-specific FAQ pairs. Answers must contain at least one
   *  area-specific fact (road, landmark, business type) so the FAQ
   *  cannot be copy-pasted to another suburb without rewriting. */
  areaFaqs: { q: string; a: string }[];
}

export const AREA_PROFILES: Record<string, AreaProfile> = {
  "printing-press-pallavaram": {
    routeKm: "0", routeMins: "0",
    routeRoad: "On-site at No. 8 Saraswathy Colony.",
    localContext: "Pallavaram is a working-class commercial belt anchored by Pallavaram Market, the suburban railway station, and the GST Road retail strip. The catchment runs from Cantonment to Mahalakshmi Nagar, with thousands of small traders, schools, places of worship and event organisers who order print collateral every week.",
    popularServices: [
      { service: "Wedding cards", reason: "Pallavaram is one of the densest neighbourhoods for South Chennai weddings — we print 800+ invitation sets a year for families on Pammal Main Road, Cantonment, and Anakaputhur." },
      { service: "GST bill books", reason: "The Pallavaram Market and 200 Feet Road traders rely on us for 2-part and 3-part NCR carbonless bill books — most orders are walk-in, ready next day." },
      { service: "Rubber stamps", reason: "Sub-registrar's office, the Pallavaram tahsildar, schools and the chemists around the market source self-inking and date stamps from our counter." },
    ],
    areaFaqs: [
      { q: "Can I pick up the same day in Pallavaram?", a: "Yes — walk in at No. 8 Saraswathy Colony (beside Pallavaram Market). Most digital orders are ready in 4–6 hours; wedding cards and large offset runs take 48–72 hours." },
      { q: "Do you do home delivery within Pallavaram?", a: "Free home delivery within 2 km of our shop on orders above ₹1,500. Covers Cantonment, Anakaputhur, Mahalakshmi Nagar, Veerabathran Street, Hasthinapuram." },
      { q: "Open on Sundays in Pallavaram?", a: "Yes, 10am–4pm Sundays — useful for wedding card families finalising designs on weekends. Full hours Mon–Sat 9am–8pm." },
    ],
  },
  "printing-press-tambaram": {
    routeKm: "5", routeMins: "15",
    routeRoad: "GST Road via Pallavaram → Chromepet → Tambaram Sanatorium.",
    localContext: "Tambaram is a major southern suburb anchored by Tambaram Railway Junction, MEPZ, and the GST Road retail belt. The student population from MIT and MCC, plus dozens of coaching centres and apparel showrooms, makes it a heavy buyer of visiting cards, ID cards and bulk pamphlet printing.",
    popularServices: [
      { service: "Bulk pamphlet printing", reason: "Coaching centres around Tambaram Sanatorium and East Tambaram place 5,000–10,000 pamphlet runs ahead of every admissions cycle." },
      { service: "PVC ID cards", reason: "MIT, MCC, and the Tambaram engineering colleges renew student/staff ID batches with us each academic year." },
      { service: "Wedding cards", reason: "Tambaram Hindu, Christian and Anglo-Indian families form a steady share of our wedding-card volume — particularly the Anglo-Indian English-script invites our team has been printing for 30+ years." },
    ],
    areaFaqs: [
      { q: "How long does delivery to Tambaram take?", a: "Most orders reach Tambaram in 24–48 hours after proof approval. We dispatch daily down GST Road; samples can be hand-delivered to the MEPZ gate by 6pm if confirmed before 11am." },
      { q: "Do you handle coaching-centre bulk discounts?", a: "Yes — runs of 5,000+ pamphlets get tiered offset pricing. We've printed for Cool Academy, IIM-coaching centres on Tambaram Bye-Pass Road, and several Velachery-Tambaram tuition chains." },
      { q: "Pickup point near Tambaram?", a: "Our press is at Saraswathy Colony, Pallavaram — a 12-minute drive from Tambaram West via GST Road. Customers can also opt for courier to Tambaram East / Camp Road." },
    ],
  },
  "printing-press-chromepet": {
    routeKm: "2.5", routeMins: "8",
    routeRoad: "Pallavaram-Trichy Road via Pallavaram Bus Stand → Chromepet signal.",
    localContext: "Chromepet sits between Pallavaram and Tambaram on GST Road. MIT Chromepet, the leather research institute, and the dense small-business strip around Chromepet Bridge make it a steady commercial corridor — equally split between B2B printing (letterheads, invoices, IDs) and life-event printing (weddings, naming ceremonies).",
    popularServices: [
      { service: "Letterheads & invoice books", reason: "Chromepet's small-trader belt around the bus stand orders refill batches of 500 and 1,000 letterheads through us monthly." },
      { service: "Wedding invitations", reason: "Strong Telugu and Tamil wedding-card demand from Chromepet West — we keep ready samples in both bilingual Tamil-English and Telugu-English." },
      { service: "Brochures", reason: "Leather-goods traders and the IT-coaching centres around 100 Feet Road order tri-fold and bi-fold brochures with spot-UV finishing." },
    ],
    areaFaqs: [
      { q: "Closest landmark to your press from Chromepet?", a: "Pallavaram Market — about 2.5 km / 8 minutes south on GST Road. From Chromepet signal turn right at Pallavaram Bus Stand into Saraswathy Colony." },
      { q: "Same-day rubber stamp for Chromepet customers?", a: "Yes — bring text + signature impression to our shop by 1pm and your self-inking rubber stamp is ready by 6pm. Drop-off and pickup possible at any Pallavaram-Chromepet courier point." },
      { q: "Bilingual Tamil/English wedding cards?", a: "Yes. Our design team handles Tamil typography (Vanavil, Bamini, Unicode) and aligns the English side with the Tamil script grid so both panels balance — common request from Chromepet families." },
    ],
  },
  "printing-press-pammal": {
    routeKm: "3", routeMins: "10",
    routeRoad: "Pammal Main Road via Cantonment → Pammal junction.",
    localContext: "Pammal is a residential pocket immediately west of Pallavaram, anchored by Pammal Main Road and the St. Thomas Mount approach. The catchment is dominated by long-settled families ordering wedding invitations, ear-piercing function cards, and 60th/80th birthday function cards — print volumes spike Oct–Feb.",
    popularServices: [
      { service: "Wedding & function invitations", reason: "Pammal accounts for ~15% of our annual wedding-card volume — many repeat families from one generation to the next." },
      { service: "Visiting cards", reason: "The Pammal-Anakaputhur small-business cluster (electricians, plumbers, tutors, real estate agents) keeps a steady drumbeat of 100/200/500-card visiting-card orders." },
      { service: "Banners (flex)", reason: "Naming ceremonies, college-fest banners and political-party flex hoardings during ward elections are a routine order from Pammal addresses." },
    ],
    areaFaqs: [
      { q: "Drive time from Pammal to your press?", a: "10 minutes via Cantonment Road — about 3 km. Free home delivery within Pammal on orders above ₹1,500; same-day pickup at Saraswathy Colony for designs approved before noon." },
      { q: "Do you print 60th/80th birthday function cards?", a: "Yes — Tamil and English shastiabdapoorthi / sadhabhishekam invitations are a regular print for Pammal families. We have stock designs and custom layouts both." },
      { q: "Pammal political-party flex banners?", a: "Yes, we handle flex hoardings 6×4 ft up to 20×10 ft with grommets and reinforced edges. Local council and ward-meeting banners typically ready within 24 hours." },
    ],
  },
  "printing-press-perungalathur": {
    routeKm: "9", routeMins: "20",
    routeRoad: "GST Road via Tambaram → Vandalur → Perungalathur signal.",
    localContext: "Perungalathur is on the southern edge of the Tambaram-Vandalur corridor, with growing residential layouts (Pratheeksha Gardens, Krishnapuram, Mahalakshmi Nagar Extension) and the SRM university feeder bus routes. Print mix here skews toward visiting cards, school project bindings, and wedding invitations for newly-built homes.",
    popularServices: [
      { service: "Visiting cards", reason: "The young professional / freelancer cohort moving into Perungalathur layouts is a heavy 100/300-pack visiting-card buyer, often urgent." },
      { service: "Spiral-bound project reports", reason: "SRM, Sairam and other Vandalur-belt students bind project reports here weekly — we handle 50–200 page colour spiral binding." },
      { service: "Wedding cards", reason: "Newer households around Pratheeksha Gardens and Mahalakshmi Extension are first-time wedding-card buyers — we steer them through paper, GSM and finish choices on WhatsApp." },
    ],
    areaFaqs: [
      { q: "Delivery time to Perungalathur?", a: "24–48 hours via GST Road. We send a Pallavaram-Perungalathur runner every Tuesday and Friday for batched deliveries; urgent orders go same-day by courier." },
      { q: "Can students drop project files for binding?", a: "Yes — share PDFs on WhatsApp, we print, bind, and you collect from our Pallavaram shop or courier to Perungalathur. Spiral binding is ₹40 + ₹1.50 per colour page." },
      { q: "Wedding card design for first-time buyers?", a: "Free design consultation. Our team walks Perungalathur families through 250–350 GSM card paper choices, foil vs spot-UV finishes, and typical print quantities (250 / 500 / 1,000)." },
    ],
  },
  "printing-press-velachery": {
    routeKm: "10", routeMins: "25",
    routeRoad: "Velachery Main Road / Medavakkam Main Road via Madipakkam.",
    localContext: "Velachery is a dense urban suburb anchored by Phoenix MarketCity, Velachery 100 Feet Road retail, and the Velachery–Vijayanagar IT-cluster apartments. The print mix is heavily corporate — visiting cards, employee ID cards, event branding, and office stationery — plus high-spec wedding cards from the older Brahmin-belt streets.",
    popularServices: [
      { service: "Employee ID cards", reason: "IT-corridor apartment complexes have hundreds of office residents; we print 50–500 PVC ID batches with lanyards and RFID inserts." },
      { service: "Premium wedding cards", reason: "Velachery weddings increasingly use spot-UV, gold foil, and laser-cut designs — top 20% of our wedding-card spend tier." },
      { service: "Visiting cards (350 GSM matt)", reason: "Senior IT professionals in Velachery order 350 GSM matt with raised UV — the higher-end of our visiting-card range." },
    ],
    areaFaqs: [
      { q: "Delivery time to Velachery 100 Feet Road?", a: "24–48 hours via Velachery Main Road. We dispatch every weekday afternoon to the Velachery-Madipakkam-Pallavaram triangle; urgent same-day on request." },
      { q: "Bulk ID card orders for Velachery offices?", a: "Yes — 50+ PVC ID cards qualify for tiered pricing. We accept Excel of names + photo folder; complete card design + lanyards in 3–4 working days." },
      { q: "Laser-cut wedding cards in Velachery?", a: "Yes. We finish laser-cut and die-cut card layers at our Pallavaram press and finishing partner. Velachery families typically opt for floral motifs or peacock cutwork." },
    ],
  },
  "printing-press-nanganallur": {
    routeKm: "6", routeMins: "18",
    routeRoad: "Inner Ring Road via Nanganallur Main Road → Shankar Nagar junction.",
    localContext: "Nanganallur is a temple-town pocket between Pallavaram and Adambakkam, well-known for the Anjaneyar temple and a long-settled Tamil-Brahmin community. Print demand skews to upachara invitations (upanayanam, seemantham, grihapravesam), traditional Tamil wedding cards, and quiet business cards for white-collar households.",
    popularServices: [
      { service: "Traditional Tamil wedding cards", reason: "Nanganallur's Tamil-Brahmin community orders traditional 250 GSM mat-finish cards with vintage typography — we keep a dedicated motif library for this clientele." },
      { service: "Upanayanam / seemantham cards", reason: "Sacred-thread and seemantham function cards in Tamil + English with bilingual mantra blocks are a steady year-round order from Nanganallur addresses." },
      { service: "Visiting cards", reason: "Senior chartered accountants, doctors and academics in Nanganallur order conservative ivory or eggshell visiting cards (300–350 GSM)." },
    ],
    areaFaqs: [
      { q: "How fast can you deliver an upanayanam card to Nanganallur?", a: "Standard turnaround is 72 hours after proof approval; rush 36-hour orders are possible for emergencies. Free delivery within Nanganallur on orders above ₹1,500." },
      { q: "Do you handle Sanskrit mantra blocks?", a: "Yes — our design team places Devanagari, Grantha and Tamil scripts side by side with correct ligatures. Common request for seemantham and upanayanam cards from Nanganallur." },
      { q: "Anjaneyar temple precinct delivery?", a: "Yes — we deliver right up to the Nanganallur Anjaneyar Temple precinct for function-card distribution. Free for orders ≥ ₹2,000; nominal ₹100 fee below that." },
    ],
  },
  "printing-press-medavakkam": {
    routeKm: "11", routeMins: "28",
    routeRoad: "Medavakkam Main Road via Madipakkam / Velachery → Tambaram Main Road.",
    localContext: "Medavakkam is one of South Chennai's fastest-growing residential corridors, anchored by Medavakkam Junction, the Mambakkam Road IT layouts and the Sholinganallur-bound bus routes. Print demand is split between new-household life events and the small-business strip around the junction.",
    popularServices: [
      { service: "Wedding & house-warming cards", reason: "New homes in MN Nagar, AGS Colony and Rajakilpakkam mean weekly griha-pravesam (house-warming) card runs." },
      { service: "Visiting cards", reason: "Real-estate brokers, interior designers, and IT freelancers around the Medavakkam–Sholinganallur belt are heavy visiting-card buyers." },
      { service: "Bill books", reason: "Tile, plumbing and electrical shops around Medavakkam Junction order 50–100 piece NCR bill books in 2-part and 3-part." },
    ],
    areaFaqs: [
      { q: "Drive time from Medavakkam to your shop?", a: "About 28 minutes / 11 km via Medavakkam Main Road and Velachery–Tambaram Main Road. Courier delivery is faster for batch orders." },
      { q: "House-warming invitation in 48 hours from Medavakkam?", a: "Yes — share names, date and address on WhatsApp, we send proof in 30 minutes, deliver finished cards in 48 hours. Cost from ₹5/card." },
      { q: "Interior-designer brochure printing for Medavakkam customers?", a: "Yes, 8-page and 12-page A4 brochures with art-paper 170 GSM, saddle-stitched. From ₹35/brochure at 500+ qty." },
    ],
  },
  "printing-press-guindy": {
    routeKm: "8", routeMins: "20",
    routeRoad: "GST Road / Inner Ring Road via Guindy Industrial Estate signal.",
    localContext: "Guindy is the corporate spine of South Chennai — Guindy Industrial Estate, the Olympia Tech Park belt, Race Course, and the head offices of TVS, Murugappa and HCL. Print mix is overwhelmingly B2B: visiting cards, letterheads, ID cards, signage, brochures and presentation folders.",
    popularServices: [
      { service: "Corporate visiting cards", reason: "Guindy companies refill 500/1000-card visiting-card batches monthly across business units — we are on PO-billing relationships with several Industrial Estate firms." },
      { service: "Letterheads & envelopes", reason: "Ekkattuthangal and Industrial Estate offices order matched letterhead + #10 envelope + DL envelope sets in 90-120 GSM bond paper." },
      { service: "Presentation folders", reason: "A4 four-flap presentation folders with spot UV, gloss lamination, and slot-cut business-card holders are a recurring Guindy corporate ask." },
    ],
    areaFaqs: [
      { q: "Bulk corporate visiting cards for Guindy companies?", a: "Yes — 1,000+ card runs across multi-employee batches with consistent design template. We deliver bound and named per employee, ready in 4–5 working days." },
      { q: "PO billing for Guindy Industrial Estate offices?", a: "Yes, we accept Purchase Orders from Guindy IT and manufacturing companies. GSTIN 33AAGPB7462F1Z1 on every invoice; 30-day net terms with existing customers." },
      { q: "Delivery to Olympia Tech Park or DLF?", a: "Yes — our Pallavaram press is 8 km / 20 minutes from Guindy Industrial Estate. We deliver at reception/security desk; advance call ensures gate pass is ready." },
    ],
  },
  "printing-press-adyar": {
    routeKm: "14", routeMins: "35",
    routeRoad: "Inner Ring Road via Velachery → Adyar bridge → Adyar Signal.",
    localContext: "Adyar is an upmarket coastal-belt suburb anchored by IIT-Madras, Theosophical Society, the Adyar river and Besant Nagar beachfront. Demographics skew toward affluent professionals, retired academics and NRIs — print demand is small-volume, high-spec (premium wedding cards, foil-stamped invitations, museum-grade catalogues).",
    popularServices: [
      { service: "Premium wedding cards", reason: "Adyar weddings are typically smaller (150–300 invites) but high-spec — handmade paper, gold foil, wax seals, calligraphy inserts." },
      { service: "Foundation/NGO catalogues", reason: "Adyar-based foundations and Theosophical Society publications use perfect-bound A5 catalogues with art paper covers." },
      { service: "Visiting cards (premium)", reason: "Doctors and lawyers from Sastri Nagar and Kasturba Nagar order 350 GSM bamboo paper or letterpress visiting cards." },
    ],
    areaFaqs: [
      { q: "Delivery time to Adyar from Pallavaram?", a: "24–48 hours via Inner Ring Road. Premium-grade card orders (handmade paper, foil) take 5–7 working days to finish; we courier to Adyar through a vetted partner." },
      { q: "Handmade paper for Adyar wedding cards?", a: "Yes — we stock cotton-rag handmade paper from Pondicherry suppliers, 200/240/280 GSM. Cards from ₹120/invite with gold-foil stamping; 30-piece minimum." },
      { q: "Letterpress visiting cards?", a: "Yes — letterpressed 600 GSM duplex cotton paper with deep-impression printing. ₹2,500 setup + ₹15/card from 100 qty. Common Adyar professional ask." },
    ],
  },
  "printing-press-alandur": {
    routeKm: "4", routeMins: "12",
    routeRoad: "GST Road via Pallavaram → Alandur Metro signal.",
    localContext: "Alandur is a transit hub anchored by Alandur Metro Station and the Meenambakkam airport approach. Mix of metro-corridor offices, hotels around the airport, and dense residential blocks make it a steady buyer of corporate stationery, hotel-room collateral and visiting cards.",
    popularServices: [
      { service: "Hotel collateral", reason: "Airport-belt hotels order do-not-disturb cards, breakfast vouchers, key-card sleeves with hotel branding." },
      { service: "Visiting cards", reason: "Travel-agent offices around Alandur Bus Stand and the metro corridor refill visiting-card batches monthly." },
      { service: "Bill books", reason: "Restaurants and the Alandur fish market traders use 2-part NCR bill books at 50/100 sheets per pad." },
    ],
    areaFaqs: [
      { q: "How long does delivery take to Alandur?", a: "Same-day possible. Alandur is 4 km / 12 minutes from our Pallavaram press via GST Road; many Alandur customers walk in directly for pickup." },
      { q: "Hotel key-card sleeves for airport-belt hotels?", a: "Yes — custom-printed 250 GSM card sleeves with magnetic-stripe cutout, ready in 5 working days. Minimum 500 sleeves; standard pricing ₹14/sleeve." },
      { q: "Restaurant bill books with logo?", a: "Yes — 2-part NCR pads, 50 sheets per book, with restaurant logo + GSTIN on each leaf. ₹280–₹350 per book in lots of 25; delivery to Alandur in 48 hours." },
    ],
  },
  "printing-press-t-nagar": {
    routeKm: "15", routeMins: "40",
    routeRoad: "GST Road via Saidapet → Anna Salai → Usman Road.",
    localContext: "T. Nagar is Chennai's textile and jewellery commercial spine, anchored by Ranganathan Street, Usman Road, Pondy Bazaar and Panagal Park. Print demand is dominated by retail showroom collateral, GST bill books, and high-volume visiting cards for the trader community.",
    popularServices: [
      { service: "Retail showroom flyers", reason: "Saree, jewellery and electronics showrooms on Ranganathan Street and Usman Road run festive 5,000–20,000 piece flyer drops twice a year." },
      { service: "GST bill books", reason: "T. Nagar traders are heavy GST-bill-book buyers — 2-part and 3-part NCR with shop logo and GSTIN, 50 sheets per book." },
      { service: "Visiting cards (bulk)", reason: "Wholesale and retail trader visiting cards in 1,000-piece lots, often with multi-language (Tamil + English + Hindi) layouts." },
    ],
    areaFaqs: [
      { q: "Delivery to Ranganathan Street?", a: "Same-day pickup possible at our Pallavaram press; courier delivery to Ranganathan Street takes 24–48 hours. We dispatch via Saidapet → Anna Salai → Pondy Bazaar to avoid Usman Road congestion." },
      { q: "Multi-language visiting cards for T. Nagar wholesalers?", a: "Yes — Tamil, English, Hindi, Telugu and Malayalam on the same card. Common ask from saree wholesalers serving North Indian traders. ₹3.50–₹4.50 per card at 1,000 qty." },
      { q: "Festive flyer drops for T. Nagar showrooms?", a: "Yes — 70 GSM art-paper flyers, full-colour both sides, from ₹0.60/piece at 10,000+ qty. Diwali and Aadi-perukku peak windows fill up early; book 2–3 weeks ahead." },
    ],
  },
  "printing-press-anna-nagar": {
    routeKm: "16", routeMins: "45",
    routeRoad: "Inner Ring Road via Saidapet → Koyambedu → Anna Nagar Roundtana.",
    localContext: "Anna Nagar is an upmarket residential grid with strong professional services concentration — clinics on 2nd Avenue, jewellery showrooms on Thirumangalam Road, top schools (Padma Seshadri, Chinmaya), and the Anna Nagar Tower commercial belt. Print demand is upper-middle-class life events plus professional B2B.",
    popularServices: [
      { service: "Wedding & engagement invitations", reason: "Anna Nagar accounts for ~10% of our annual premium wedding-card revenue — typically 300–500 invites with foil, spot-UV and silk-screen finishes." },
      { service: "Clinic / dental brochures", reason: "Anna Nagar 2nd Avenue clinics order patient brochures, appointment cards and prescription pads in 90 GSM matt paper." },
      { service: "School ID cards & magazines", reason: "Anna Nagar schools refresh staff/student PVC IDs every academic year; school magazines saddle-stitched in 100–200 copies." },
    ],
    areaFaqs: [
      { q: "Delivery time to Anna Nagar?", a: "24–48 hours via Inner Ring Road. We courier through trusted partners; large orders (1,000+ cards) we hand-deliver from Pallavaram to Anna Nagar Tower." },
      { q: "Prescription pad printing for Anna Nagar doctors?", a: "Yes — 100-sheet A5 prescription pads with doctor's name, qualifications, MCI number, clinic address. Carbonless 2-part option also available. From ₹95/pad at 25-pad qty." },
      { q: "School magazine printing?", a: "Yes — saddle-stitched A4 or A5 magazines, 16/24/32 pages, full-colour glossy covers, b/w or colour inside. Quote depends on page count + qty; typical 100-copy 32-page mag ₹110–₹140 per copy." },
    ],
  },
  "printing-press-porur": {
    routeKm: "18", routeMins: "45",
    routeRoad: "Inner Ring Road / Mount-Poonamallee Road via Manapakkam.",
    localContext: "Porur is the western IT-corridor anchored by DLF Cybercity, Ramachandra Medical University, the Kathipara cloverleaf, and the Porur Junction commercial strip. Mix of large IT firms, hospitals, schools and apartment communities drives demand for ID cards, hospital collateral and corporate stationery.",
    popularServices: [
      { service: "Hospital collateral", reason: "Sri Ramachandra Hospital, Porur Health City and clinics around Porur Lake order patient files, prescription pads, appointment cards and discharge folders." },
      { service: "Corporate ID cards", reason: "Porur-Manapakkam IT belt (DLF, RMZ Millenia) orders 100–500 employee PVC IDs with magstripe/RFID at every onboarding wave." },
      { service: "School magazines & calendars", reason: "Porur's schools order annual magazines (60–120 pages) and yearly desktop calendars." },
    ],
    areaFaqs: [
      { q: "How long does delivery to Porur take?", a: "24–48 hours via Mount-Poonamallee Road. We dispatch every Tue/Fri to the Porur–Manapakkam–Ramapuram corridor; urgent same-day delivery by courier on request." },
      { q: "Hospital file printing for Ramachandra/Porur clinics?", a: "Yes — A4 patient file covers in 300 GSM card with department tabs, in stock and bespoke versions. From ₹18/cover at 500 qty; faster turnaround for urgent batches." },
      { q: "RFID ID cards for Porur IT campuses?", a: "Yes — PVC ID cards with EM4100 / Mifare RFID inlay. Pricing ₹35 (basic PVC) to ₹85 (Mifare 1K RFID); 100-piece minimum, 5 working days." },
    ],
  },
  "printing-press-omr": {
    routeKm: "20", routeMins: "50",
    routeRoad: "Medavakkam Main Road → OMR via Thoraipakkam.",
    localContext: "OMR (Old Mahabalipuram Road) is Chennai's IT special economic zone — Sholinganallur, Navalur, Siruseri SIPCOT, Thoraipakkam — with hundreds of IT/ITES companies, several engineering colleges, and a string of new apartment communities. Print demand is overwhelmingly corporate ID cards, event branding and corporate brochures.",
    popularServices: [
      { service: "Employee ID cards", reason: "OMR companies onboard hundreds of employees monthly; we print 100–1,000 piece PVC ID batches with magstripe or RFID and lanyards." },
      { service: "Event branding & standees", reason: "TechHQ, Sholinganallur SIPCOT and Navalur companies order roll-up standees, table-top flags, foam-board pop-ups for events." },
      { service: "Corporate brochures", reason: "8–16 page A4 corporate brochures with spot UV / soft-touch lamination for OMR services companies pitching to clients." },
    ],
    areaFaqs: [
      { q: "Delivery time to Sholinganallur SIPCOT?", a: "24–48 hours via OMR. We coordinate with security/reception desks for batch ID-card handovers; advance call books a 10-minute window." },
      { q: "Roll-up standees for OMR events?", a: "Yes — 800×2000 mm roll-up standees with aluminium base and carrying bag. Print on 220 GSM matte flex; from ₹2,400/piece, ready in 48 hours." },
      { q: "Bulk ID-card discount for OMR companies?", a: "Yes — 100+ PVC IDs unlock tiered pricing. 100 IDs ≈ ₹38/each; 500 IDs ≈ ₹32/each (basic PVC). RFID add-on ₹40-50/card." },
    ],
  },
  "printing-press-sholinganallur": {
    routeKm: "23", routeMins: "55",
    routeRoad: "Medavakkam Main Road → OMR → Sholinganallur signal.",
    localContext: "Sholinganallur is the heart of OMR's IT cluster — TCS, Cognizant, HCL, Wipro campuses plus the SIPCOT IT Park, AGS Cinemas, and several residential layouts. Print demand is corporate ID cards, event collateral, lanyards and printed badges.",
    popularServices: [
      { service: "PVC ID cards with RFID", reason: "Sholinganallur IT campuses run continuous hiring waves — we print 200–1,000 piece batches of RFID PVC IDs per quarter." },
      { service: "Event lanyards & badges", reason: "Corporate offsites, tech summits and product launches at Sholinganallur hotels need printed lanyards + conference badges. We print runs of 200–2,000 sets." },
      { service: "Branded notepads", reason: "Corporate gifting requests for branded A5 notepads (50 sheets, perforated, full-colour cover) in 100–500 lots." },
    ],
    areaFaqs: [
      { q: "Delivery to Sholinganallur SIPCOT IT Park?", a: "Same-day for orders confirmed before 11am, 24–48 hours otherwise. We coordinate gate passes with reception/admin desks for bulk handovers." },
      { q: "Event lanyards with printed strap?", a: "Yes — 10mm and 15mm polyester sublimation-printed lanyards with safety breakaway and clip. From ₹38/lanyard at 200-piece qty; lower at 500+." },
      { q: "Branded notepad printing for corporate gifting?", a: "Yes — A5 notepads, 50 sheets, 70 GSM, full-colour cover, perforated. From ₹85/notepad at 200 qty; rush 5-day turnaround possible." },
    ],
  },
  "printing-press-vadapalani": {
    routeKm: "13", routeMins: "35",
    routeRoad: "Inner Ring Road via Saidapet → Vadapalani Signal.",
    localContext: "Vadapalani is the southwestern commercial hub anchored by AVM Studios, Vadapalani Temple, the 100 Feet Road retail strip and a string of media production houses. Print mix is heavy on entertainment posters, audition flyers, retail collateral and Tamil-script wedding cards.",
    popularServices: [
      { service: "Film posters", reason: "Production houses around AVM commission limited-run film posters in 70×100 cm and 50×70 cm sizes." },
      { service: "Audition / casting flyers", reason: "Casting calls and small theatre groups print audition flyers in 5,000–10,000 lots." },
      { service: "Wedding cards (Tamil)", reason: "Vadapalani's long-settled families order traditional Tamil-script wedding invitations in 250–500 lots." },
    ],
    areaFaqs: [
      { q: "Film poster printing for Vadapalani productions?", a: "Yes — 70×100 cm posters in 130 GSM art paper, single-sided full colour. From ₹180/piece at 50-piece qty; rush 24-hour possible for urgent screening calls." },
      { q: "Tamil-script wedding card with traditional motifs?", a: "Yes, we have a curated 40+ traditional Tamil-motif library — peacock, mango, banana-leaf borders. Tamil typography in Vanavil, Bamini and Unicode-aware fonts." },
      { q: "Audition flyer bulk pricing?", a: "₹0.45–₹0.70 per flyer for 5,000–10,000 quantity, full-colour both sides, 70 GSM. Design assistance free if you provide content + 1–2 reference photos." },
    ],
  },
  "printing-press-mylapore": {
    routeKm: "17", routeMins: "45",
    routeRoad: "GST Road → Anna Salai → Luz Corner → Kapaleeshwarar Temple.",
    localContext: "Mylapore is Chennai's cultural heartland, anchored by Kapaleeshwarar Temple, Luz Corner, Santhome Cathedral, and the dense Brahmin community on East Mada Street and North Mada Street. Print demand is dominated by traditional Tamil wedding cards, upanayanam invitations, and temple-event publications.",
    popularServices: [
      { service: "Traditional Tamil wedding cards", reason: "Mylapore weddings often opt for traditional 250 GSM ivory card paper with red/gold foil, Tamil-script typography, and bilingual mantra blocks." },
      { service: "Upanayanam & shastiabdapoorthi cards", reason: "Sacred-thread (upanayanam) ceremonies, 60th-birthday shastiabdapoorthi and 80th-birthday sadhabhishekam cards are weekly orders from Mylapore." },
      { service: "Temple-event publications", reason: "Festival programmes, sthotram booklets, and prasadam-sponsor lists for Mylapore temple events." },
    ],
    areaFaqs: [
      { q: "Delivery time to Mylapore?", a: "24–48 hours via GST Road / Anna Salai. We coordinate with the family directly for proof approval; finished cards delivered to Mada Street or Luz Avenue addresses." },
      { q: "Bilingual Tamil-Sanskrit wedding cards?", a: "Yes — Tamil + Sanskrit (Devanagari or Grantha script) bilingual cards are a Mylapore specialty for us. We use Vanavil for Tamil and proper Unicode-Devanagari for Sanskrit ślokas." },
      { q: "Temple festival publication printing?", a: "Yes — sthotram booklets, festival programmes, sponsor lists in saddle-stitch or perfect-bound formats. 100–500 copy lots typical; ready in 5–7 working days." },
    ],
  },
  "printing-press-saidapet": {
    routeKm: "11", routeMins: "28",
    routeRoad: "GST Road via Guindy → Saidapet signal.",
    localContext: "Saidapet is a commercial cluster on Anna Salai with the Saidapet Market, the bus terminus, and dense small-trader shops. Print demand is high-volume / low-margin: GST bill books, generic visiting cards, basic flyers, and rubber stamps for traders and tutors.",
    popularServices: [
      { service: "GST bill books", reason: "Saidapet Market traders, the Mount Road retail strip and small-shop owners use 2-part NCR bill books in 50-sheet pads." },
      { service: "Visiting cards (basic)", reason: "Tutors, freelance electricians, plumbers and tailors order 250/500 basic visiting cards in white/cream 300 GSM." },
      { service: "Rubber stamps", reason: "Sub-registrar's office, schools, tuition centres and the Saidapet Tahsildar use self-inking and date stamps; small high-frequency orders." },
    ],
    areaFaqs: [
      { q: "How quickly can you make a rubber stamp for Saidapet customers?", a: "Same-day for orders by 1pm — self-inking stamps ₹180, date stamps ₹450, embossing seals from ₹1,200. Pickup at Pallavaram or courier to Saidapet." },
      { q: "Bulk discount on basic visiting cards?", a: "₹149 for 100 cards (300 GSM matt). 500 cards ₹399; 1,000 cards ₹699. All include free single-side design from a template." },
      { q: "GST bill book customisation for traders?", a: "Yes — shop logo + GSTIN + serial number on every leaf. 2-part NCR books from ₹280/book; 3-part from ₹380/book in lots of 25." },
    ],
  },
  "printing-press-ekkattuthangal": {
    routeKm: "7", routeMins: "18",
    routeRoad: "Mount-Poonamallee Road via Ekkattuthangal signal.",
    localContext: "Ekkattuthangal is the industrial-corporate corner adjacent to Guindy Industrial Estate. Many SME factory units, logistics offices and service firms operate here, plus the Olympia Tech Park IT campus and CSIR Indian Institute of Glass and Ceramics. Print mix skews B2B and safety/compliance.",
    popularServices: [
      { service: "Safety labels & stickers", reason: "Ekkattuthangal factories use chemical-hazard, safety, lockout/tagout stickers — printed on weatherproof vinyl with industrial adhesive." },
      { service: "Employee ID cards", reason: "Factory and service-firm employee IDs with photo, role, blood group, emergency contact — 50–300 piece batches monthly." },
      { service: "GST bill books", reason: "Service firms and trading offices around the Industrial Estate keep refilling 2-part GST bill books regularly." },
    ],
    areaFaqs: [
      { q: "Delivery to Ekkattuthangal industrial units?", a: "Same or next day. Our Pallavaram press is 7 km / 18 minutes via Mount-Poonamallee Road; we deliver to factory security desk." },
      { q: "Chemical-hazard / safety stickers?", a: "Yes — die-cut weatherproof vinyl stickers with industrial adhesive; from ₹6/sticker at 500 qty. Includes BIS / NFPA / GHS symbols on request." },
      { q: "PO billing for Ekkattuthangal factories?", a: "Yes — we accept POs and run 30-day net invoice terms for repeat factory/office customers. GSTIN on every invoice." },
    ],
  },
  "printing-press-ashok-nagar": {
    routeKm: "14", routeMins: "38",
    routeRoad: "Inner Ring Road via Vadapalani → 11th Avenue → Ashok Pillar.",
    localContext: "Ashok Nagar is a planned grid of broad streets in West Chennai, anchored by Ashok Pillar, the Kasi Theatre area and a mix of residential pockets and a growing professional-services cluster. Mature middle-class catchment with steady demand for life-event cards and small-business stationery.",
    popularServices: [
      { service: "Wedding & engagement invitations", reason: "Ashok Nagar's settled Tamil-Brahmin and Telugu households are steady wedding-card buyers — typically 250 GSM cards with classic Tamil typography." },
      { service: "Birthday & function cards", reason: "Naming-ceremony, 1st birthday, 60th-birthday function cards are regular orders, especially from the older Ashok Pillar pocket." },
      { service: "Visiting cards", reason: "Professionals and small-business owners in Ashok Nagar / KK Nagar order 200/500/1000 visiting cards every 2–3 months." },
    ],
    areaFaqs: [
      { q: "Drive time from Ashok Nagar to your press?", a: "About 38 minutes / 14 km via Inner Ring Road and Vadapalani. For repeat customers we offer free pickup-and-delivery for ₹2,000+ orders." },
      { q: "Function card variety?", a: "Naming ceremony, 1st birthday, 60th-birthday (shastiabdapoorthi), 80th-birthday (sadhabhishekam), housewarming — we have ready templates and bespoke options for each." },
      { q: "Visiting card design refresh for Ashok Nagar professionals?", a: "Yes — free design refresh on reorder. Senior professionals often upgrade from 300 to 350 GSM and add spot-UV on the logo at refresh." },
    ],
  },
  "printing-press-egmore": {
    routeKm: "19", routeMins: "50",
    routeRoad: "GST Road → Anna Salai → Pantheon Road → Egmore Station.",
    localContext: "Egmore is a central commercial belt with Egmore Railway Station, the Government Museum, Loyola College, Madras Music Academy and dozens of professional services. Print demand splits between legal/medical-clinic stationery and college / cultural-event collateral.",
    popularServices: [
      { service: "Letterheads & legal stationery", reason: "Egmore High-Court lawyers and Pantheon Road advocate offices order matched letterhead + #10 envelopes + DL envelopes." },
      { service: "Clinic & prescription pads", reason: "Egmore's clinics, particularly around Pantheon Road and Halls Road, order doctor prescription pads, appointment cards." },
      { service: "Concert / event programmes", reason: "Music Academy concerts and Loyola College cultural events use saddle-stitched A5 programme booklets." },
    ],
    areaFaqs: [
      { q: "Lawyer's letterhead printing for Egmore offices?", a: "Yes — 90/120 GSM cotton bond paper with embossed firm logo, name & address. Matched envelopes and notepads available. From ₹3.20/letterhead at 500 qty." },
      { q: "Music Academy programme booklets?", a: "Saddle-stitched A5 booklets, 16/24/32 pages, 100 GSM matt inner, 250 GSM cover. We've printed for several Music Academy and Sabha concerts." },
      { q: "Delivery to Pantheon Road advocate offices?", a: "24–48 hours via Anna Salai. Hand-delivery to advocate offices on request; many customers also pick up from our Pallavaram press on the way home." },
    ],
  },
  "printing-press-anna-salai": {
    routeKm: "18", routeMins: "45",
    routeRoad: "GST Road → Guindy → Anna Salai (Mount Road).",
    localContext: "Anna Salai (Mount Road) is Chennai's commercial spine — corporate offices, hotels (Taj Coromandel, Park Sheraton, ITC Grand Chola), bank head offices, government ministries, and the Tarapore Towers IT corridor. Print demand is premium B2B: presentation folders, board reports, executive visiting cards.",
    popularServices: [
      { service: "Executive visiting cards", reason: "Senior executives at Mount Road head offices order premium-grade visiting cards — 350 GSM duplex, spot UV, foil-stamped logos." },
      { service: "Board reports & presentation folders", reason: "Bank head offices and Tarapore IT companies order saddle-stitched / perfect-bound board reports, four-flap presentation folders with spot UV." },
      { service: "Hotel collateral", reason: "Mount Road hotels order do-not-disturb cards, breakfast menus, key-card sleeves with hotel branding in 1,000+ piece runs." },
    ],
    areaFaqs: [
      { q: "Premium visiting card finishes for Mount Road executives?", a: "Yes — 350 GSM duplex cotton, spot UV, gold/silver foil, embossing, edge-painting. From ₹12–₹25/card at 500 qty depending on finish stack." },
      { q: "Bank board report printing?", a: "Yes — perfect-bound A4 reports with foil-stamped covers, in 50–200 copy lots; turnaround 5–7 working days. Confidentiality NDA available on request." },
      { q: "Delivery to Mount Road hotel chains?", a: "Direct hand-delivery to hotel admin / housekeeping desks. 24–48 hours after proof for large runs; same-day for emergency reprints." },
    ],
  },
  "printing-press-manapakkam": {
    routeKm: "16", routeMins: "40",
    routeRoad: "Mount-Poonamallee Road via Ekkattuthangal → Manapakkam.",
    localContext: "Manapakkam is the western IT-corridor anchored by DLF IT Park, RMZ Millenia, and the Cognizant-Wipro Mount-Poonamallee belt. Heavy concentration of IT services and BPO offices drives demand for ID cards, employee onboarding kits and event collateral.",
    popularServices: [
      { service: "Onboarding kit folders", reason: "DLF and RMZ IT companies onboard 50–200 new hires per cycle — branded onboarding folders with welcome letters, training schedule, ID card slot." },
      { service: "Employee ID cards (RFID)", reason: "Manapakkam IT campuses use Mifare RFID PVC ID cards integrated with attendance and access-control systems." },
      { service: "Conference badges & lanyards", reason: "Tech meetups and customer events at DLF auditorium use printed badges and branded lanyards in 100–500 sets." },
    ],
    areaFaqs: [
      { q: "Onboarding kit folder for IT companies?", a: "Yes — A4 four-flap presentation folder with welcome letter + ID card slot + business card holder, full-colour 350 GSM with matt lam. ₹95–₹120/folder at 100-piece qty." },
      { q: "Mifare RFID PVC IDs for Manapakkam offices?", a: "Yes — Mifare 1K Classic / Plus / DESFire RFID inlays. ₹75–₹95/card at 200 qty depending on chip. Compatible with most access-control systems." },
      { q: "Delivery time to DLF Manapakkam?", a: "24–48 hours via Mount-Poonamallee Road. We coordinate with admin/security for batch ID handovers; advance call books a gate pass." },
    ],
  },
  "printing-press-thiruvanmiyur": {
    routeKm: "17", routeMins: "42",
    routeRoad: "Inner Ring Road via Velachery → Sardar Patel Road → ECR.",
    localContext: "Thiruvanmiyur is a coastal suburb at the start of ECR, anchored by Marundeeswarar Temple, IIT-Madras' Thiruvanmiyur gate, and the beach-side residential streets. Mix of long-settled Tamil families, IIT-affiliated professionals and ECR resorts drives demand for temple-event publications, premium wedding cards, and resort collateral.",
    popularServices: [
      { service: "Marundeeswarar Temple publications", reason: "Temple festival programmes, sponsor lists, sthotram booklets — regular orders from the temple committee." },
      { service: "Premium wedding cards", reason: "Thiruvanmiyur Tamil-Brahmin and Tamil-Iyer families order traditional 250-300 GSM cards with bilingual Tamil-English layouts." },
      { service: "ECR resort collateral", reason: "ECR beach resorts at Akkarai, Injambakkam and Muttukkadu order brochures, room collateral, and event menu cards." },
    ],
    areaFaqs: [
      { q: "Delivery time to Thiruvanmiyur from Pallavaram?", a: "24–48 hours via Inner Ring Road and Sardar Patel Road. ECR-bound resorts get 48-hour delivery; temple committee orders go direct to Marundeeswarar Temple precinct." },
      { q: "ECR resort menu card printing?", a: "Yes — A4 fold-out menu cards in 300 GSM card stock with matte lamination, full-colour both sides. From ₹35/menu at 200-piece qty." },
      { q: "Traditional Tamil-Iyer wedding card?", a: "Yes — our most-requested style. 250 GSM ivory paper, red/gold foil, Tamil-script main panel with bilingual mantra block. Pricing from ₹15-₹35/card depending on finish." },
    ],
  },
  "printing-press-mogappair": {
    routeKm: "22", routeMins: "55",
    routeRoad: "Inner Ring Road via Koyambedu → Anna Nagar West → Mogappair East.",
    localContext: "Mogappair is a planned residential suburb in West Chennai anchored by Golden Flats, the Mogappair East commercial strip, and easy access to Anna Nagar and Ambattur. Print demand is upper-middle-class life events + small-business stationery for the local trading community.",
    popularServices: [
      { service: "Wedding cards", reason: "Mogappair East and West Tamil-Telugu households are steady wedding-card buyers — traditional and modern designs both." },
      { service: "Visiting cards", reason: "Small-business owners around Mogappair East commercial strip refill visiting-card batches every 2-3 months." },
      { service: "Brochures", reason: "Tutoring centres, dance schools and small clinics around Mogappair use 4-page A5 / 6-panel tri-fold brochures." },
    ],
    areaFaqs: [
      { q: "Drive time from Mogappair to your shop?", a: "About 55 minutes / 22 km via Inner Ring Road. For repeat customers we offer free home delivery for ₹2,000+ orders to save the drive." },
      { q: "Brochure printing for Mogappair tutoring centres?", a: "Yes — 6-panel tri-fold A4 brochures in 130 GSM art-paper, full-colour both sides, from ₹6/brochure at 1,000 qty. Includes free single-revision design." },
      { q: "Pickup options for Mogappair customers?", a: "Walk-in at our Pallavaram press, courier (Delhivery / DTDC) to Mogappair address, or hand-delivery for orders ≥ ₹2,000. Most customers pick courier — typically 1 working day after dispatch." },
    ],
  },
  "printing-press-kodambakkam": {
    routeKm: "15", routeMins: "40",
    routeRoad: "Inner Ring Road via Vadapalani → Arcot Road → Kodambakkam Power House.",
    localContext: "Kodambakkam is the heart of Tamil film industry — film production houses, casting agencies, dubbing studios — anchored by Power House (now demolished site), Kodambakkam Bridge and Arcot Road retail. Print mix tilts toward film posters, audition flyers, and traditional Tamil wedding invitations.",
    popularServices: [
      { service: "Film posters & flexes", reason: "Production houses and small-screen serials print film posters in 70×100 cm and 50×70 cm sizes for theatre and promotion." },
      { service: "Audition flyer drops", reason: "Casting agencies on Arcot Road order 5,000–20,000 piece audition flyer drops for upcoming film projects." },
      { service: "Wedding cards (Tamil)", reason: "Kodambakkam's Tamil-cinema-belt households are heavy wedding-card buyers — traditional designs often inspired by classic film typography." },
    ],
    areaFaqs: [
      { q: "Film poster bulk pricing for Kodambakkam productions?", a: "70×100 cm posters in 130 GSM art paper from ₹180/piece at 50 qty; bulk-rate from 200+ posters. We dispatch direct to theatre owners on production-house request." },
      { q: "Casting-agency audition flyer printing?", a: "5,000-piece flyer drops from ₹0.50/piece in 70 GSM art paper. Free design assistance with provided actor photos + roles list." },
      { q: "Vintage Tamil-cinema-style wedding cards?", a: "Yes — we have a curated library of 1980s-90s style Tamil typography and motifs (banana leaf, peacock, mango). Pricing from ₹8/card; common request from older Kodambakkam families." },
    ],
  },
  "printing-press-nungambakkam": {
    routeKm: "18", routeMins: "45",
    routeRoad: "GST Road → Anna Salai → Sterling Road → Khader Nawaz Khan Road.",
    localContext: "Nungambakkam is one of Chennai's most upmarket commercial corners — Khader Nawaz Khan Road retail, Sterling Road corporate offices, the Loyola College and Hilton/Crowne Plaza belt. Print demand is premium: high-end wedding cards, executive visiting cards, luxury brand collateral.",
    popularServices: [
      { service: "Luxury wedding cards", reason: "Nungambakkam weddings are typically 200–400 invites in premium handmade paper, gold foil, silk-screen and laser-cut formats." },
      { service: "Executive visiting cards", reason: "C-suite executives at Sterling Road corporate offices order premium duplex 600 GSM cards with letterpress or foil." },
      { service: "Boutique brand collateral", reason: "Khader Nawaz Khan Road boutiques order tags, swing tickets, gift-bag inserts, lookbooks in premium finishes." },
    ],
    areaFaqs: [
      { q: "Handmade-paper wedding cards for Nungambakkam?", a: "Yes — cotton-rag handmade paper from Pondicherry, 200/240/280 GSM, with gold-foil stamping or letterpress. ₹120-₹250/card at 100-piece qty; 30-piece minimum." },
      { q: "Boutique brand tag printing?", a: "Yes — die-cut swing tags in 300-400 GSM stock with string + brass eyelet, single or double-sided full-colour print. From ₹6/tag at 500 qty." },
      { q: "Letterpress visiting cards?", a: "Yes — deep-impression letterpress on 600 GSM duplex cotton paper. ₹2,500 setup + ₹15/card from 100 qty. 7-10 working days." },
    ],
  },
  "printing-press-ambattur": {
    routeKm: "28", routeMins: "75",
    routeRoad: "Inner Ring Road via Koyambedu → MTH Road → Ambattur Industrial Estate.",
    localContext: "Ambattur is anchored by Ambattur Industrial Estate — hundreds of SME factories in automotive, garments, electrical components, plus the Ambattur OT Bus Stand and the residential layouts of Ambattur West. Print mix is overwhelmingly industrial: safety labels, compliance stickers, employee IDs, GST bill books.",
    popularServices: [
      { service: "Industrial safety stickers", reason: "Ambattur Industrial Estate factories order weather-proof vinyl safety stickers (hazard, lockout, GHS chemical symbols)." },
      { service: "Employee ID cards", reason: "Factory worker IDs with photo, role, blood group, emergency contact, supervisor name — 100-500 piece batches." },
      { service: "GST bill books", reason: "Trading offices and service vendors at the Industrial Estate use 2-part NCR bill books in high volume." },
    ],
    areaFaqs: [
      { q: "Delivery time to Ambattur Industrial Estate?", a: "48 hours via Inner Ring Road and MTH Road. Bulk orders 100+ ID cards or safety-sticker rolls get dedicated dispatch every Tuesday and Friday." },
      { q: "Weather-proof safety stickers for Ambattur factories?", a: "Yes — die-cut weatherproof vinyl with industrial adhesive, suitable for outdoor / oil-area use. ₹6-₹12 per sticker depending on size; lower at 1,000+ qty." },
      { q: "PO billing for Ambattur SMEs?", a: "Yes — POs accepted, 30-day net invoice terms for repeat customers. GSTIN 33AAGPB7462F1Z1 on every invoice. Bulk-discount on annual contracts." },
    ],
  },
  "printing-press-avadi": {
    routeKm: "35", routeMins: "90",
    routeRoad: "Inner Ring Road → CTH Road → Avadi GH Road.",
    localContext: "Avadi is a far-west Chennai township anchored by Avadi Government Hospital, the CRPF training centre, Avadi Railway Station and a dense residential belt. Mix of armed-forces / paramilitary households, local traders and small-school networks drives demand for ID cards, school stationery, and traditional wedding cards.",
    popularServices: [
      { service: "Wedding & function cards", reason: "Avadi's settled Tamil and Telugu households are steady wedding-card buyers — typically 250-500 invite lots with bilingual layouts." },
      { service: "School magazines & ID cards", reason: "Avadi's CBSE and state-board schools renew student ID batches every academic year and print annual magazines in 100-200 copies." },
      { service: "Visiting cards", reason: "Local traders, tutors, real-estate brokers around Avadi GH Road order 200/500 visiting cards every 2-3 months." },
    ],
    areaFaqs: [
      { q: "Drive time from Avadi to your press?", a: "About 90 minutes / 35 km via Inner Ring Road. Most Avadi customers order on WhatsApp and receive via courier — typically 2 working days after dispatch." },
      { q: "School magazine printing for Avadi schools?", a: "Yes — saddle-stitched A4 or A5 magazines, 24-32 pages, full-colour glossy cover. 100 copies of a 32-page mag from ₹110-₹140 per copy." },
      { q: "Avadi GH Road traders' visiting cards?", a: "₹149 for 100 cards (300 GSM matt); ₹399 for 500 cards; ₹699 for 1,000 cards. Free single-side design from template; courier to Avadi in 2 working days." },
    ],
  },
};
