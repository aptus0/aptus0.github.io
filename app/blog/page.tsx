import type { Metadata } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { SiteFooter, SiteHeader } from "../site-shell";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Salesforce, ERP, e-ticaret, yazılım mimarisi ve ürün geliştirme üzerine Samet ER'in teknik notları.",
  alternates: { canonical: "/blog" },
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero shell blog-hero">
        <span className="section-number">(04) Blog</span>
        <h1>Teknik notlar,<br /><em>gerçek deneyimler.</em></h1>
        <p>
          Salesforce, ERP, modern web teknolojileri ve ürün geliştirme üzerine
          öğrendiklerimi; kısa, uygulanabilir ve doğrudan notlarla paylaşıyorum.
        </p>
      </section>

      <section className="shell blog-index">
        {posts.length ? (
          <div className="blog-grid">
            {posts.map((post, index) => (
              <article className={`blog-card blog-tone-${(index % 3) + 1}`} key={post.id}>
                <div className="blog-card-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.slug}`}>Yazıyı oku <span>↗</span></a>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <span className="section-number">İlk yazı hazırlanıyor</span>
            <h2>Yakında burada<br /><em>yeni fikirler olacak.</em></h2>
          </div>
        )}
      </section>

      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}
