import { readFileSync } from "node:fs";
import path from "node:path";

import { describe, it, expect } from "vitest";

import { SERVICE_REDIRECTS } from "@/data/serviceRedirects";

/**
 * public/.htaccess is plain text that no part of the JS toolchain reads, so
 * nothing else in the build notices when it drifts from the route table.
 *
 * Two failures this guards against, both of which shipped to production and
 * showed up in Search Console on 2026-09-03:
 *
 *  - A /services/<slug> that .htaccess 301s but allRoutes() still emits gets
 *    prerendered and listed in sitemap.xml, so the sitemap advertises a
 *    redirect. That was 10 of 117 URLs, counted under "Page with redirect".
 *  - A 301 that chains into another 301, or points back at itself, turns a
 *    clean hop into a "Redirect error", which is strictly worse than a 404.
 */
const htaccess = readFileSync(
  path.resolve(__dirname, "../../public/.htaccess"),
  "utf8",
);

/** Every `RewriteRule ^<from>/?$ <to> [R=301...]` in the file. */
const REDIRECT_RULE = /^\s*RewriteRule\s+\^([^\s]+?)\/\?\$\s+(\/\S*)\s+\[R=301/gm;

function redirectRules() {
  return [...htaccess.matchAll(REDIRECT_RULE)].map(([, from, to]) => ({
    from: `/${from.replace(/\\/g, "")}/`,
    to,
  }));
}

describe("public/.htaccess redirect rules", () => {
  it("stays in sync with SERVICE_REDIRECTS, slugs and targets alike", () => {
    const fromHtaccess = Object.fromEntries(
      [
        ...htaccess.matchAll(
          /^\s*RewriteRule\s+\^services\/([a-z0-9-]+)\/\?\$\s+(\/\S*)\s+\[R=301/gm,
        ),
      ].map(([, slug, target]) => [slug, target]),
    );

    expect(fromHtaccess).toEqual(SERVICE_REDIRECTS);
  });

  it("never redirects a URL to itself", () => {
    expect(redirectRules().filter((r) => r.from === r.to)).toEqual([]);
  });

  it("never chains one 301 into another", () => {
    const rules = redirectRules();
    const sources = new Set(rules.map((r) => r.from));
    expect(rules.filter((r) => sources.has(r.to))).toEqual([]);
  });
});
