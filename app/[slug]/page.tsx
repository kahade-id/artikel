import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import { Badge, Card, Icon, Logo } from "@kahade/ui";
import { articles, getArticle, getRelated, articleReadTime } from "@/lib/articles";

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
      <header className="sticky top-0 z-10 border-b border-neutral-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={26} />
            <span className="text-base font-extrabold tracking-tight text-black">
              Artikel Kahade
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors hover:text-black"
          >
            <Icon icon={ArrowLeft} size={15} />
            Semua artikel
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-20">
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

          <div className="prose-artikel mt-10">
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

        {related.length > 0 && (
          <section className="border-t border-neutral-100 pt-10">
            <h2 className="text-xl font-bold tracking-tight text-black">
              Baca juga
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="group block">
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

      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-5 py-10 text-center">
          <Logo size={30} />
          <p className="text-sm text-neutral-500">
            Jual beli semudah scroll medsos.
          </p>
          <p className="text-xs text-neutral-500">
            © 2026 PT Kawal Hak Dengan Aman
          </p>
        </div>
      </footer>
    </div>
  );
}
