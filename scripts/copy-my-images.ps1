# Copies your 10 images from public/images/my-cards/ (01.png ... 10.png)
# to all required locations so the site uses local images.
# Run from project root: .\scripts\copy-my-images.ps1

$ErrorActionPreference = "Stop"
$srcDir = "public/images/my-cards"
$imgBase = "public/images"

if (-not (Test-Path $srcDir)) {
    New-Item -ItemType Directory -Force -Path $srcDir | Out-Null
    Write-Host "Created $srcDir - add your 10 images as 01.png through 10.png, then run this script again."
    exit 0
}

$sources = 1..10 | ForEach-Object { Join-Path $srcDir ("{0:D2}.png" -f $_) }
$missing = $sources | Where-Object { -not (Test-Path $_) }
if ($missing.Count -gt 0) {
    Write-Host "Missing images in $srcDir. Add 01.png, 02.png, ... 10.png (your 10 design images)."
    exit 1
}

New-Item -ItemType Directory -Force -Path "$imgBase/hero", "$imgBase/gallery", "$imgBase/avatars" | Out-Null

# Placeholder + hero (use first 5 images)
Copy-Item $sources[0] "$imgBase/placeholder.jpg" -Force
Copy-Item $sources[0] "$imgBase/hero/wedding.jpg" -Force
Copy-Item $sources[1] "$imgBase/hero/visiting.jpg" -Force
Copy-Item $sources[2] "$imgBase/hero/brochures.jpg" -Force
Copy-Item $sources[3] "$imgBase/hero/bill-books.jpg" -Force
Copy-Item $sources[1] "$imgBase/hero-visiting-cards.png" -Force

# Gallery IDs (45 total) - cycle through 10 images
$galleryIds = @("w1","w2","w3","w4","w5","w6","v1","v2","v3","v4","v5","v6","b1","b2","b3","b4","b5","b6","bb1","bb2","bb3","bb4","l1","l2","l3","l4","c1","c2","c3","c4","co1","co2","co3","co4","co5","co6","p1","p2","p3","p4","p5","p6","w7","w8","v7","b7","l5","co7","co8")  # 45 IDs
for ($i = 0; $i -lt $galleryIds.Count; $i++) {
    $idx = $i % 10
    Copy-Item $sources[$idx] "$imgBase/gallery/$($galleryIds[$i]).jpg" -Force
}

# Avatars (6)
1..6 | ForEach-Object { Copy-Item $sources[$_ - 1] "$imgBase/avatars/$(('{0:D2}' -f $_)).jpg" -Force }

# Root named images (reuse from your set)
Copy-Item $sources[0] "$imgBase/about.jpg" -Force
Copy-Item $sources[4] "$imgBase/offset-press.jpg" -Force
Copy-Item $sources[4] "$imgBase/workshop.jpg" -Force
Copy-Item $sources[2] "$imgBase/letterhead.jpg" -Force
Copy-Item $sources[2] "$imgBase/brochures.jpg" -Force
Copy-Item $sources[3] "$imgBase/bill-book.jpg" -Force
Copy-Item $sources[1] "$imgBase/visiting-card.jpg" -Force
Copy-Item $sources[0] "$imgBase/wedding-invite.jpg" -Force
Copy-Item $sources[5] "$imgBase/envelope.jpg" -Force
Copy-Item $sources[6] "$imgBase/sticker-sheet.jpg" -Force
Copy-Item $sources[1] "$imgBase/gloss-card.jpg" -Force
Copy-Item $sources[7] "$imgBase/matt-card.jpg" -Force
Copy-Item $sources[8] "$imgBase/spot-uv-card.jpg" -Force
Copy-Item $sources[9] "$imgBase/velvet-card.jpg" -Force
Copy-Item $sources[1] "$imgBase/premium-cards.jpg" -Force
Copy-Item $sources[2] "$imgBase/stacked-cards.jpg" -Force
Copy-Item $sources[4] "$imgBase/digital-print.jpg" -Force

Write-Host "Done. Your 10 images are now in hero/, gallery/, avatars/, and root. Set USE_LOCAL_IMAGES = true in src/data/imagePaths.ts if not already."
