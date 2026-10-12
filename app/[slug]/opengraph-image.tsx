import { ImageResponse } from "next/og";
import { articleReadTime, articles, getArticle } from "@/lib/articles";
import { OG_COLORS, OG_SIZE, OgLockup, loadOgFonts } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";

/** Prerender OG image tiap artikel saat build (bukan saat request). */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

/**
 * OG image per artikel — di-generate saat build (static).
 * Desain: latar hitam, mark kuning, judul putih tebal, strip meta.
 * Font dibaca dari file lokal agar build tidak bergantung jaringan.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  const title = article?.title ?? "Artikel Kahade";
  const category = article?.category ?? "";
  const meta = article ? `${article.date} · ${articleReadTime(article)} baca` : "";
  const titleSize = title.length > 64 ? 60 : 68;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: OG_COLORS.bg,
          color: OG_COLORS.fg,
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        <OgLockup />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {category && (
            <div
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: OG_COLORS.muted,
                marginBottom: 20,
              }}
            >
              {category}
            </div>
          )}
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${OG_COLORS.line}`,
            paddingTop: 24,
            fontSize: 24,
            fontWeight: 500,
            color: OG_COLORS.subtle,
          }}
        >
          <div>{meta}</div>
          <div>artikel.kahade.id</div>
        </div>
      </div>
    ),
    { ...size, fonts: await loadOgFonts() },
  );
}
