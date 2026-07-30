import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { enPosts } from "@/lib/static-posts";
import { SiteFooter, SiteHeader } from "../../../site-shell";

export const dynamic = "force-static";
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = enPosts.find(item => item.slug === slug);
  return post ? { title: post.title, description: post.excerpt, alternates: { canonical: `/en/blog/${post.slug}` } } : { title: "Article not found" };
}

export default async function EnglishBlogPost({ params }: Props) {
  const { slug } = await params;
  const post = enPosts.find(item => item.slug === slug);
  if (!post) notFound();
  return <main><SiteHeader locale="en" /><article className="shell blog-article"><a className="blog-back" href="/en/blog">← All articles</a><div className="blog-article-heading"><span className="section-number">Technical note</span><h1>{post.title}</h1><p>{post.excerpt}</p><time dateTime={post.date}>{post.date}</time></div><div className="blog-body">{post.content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></article><section className="contact page-contact"><SiteFooter locale="en" /></section></main>;
}

export function generateStaticParams() { return enPosts.map(post => ({ slug: post.slug })); }
