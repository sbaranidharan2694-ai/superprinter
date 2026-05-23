/**
 * One-off compressor for root public/ assets that don't live under
 * public/images/ (the existing optimize-images.mjs handles that tree).
 *
 * Targets:
 *  - og-image.jpg  — re-encode at quality 80 (was 90+). Stays JPG because
 *    several social platforms still don't accept WebP for og:image.
 *  - super-printers-logo.png — generate .webp sibling for in-app <Picture>
 *    use. PNG fallback stays for OG/social/manifest references.
 *  - super-printers-logo.png — also re-encode at PNG palette compression so
 *    legacy browsers get a smaller fallback.
 *  - logo-horizontal.png, logo-square.png — same PNG re-encode treatment.
 *
 * Run with: node scripts/optimize-root-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");

async function recompressJpg(file, quality = 80) {
  const inBytes = fs.statSync(file).size;
  const buf = await sharp(file).jpeg({ quality, mozjpeg: true }).toBuffer();
  if (buf.length < inBytes) {
    fs.writeFileSync(file, buf);
    return { in: inBytes, out: buf.length };
  }
  // Sharp produced a larger file (rare on already-tight inputs). Keep original.
  return { in: inBytes, out: inBytes, skipped: true };
}

async function pngToWebp(file) {
  const out = file.replace(/\.png$/i, ".webp");
  const inBytes = fs.statSync(file).size;
  await sharp(file).webp({ quality: 82, effort: 6 }).toFile(out);
  return { in: inBytes, out: fs.statSync(out).size, outPath: out };
}

async function repackPng(file) {
  const inBytes = fs.statSync(file).size;
  // sharp's PNG encoder with palette+compression flags = pngquant-grade.
  const buf = await sharp(file)
    .png({ palette: true, quality: 85, compressionLevel: 9, effort: 10 })
    .toBuffer();
  if (buf.length < inBytes) {
    fs.writeFileSync(file, buf);
    return { in: inBytes, out: buf.length };
  }
  return { in: inBytes, out: inBytes, skipped: true };
}

const targets = [
  { file: "og-image.jpg", op: () => recompressJpg(path.join(publicDir, "og-image.jpg"), 80) },
  { file: "super-printers-logo.png", op: () => pngToWebp(path.join(publicDir, "super-printers-logo.png")) },
  { file: "super-printers-logo.png (repack)", op: () => repackPng(path.join(publicDir, "super-printers-logo.png")) },
  { file: "logo-horizontal.png (repack)", op: () => repackPng(path.join(publicDir, "logo-horizontal.png")) },
  { file: "logo-square.png (repack)", op: () => repackPng(path.join(publicDir, "logo-square.png")) },
];

let totalIn = 0;
let totalOut = 0;
for (const t of targets) {
  try {
    const r = await t.op();
    const saved = r.in - r.out;
    totalIn += r.in;
    totalOut += r.out;
    const pct = r.in ? ((saved / r.in) * 100).toFixed(0) : "0";
    const tag = r.skipped ? " (already optimal)" : "";
    console.log(`  ${t.file.padEnd(40)} ${(r.in / 1024).toFixed(0).padStart(5)} → ${(r.out / 1024).toFixed(0).padStart(5)} KB  (-${pct}%)${tag}`);
  } catch (err) {
    console.error(`  ${t.file}: ${err.message}`);
  }
}
console.log(`\nSaved ${((totalIn - totalOut) / 1024).toFixed(0)} KB total.`);
