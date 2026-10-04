import { ImageResponse } from "next/og";
import { getArticle } from "@/lib/articles";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG image per artikel — di-generate saat build (static).
 * Desain: putih, aksen kuning brand, judul hitam. Tanpa fetch font
 * eksternal agar build tidak bergantung jaringan.
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

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "12px",
            backgroundColor: "#FFD200",
            borderRadius: "6px",
            marginBottom: "32px",
          }}
        />
        {category && (
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#737373",
              marginBottom: "16px",
            }}
          >
            {category}
          </div>
        )}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#000000",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "30px",
            fontWeight: 700,
            color: "#000000",
          }}
        >
          Artikel Kahade
        </div>
      </div>
    ),
    { ...size },
  );
}
