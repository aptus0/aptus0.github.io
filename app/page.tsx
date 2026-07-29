const projects = [
  {
    number: "01",
    title: "Noma Studio",
    type: "Marka deneyimi · 2026",
    description:
      "Yaratıcı bir stüdyo için strateji, görsel kimlik ve yüksek dönüşümlü dijital deneyim.",
    color: "project-blue",
    tags: ["Creative direction", "Web design"],
  },
  {
    number: "02",
    title: "Mori",
    type: "Dijital ürün · 2025",
    description:
      "Günlük rutinleri sakinleştiren, erişilebilir ve insan odaklı bir wellness platformu.",
    color: "project-lime",
    tags: ["Product design", "Development"],
  },
  {
    number: "03",
    title: "Aster Finance",
    type: "Fintech · 2025",
    description:
      "Karmaşık finansal verileri net, güvenilir ve etkileyici bir ürüne dönüştüren arayüz.",
    color: "project-coral",
    tags: ["UX strategy", "Interface"],
  },
];

const services = [
  ["01", "Ürün & Web Tasarımı", "İş hedeflerini güçlü bir dijital deneyime dönüştüren strateji, kullanıcı akışı ve arayüz tasarımı."],
  ["02", "Frontend Geliştirme", "Hızlı, erişilebilir ve her ekranda kusursuz çalışan modern web deneyimleri."],
  ["03", "Marka & Yaratıcı Yön", "Markanızı tanınır ve tutarlı kılan görsel dil, tipografi ve dijital sistem."],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Ana sayfa">
          S<span>✦</span>
        </a>
        <nav aria-label="Ana menü">
          <a href="#work">Projeler</a>
          <a href="#services">Hizmetler</a>
          <a href="#about">Hakkımda</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Birlikte çalışalım <span>↗</span>
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span className="status-dot" />
          Yeni projeler için müsait · İstanbul
        </div>
        <h1>
          Fikirleri <em>etkileyici</em>
          <br />
          dijital deneyimlere
          <br />
          dönüştürüyorum.
        </h1>
        <div className="hero-bottom">
          <p>
            Merhaba, ben Samet. Strateji, tasarım ve teknolojiyi birleştirerek
            insanların hatırladığı dijital ürünler yaratıyorum.
          </p>
          <a className="circle-link" href="#work" aria-label="Projeleri gör">
            <span>Projeleri gör</span>
            <b>↓</b>
          </a>
        </div>
        <div className="hero-orbit orbit-one">✦</div>
        <div className="hero-orbit orbit-two">✦</div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-inner">
          <span>STRATEJİ</span><i>✦</i><span>TASARIM</span><i>✦</i>
          <span>GELİŞTİRME</span><i>✦</i><span>DENEYİM</span>
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="section-heading">
          <div>
            <span className="section-number">(01)</span>
            <p>Seçilmiş çalışmalar</p>
          </div>
          <h2>Detaylara verilen özen,<br />büyük farklar yaratır.</h2>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual ${project.color}`}>
                <span className="project-index">{project.number}</span>
                <div className="mock-window">
                  <div className="mock-bar"><i /><i /><i /></div>
                  <div className="mock-content">
                    <span>{project.title}</span>
                    <strong>{project.title.charAt(0)}</strong>
                    <small>Independent digital experience</small>
                  </div>
                </div>
                <a href="#contact" aria-label={`${project.title} projesini incele`}>↗</a>
              </div>
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="shell">
          <div className="section-heading light">
            <div>
              <span className="section-number">(02)</span>
              <p>Neler yapıyorum?</p>
            </div>
            <h2>İyi görünen değil,<br /><em>iyi çalışan</em> işler.</h2>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <b>↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about shell section" id="about">
        <div className="about-card">
          <div className="portrait" aria-label="Samet için portre alanı">
            <div className="portrait-shape">S</div>
            <span>İstanbul<br />Türkiye</span>
          </div>
          <div className="about-copy">
            <span className="section-number">(03) Hakkımda</span>
            <h2>Tasarım benim için süs değil, <em>bir problemi en zarif şekilde çözme biçimi.</em></h2>
            <p>
              Dijital ürünler, markalar ve web deneyimleri tasarlıyor; fikrin ilk
              çizgisinden çalışan son ürüne kadar her aşamada yaratıcı ve
              sistematik düşünüyorum.
            </p>
            <div className="stats">
              <div><strong>4+</strong><span>Yıllık deneyim</span></div>
              <div><strong>24</strong><span>Tamamlanan proje</span></div>
              <div><strong>100%</strong><span>Detay tutkusu</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact-inner">
          <span className="section-number">(04) Yeni bir proje</span>
          <h2>Aklında güzel bir fikir mi var?<br /><em>Birlikte hayata geçirelim.</em></h2>
          <a href="mailto:hello@samet.design">hello@samet.design <span>↗</span></a>
        </div>
        <footer className="shell">
          <a className="brand" href="#top">S<span>✦</span></a>
          <p>© 2026 Samet. Özenle tasarlandı.</p>
          <div><a href="#">LinkedIn</a><a href="#">GitHub</a><a href="#">Instagram</a></div>
        </footer>
      </section>
    </main>
  );
}
