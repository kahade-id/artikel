import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import { Badge, Card, Icon } from "@kahade/ui";
import { articles, getArticle, getRelated, articleReadTime } from "@/lib/articles";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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

  const related = getRelated(slug, 2);

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
    mainEntityOfPage: `https://artikel.kahade.id/${article.slug}`,
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader backToHome />

      <main id="main-content" className="mx-auto max-w-3xl px-5 pb-20">
        <article className="py-12">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="neutral">{article.category}</Badge>
            <span className="flex items-center gap-1.5 text-sm text-neutral-500">
              <Icon icon={CalendarBlank} size={14} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-neutral-500">
              <Icon icon={Clock} size={14} />
              {articleReadTime(article)}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            {article.excerpt}
          </p>

          <div className="prose-artikel mt-10 max-w-[70ch]">
            {article.content.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <section
          aria-label="Bagikan artikel"
          className="border-t border-neutral-100 py-8"
        >
          <h2 className="text-base font-bold tracking-tight text-black">
            Bagikan artikel ini
          </h2>
          <div className="mt-4">
            <ShareButtons
              title={article.title}
              url={`https://artikel.kahade.id/${article.slug}`}
            />
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-t border-neutral-100 pt-10">
            <h2 className="text-xl font-bold tracking-tight text-black">
              Baca juga
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                >
                  <Card interactive className="h-full p-6">
                    <Badge variant="neutral">{r.category}</Badge>
                    <h3 className="mt-3 font-bold leading-snug text-black">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                      {r.excerpt}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
