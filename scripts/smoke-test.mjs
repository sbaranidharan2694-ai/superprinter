/**
 * Production smoke test.
 *
 * Every check here corresponds to a defect that actually shipped to
 * superprinters.net and then sat in Search Console unnoticed:
 *
 *   /industries/ answered 403 for months because the directory existed with
 *   no index.html of its own. Ten sitemap URLs were 301s. The SSR bundle was
 *   served publicly at /server/. Every sitemap URL shared one <lastmod>.
 *
 * None of it was caught, because nothing ever looked at the live site. This
 * does.
 *
 *   node scripts/smoke-test.mjs [baseUrl]
 *
 * Exits 1 on any failure so a workflow step fails loudly.
 */
const BASE = (process.argv[2] || "https://superprinters.net").replace(/\/$/, "");
const UA = "Mozilla/5.0 (compatible; SuperPrintersSmokeTest/1.0)";

let failures = 0;
let checks = 0;

function pass(name, detail = "") {
  checks++;
  console.log(`  ok    ${name}${detail ? ` — ${detail}` : ""}`);
}

function fail(name, detail) {
  checks++;
  failures++;
  console.error(`  FAIL  ${name} — ${detail}`);
}

async function head(url) {
  // redirect: "manual" so a 301 is reported as a 301 rather than followed.
  // Following redirects is exactly what hid the ten redirecting sitemap URLs.
  const res = await fetch(url, {
    method: "GET",
    redirect: "manual",
    headers: { "user-agent": UA },
  });
  return { status: res.status, location: res.headers.get("location"), res };
}

async function main() {
  console.log(`Smoke testing ${BASE}\n`);

  // ---- 1. Core pages respond 200 -----------------------------------------
  for (const path of ["/", "/industries/", "/wedding-cards/", "/printing-press-chennai/"]) {
    try {
      const { status, location } = await head(BASE + path);
      if (status === 200) pass(`GET ${path}`, "200");
      else fail(`GET ${path}`, `expected 200, got ${status}${location ? ` -> ${location}` : ""}`);
    } catch (err) {
      fail(`GET ${path}`, err.message);
    }
  }

  // ---- 2. The SSR bundle must not be publicly served ----------------------
  // It used to answer 200 at /server/entry-server.js. .htaccess now returns 410.
  try {
    const { status } = await head(`${BASE}/server/entry-server.js`);
    if (status === 410 || status === 404) pass("/server/ withdrawn", String(status));
    else fail("/server/ withdrawn", `expected 410 or 404, got ${status} — the SSR bundle is public`);
  } catch (err) {
    fail("/server/ withdrawn", err.message);
  }

  // ---- 3. Homepage head tags ---------------------------------------------
  try {
    const res = await fetch(BASE + "/", { headers: { "user-agent": UA } });
    const html = await res.text();

    const robots = html.match(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/i);
    if (!robots) fail("robots meta", "missing");
    else if (/noindex/i.test(robots[1])) fail("robots meta", `homepage is noindex: "${robots[1]}"`);
    else pass("robots meta", "index,follow");

    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i);
    if (!canonical) fail("canonical", "missing");
    else pass("canonical", canonical[1]);

    // The prerender is the whole point: if the HTML arrives without rendered
    // content, crawlers see an empty shell.
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (text.length > 3000) pass("prerendered content", `${text.length} chars of text`);
    else fail("prerendered content", `only ${text.length} chars — page may not be prerendering`);
  } catch (err) {
    fail("homepage head tags", err.message);
  }

  // ---- 4. robots.txt points at the sitemap --------------------------------
  try {
    const res = await fetch(`${BASE}/robots.txt`, { headers: { "user-agent": UA } });
    const txt = await res.text();
    if (/^Sitemap:\s*https?:\/\/\S+sitemap\.xml/im.test(txt)) pass("robots.txt sitemap directive");
    else fail("robots.txt sitemap directive", "not found");
  } catch (err) {
    fail("robots.txt", err.message);
  }

  // ---- 5. No sitemap URL may redirect or 404 ------------------------------
  // A sitemap that advertises redirects erodes the trust Google places in it.
  try {
    const res = await fetch(`${BASE}/sitemap.xml`, { headers: { "user-agent": UA } });
    if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
    const xml = await res.text();
    // <loc> entries are absolute production URLs. When testing a local build
    // or a staging host, rewrite the origin — otherwise this silently checks
    // production and reports its state instead of the build under test.
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => m[1])
      .map((u) => {
        try {
          const parsed = new URL(u);
          return BASE + parsed.pathname + parsed.search;
        } catch {
          return u;
        }
      });
    if (urls.length === 0) throw new Error("sitemap contains no <loc> entries");

    const bad = [];
    // Small concurrency: quick enough, gentle on shared hosting.
    const queue = [...urls];
    await Promise.all(
      Array.from({ length: 8 }, async () => {
        while (queue.length) {
          const url = queue.shift();
          try {
            const { status, location } = await head(url);
            if (status !== 200) bad.push(`${url} -> ${status}${location ? ` ${location}` : ""}`);
          } catch (err) {
            bad.push(`${url} -> ${err.message}`);
          }
        }
      }),
    );

    if (bad.length === 0) pass("sitemap URLs all 200", `${urls.length} checked`);
    else {
      fail("sitemap URLs all 200", `${bad.length} of ${urls.length} not 200`);
      bad.slice(0, 10).forEach((b) => console.error(`          ${b}`));
      if (bad.length > 10) console.error(`          …and ${bad.length - 10} more`);
    }

    // lastmod must vary. When it does not, the build ran without git history
    // and every URL fell back to the build date, which teaches crawlers to
    // ignore the field entirely.
    const mods = new Set([...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]));
    if (mods.size > 1) pass("sitemap lastmod varies", `${mods.size} distinct dates`);
    else
      fail(
        "sitemap lastmod varies",
        `all ${urls.length} URLs share one date — sitemap-lastmod.json is likely stale`,
      );
  } catch (err) {
    fail("sitemap.xml", err.message);
  }

  console.log(`\n${checks - failures}/${checks} checks passed`);
  if (failures > 0) {
    console.error(`\n${failures} check(s) failed against ${BASE}`);
    process.exit(1);
  }
  console.log(`All good on ${BASE}`);
}

main().catch((err) => {
  console.error("smoke test crashed:", err);
  process.exit(1);
});
