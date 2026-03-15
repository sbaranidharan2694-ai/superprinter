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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "author": { "@type": "Organization", "name": BUSINESS.shortName },
    "publisher": { "@type": "Organization", "name": BUSINESS.shortName, "url": BUSINESS.siteUrl },
    "datePublished": post.date,
    "dateModified": "2026-03-15",
  };

  return (
    <div className="font-body text-foreground bg-background overflow-x-hidden">
      <SEOHead
        title={`${post.title} | Super Printers Blog`}
        description={post.description}
        canonical={`/blog/${post.slug}`}
        keywords={post.keyword}
        schemaMarkup={articleSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <article className="pt-[116px] pb-20">
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

          <div
            className="prose prose-lg max-w-none font-ui text-gray-700 prose-headings:font-display prose-headings:text-ink-black prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:mb-4 prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
            style={{ color: "var(--gray-700)" }}
            dangerouslySetInnerHTML={{ __html: post.content.trim() }}
          />

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
