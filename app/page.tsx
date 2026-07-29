const projects = [
  {
    number: "01",
    title: "Sales Cloud 360",
    type: "Salesforce CRM · 2026",
    description:
      "Satış ekipleri için fırsat yönetimini sadeleştiren, otomasyon ve gerçek zamanlı raporlama odaklı CRM çözümü.",
    color: "project-blue",
    tags: ["Apex", "LWC", "Sales Cloud"],
  },
  {
    number: "02",
    title: "Service Hub",
    type: "Service Cloud · 2025",
    description:
      "Omnichannel yönlendirme ve akıllı vaka akışlarıyla müşteri destek operasyonlarını hızlandıran platform.",
    color: "project-lime",
    tags: ["Service Cloud", "Flow", "Integration"],
  },
  {
    number: "03",
    title: "Partner Connect",
    type: "Experience Cloud · 2025",
    description:
      "İş ortaklarının teklif, sipariş ve destek süreçlerini tek noktadan yönettiği güvenli self-servis portal.",
    color: "project-coral",
    tags: ["Experience Cloud", "Apex API", "LWC"],
  },
];

const services = [
  ["01", "Salesforce Geliştirme", "Apex, Lightning Web Components ve Flow ile güvenilir, ölçeklenebilir kurumsal çözümler."],
  ["02", "CRM Otomasyonu", "Satış ve servis ekiplerinin tekrar eden işlerini azaltan akıllı süreçler ve onay akışları."],
  ["03", "Sistem Entegrasyonu", "Salesforce'u REST/SOAP API ve event tabanlı mimarilerle diğer iş sistemlerine bağlayan entegrasyonlar."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span className="status-dot" />
          Salesforce projeleri için müsait · Bursa
        </div>
        <h1>
          Salesforce&apos;u <em>iş sonuçlarına</em>
          <br />
          dönüşen güçlü
          <br />
          çözümlere dönüştürüyorum.
        </h1>
        <div className="hero-bottom">
          <p>
            Merhaba, ben Samet ER. Apex, Lightning Web Components ve otomasyon
            gücünü kullanarak işletmeler için ölçeklenebilir Salesforce
            deneyimleri geliştiriyorum.
          </p>
          <a className="circle-link" href="/projects" aria-label="Projeleri gör">
            <span>Projeleri gör</span>
            <b>↓</b>
          </a>
        </div>
        <div className="hero-orbit orbit-one">✦</div>
        <div className="hero-orbit orbit-two">✦</div>
      </section>

      <section className="trust-strip">
        <div className="shell trust-inner">
          <span>APEX</span><i>✦</i><span>LIGHTNING</span><i>✦</i>
          <span>AUTOMATION</span><i>✦</i><span>INTEGRATION</span>
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="section-heading">
          <div>
            <span className="section-number">(01)</span>
            <p>Seçilmiş çalışmalar</p>
          </div>
          <h2>Doğru CRM mimarisi,<br />ölçülebilir fark yaratır.</h2>
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
                    <small>Salesforce business solution</small>
                  </div>
                </div>
                <a href="/projects" aria-label={`${project.title} projesini incele`}>↗</a>
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
            <h2>Sadece çalışan değil,<br /><em>değer üreten</em> sistemler.</h2>
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
            <span>Bursa<br />Türkiye</span>
          </div>
          <div className="about-copy">
            <span className="section-number">(03) Hakkımda</span>
            <h2>Salesforce benim için bir CRM&apos;den fazlası: <em>iş süreçlerini dönüştüren bir platform.</em></h2>
            <p>
              Karmaşık iş ihtiyaçlarını temiz veri modellerine, sürdürülebilir
              Apex koduna ve kullanıcı dostu Lightning deneyimlerine
              dönüştürüyorum. Her çözümde güvenlik, performans ve ölçeklenebilirliği
              birlikte ele alıyorum.
            </p>
            <div className="stats">
              <div><strong>4+</strong><span>Yıllık deneyim</span></div>
              <div><strong>24</strong><span>CRM teslimatı</span></div>
              <div><strong>3×</strong><span>Salesforce sertifikası</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact-inner">
          <span className="section-number">(04) Yeni bir proje</span>
          <h2>Salesforce&apos;ta çözmek istediğin<br /><em>bir iş problemi mi var?</em></h2>
          <div className="contact-actions">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn&apos;den ulaş <span>↗</span></a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub profilim <span>↗</span></a>
          </div>
        </div>
        <SiteFooter />
      </section>
    </main>
  );
}
import { SiteFooter, SiteHeader, githubUrl, linkedinUrl } from "./site-shell";
