import { deletePost, savePost } from "./actions";
import { getAllPosts } from "@/lib/blog";
import { requireAdmin } from "@/lib/admin-auth";
import { chatGPTSignOutPath } from "../chatgpt-auth";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Editorial Console",
  robots: { index: false, follow: false },
};

export default async function EditorialConsolePage() {
  const user = await requireAdmin();
  const posts = await getAllPosts();

  return (
    <main className="editorial-console">
      <header className="console-header">
        <div>
          <span className="section-number">Samet ER · Private Studio</span>
          <h1>Editorial Console</h1>
        </div>
        <div className="console-user">
          <span>{user.displayName}</span>
          <small>{user.email}</small>
          <a href={chatGPTSignOutPath("/")}>Çıkış yap</a>
        </div>
      </header>

      <div className="console-layout">
        <section className="console-compose">
          <div className="console-section-title">
            <span>01</span>
            <div><h2>Yeni yazı</h2><p>Blog için yeni bir teknik not oluştur.</p></div>
          </div>
          <form action={savePost}>
            <label>
              Başlık
              <input name="title" required minLength={4} maxLength={140} placeholder="Yazının güçlü başlığı" />
            </label>
            <label>
              URL kısa adı
              <input name="slug" maxLength={90} placeholder="Boş bırakırsan başlıktan oluşturulur" />
            </label>
            <label>
              Kısa özet
              <textarea name="excerpt" required rows={3} maxLength={320} placeholder="Liste sayfasında görünecek kısa açıklama" />
            </label>
            <label>
              İçerik
              <textarea name="content" required rows={14} placeholder="Paragrafları boş satırla ayırabilirsin." />
            </label>
            <label className="console-status">
              Yayın durumu
              <select name="status" defaultValue="published">
                <option value="published">Yayınla</option>
                <option value="draft">Taslak olarak sakla</option>
              </select>
            </label>
            <button type="submit">Yazıyı kaydet <span>↗</span></button>
          </form>
        </section>

        <section className="console-posts">
          <div className="console-section-title">
            <span>02</span>
            <div><h2>Yazılar</h2><p>Yayınlanan ve taslak içerikler.</p></div>
          </div>
          <div className="console-post-list">
            {posts.length ? posts.map((post) => (
              <article key={post.id}>
                <div>
                  <span className={`post-status status-${post.status}`}>{post.status === "published" ? "Yayında" : "Taslak"}</span>
                  <h3>{post.title}</h3>
                  <small>/blog/{post.slug}</small>
                </div>
                <form action={deletePost}>
                  <input type="hidden" name="id" value={post.id} />
                  <button type="submit">Sil</button>
                </form>
              </article>
            )) : <p className="console-empty">Henüz yazı yok.</p>}
          </div>
        </section>
      </div>
    </main>
  );
}
