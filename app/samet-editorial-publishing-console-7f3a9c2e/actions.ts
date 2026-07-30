"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDb } from "@/db";
import { posts } from "@/db/schema";
import { assertAdminAction, EDITORIAL_CONSOLE_PATH } from "@/lib/admin-auth";
import { normalizeSlug } from "@/lib/blog";

export async function savePost(formData: FormData) {
  await assertAdminAction();

  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const requestedSlug = String(formData.get("slug") ?? "").trim();
  const status = formData.get("status") === "draft" ? "draft" : "published";
  const slug = normalizeSlug(requestedSlug || title);

  if (title.length < 4 || !excerpt || !content || !slug) {
    throw new Error("Başlık, özet ve içerik alanları zorunludur.");
  }

  const now = new Date().toISOString();
  const db = await getDb();
  await db.insert(posts).values({
    title,
    slug,
    excerpt,
    content,
    status,
    createdAt: now,
    updatedAt: now,
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath(EDITORIAL_CONSOLE_PATH);
  redirect(EDITORIAL_CONSOLE_PATH);
}

export async function deletePost(formData: FormData) {
  await assertAdminAction();
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) throw new Error("Geçersiz yazı.");

  const db = await getDb();
  await db.delete(posts).where(eq(posts.id, id));
  revalidatePath("/blog");
  revalidatePath(EDITORIAL_CONSOLE_PATH);
  redirect(EDITORIAL_CONSOLE_PATH);
}
