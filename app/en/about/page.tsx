import type { Metadata } from "next";
import { SiteFooter, SiteHeader, githubUrl, linkedinUrl } from "../../site-shell";

export const metadata: Metadata = { title: "About", description: "The background and technical journey of Samet ER.", alternates: { canonical: "/en/about" } };

export default function EnglishAbout() {
  return (
    <main>
      <SiteHeader locale="en" />
      <section className="subpage-hero shell"><span className="section-number">(03) About</span><h1>Hello, I&apos;m<br /><em>Samet ER.</em></h1><p>A Salesforce and full-stack developer based in Bursa, building products at the intersection of enterprise systems, web technologies and customer experience.</p></section>
      <section className="about-story shell">
        <div className="about-monogram about-portrait-art"><img src="/samet-profile-square.png" alt="Samet ER portrait" /><span>Bursa · Türkiye</span></div>
        <div className="story-copy">
          <h2>A journey driven by<br /><em>continuous learning.</em></h2>
          <p>I studied Computer Programming at Anadolu University after graduating from an Anatolian High School. My interest in software began much earlier, while exploring programming languages and emerging technologies during middle and high school.</p>
          <p>I started with ERP systems, desktop software and network management using C#, C, Go, Java and Python. I later expanded into PHP, JavaScript, Ruby, Laravel, React, Next.js, Angular, Node.js, Flutter, Dart and Swift.</p>
          <p>Today I focus on Salesforce, Apex, Lightning Web Components, Flow, Agentforce and AI-assisted customer experiences—combining CRM with the operational depth of ERP, commerce and mobile platforms.</p>
          <div className="principles"><div><b>01</b><span>Enterprise systems</span></div><div><b>02</b><span>Web & mobile products</span></div><div><b>03</b><span>Salesforce & AI</span></div></div>
          <div className="profile-links"><a href={linkedinUrl}>LinkedIn ↗</a><a href={githubUrl}>GitHub ↗</a></div>
        </div>
      </section>
      <section className="contact page-contact"><SiteFooter locale="en" /></section>
    </main>
  );
}
