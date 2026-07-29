import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Samet ER'in Salesforce, CRM, ERP, POS ve entegrasyon odaklı seçilmiş yazılım projeleri.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    number: "01",
    title: "ReSoft Adaptive CRM",
    subtitle: "Salesforce bağlantılı CRM ve perakende ERP",
    description:
      "Müşteri verilerini, perakende operasyonlarını ve iş akışlarını Salesforce Sales Cloud ile birleştiren uyarlanabilir kurumsal platform.",
    result: "CRM, ERP ve satış operasyonları arasında tek veri akışı",
    tags: ["Salesforce", "Apex", "C#", "JavaScript", "CRM", "ERP"],
    href: "https://github.com/aptus0/Re",
    color: "project-blue",
  },
  {
    number: "02",
    title: "SAMER Hub",
    subtitle: "Birleşik POS ve operasyon platformu",
    description:
      "POS cihazlarını, masaları, siparişleri, kasaları ve faturalandırmayı güvenilir bir operasyon akışında buluşturan Windows çözümü.",
    result: "Dağınık perakende süreçleri için merkezi operasyon deneyimi",
    tags: ["C#", ".NET", "PowerShell", "POS", "Retail"],
    href: "https://github.com/aptus0/INF-5000F-Pos-Tracking",
    color: "project-lime",
  },
  {
    number: "03",
    title: "Network Manager",
    subtitle: "PC–POS iletişim yönetimi",
    description:
      "Bilgisayarlar ve POS cihazları arasındaki ağ iletişimini izleyen ve yöneten odaklı bir Windows yardımcı programı.",
    result: "Daha görünür, yönetilebilir ve güvenilir cihaz iletişimi",
    tags: ["Windows", "Network", "POS", "Operations"],
    href: "https://github.com/aptus0/Network-Manager-Releases",
    color: "project-coral",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero shell">
        <span className="section-number">(01) Projeler</span>
        <h1>Karmaşık sistemlerden<br /><em>net iş sonuçlarına.</em></h1>
        <p>Salesforce, CRM, ERP ve perakende operasyonlarını gerçek problemlere odaklanan sürdürülebilir ürünlere dönüştürüyorum.</p>
      </section>
      <section className="shell detail-projects">
        {projects.map((project) => (
          <article className="detail-project" key={project.title}>
            <div className={`detail-project-visual ${project.color}`}>
              <span>{project.number}</span>
              <strong>{project.title.charAt(0)}</strong>
              <small>{project.subtitle}</small>
            </div>
            <div className="detail-project-copy">
              <span className="section-number">{project.number}</span>
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
              <p>{project.description}</p>
              <div className="result"><b>Sonuç</b><span>{project.result}</span></div>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">GitHub&apos;da incele ↗</a>
            </div>
          </article>
        ))}
      </section>
      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}
