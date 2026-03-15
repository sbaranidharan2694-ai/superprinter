import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BLOG_POSTS } from "@/data/blog";

const BlogIndex = () => (
  <>
    <SEOHead
      title="Blog | Printing Tips & Guides | Super Printers Chennai"
      description="Printing guides, paper GSM, visiting card finishes, wedding cards, offset vs digital, and bulk printing tips from Super Printers Pallavaram."
      canonical="/blog"
      keywords="printing blog Chennai, visiting card guide, wedding card printing guide, offset vs digital printing"
    />
    <main className="pt-8 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Blog &amp; Guides</h1>
        <p className="text-muted-foreground font-body mb-10">Printing tips, paper guides, and how-tos from Super Printers Chennai.</p>
        <ul className="space-y-6">
          {[...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="block p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                <time dateTime={post.date} className="text-xs text-muted-foreground font-body">
                  {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                </time>
                <h2 className="font-display font-bold text-lg text-foreground mt-1">{post.title}</h2>
                <p className="text-muted-foreground text-sm font-body mt-1 line-clamp-2">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  </>
);

export default BlogIndex;
