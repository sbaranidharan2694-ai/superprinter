/**
 * Repack public/favicon.ico from a single 256x256 PNG-in-ICO (~20 KB) into
 * a multi-size ICO containing only the sizes browsers actually request
 * (16/32/48). The source is the existing super-printers-logo.png; if that
 * file changes, re-run this script to refresh the favicon.
 *
 * Run with: node scripts/optimize-favicon.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "..", "public");

const source = path.join(publicDir, "super-printers-logo.png");
const target = path.join(publicDir, "favicon.ico");

// Modern browsers use 32x32 from the address bar/tab and 16x16 from
// taskbar/bookmark indicators. 48x48 was useful for Windows desktop
// shortcuts but is no longer worth the bytes. Two sizes only.
const sizes = [16, 32];

console.log(`Generating favicon at sizes ${sizes.join("/")} px from super-printers-logo.png`);

// Try both palette (8-bit indexed) and truecolor encoders; keep whichever is
// smaller per size. At 16/32 px the palette penalty often beats truecolor
// once alpha is taken into account.
async function bestPng(buffer, size) {
  const [pal, full] = await Promise.all([
    sharp(buffer).resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png({ palette: true, quality: 80, compressionLevel: 9, effort: 10 }).toBuffer(),
    sharp(buffer).resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } }).png({ compressionLevel: 9, effort: 10 }).toBuffer(),
  ]);
  return pal.length <= full.length ? pal : full;
}

const sourceBuf = fs.readFileSync(source);
const pngBuffers = await Promise.all(sizes.map((s) => bestPng(sourceBuf, s)));

const ico = await pngToIco(pngBuffers);
const inBytes = fs.statSync(target).size;
fs.writeFileSync(target, ico);
const outBytes = fs.statSync(target).size;
const pct = ((1 - outBytes / inBytes) * 100).toFixed(0);

console.log(`favicon.ico ${(inBytes / 1024).toFixed(1)} KB → ${(outBytes / 1024).toFixed(1)} KB  (-${pct}%)`);
