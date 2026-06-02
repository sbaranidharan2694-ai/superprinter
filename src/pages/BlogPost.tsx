import { Link, useParams, Navigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { getPostBySlug } from "@/data/blog";
import { BUSINESS } from "@/data/business";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  // Article schema enhanced for AI citation (Perplexity/ChatGPT/Gemini favour
  // posts with author + image + mainEntityOfPage). image, updated are
  // optional in BlogPostData — fall back to OG image and publish date.
  const heroImage = `${BUSINESS.siteUrl}${post.image ?? "/og-image.jpg"}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BUSINESS.siteUrl}/blog/${post.slug}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BUSINESS.siteUrl}/blog/${post.slug}`,
    },
    "headline": post.title,
    "description": post.description,
    "image": [heroImage],
    "author": {
      "@type": "Person",
      "@id": `${BUSINESS.siteUrl}/#founder`,
      "name": post.author?.name ?? BUSINESS.founder,
      "url": post.author?.url ?? `${BUSINESS.siteUrl}/about`,
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${BUSINESS.siteUrl}/#organization`,
      "name": BUSINESS.shortName,
      "url": BUSINESS.siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${BUSINESS.siteUrl}/super-printers-logo.png`,
      },
    },
    "datePublished": post.date,
    "dateModified": post.updated ?? post.date,
    "keywords": post.keyword,
    "inLanguage": "en-IN",
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${BUSINESS.siteUrl}/blog/${post.slug}#faq`,
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  // Build a table of contents from H2s and inject anchor ids — long-form nav
  // with a jump link per H2. SSR-safe: pure string transform, no DOM access.
  const toc: { id: string; text: string }[] = [];
  const contentWithIds = post.content.trim().replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  const showToc = toc.length >= 3;

  return (
    <div className="font-body text-foreground bg-background overflow-x-hidden">
      <SEOHead
        title={`${post.title} | Super Printers Blog`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        keywords={post.keyword}
        ogImage={heroImage}
        ogType="article"
        schemaMarkup={faqSchema ? [articleSchema, faqSchema] : articleSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <article id="post-top" className="pt-[116px] pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/" className="hover:text-gold transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-ink-black line-clamp-1">{post.title}</span>
          </nav>

          <header className="mb-8">
            <time dateTime={post.date} className="text-sm font-ui text-gray-500">
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mt-2 mb-4">
              {post.title}
            </h1>
            <p className="font-ui text-lg text-gray-600">{post.description}</p>
          </header>

          {showToc && (
            <nav className="mb-8 p-5 rounded-2xl border border-border-light bg-gray-50/60" aria-label="Table of contents">
              <p className="font-display font-bold text-sm text-ink-black mb-3">On this page</p>
              <ol className="space-y-1.5 list-decimal list-inside">
                {toc.map((t) => (
                  <li key={t.id} className="text-sm">
                    <a href={`#${t.id}`} className="text-gold hover:underline">{t.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div
            className="prose prose-lg max-w-none font-ui text-gray-700 prose-headings:font-display prose-headings:text-ink-black prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:mb-4 prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-h2:scroll-mt-24"
            style={{ color: "var(--gray-700)" }}
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />

          {post.faqs?.length ? (
            <section className="mt-12 pt-8 border-t border-border-light" aria-labelledby="post-faq">
              <h2 id="post-faq" className="font-display font-bold text-2xl text-ink-black mb-6">Frequently asked questions</h2>
              <dl className="space-y-5">
                {post.faqs.map((f) => (
                  <div key={f.q}>
                    <dt className="font-display font-bold text-base text-ink-black mb-1">{f.q}</dt>
                    <dd className="text-sm leading-relaxed text-gray-600">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {showToc && (
            <p className="mt-10 text-right">
              <a href="#post-top" className="font-ui text-sm text-gray-500 hover:text-gold transition-colors">↑ Back to top</a>
            </p>
          )}

          <footer className="mt-12 pt-6 border-t border-border-light">
            <p className="text-sm font-ui text-gray-500 mb-4">
              Need print-ready files or a quote? WhatsApp us for a free file check.
            </p>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-ui font-semibold text-ink-black"
              style={{ backgroundColor: "var(--gold)" }}
            >
              WhatsApp Super Printers
            </a>
            <p className="mt-6">
              <Link to="/" className="font-ui text-sm text-gray-500 hover:text-gold transition-colors">
                ← Back to Home
              </Link>
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
