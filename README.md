# Artikel Kahade — artikel.kahade.id

Blog/artikel Kahade. Dibangun di atas [@kahade/ui](https://github.com/kahade-id/design-system) v0.4.3.

## Tambah artikel baru

Edit `lib/articles.ts` — tambah objek ke array `articles`:

```ts
{
  slug: "judul-artikel", // unik, huruf kecil + strip, dipakai di URL
  title: "Judul Artikel",
  excerpt: "Ringkasan 1-2 kalimat, maks ~160 karakter (jadi meta description).",
  date: "4 Oktober 2026", // format Indonesia untuk tampil
  dateISO: "2026-10-04", // format ISO untuk sitemap & metadata
  category: "Kategori",
  content: [
    { heading: "Sub-judul", body: ["Paragraf 1.", "Paragraf 2."] },
  ],
}
```

Otomatis: halaman `/[slug]` ter-generate (generateStaticParams), waktu baca
dihitung dari jumlah kata (`articleReadTime`), OG image dibuat per artikel,
dan URL masuk `sitemap.xml` + `robots.txt`.

## Aturan konten

- Sumber kebenaran: whitepaper Kahade v1.0.
- Bahasa Indonesia, santai tapi rapi (target Gen Z).
- Deskripsi resmi: "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial."
- JANGAN pakai kata: escrow, rekber, ditahan, penahanan.
- Tombol beli: "Beli via Kahade".

## Pengembangan lokal

```bash
npm install
npm run dev
```
