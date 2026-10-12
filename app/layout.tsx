import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SiteFooter } from "@kahade/ui";
import { Header } from "@/components/site/Header";

// Plus Jakarta Sans self-hosted via next/font: tanpa CSS pihak ketiga yang
// memblokir render. Variabel dipasang di <html> agar token --font-sans di
// :root ikut terisi (memasangnya di <body> membuat font jatuh ke fallback).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Artikel Kahade",
    template: "%s — Artikel Kahade",
  },
  description:
    "Cerita, panduan, dan kabar terbaru dari Kahade — aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial.",
  metadataBase: new URL("https://artikel.kahade.id"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Artikel Kahade",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <a href="#konten-utama" className="kh-skip-link">
          Lewati ke konten utama
        </a>
        <Header />
        <main id="konten-utama" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter site="artikel" linkAs={Link} />
      </body>
    </html>
  );
}
