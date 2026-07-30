import type { Metadata } from "next";
import { trPosts as posts } from "@/lib/static-posts";
import { SiteFooter, SiteHeader } from "../site-shell";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Salesforce, ERP, CRM ve Yazılım Blogu",
  description:
    "Salesforce, Apex, LWC, Flow, Agentforce, ERP, CRM entegrasyonu, e-ticaret ve mobil uygulama geliştirme üzerine uygulamalı teknik rehberler.",
  keywords: ["Salesforce blog", "ERP blog", "CRM entegrasyonu", "Apex", "LWC", "Agentforce", "e-ticaret ERP"],
  alternates: { canonical: "/blog", languages: { "tr-TR": "/blog", en: "/en/blog" } },
  openGraph: {
    title: "Salesforce, ERP ve CRM Teknik Blogu | Samet ER",
    description: "Kurumsal yazılım, Salesforce ve entegrasyon mimarileri üzerine özgün teknik rehberler.",
    url: "/blog", type: "website", locale: "tr_TR",
  },
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogPage() {
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
              <article className={`blog-card blog-tone-${(index % 3) + 1}`} key={post.slug}>
                <div className="blog-card-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <small className="blog-category">{post.category} · {post.readingTime}</small>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.slug}`}>Yazıyı oku <span>↗</span></a>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}
