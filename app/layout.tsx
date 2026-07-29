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
  title: "Samet — Designer & Developer",
  description:
    "Samet'in seçilmiş dijital ürün, web tasarımı ve yaratıcı geliştirme çalışmaları.",
  openGraph: {
    title: "Samet — Designer & Developer",
    description: "Fikirleri etkileyici dijital deneyimlere dönüştürüyorum.",
    type: "website",
    locale: "tr_TR",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Samet portföyü" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samet — Designer & Developer",
    description: "Fikirleri etkileyici dijital deneyimlere dönüştürüyorum.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
