import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Breadcrumb,
  Container,
  IndexList,
  PageHeader,
  Prose,
  Section,
  SectionHeader,
  TextLink,
  Toc,
} from "@kahade/ui";
import {
  articles,
  articleReadTime,
  articleSections,
  getArticle,
  getRelated,
} from "@/lib/articles";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButtons } from "@/components/ShareButtons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `https://artikel.kahade.id/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: "Artikel Kahade",
      locale: "id_ID",
      type: "article",
      publishedTime: article.dateISO,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `https://artikel.kahade.id/${article.slug}`;
  const readTime = articleReadTime(article);
  const sections = articleSections(article);
  const toc = sections.map((s) => ({ id: s.id, label: s.heading }));
  const related = getRelated(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.dateISO,
    inLanguage: "id-ID",
    author: {
      "@type": "Organization",
      name: "PT Kawal Hak Dengan Aman",
    },
    publisher: {
      "@type": "Organization",
      name: "Kahade",
    },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress targetId="isi-artikel" />
      <article>
        <PageHeader
          size="h1"
          breadcrumb={
            <Breadcrumb items={[{ label: "Artikel", href: "/" }, { label: article.title }]} />
          }
          eyebrow={article.category}
          title={article.title}
          lede={article.excerpt}
          meta={[
            {
              label: "Diterbitkan",
              value: <time dateTime={article.dateISO}>{article.date}</time>,
            },
            { label: "Waktu baca", value: readTime },
          ]}
        />

        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-8">
              {toc.length > 2 && (
                <Toc
                  items={toc}
                  title="Daftar isi"
                  variant="disclosure"
                  className="mb-10 lg:hidden"
                />
              )}

              <Prose id="isi-artikel" className="max-w-reading">
                {sections.map((s) => (
                  <Fragment key={s.id}>
                    <h2 id={s.id}>{s.heading}</h2>
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </Fragment>
                ))}
              </Prose>

              <div className="mt-14 max-w-reading border-t border-line pt-8 lg:hidden">
                <h2 className="text-small font-semibold text-fg">Bagikan artikel ini</h2>
                <ShareButtons title={article.title} url={url} className="mt-4" />
              </div>
            </div>

            <aside aria-label="Bagikan dan daftar isi" className="hidden lg:col-span-3 lg:col-start-10 lg:block">
              <div className="sticky top-28 -mx-1 -mt-1 max-h-[calc(100dvh-8rem)] overflow-y-auto px-1 pt-1 pb-4">
                <p className="mb-4 text-caption font-semibold text-fg">Bagikan artikel</p>
                <ShareButtons title={article.title} url={url} />
                {toc.length > 2 && <Toc items={toc} className="mt-8 border-t border-line pt-8" />}
              </div>
            </aside>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section tone="muted" divider>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeader
                size="h3"
                title="Baca juga"
                description="Artikel lain dengan topik yang berdekatan."
              />
              <TextLink as={Link} href="/" className="mt-4">
                Semua artikel
              </TextLink>
            </div>
            <div className="lg:col-span-8">
              <IndexList
                linkAs={Link}
                items={related.map((r) => ({
                  href: `/${r.slug}`,
                  title: r.title,
                  description: r.excerpt,
                  meta: `${r.category} · ${articleReadTime(r)} baca`,
                }))}
              />
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
