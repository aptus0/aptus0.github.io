import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Samet ER'in e-ticaret, mobil uygulama, ERP, CRM ve Salesforce odaklı Karacabey Gross Market, Erler AVM ve R3 projeleri.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    number: "01",
    title: "Karacabey Gross Market",
    subtitle: "ERP destekli omnichannel market platformu",
    image: "/projects/karacabey-gross-market.png",
    description:
      "Web mağazası, Flutter mobil uygulaması, yönetim paneli ve ERP senkronizasyonunu tek mimaride birleştiren özel e-ticaret çözümü. Ürün, varyant, stok, sipariş, kampanya, ödeme ve teslimat akışları merkezî olarak yönetiliyor.",
    scope: [
      ["E-ticaret", "Mobil uyumlu özel mağaza, sepet, ödeme ve müşteri hesabı"],
      ["Mobil", "Flutter, Riverpod ve güvenli API ile iOS/Android deneyimi"],
      ["ERP", "Microsoft SQL Server ile ürün, stok ve sipariş senkronizasyonu"],
    ],
    result: "Web, mobil, operasyon ve ERP arasında tek ürün ve sipariş akışı",
    tags: ["Laravel 13", "React 19", "Inertia.js", "Flutter", "Filament", "MSSQL", "PayTR"],
    href: "https://github.com/aptus0/KaracabeyGrossMarket",
  },
  {
    number: "02",
    title: "Erler AVM",
    subtitle: "Modern web mağazası ve native iOS deneyimi",
    image: "/projects/erler-avm.png",
    description:
      "Mağaza vitrini, gerçek zamanlı stok, ürün varyantları, sipariş ve iade süreçleri, kampanyalar, yönetim paneli ve mobil uygulamayı bir araya getiren kapsamlı e-ticaret platformu.",
    scope: [
      ["E-ticaret", "Ürün, marka, kategori, favori, sepet ve müşteri akışları"],
      ["Mobil", "SwiftUI ile geliştirilen native iOS alışveriş uygulaması"],
      ["Operasyon", "Akbank 3D Secure, PayTR, güvenli REST API ve rol yönetimi"],
    ],
    result: "Web, iOS ve mağaza operasyonları için ortak ve ölçeklenebilir ticaret altyapısı",
    tags: ["Laravel 13", "Vue 3", "TypeScript", "Inertia.js", "SwiftUI", "MSSQL", "Sanctum"],
    href: "https://github.com/aptus0/ErlerAvm",
  },
  {
    number: "03",
    title: "R3",
    subtitle: "ReSoft Adaptive CRM & Retail ERP",
    image: "/projects/r3-resoft.png",
    description:
      "Mağaza, depo, finans ve satış ekiplerini aynı veri akışında buluşturan masaüstü ERP ve CRM platformu. Salesforce Sales Cloud bağlantısıyla müşteri, teklif, stok, fatura ve tahsilat görünürlüğü tek çalışma alanına taşınıyor.",
    scope: [
      ["ERP", "Şube, depo, stok hareketi, fatura, ödeme ve finans yönetimi"],
      ["CRM", "Customer 360, satış fırsatları, teklifler ve onay süreçleri"],
      ["Salesforce", "Apex, LWC, Flow ve güvenli entegrasyon servisleri"],
    ],
    result: "ERP operasyonu ile müşteri ve satış ekipleri arasında kesintisiz karar desteği",
    tags: [".NET", "C#", "SQLite", "Salesforce", "Apex", "LWC", "Flow", "REST API"],
    href: "https://github.com/aptus0/Re",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero shell projects-hero">
        <span className="section-number">(01) Projeler</span>
        <h1>Fikirden operasyona,<br /><em>uçtan uca ürünler.</em></h1>
        <p>
          E-ticaret, mobil uygulama, ERP ve CRM katmanlarını gerçek operasyon
          ihtiyaçlarına göre tasarlıyor; birbirinden kopuk sistemleri tek,
          sürdürülebilir ürün deneyiminde buluşturuyorum.
        </p>
      </section>

      <section className="shell detail-projects">
        {projects.map((project) => (
          <article className="detail-project project-case" key={project.title}>
            <div className="detail-project-visual project-cover">
              <img src={project.image} alt={`${project.title} ürün ekranları`} />
              <span>{project.number}</span>
            </div>
            <div className="detail-project-copy">
              <span className="section-number">{project.number} · Seçilmiş proje</span>
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
              <p>{project.description}</p>

              <div className="project-scope">
                {project.scope.map(([label, detail]) => (
                  <div key={label}>
                    <b>{label}</b>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="result"><b>Proje değeri</b><span>{project.result}</span></div>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                GitHub&apos;da incele ↗
              </a>
            </div>
          </article>
        ))}
      </section>
      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}
