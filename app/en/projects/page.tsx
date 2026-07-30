import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";

export const metadata: Metadata = { title: "Projects", description: "Selected commerce, mobile, ERP and Salesforce projects by Samet ER.", alternates: { canonical: "/en/projects" } };

const projects = [
  { number: "01", title: "Karacabey Gross Market", subtitle: "ERP-backed omnichannel market platform", image: "/projects/karacabey-gross-market.png", description: "A custom commerce system combining a React storefront, Flutter mobile app, Filament operations panel and Microsoft SQL Server ERP synchronization.", result: "One product and order flow across web, mobile, operations and ERP.", tags: ["Laravel 13", "React", "Flutter", "Filament", "MSSQL", "PayTR"] },
  { number: "02", title: "Erler AVM", subtitle: "Modern web store and native iOS experience", image: "/projects/erler-avm.png", description: "A full commerce platform covering storefront, inventory, variants, orders, returns, payments, administration and a SwiftUI mobile client.", result: "A shared, scalable commerce foundation for web, iOS and store operations.", tags: ["Laravel 13", "Vue 3", "TypeScript", "SwiftUI", "MSSQL"] },
  { number: "03", title: "R3", subtitle: "ReSoft Adaptive CRM & Retail ERP", image: "/projects/r3-resoft.png", description: "A desktop ERP and CRM platform connecting stores, warehouses, finance and sales teams with Salesforce Customer 360.", result: "Continuous decision support between ERP operations and customer-facing teams.", tags: [".NET", "C#", "SQLite", "Salesforce", "Apex", "LWC"] },
];

export default function EnglishProjects() {
  return <main><SiteHeader locale="en" /><section className="subpage-hero shell"><span className="section-number">(01) Projects</span><h1>From idea to operations,<br /><em>end-to-end products.</em></h1><p>Commerce, mobile, ERP and CRM layers designed around real operational needs.</p></section><section className="shell detail-projects">{projects.map((project) => <article className="detail-project project-case" key={project.title}><div className="detail-project-visual project-cover"><img src={project.image} alt={`${project.title} interfaces`} /></div><div className="detail-project-copy"><span className="section-number">{project.number}</span><h2>{project.title}</h2><h3>{project.subtitle}</h3><p>{project.description}</p><div className="result"><b>Project value</b><span>{project.result}</span></div><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</section><section className="contact page-contact"><SiteFooter locale="en" /></section></main>;
}
