import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aptus0.github.io"),
  title: {
    default: "Samet | Salesforce Developer — Apex, LWC ve CRM",
    template: "%s | Samet Salesforce Developer",
  },
  description:
    "Salesforce Developer Samet'in Apex, Lightning Web Components, Flow, Sales Cloud, Service Cloud ve CRM entegrasyonu projelerini keşfedin.",
  applicationName: "Samet Salesforce Developer Portfolio",
  authors: [{ name: "Samet", url: "https://aptus0.github.io" }],
  creator: "Samet",
  publisher: "Samet",
  category: "technology",
  keywords: [
    "Salesforce Developer",
    "Salesforce Geliştirici",
    "Apex Developer",
    "Lightning Web Components",
    "LWC Developer",
    "Salesforce Flow",
    "Sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "Salesforce Entegrasyonu",
    "CRM Developer",
    "İstanbul Salesforce Developer",
    "Samet Salesforce",
  ],
  alternates: {
    canonical: "/",
    languages: { "tr-TR": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Samet | Salesforce Developer",
    description: "Apex, LWC, Flow ve entegrasyonlarla iş sonuçları üreten Salesforce çözümleri.",
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "Samet — Salesforce Developer",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Samet Salesforce Developer portföyü" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samet | Salesforce Developer",
    description: "Apex, LWC, Flow ve entegrasyonlarla güçlü Salesforce çözümleri.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://aptus0.github.io/#person",
  name: "Samet",
  url: "https://aptus0.github.io/",
  image: "https://aptus0.github.io/og.png",
  jobTitle: "Salesforce Developer",
  description:
    "Apex, Lightning Web Components, Flow ve Salesforce entegrasyonları geliştiren Salesforce Developer.",
  knowsAbout: [
    "Salesforce",
    "Apex",
    "Lightning Web Components",
    "Salesforce Flow",
    "Sales Cloud",
    "Service Cloud",
    "Experience Cloud",
    "REST API",
    "CRM Automation",
  ],
  sameAs: ["https://github.com/aptus0"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
