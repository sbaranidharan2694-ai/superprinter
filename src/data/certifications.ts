/**
 * Certifications, memberships and industry-body associations that
 * Super Printers itself holds OR that its supply chain holds (e.g. LWG
 * for leather suppliers feeding into leather-product printing jobs).
 *
 * These are trust signals analogous to the /clients page — they tell
 * B2B buyers that the press operates inside recognised quality and
 * sustainability frameworks. Per the May 2026 competitor audit
 * (Rathna Offset, Imprint Wings), missing certifications was one of
 * the trust gaps competitors with similar Chennai SEO authority don't
 * have either, so closing it is a defensible differentiator.
 *
 * Each entry should be a real, verifiable certification — never
 * fabricate. When the owner doesn't actively hold a certification
 * but their suppliers do (e.g. LWG-certified leather feeding into
 * our printed leather goods), declare scope explicitly in `scope`.
 */

export interface Certification {
  /** Short display name. */
  name: string;
  /** Issuing body (e.g. "Leather Working Group"). */
  issuingBody: string;
  /** Logo path under /public/certifications/. */
  logo: string;
  /**
   * What is certified: "press" = Super Printers itself holds it;
   * "supplier" = our supply chain holds it; "membership" = trade
   * body / association membership; "compliance" = statutory.
   */
  scope: "press" | "supplier" | "membership" | "compliance";
  /** 1-2 sentence factual description. */
  description: string;
  /** Year certification was first held (optional). */
  sinceYear?: number;
  /** External link to the issuing body (for verification). */
  bodyUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Leather Working Group",
    issuingBody: "Leather Working Group (LWG)",
    logo: "/certifications/lwg.png",
    scope: "supplier",
    description:
      "Our leather-vertical clients (G.A. Jolli, Contemporary Leathers, Gokul Ram Leathers, GG Organics) operate in supply chains audited by the Leather Working Group — the global standard for sustainable leather sourcing. We print collateral for LWG-certified tanneries and finished-goods suppliers.",
    bodyUrl: "https://www.leatherworkinggroup.com/",
  },
  {
    name: "GST Registered",
    issuingBody: "Government of India",
    logo: "/certifications/gst.svg",
    scope: "compliance",
    description:
      "Super Printers is GST registered (GSTIN 33AAGPB7462F1Z1). Every invoice carries a tax-compliant GSTIN reference; PO billing with 30-day net invoice terms is supported for corporate customers.",
    sinceYear: 2017,
  },
];
