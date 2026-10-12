import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, Container, Eyebrow, Icon, PageHeader, Section } from "@kahade/ui";
import { ArticleFilter } from "@/components/ArticleFilter";
import { getArticlesByNewest, getCategories, toSummary } from "@/lib/articles";

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

  const newest = getArticlesByNewest();
  const featured = toSummary(newest[0]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <PageHeader
        size="display"
        eyebrow="Artikel Kahade"
        title="Cerita dari dunia jual-beli sosial"
        lede="Panduan, tips aman bertransaksi, dan kabar terbaru dari Kahade — aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial."
      />

      {/* Cerita utama: artikel terbaru, tipografis, seluruh blok bisa diklik. */}
      <section aria-labelledby="cerita-utama">
        <Container className="py-12 sm:py-16 lg:py-20">
          <article className="group relative grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Eyebrow index="Terbaru" className="mb-5">
                {featured.category}
              </Eyebrow>
              <h2 id="cerita-utama" className="max-w-[20ch] text-h1 text-fg">
                <Link
                  href={`/${featured.slug}`}
                  className="rounded-tag decoration-2 underline-offset-[8px] group-hover:underline after:absolute after:inset-0 after:content-['']"
                >
                  {featured.title}
                </Link>
              </h2>
            </div>
            <div className="flex flex-col lg:col-span-4 lg:col-start-9 lg:justify-end">
              <p className="text-body-lg text-fg-muted">{featured.excerpt}</p>
              <p className="mt-6 border-t border-line pt-4 text-small text-fg-subtle tabular-nums">
                <time dateTime={featured.dateISO}>{featured.date}</time>
                <span aria-hidden="true"> · </span>
                <span className="sr-only">, </span>
                {featured.readTime} baca
              </p>
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-1.5 text-body font-semibold text-fg"
              >
                Baca artikel
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                  <Icon icon={ArrowRight} size={18} />
                </span>
              </span>
            </div>
          </article>
        </Container>
      </section>

      <Section
        divider
        spacing="none"
        aria-labelledby="semua-artikel"
        className="pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
      >
        <h2 id="semua-artikel" className="mb-6 text-h2 text-fg sm:mb-8">
          Semua artikel
        </h2>
        <ArticleFilter articles={newest.map(toSummary)} categories={getCategories()} />
      </Section>

      <section className="bg-surface-inverse text-white">
        <Container className="flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-h3 text-white">Jual beli semudah scroll medsos.</h2>
            <p className="mt-3 text-body-lg text-white/70">
              Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media
              sosial, dengan perlindungan di setiap transaksi.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="https://kahade.id/" variant="inverse">
              Kenali Kahade
            </ButtonLink>
            <ButtonLink href="https://bantuan.kahade.id/" variant="inverseSecondary">
              Pusat bantuan
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
