import type { Metadata } from "next";
import { SiteFooter, SiteHeader, githubUrl, linkedinUrl } from "../site-shell";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Bursa merkezli Salesforce Engineer ve Full-Stack Developer Samet ER hakkında; uzmanlıkları, yaklaşımı ve çalışma prensipleri.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero shell">
        <span className="section-number">(03) Hakkımda</span>
        <h1>Merhaba, ben<br /><em>Samet ER.</em></h1>
        <p>Bursa merkezli Salesforce Engineer ve Full-Stack Developer&apos;ım. Kurumsal sistemlerin karmaşıklığını insanlar için sade deneyimlere dönüştürüyorum.</p>
      </section>
      <section className="about-story shell">
        <div className="about-monogram">
          <img src="/favicon.svg" alt="Samet ER S monogramı" />
          <span>Bursa · Türkiye</span>
        </div>
        <div className="story-copy">
          <h2>Mühendislikte açıklık,<br />üründe <em>etki.</em></h2>
          <p>Salesforce, CRM, ERP, perakende ve POS operasyonlarını birbirine bağlayan kurumsal ürünler geliştiriyorum. Çalışmalarım bulut mimarisi, sağlam backend sistemleri, modern arayüzler ve güvenilir entegrasyonların kesişiminde yer alıyor.</p>
          <p>Bir projeye yalnızca teknik görevler bütünü olarak bakmıyorum. Önce iş problemini, kullanıcıyı ve operasyonu anlamaya; ardından gereksiz karmaşıklığı azaltan sürdürülebilir bir sistem kurmaya odaklanıyorum.</p>
          <div className="principles">
            <div><b>01</b><span>Net mimari</span></div>
            <div><b>02</b><span>Güvenilir entegrasyon</span></div>
            <div><b>03</b><span>Düşünülmüş deneyim</span></div>
          </div>
          <div className="profile-links">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>
      <section className="contact page-contact"><SiteFooter /></section>
    </main>
  );
}
