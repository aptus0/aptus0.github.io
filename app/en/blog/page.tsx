import type { Metadata } from "next";
import { enPosts as posts } from "@/lib/static-posts";
import { SiteFooter, SiteHeader } from "../../site-shell";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "Blog", description: "Technical notes on Salesforce, ERP, commerce and product engineering.", alternates: { canonical: "/en/blog" } };

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

export default function EnglishBlog() {
  return <main><SiteHeader locale="en" /><section className="subpage-hero shell blog-hero"><span className="section-number">(04) Blog</span><h1>Technical notes,<br /><em>real experience.</em></h1><p>Practical writing on Salesforce, ERP, modern web technologies and product engineering.</p></section><section className="shell blog-index"><div className="blog-grid">{posts.map((post,index) => <article className={`blog-card blog-tone-${(index%3)+1}`} key={post.slug}><div className="blog-card-meta"><span>0{index+1}</span><time dateTime={post.date}>{formatDate(post.date)}</time></div><h2>{post.title}</h2><p>{post.excerpt}</p><a href={`/en/blog/${post.slug}`}>Read article <span>↗</span></a></article>)}</div></section><section className="contact page-contact"><SiteFooter locale="en" /></section></main>;
}
