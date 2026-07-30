import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";

export const metadata: Metadata = { title: "Services", description: "Salesforce, CRM automation, integrations and full-stack product engineering.", alternates: { canonical: "/en/services" } };
const services = [
  ["01", "Salesforce Development", "Scalable enterprise solutions with Apex, Lightning Web Components, Flow and secure data models.", ["Apex & LWC", "Sales Cloud", "Service Cloud", "Agentforce"]],
  ["02", "CRM & ERP Integration", "Reliable synchronization between Salesforce, ERP, commerce, inventory and finance systems.", ["REST APIs", "Event flows", "MSSQL", "Data contracts"]],
  ["03", "Commerce & Mobile", "Custom storefronts and mobile applications backed by real operational workflows.", ["Laravel", "React / Vue", "Flutter", "SwiftUI"]],
  ["04", "Product Engineering", "Architecture, interface and delivery decisions shaped around measurable business outcomes.", ["Architecture", "Testing", "Performance", "Operations"]],
];
export default function EnglishServices() { return <main><SiteHeader locale="en" /><section className="subpage-hero shell"><span className="section-number">(02) Services</span><h1>Technology aligned<br /><em>with operations.</em></h1><p>Focused engineering services across Salesforce, integrations, commerce and mobile products.</p></section><section className="service-cards shell">{services.map(([number,title,description,items]) => <article key={number as string}><span className="section-number">{number as string}</span><h2>{title as string}</h2><p>{description as string}</p><ul>{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul></article>)}</section><section className="contact page-contact"><SiteFooter locale="en" /></section></main>; }
