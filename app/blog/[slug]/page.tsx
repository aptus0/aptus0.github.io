import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPost } from "@/lib/blog";
import { SiteFooter, SiteHeader } from "../../site-shell";

export const dynamic = "force-dynamic";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return { title: "Yazı bulunamadı" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="shell blog-article">
        <a className="blog-back" href="/blog">← Tüm yazılar</a>
        <div className="blog-article-heading">
          <span className="section-number">Teknik not</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        </div>
        <div className="blog-body">
          {post.content.split(/\n{2,}/).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}
