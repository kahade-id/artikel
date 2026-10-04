export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  /** Tanggal tampil, format Indonesia: "4 Oktober 2026". */
  date: string;
  /** Tanggal ISO untuk mesin (sitemap, OG): "2026-10-04". */
  dateISO: string;
  category: string;
  content: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "kenalan-dengan-kahade",
    title: "Kenalan dengan Kahade: jual-beli serasa main medsos",
    excerpt:
      "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Ini bedanya dengan marketplace yang kamu kenal.",
    date: "1 Oktober 2026",
    dateISO: "2026-10-01",
    category: "Tentang Kahade",
    content: [
      {
        heading: "Jual beli yang tampilannya kayak medsos",
        body: [
          "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Definisi itu sengaja kami buat sesederhana mungkin — karena memang sesederhana itu.",
          "Buka Kahade, yang kamu lihat adalah feed: foto dan video barang dari penjual yang kamu follow, ditambah rekomendasi yang dipersonalisasi. Ada tombol like, kolom komentar, tombol follow. Siapa pun yang pernah membuka Instagram atau TikTok langsung bisa memakainya — tidak ada cara pakai baru yang harus dipelajari.",
          "Bedanya dengan medsos biasa: setiap postingan adalah etalase mini. Ada harga, ada nama penjual, dan ada tombol \u201cBeli via Kahade\u201d. Setiap interaksi berpotensi menjadi transaksi.",
        ],
      },
      {
        heading: "Tiga kata kunci Kahade",
        body: [
          "Pengguna ke pengguna. Yang bertransaksi adalah orang biasa — bukan brand besar, bukan toko resmi dengan gudang. Tetangga. Teman. Kreator. Sesama anggota komunitas.",
          "Jual-beli. Fungsi intinya jelas dan tidak ambigu. Ini bukan media sosial yang kebetulan bisa jualan — ini aplikasi jualan yang dikemas seperti media sosial.",
          "Tampilan seperti media sosial. Feed, like, komen, follow. Pengalaman yang sudah familiar bagi jutaan anak muda Indonesia.",
        ],
      },
      {
        heading: "Kenapa bukan marketplace biasa?",
        body: [
          "Marketplace besar menyelesaikan masalah keamanan, tapi menciptakan masalah baru: pengalaman yang membosankan. Buka aplikasi, ketik di kolom pencarian, scroll daftar produk yang seragam, bandingkan harga, checkout. Murni transaksional — tanpa penemuan, tanpa interaksi sosial, tanpa keseruan.",
          "Padahal generasi muda menghabiskan 3–4 jam sehari di media sosial. Mereka tidak \u201cmenemukan\u201d barang di marketplace — mereka \u201cmencari\u201d barang. Padahal sebagian besar pembelian impulsif justru lahir dari penemuan tak terduga, bukan dari pencarian yang direncanakan.",
          "Kahade menggabungkan yang terbaik dari dua dunia: pengalaman sosial yang seru seperti media sosial, dengan keamanan transaksi setara marketplace.",
        ],
      },
      {
        heading: "Jual apa saja — bukan cuma barang fisik",
        body: [
          "Marketplace tradisional dibangun dengan asumsi yang dijual adalah barang fisik yang dikirim lewat ekspedisi. Asumsi ini mengecualikan sebagian besar ekonomi kreator muda.",
          "Di Kahade, kamu bisa menjual jasa (desain, penulisan, les privat), produk digital (preset foto, template, e-book), sampai barang preloved unik yang cuma satu di dunia. Formatnya fleksibel mengikuti sifat barangnya — bukan dipaksa masuk ke format katalog.",
        ],
      },
      {
        heading: "Cara pakainya? Lima langkah",
        body: [
          "Buat pembeli: buka Kahade dan scroll feed seperti biasa. Temukan barang atau jasa yang menarik — like, komen, atau simpan. Chat dengan penjual untuk tanya-tanya atau nego. Tekan \u201cBeli via Kahade\u201d dan selesaikan pembayaran. Penjual kirim barang, kamu konfirmasi terima. Selesai.",
          "Buat penjual: buat etalase, posting barang seperti bikin konten, terima chat dari calon pembeli, kirim barang, terima dana setelah pembeli konfirmasi. Tidak ada biaya pendaftaran, tidak ada proses berbelit untuk mulai berjualan.",
          "Tagline kami merangkum semuanya: jual beli semudah scroll medsos.",
        ],
      },
    ],
  },
  {
    slug: "jual-beli-dm-rawan-ketipu",
    title: "Kenapa jual-beli via DM rawan ketipu — dan solusinya",
    excerpt:
      "Jutaan anak muda jual-beli lewat DM setiap hari. Transaksinya masif, tapi tanpa perlindungan apa pun. Ini modus yang paling sering terjadi dan cara menghindarinya.",
    date: "2 Oktober 2026",
    dateISO: "2026-10-02",
    category: "Keamanan",
    content: [
      {
        heading: "DM adalah pasar terbesar yang tak terlihat",
        body: [
          "Dalam lima tahun terakhir, media sosial di Indonesia diam-diam berubah fungsi. Akun thrift shop menjual pakaian preloved lewat Story dan DM. Komunitas sneakers lelang lewat grup chat. Fandom K-pop bertransaksi photocard bernilai jutaan rupiah lewat mention dan DM. Freelancer menawarkan jasa lewat portofolio di feed.",
          "Yang menarik: transaksi ini bersifat sosial. Pembeli mengenal penjual lewat kontennya, menilai reputasinya dari interaksi, lalu menegosiasikan harga lewat chat yang personal. Bagi generasi yang tumbuh bersama media sosial, ini cara berbelanja yang natural.",
          "Tapi ada satu kelemahan fatal: tidak ada perlindungan.",
        ],
      },
      {
        heading: "Empat modus penipuan yang paling sering",
        body: [
          "Penjual fiktif — pembeli transfer uang, penjual menghilang. Akun dihapus, nomor diblokir. Selesai.",
          "Barang tidak sesuai — foto yang ditampilkan bagus, barang yang dikirim rusak atau palsu. Tidak ada tempat komplain.",
          "Pembeli nakal — penjual sudah kirim barang, pembeli membatalkan transfer atau memakai bukti transfer palsu.",
          "Akun kloningan — penipu meniru akun penjual terkenal dengan nama yang mirip, menjebak pembeli yang tidak teliti.",
          "Korban penipuan online di Indonesia mencapai ratusan ribu kasus per tahun, dengan kerugian miliaran rupiah.",
        ],
      },
      {
        heading: "Biaya tersembunyi yang jarang disadari",
        body: [
          "Kerugian penipuan tidak berhenti di dompet korban. Setiap kasus menggerus kepercayaan terhadap jual-beli online secara keseluruhan — menghambat pertumbuhan ekonomi digital itu sendiri.",
          "Ada juga biaya kewaspadaan: pembeli dan penjual menghabiskan waktu dan energi untuk verifikasi manual — cek testimoni, video call, tanya ke teman. Pekerjaan yang seharusnya tidak perlu ada.",
        ],
      },
      {
        heading: "Solusinya: pengalaman DM, perlindungan marketplace",
        body: [
          "Kahade menghadirkan pengalaman sosial yang persis sama seperti jual-beli via DM — hanya saja setiap pembayaran berjalan lewat sistem Kahade yang melindungi pembeli maupun penjual.",
          "Buat pembeli: uang hanya diteruskan ke penjual setelah barang atau jasa diterima dan dikonfirmasi. Barang tidak dikirim? Dana kembali ke pembeli.",
          "Buat penjual: pesanan yang sudah dibayar adalah pesanan yang pasti. Tidak ada bukti transfer palsu, tidak ada pembatalan sepihak.",
          "Kalau terjadi perselisihan, tim Kahade menengahi berdasarkan bukti dari kedua belah pihak — chat, foto, resi pengiriman.",
        ],
      },
      {
        heading: "Keamanan yang tidak terasa",
        body: [
          "Prinsip kami: keamanan yang baik adalah keamanan yang tidak terasa. Kamu tidak perlu memahami apa pun yang terjadi di balik layar — cukup tekan \u201cBeli via Kahade\u201d, dan semuanya beres.",
          "Sama seperti kamu tidak pernah berpikir tentang cara kerja sistem pembayaran di balik tombol bayar marketplace. Bedanya, di Kahade kamu tetap dapat pengalaman sosial yang seru: scroll feed, temukan barang organik, chat santai dengan penjual.",
          "Ditambah reputasi transparan: setiap transaksi bisa diulas kedua belah pihak, skor terlihat di profil, dan ulasan tidak bisa dimanipulasi penjual. Penjual jujur naik, yang bermasalah tersisih secara alami.",
        ],
      },
    ],
  },
  {
    slug: "patungan-dan-jastip",
    title: "Patungan dan jastip: dua fitur yang cuma ada di Kahade",
    excerpt:
      "Anak muda Indonesia sudah lama patungan dan jastip — cuma caranya masih manual dan rawan selisih. Kahade memberi wadah yang rapi dan aman untuk keduanya.",
    date: "3 Oktober 2026",
    dateISO: "2026-10-03",
    category: "Fitur",
    content: [
      {
        heading: "Budaya yang belum punya rumah",
        body: [
          "Patungan dan jastip bukan ide baru — ini budaya. Anak muda Indonesia sudah lama patungan untuk segalanya: paket skincare bundling demi harga grosir, sewa fotografer untuk acara bersama, peralatan dapur anak kos. Ekonomi jastip juga sudah hidup dan besar: barang luar negeri, konser, event terbatas.",
          "Masalahnya: selama ini berjalan tanpa standar dan tanpa perlindungan. Patungan caranya manual — transfer-transferan, catat di notes, rawan selisih. Jastip rawan barang tidak dibelikan atau tidak dikirim. Kahade memberi struktur untuk keduanya. Dan keamanan.",
        ],
      },
      {
        heading: "Patungan: beli bareng, rapi, aman",
        body: [
          "Patungan adalah fitur pembelian bersama: beberapa pengguna bergabung membeli satu barang atau paket, lalu berbagi biaya. Alurnya sederhana:",
          "Pertama, buat grup patungan dan undang teman. Kedua, masing-masing membayar bagiannya via Kahade. Ketiga, barang dikirim ke koordinator.",
          "Tidak ada lagi drama \u201cudah transfer belum?\u201d atau selisih catatan. Semua pembayaran tercatat di satu tempat, dan perlindungannya sama seperti transaksi biasa.",
        ],
      },
      {
        heading: "Jastip: titip beli tanpa was-was",
        body: [
          "Jastip adalah layanan titip-beli: pengguna yang sedang berada di suatu tempat — luar negeri, kota lain, event tertentu — menawarkan jasa membelikan barang untuk orang lain.",
          "Penyedia jastip membuat \u201ctrip\u201d — misalnya \u201cJastip Jepang, 10–17 Desember\u201d. Pengguna lain menitipkan barang yang diinginkan beserta budget. Penyedia membeli barang dan mengunggah bukti pembelian. Barang dikirim ke penitip setelah tiba.",
          "Karena pembayaran lewat Kahade, penitip tidak perlu khawatir uang dibawa kabur, dan penyedia jastip tidak perlu khawatir titipan fiktif.",
        ],
      },
      {
        heading: "Bonus: jasa dan produk digital",
        body: [
          "Sejak awal Kahade dirancang untuk hal-hal yang tidak bisa dijual di marketplace konvensional. Jasa — desain, penulisan, les, konsultasi — dengan transaksi berbasis milestone, bayar per tahap penyelesaian.",
          "Produk digital — preset, template, e-book, aset kreatif — dikirim otomatis lewat link unduhan setelah pembayaran. Alur \u201ckirim barang via kurir\u201d diganti dengan alur yang masuk akal: serah terima file, konfirmasi penyelesaian, revisi.",
        ],
      },
      {
        heading: "Semua dalam satu aplikasi",
        body: [
          "Yang membuat ini spesial: patungan, jastip, jasa, dan produk digital semuanya hidup di dalam feed sosial yang sama. Kamu menemukan trip jastip dari story teman, ikut patungan dari grup komunitas, memesan jasa desain dari kreator yang kamu follow.",
          "Tidak perlu pindah aplikasi, tidak perlu catat manual, tidak perlu was-was. Itulah jual beli semudah scroll medsos.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/**
 * Estimasi waktu baca dari jumlah kata (±200 kata/menit).
 * Dihitung otomatis agar selalu akurat — penulis tidak perlu mengisi manual.
 */
export function articleReadTime(article: Article): string {
  const words = article.content
    .flatMap((s) => [s.heading, ...s.body])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} menit`;
}

/**
 * Artikel terkait: utamakan kategori sama, lalu sisanya.
 * Tidak pernah mengembalikan artikel yang sedang dibaca.
 */
export function getRelated(slug: string, count = 2): Article[] {
  const current = getArticle(slug);
  const others = articles.filter((a) => a.slug !== slug);
  const sameCat = others.filter((a) => current && a.category === current.category);
  const rest = others.filter((a) => !current || a.category !== current.category);
  return [...sameCat, ...rest].slice(0, count);
}
