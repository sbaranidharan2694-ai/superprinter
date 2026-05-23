/**
 * Generates .webp siblings for every .jpg/.jpeg/.png inside public/images/.
 *
 * The original raster files stay in place so `<img src=".jpg">` references
 * keep working as a fallback. Components opt into the smaller variant by
 * using the `<Picture>` helper or by hand-rolling a <picture> with both
 * sources.
 *
 * Run with: node scripts/optimize-images.mjs
 * Safe to re-run: skips files where the .webp is newer than the source.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, "..", "public", "images");

const WEBP_QUALITY = 78;

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const files = walk(imagesDir);
console.log(`Found ${files.length} source images.\n`);

let totalIn = 0;
let totalOut = 0;
let converted = 0;
let skipped = 0;

for (const file of files) {
  const webp = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const srcStat = fs.statSync(file);

  // Skip if .webp exists and is newer than the source.
  if (fs.existsSync(webp) && fs.statSync(webp).mtimeMs >= srcStat.mtimeMs) {
    skipped++;
    continue;
  }

  await sharp(file).webp({ quality: WEBP_QUALITY, effort: 5 }).toFile(webp);
  const outStat = fs.statSync(webp);
  totalIn += srcStat.size;
  totalOut += outStat.size;
  converted++;

  const pct = ((1 - outStat.size / srcStat.size) * 100).toFixed(0);
  console.log(`  ${path.relative(imagesDir, file).padEnd(36)}  ${(srcStat.size / 1024).toFixed(0).padStart(5)} → ${(outStat.size / 1024).toFixed(0).padStart(5)} KB  (-${pct}%)`);
}

console.log(`\nConverted ${converted}, skipped ${skipped}.`);
if (converted > 0) {
  console.log(`Bytes:  ${(totalIn / 1024).toFixed(0)} KB → ${(totalOut / 1024).toFixed(0)} KB`);
  console.log(`Saved:  ${((totalIn - totalOut) / 1024).toFixed(0)} KB total (${((1 - totalOut / totalIn) * 100).toFixed(0)}%)`);
}
