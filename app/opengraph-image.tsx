import { ImageResponse } from "next/og";
import { OG_COLORS, OG_SIZE, OgLockup, loadOgFonts } from "@/lib/og";

export const alt = "Artikel Kahade — cerita dan panduan jual-beli sosial";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OgImage() {
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
          background: OG_COLORS.bg,
          color: OG_COLORS.fg,
          fontFamily: "Plus Jakarta Sans",
        }}
      >
        <OgLockup />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>Cerita dari dunia</div>
            <div>jual-beli sosial</div>
          </div>
          <div style={{ marginTop: 28, fontSize: 30, fontWeight: 500, color: OG_COLORS.muted }}>
            Cerita dan panduan jual-beli sosial.
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
          <div>PT Kawal Hak Dengan Aman</div>
          <div>artikel.kahade.id</div>
        </div>
      </div>
    ),
    { ...size, fonts: await loadOgFonts() },
  );
}
