import { and, desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { posts } from "@/db/schema";

export type BlogPost = typeof posts.$inferSelect;

export async function getPublishedPosts() {
  const db = await getDb();
  return db
    .select()
    .from(posts)
    .where(eq(posts.status, "published"))
    .orderBy(desc(posts.createdAt));
}

export async function getAllPosts() {
  const db = await getDb();
  return db.select().from(posts).orderBy(desc(posts.updatedAt));
}

export async function getPublishedPost(slug: string) {
  const db = await getDb();
  const [post] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
    .limit(1);

  return post ?? null;
}

export function normalizeSlug(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}
