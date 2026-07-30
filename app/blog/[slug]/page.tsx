import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { trPosts } from "@/lib/static-posts";
import { SiteFooter, SiteHeader } from "../../site-shell";

export const dynamic = "force-static";
export const dynamicParams = false;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = trPosts.find((item) => item.slug === slug);
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
  const post = trPosts.find((item) => item.slug === slug);
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
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <div className="blog-body">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}

export function generateStaticParams() {
  return trPosts.map((post) => ({ slug: post.slug }));
}
