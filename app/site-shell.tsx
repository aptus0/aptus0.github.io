export const linkedinUrl = "https://www.linkedin.com/in/samet-er-75915a3a3/";
export const githubUrl = "https://github.com/aptus0";

export function SiteHeader() {
  return (
    <header className="nav shell">
      <a className="brand" href="/" aria-label="Ana sayfa">
        <img src="/logo.svg" alt="Samet ER — Salesforce Developer" />
      </a>
      <nav aria-label="Ana menü">
        <a href="/projects">Projeler</a>
        <a href="/services">Hizmetler</a>
        <a href="/about">Hakkımda</a>
        <a href="/about#certificates">Sertifikalar</a>
      </nav>
      <a className="nav-cta" href={linkedinUrl} target="_blank" rel="noreferrer">
        Birlikte çalışalım <span>↗</span>
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="shell">
      <a className="brand" href="/" aria-label="Ana sayfaya dön">
        <img src="/logo.svg" alt="Samet ER — Salesforce Developer" />
      </a>
      <p>© 2026 Samet ER. Bursa, Türkiye.</p>
      <div>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}
