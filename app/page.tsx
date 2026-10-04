import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleFilter } from "@/components/ArticleFilter";

export const metadata: Metadata = {
  title: "Artikel Kahade — Tips Jual Beli Aman & Panduan",
  description:
    "Tips jual beli aman, panduan terhindar dari penipuan online, dan cerita dari dunia jual-beli sosial Kahade.",
  alternates: { canonical: "https://artikel.kahade.id" },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Kawal Hak Dengan Aman",
    logo: "https://artikel.kahade.id/favicon.svg",
    url: "https://artikel.kahade.id",
    sameAs: [
      "https://kahade.id",
      "https://karir.kahade.id",
      "https://legal.kahade.id",
      "https://bantuan.kahade.id",
      "https://status.kahade.id",
      "https://investor.kahade.id",
      "https://artikel.kahade.id",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-5 pb-20">
        {/* Hero */}
        <section className="py-14 text-center sm:py-20">
          <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
            Cerita dari dunia jual-beli sosial
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
            Panduan, tips aman bertransaksi, dan kabar terbaru dari Kahade —
            aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti
            media sosial.
          </p>
        </section>

        {/* Grid artikel + filter kategori */}
        <ArticleFilter />
      </main>

      <SiteFooter />
    </div>
  );
}
