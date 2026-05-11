/**
 * Build-time linter: every <img> in `src/` must declare a non-empty `alt`,
 * unless it is explicitly decorative (`alt=""` + `aria-hidden="true"`).
 *
 * Runs as `prebuild` so a missing alt fails CI before SSG output is emitted.
 * Decorative SVG icons rendered via React components are out of scope here.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "src");
let missing = 0;
let decorative = 0;
let scanned = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(tsx|jsx)$/.test(entry.name)) check(full);
  }
}

function check(file) {
  const src = fs.readFileSync(file, "utf8");
  // Match the full <img ...> opening tag, including JSX multi-line tags.
  const re = /<img\b[^>]*\/?>/gs;
  let m;
  while ((m = re.exec(src))) {
    scanned++;
    const tag = m[0];
    const hasAlt = /\balt\s*=\s*[{"'`]/.test(tag);
    const emptyAlt = /\balt\s*=\s*(["'`])\s*\1/.test(tag);
    const ariaHidden = /\baria-hidden\s*=\s*(["'`]?)true\1/.test(tag);

    if (!hasAlt) {
      const line = src.slice(0, m.index).split("\n").length;
      console.error(`✗ ${path.relative(root, file)}:${line}  <img> has no alt attribute`);
      console.error(`  ${tag.replace(/\s+/g, " ").slice(0, 140)}`);
      missing++;
    } else if (emptyAlt && !ariaHidden) {
      const line = src.slice(0, m.index).split("\n").length;
      console.error(`✗ ${path.relative(root, file)}:${line}  empty alt without aria-hidden — treat as missing`);
      console.error(`  ${tag.replace(/\s+/g, " ").slice(0, 140)}`);
      missing++;
    } else if (emptyAlt && ariaHidden) {
      decorative++;
    }
  }
}

walk(root);

console.log(`\naudit-alt: scanned ${scanned} <img> tags — ${missing} missing, ${decorative} decorative (aria-hidden).`);
if (missing > 0) {
  console.error(`audit-alt: failing build (${missing} <img> tags need alt text).`);
  process.exit(1);
}
