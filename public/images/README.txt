IMAGE FILES FOR SUPER PRINTERS — All paths are local for fast loading.

QUICK SETUP WITH YOUR 10 IMAGES:
1. Save your 10 business card/design images into:  public/images/my-cards/
   as  01.png, 02.png, 03.png, 04.png, 05.png, 06.png, 07.png, 08.png, 09.png, 10.png
   (If you added images in Cursor chat, copy them from the project's assets folder
   into my-cards/ and rename to 01.png ... 10.png.)
2. From project root run:  .\scripts\copy-my-images.ps1
3. In src/data/imagePaths.ts ensure  USE_LOCAL_IMAGES = true

The script copies your images to hero/, gallery/, avatars/, and other slots so the site uses them everywhere.

MANUAL SETUP — Place files in public/images/ (and subfolders) as listed below.

T-SHIRT, RUBBER STAMP & BANNERS (add your own images here):
  public/images/tshirt/tshirt.jpg    — T-shirt printing (Products, Services, hero).
  public/images/catalog/stamp.jpg    — Rubber stamp (Products, Services, hero).
  public/images/banner/banner.jpg    — Main banner image (Products, Services, gallery “Event Banner”, hero).
  public/images/banner/standee.jpg   — Roll-up standee (gallery “Roll-Up Standee”).

FALLBACK (required for error fallback):
  placeholder.jpg          — Used when any image fails to load (e.g. a simple logo or generic print image).

HERO (public/images/hero/):
  wedding.jpg              — Wedding cards hero tile.
  visiting.jpg             — Visiting cards (optional; hero also uses hero-visiting-cards.png).
  brochures.jpg            — Brochures hero tile.
  bill-books.jpg           — Bill books hero tile.

ROOT (public/images/):
  hero-visiting-cards.png  — Custom visiting card image for the second hero tile (recommended 400×400+).
  about.jpg                — About page / general.

CATALOG (public/images/catalog/):
  stamp.jpg                — Rubber stamp image (Products, Services, hero product tiles).
  offset-press.jpg         — Offset press / machinery.
  workshop.jpg             — Workshop / print shop.
  letterhead.jpg           — Letterhead samples.
  brochures.jpg            — Brochure samples.
  bill-book.jpg            — Bill book samples.
  visiting-card.jpg        — Visiting card samples.
  wedding-invite.jpg       — Wedding invitation.
  envelope.jpg             — Envelope / stationery.
  sticker-sheet.jpg        — Stickers.
  gloss-card.jpg, matt-card.jpg, spot-uv-card.jpg, velvet-card.jpg, premium-cards.jpg, stacked-cards.jpg — Card finishes.
  digital-print.jpg        — Digital printing.

GALLERY (public/images/gallery/):
  Name files by ID: w1.jpg, w2.jpg, w3.jpg, w4.jpg, w5.jpg, w6.jpg, w7.jpg, w8.jpg (wedding);
  v1.jpg … v7.jpg (visiting cards); b1.jpg … b7.jpg (brochures); bb1.jpg … bb4.jpg (bill books);
  l1.jpg … l5.jpg (letterheads); c1.jpg … c4.jpg (catalogues);
  co1.jpg … co8.jpg (corporate); p1.jpg … p6.jpg (printing).
  See src/data/gallery.ts for full list of 45 IDs.

AVATARS (public/images/avatars/):
  01.jpg, 02.jpg, 03.jpg, 04.jpg, 05.jpg, 06.jpg — Customer review photos (one per testimonial).

CATALOG (public/images/catalog/) — optional:
  stamp.jpg                — Rubber stamp (used by IMG.P19).

Formats: .jpg, .jpeg, or .png. Optimize images for web (e.g. 600–1200px width) for faster loading.
