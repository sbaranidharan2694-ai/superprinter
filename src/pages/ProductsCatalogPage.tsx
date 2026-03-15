import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams, useParams } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS, getCatalogSectionTitle, type CatalogProduct } from "@/data/catalog";
import { IMG } from "@/data/images";
import { BUSINESS } from "@/data/business";
import { cn } from "@/lib/utils";
import { ChevronDown, PanelLeft } from "lucide-react";

const DEFAULT_CATEGORY = "visiting-cards";
const DEFAULT_SUB = "standard-cards";

function getDefaultSubForCategory(categorySlug: string): string | null {
  const cat = CATALOG_CATEGORIES.find((c) => c.slug === categorySlug);
  return cat?.subcategories[0]?.slug ?? null;
}

function resolveProductImage(product: CatalogProduct): string {
  if (product.image) return product.image;
  if (product.imageKey) {
    const url = (IMG as Record<string, string>)[product.imageKey];
    if (url) return url;
  }
  return "/placeholder.svg";
}

function CatalogProductCard({ product }: { product: CatalogProduct }) {
  const imgSrc = resolveProductImage(product);
  const waUrl = `${BUSINESS.whatsapp}?text=${encodeURIComponent(product.waMessage)}`;

  return (
    <article className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square bg-muted relative overflow-hidden">
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {product.badge === "NEW" && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-semibold bg-amber-500 text-white">
            NEW
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-muted-foreground text-xs mb-2">{product.specs}</p>
        <p className="font-medium text-sm mb-3 text-muted-foreground">
          Quote on WhatsApp
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-2.5 rounded-lg font-medium text-sm text-ink-black transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--gold)" }}
        >
          Order →
        </a>
      </div>
    </article>
  );
}

function CatalogSidebarMobile({
  categorySlug,
  subcategorySlug,
  onSelect,
}: {
  categorySlug: string | null;
  subcategorySlug: string | null;
  onSelect: (cat: string, sub: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full justify-start gap-2">
          <PanelLeft className="w-4 h-4" />
          Categories & Product Options
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] pt-10">
        <CatalogSidebar
          categorySlug={categorySlug}
          subcategorySlug={subcategorySlug}
          onSelect={onSelect}
          onNavigate={() => setOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}

function CatalogSidebar({
  categorySlug,
  subcategorySlug,
  onSelect,
  onNavigate,
  className,
}: {
  categorySlug: string | null;
  subcategorySlug: string | null;
  onSelect: (cat: string, sub: string) => void;
  onNavigate?: () => void;
  className?: string;
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const o: Record<string, boolean> = {};
    CATALOG_CATEGORIES.forEach((c) => {
      o[c.slug] = c.slug === categorySlug || !!c.subcategories.length;
    });
    return o;
  });

  const toggle = (slug: string) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <nav className={cn("flex flex-col", className)} aria-label="Categories and product options">
      <h2 className="font-display font-bold text-lg text-foreground mb-4">Categories & Product Options</h2>
      <ul className="space-y-1">
        {CATALOG_CATEGORIES.map((cat) => (
          <li key={cat.id}>
            {cat.subcategories.length === 0 ? (
              <button
                onClick={() => {
                  onSelect(cat.slug, "");
                  onNavigate?.();
                }}
                className={cn(
                  "w-full text-left py-2 px-3 rounded-md text-sm font-medium transition-colors",
                  categorySlug === cat.slug && !subcategorySlug
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ) : (
              <>
                <button
                  onClick={() => toggle(cat.slug)}
                  className="w-full text-left py-2 px-3 rounded-md text-sm font-semibold text-foreground hover:bg-muted flex items-center justify-between"
                >
                  {cat.label}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", expanded[cat.slug] && "rotate-180")} />
                </button>
                {expanded[cat.slug] && (
                  <ul className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                    {cat.subcategories.map((sub) => (
                      <li key={sub.slug}>
                        <button
                          onClick={() => {
                            onSelect(cat.slug, sub.slug);
                            onNavigate?.();
                          }}
                          className={cn(
                            "w-full text-left py-1.5 px-2 rounded text-sm transition-colors flex items-center gap-2",
                            categorySlug === cat.slug && subcategorySlug === sub.slug
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        >
                          {sub.label}
                          {sub.badge === "NEW" && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500 text-white">
                              NEW
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const ProductsCatalogPage = () => {
  const navigate = useNavigate();
  const { categorySlug: paramCategory } = useParams<{ categorySlug?: string }>();
  const [searchParams] = useSearchParams();
  const categorySlug = paramCategory ?? searchParams.get("category") ?? DEFAULT_CATEGORY;
  const subcategorySlug =
    searchParams.get("sub") ?? getDefaultSubForCategory(categorySlug) ?? "";

  const filteredProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter(
      (p) => p.categorySlug === categorySlug && (p.subcategorySlug === subcategorySlug || !subcategorySlug)
    );
  }, [categorySlug, subcategorySlug]);

  const sectionTitle = getCatalogSectionTitle(categorySlug, subcategorySlug);
  const categoryLabel = CATALOG_CATEGORIES.find((c) => c.slug === categorySlug)?.label ?? "Products";
  const subLabel =
    CATALOG_CATEGORIES.find((c) => c.slug === categorySlug)?.subcategories.find((s) => s.slug === subcategorySlug)
      ?.label ?? null;

  const setCategorySub = (cat: string, sub: string) => {
    const subParam = sub ? `&sub=${encodeURIComponent(sub)}` : "";
    navigate(`/products?category=${encodeURIComponent(cat)}${subParam}`, { replace: true });
  };

  const breadcrumbs: { name: string; url: string }[] = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ];
  if (categoryLabel) breadcrumbs.push({ name: categoryLabel, url: subLabel ? `/products?category=${categorySlug}` : "" });
  if (subLabel) breadcrumbs.push({ name: subLabel, url: "" });

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SEOHead
        title={`${sectionTitle} | Super Printers Chennai`}
        description={`Browse ${sectionTitle} and other printing products. Order online or via WhatsApp. Super Printers, Pallavaram, Chennai.`}
        canonical="/products"
        breadcrumbs={breadcrumbs}
      />

      <div className="pt-[116px] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link to="/products" className="hover:text-foreground transition-colors">
              Products
            </Link>
            {categorySlug && (
              <>
                <span className="mx-2">›</span>
                <span className="text-foreground">{sectionTitle}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - desktop */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-[140px]">
                <CatalogSidebar
                  categorySlug={categorySlug}
                  subcategorySlug={subcategorySlug}
                  onSelect={setCategorySub}
                />
              </div>
            </aside>

            {/* Mobile: Categories drawer */}
            <div className="lg:hidden">
              <CatalogSidebarMobile
                categorySlug={categorySlug}
                subcategorySlug={subcategorySlug}
                onSelect={setCategorySub}
              />
            </div>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">{sectionTitle}</h1>

              {filteredProducts.length === 0 ? (
                <div className="rounded-xl border border-dashed border-border bg-muted/30 p-12 text-center">
                  <p className="text-muted-foreground mb-4">No products in this category yet.</p>
                  <p className="text-sm text-muted-foreground">Select another category from the sidebar or contact us for a quote.</p>
                  <a
                    href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need a quote for a product in this category.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-4 px-6 py-3 rounded-full font-semibold text-white"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    WhatsApp for quote
                  </a>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <CatalogProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCatalogPage;
