import type { Metadata } from "next";
import { SiteFooter, SiteHeader, githubUrl, linkedinUrl } from "../site-shell";

export const metadata: Metadata = {
  title: "Salesforce & Full-Stack Developer",
  description:
    "Samet ER builds Salesforce, ERP, CRM, e-commerce and mobile products from Bursa, Türkiye.",
  alternates: { canonical: "/en", languages: { "tr-TR": "/", en: "/en" } },
};

const projects = [
  ["Karacabey Gross Market", "E-commerce · Mobile · ERP", "/projects/karacabey-gross-market.png", "Laravel, React and Flutter commerce platform with ERP inventory synchronization."],
  ["Erler AVM", "E-commerce · Native iOS", "/projects/erler-avm.png", "Unified web, native iOS, payments and real-time inventory experience."],
  ["R3 ERP", "SMB · Retail · Finance", "/projects/r3-erp-dashboard.jpeg", "Integrated desktop ERP for sales, purchasing, inventory, finance, retail, e-transformation and management reporting."],
];

export default function EnglishHome() {
  return (
    <main>
      <SiteHeader locale="en" />
      <section className="hero shell">
        <div className="eyebrow"><span className="status-dot" />Available for Salesforce projects · Bursa</div>
        <h1>Building systems<br />that turn <em>complexity</em><br />into business value.</h1>
        <div className="hero-bottom">
          <p>I&apos;m Samet ER, a Salesforce and full-stack developer focused on CRM, ERP, commerce, mobile products and reliable integrations.</p>
          <a className="circle-link" href="/en/projects"><span>View projects</span><b>↓</b></a>
        </div>
      </section>
      <section className="trust-strip"><div className="shell trust-inner"><span>SALESFORCE</span><i>✦</i><span>ERP</span><i>✦</i><span>COMMERCE</span><i>✦</i><span>MOBILE</span></div></section>
      <section className="work shell section">
        <div className="section-heading"><div><span className="section-number">(01)</span><p>Selected work</p></div><h2>Products designed for<br />real operations.</h2></div>
        <div className="projects">
          {projects.map(([title, type, image, description], index) => (
            <article className="project" key={title}>
              <div className="project-visual home-project-cover">
                <span className="project-index">0{index + 1}</span>
                <div className="home-cover-screen"><div className="screen-chrome"><i /><i /><i /><span>{title}</span></div><img src={image} alt={`${title} project`} /></div>
                <a href="/en/projects" aria-label={`View ${title}`}>↗</a>
              </div>
              <div className="project-info"><div><h3>{title}</h3><p>{type}</p></div><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="about shell section">
        <div className="about-card">
          <div className="portrait portrait-profile"><div className="profile-blob" /><img src="/samet-profile-square.png" alt="Samet ER" /><i className="profile-dot" /><b className="profile-spark">✦</b><span>Bursa<br />Türkiye</span></div>
          <div className="about-copy"><span className="section-number">(02) About</span><h2>From enterprise operations to <em>customer experience.</em></h2><p>I combine ERP and full-stack engineering experience with Salesforce to build sustainable systems across web, mobile and desktop platforms.</p><div className="profile-links"><a href="/en/about">Read my story ↗</a></div></div>
        </div>
      </section>
      <section className="contact section"><div className="shell contact-inner"><span className="section-number">(03) Start a project</span><h2>Have a business problem<br /><em>worth solving?</em></h2><div className="contact-actions"><a href={linkedinUrl}>Contact on LinkedIn <span>↗</span></a><a href={githubUrl}>GitHub profile <span>↗</span></a></div></div><SiteFooter locale="en" /></section>
    </main>
  );
}
