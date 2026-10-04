# Artikel Kahade — artikel.kahade.id

Blog/artikel Kahade. Dibangun di atas [@kahade/ui](https://github.com/kahade-id/design-system) v0.4.2.

## Tambah artikel baru

Edit `lib/articles.ts` — tambah objek ke array `articles`:

```ts
{
  slug: "judul-artikel",
  title: "Judul Artikel",
  excerpt: "Ringkasan 1-2 kalimat.",
  date: "4 Oktober 2026",
  category: "Kategori",
  readTime: "5 menit",
  content: [
    { heading: "Sub-judul", body: ["Paragraf 1.", "Paragraf 2."] },
  ],
}
```

Halaman `/[slug]` otomatis ter-generate (generateStaticParams).

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
