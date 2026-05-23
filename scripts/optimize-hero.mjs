/**
 * One-time converter: each hero JPG in public/images/hero/ gets a sibling
 * .webp and .avif at the same dimensions. The <picture> elements that
 * reference them pick the best supported format per browser.
 *
 * Run with: node scripts/optimize-hero.mjs
 * Re-run any time you add a new hero image.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const heroDir = path.resolve(__dirname, "..", "public", "images", "hero");

const QUALITY = { webp: 78, avif: 55 };

const files = fs.readdirSync(heroDir).filter((f) => /\.(jpe?g|png)$/i.test(f));

let totalSaved = 0;
for (const file of files) {
  const inPath = path.join(heroDir, file);
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  const origBytes = fs.statSync(inPath).size;

  const webpPath = path.join(heroDir, `${base}.webp`);
  const avifPath = path.join(heroDir, `${base}.avif`);

  await sharp(inPath).webp({ quality: QUALITY.webp, effort: 6 }).toFile(webpPath);
  await sharp(inPath).avif({ quality: QUALITY.avif, effort: 6 }).toFile(avifPath);

  const webpBytes = fs.statSync(webpPath).size;
  const avifBytes = fs.statSync(avifPath).size;
  const bestBytes = Math.min(webpBytes, avifBytes);
  const saved = origBytes - bestBytes;
  totalSaved += saved;

  const pct = ((saved / origBytes) * 100).toFixed(1);
  console.log(
    `${file.padEnd(20)}  ${(origBytes / 1024).toFixed(1)} KB  →  ` +
      `webp ${(webpBytes / 1024).toFixed(1)} KB / avif ${(avifBytes / 1024).toFixed(1)} KB  ` +
      `(-${pct}%)`
  );
}
console.log(`\nTotal saved (vs JPG): ${(totalSaved / 1024).toFixed(1)} KB`);
