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
const publicDir = path.resolve(__dirname, "..", "public");

const WEBP_QUALITY = 78;

// Skip dot-dirs (.well-known) and any future asset folders the build pipeline
// shouldn't touch. Everything else under public/ that's a raster image gets
// a .webp sibling so the <Picture> helper has a valid WebP source to point
// at. If the .webp didn't exist, <picture> would 404 on the source URL and
// the browser would NOT fall back to the <img> tag — it would render broken.
const SKIP_DIRS = new Set([".well-known"]);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      out.push(...walk(path.join(dir, entry.name)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      out.push(path.join(dir, entry.name));
    }
  }
  return out;
}

const files = walk(publicDir);
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
  console.log(`  ${path.relative(publicDir, file).padEnd(40)}  ${(srcStat.size / 1024).toFixed(0).padStart(5)} → ${(outStat.size / 1024).toFixed(0).padStart(5)} KB  (-${pct}%)`);
}

console.log(`\nConverted ${converted}, skipped ${skipped}.`);
if (converted > 0) {
  console.log(`Bytes:  ${(totalIn / 1024).toFixed(0)} KB → ${(totalOut / 1024).toFixed(0)} KB`);
  console.log(`Saved:  ${((totalIn - totalOut) / 1024).toFixed(0)} KB total (${((1 - totalOut / totalIn) * 100).toFixed(0)}%)`);
}
