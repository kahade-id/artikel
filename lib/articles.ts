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
    title: "Kenalan dengan Kahade: jual beli aman serasa main medsos",
    excerpt:
      "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Panduan jual beli aman buat yang baru kenal Kahade — ini bedanya dengan marketplace yang kamu kenal.",
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
          "Soal biaya, semuanya transparan: 2,5% per transaksi (minimal Rp2.500, maksimal Rp250.000) — tanpa biaya pendaftaran dan tanpa langganan wajib. Buat yang transaksinya rutin, ada Kahade Plus Rp99.000 per bulan dengan potongan 50% biaya transaksi, kuota pembebasan biaya Rp990.000 per periode, prioritas layanan pelanggan, dan badge Plus di profil.",
          "Tagline kami merangkum semuanya: jual beli semudah scroll medsos.",
        ],
      },
    ],
  },
  {
    slug: "jual-beli-dm-rawan-ketipu",
    title: "Kenapa jual-beli via DM rawan ketipu — dan cara jual beli online yang aman",
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
          "Skalanya masif: grup jual-beli di Facebook dan WhatsApp beranggotakan ratusan ribu orang per grup — semuanya bertransaksi setiap hari tanpa standar perlindungan apa pun.",
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
          "Perlindungan ini biayanya kecil: 2,5% per transaksi (minimal Rp2.500, maksimal Rp250.000) — jauh lebih murah daripada sekali kena tipu. Korban penipuan online di Indonesia mencapai ratusan ribu kasus per tahun dengan kerugian miliaran rupiah; biaya perlindungan Kahade tidak ada apa-apanya dibanding risiko itu.",
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
    title: "Patungan dan jastip aman: dua fitur yang cuma ada di Kahade",
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
          "Memulainya pun gratis: tidak ada biaya pendaftaran, biaya hanya 2,5% saat transaksi terjadi. Buat yang transaksinya rutin — misalnya penyedia jastip langganan — ada Kahade Plus dengan potongan 50% biaya transaksi; penjual beromzet Rp8 juta per bulan saja sudah menghemat lebih dari biaya langganannya.",
        ],
      },
    ],
  },
  {
    slug: "cara-jual-beli-online-yang-aman",
    title: "Cara Jual Beli Online yang Aman: Panduan Lengkap",
    excerpt:
      "Transfer langsung ke penjual tak dikenal adalah cara tercepat kehilangan uang. Ini panduan lengkap cara jual beli online yang aman — dari checklist sebelum transaksi sampai platform yang melindungi pembeli dan penjual.",
    date: "4 Oktober 2026",
    dateISO: "2026-10-04",
    category: "Keamanan",
    content: [
      {
        heading: "Risikonya nyata, bukan sekadar cerita",
        body: [
          "Setiap hari, ribuan orang Indonesia bertransaksi online: lewat marketplace, media sosial, grup chat. Sebagian besar berjalan lancar — tapi sebagian kecil berakhir dengan uang hilang dan barang tak kunjung datang.",
          "Modusnya bermacam-macam: penjual fiktif yang menghilang setelah menerima transfer, barang yang dikirim tidak sesuai foto, sampai akun kloningan yang meniru penjual terkenal. Korban penipuan online di Indonesia mencapai ratusan ribu kasus per tahun dengan kerugian miliaran rupiah.",
          "Kabar baiknya: hampir semua kasus ini bisa dicegah dengan kebiasaan yang benar. Panduan ini merangkumnya.",
          "Yang paling sering jadi sasaran adalah anak muda: pembeli barang preloved, tiket konser, photocard, sampai jasa desain. Transaksinya terjadi di DM dan grup chat — tempat yang akrab, tapi tanpa perlindungan. Penipu tahu persis di mana calon korbannya berkumpul.",
        ],
      },
      {
        heading: "Kenapa transfer langsung itu berbahaya",
        body: [
          "Pola paling umum dalam jual beli via DM atau grup chat adalah transfer langsung ke rekening pribadi penjual. Sekali uang masuk ke rekening orang lain, kamu tidak punya daya tawar apa pun.",
          "Penjual bisa menghilang. Barang bisa tidak dikirim. Dan ketika itu terjadi, tidak ada pihak ketiga yang bisa kamu mintai tolong — bank tidak bisa menarik kembali transfer yang sudah kamu setujui, dan akun media sosial penipu bisa dibuat ulang dalam hitungan menit.",
          "Aturan praktisnya sederhana: jangan pernah mentransfer uang ke orang yang tidak kamu kenal tanpa ada sistem yang melindungi transaksi tersebut.",
        ],
      },
      {
        heading: "Checklist sebelum kamu bertransaksi",
        body: [
          "Cek reputasi penjual. Lihat ulasan, umur akun, dan konsistensi kontennya. Penjual yang serius biasanya punya jejak digital yang bisa ditelusuri — bukan akun baru tanpa foto dan tanpa interaksi.",
          "Jangan transfer langsung ke rekening pribadi. Gunakan platform atau sistem pembayaran yang menahan dana sampai barang diterima — atau setidaknya yang mencatat transaksi secara resmi.",
          "Simpan semua bukti. Screenshot chat kesepakatan, bukti transfer, dan foto barang yang diiklankan. Bukti ini krusial kalau terjadi sengketa.",
          "Waspadai harga yang terlalu murah. Barang branded dijual separuh harga pasaran hampir selalu jebakan. Penipu memakai harga miring untuk memancing keputusan impulsif.",
          "Jangan terburu-buru. Tekanan seperti \u201cstok tinggal satu\u201d atau \u201cpromo berakhir hari ini\u201d adalah teknik klasik agar kamu tidak sempat berpikir jernih.",
          "Tanyakan kebijakan pengembalian sebelum membayar. Penjual yang jujur punya jawaban jelas soal retur atau refund kalau barang tidak sesuai. Kalau jawabannya menghindar atau marah saat ditanya, itu jawaban yang cukup.",
          "Untuk nominal besar, minta verifikasi tambahan. Video call menunjukkan barang secara langsung, atau bertemu di tempat ramai untuk serah terima. Penjual asli tidak keberatan diverifikasi — yang keberatan justru patut dicurigai.",
        ],
      },
      {
        heading: "Cara yang aman: pakai platform yang melindungi",
        body: [
          "Cara paling praktis menerapkan checklist di atas adalah bertransaksi lewat platform yang memang dirancang untuk itu. Di Kahade, setiap pembayaran berjalan lewat sistem yang melindungi kedua belah pihak.",
          "Buat pembeli: dana baru diteruskan ke penjual setelah barang atau jasa diterima dan dikonfirmasi. Barang tidak dikirim? Dana kembali ke pembeli.",
          "Buat penjual: pesanan yang sudah dibayar adalah pesanan yang pasti — tidak ada bukti transfer palsu, tidak ada pembatalan sepihak setelah barang dikirim.",
          "Kalau terjadi perselisihan, tim Kahade menengahi berdasarkan bukti dari kedua belah pihak: chat, foto, dan resi pengiriman. Plus reputasi transparan: setiap transaksi bisa diulas, skor terlihat di profil.",
          "Biayanya transparan dan kecil: 2,5% per transaksi (minimal Rp2.500, maksimal Rp250.000) — tanpa biaya pendaftaran, tanpa langganan wajib. Jauh lebih murah daripada sekali kena tipu.",
          "Buat yang transaksinya rutin, ada Kahade Plus Rp99.000 per bulan: potongan 50% biaya transaksi, kuota pembebasan biaya Rp990.000 per periode, prioritas layanan pelanggan, dan badge Plus di profil. Penjual aktif bisa berhemat signifikan setiap bulan.",
        ],
      },
      {
        heading: "Mulai dengan aman hari ini",
        body: [
          "Keamanan jual beli online bukan soal paranoid — soal kebiasaan. Cek reputasi, jangan transfer langsung, simpan bukti, waspada harga miring, dan jangan terburu-buru.",
          "Atau lebih sederhana: lakukan semuanya di satu tempat yang sudah menerapkan kelima hal itu secara otomatis. Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial — seru seperti jual beli via DM, tapi setiap transaksinya terlindungi.",
          "Jual beli semudah scroll medsos. Dan seaman seharusnya.",
        ],
      },
    ],
  },
  {
    slug: "tips-tidak-tertipu-jual-beli-online",
    title: "10 Tips Agar Tidak Tertipu Saat Jual Beli Online",
    excerpt:
      "Dari akun kloningan sampai bukti transfer palsu, modus penipuan jual beli online makin canggih. Berikut 10 tips konkret dan mudah diterapkan agar kamu tidak jadi korban berikutnya.",
    date: "4 Oktober 2026",
    dateISO: "2026-10-04",
    category: "Keamanan",
    content: [
      {
        heading: "1. Jangan transfer langsung ke rekening pribadi",
        body: [
          "Ini aturan nomor satu. Transfer langsung ke orang tak dikenal berarti kamu menyerahkan uang tanpa perlindungan apa pun. Selalu gunakan platform atau sistem pembayaran yang melindungi transaksi — di mana dana baru diteruskan setelah barang diterima.",
          "Kalau penjual menolak semua metode pembayaran yang aman dan bersikeras minta transfer langsung, anggap itu jawaban: dia tidak ingin transaksinya tercatat dan bisa dipertanggungjawabkan.",
        ],
      },
      {
        heading: "2. Cek reputasi dan jejak digital penjual",
        body: [
          "Lihat ulasan pembeli sebelumnya, umur akun, dan konsistensi aktivitasnya. Penjual asli biasanya punya riwayat yang bisa ditelusuri. Akun baru, tanpa foto profil, tanpa interaksi — itu bendera merah.",
          "Jangan puas dengan testimoni berupa screenshot — screenshot gampang dipalsukan. Cari ulasan di platform yang memverifikasi bahwa pengulasnya benar-benar pernah bertransaksi.",
        ],
      },
      {
        heading: "3. Waspadai harga yang terlalu murah",
        body: [
          "Sepatu branded dijual sepertiga harga pasaran? iPhone baru setengah harga? Hampir pasti jebakan. Penipu sengaja memasang harga miring untuk memancing keputusan impulsif sebelum kamu sempat berpikir.",
        ],
      },
      {
        heading: "4. Simpan semua bukti transaksi",
        body: [
          "Screenshot percakapan kesepakatan, simpan bukti transfer, dan arsipkan foto barang yang diiklankan. Kalau terjadi sengketa, bukti inilah yang menentukan — tanpa bukti, posisimu lemah.",
          "Catat juga tanggal, nominal, dan nama akun atau nomor rekening tujuan. Detail kecil ini sering jadi pembeda saat bukti diperiksa pihak platform atau aparat.",
        ],
      },
      {
        heading: "5. Jangan klik link pembayaran dari chat asing",
        body: [
          "Modus phishing makin rapi: link yang mirip halaman pembayaran asli, lalu meminta data atau OTP. Jangan pernah memasukkan data sensitif lewat link yang dikirim orang tak dikenal. Lakukan pembayaran hanya lewat aplikasi atau situs resmi yang kamu buka sendiri.",
          "Waspadai juga file APK yang dikirim via chat dengan dalih \u201caplikasi pembayaran\u201d atau \u201ckatalog produk\u201d — itu sering berisi malware pencuri data perbankan.",
        ],
      },
      {
        heading: "6. Jangan terburu-buru mengambil keputusan",
        body: [
          "\u201cStok tinggal satu\u201d, \u201cpromo berakhir jam 12 malam ini\u201d, \u201cada yang mau juga nih\u201d — tekanan waktu adalah senjata utama penipu. Penjual jujur tidak keberatan kamu berpikir semalam. Kalau dipaksa buru-buru, mundur.",
        ],
      },
      {
        heading: "7. Verifikasi identitas untuk transaksi besar",
        body: [
          "Untuk nominal besar, minta verifikasi tambahan: video call menunjukkan barang, foto KTP yang ditutupi sebagian nomornya, atau bertemu langsung di tempat ramai. Penjual asli tidak akan tersinggung diminta verifikasi.",
        ],
      },
      {
        heading: "8. Gunakan platform dengan perlindungan transaksi",
        body: [
          "Platform yang baik melindungi kedua belah pihak: pembeli terlindungi kalau barang tidak dikirim, penjual terlindungi dari bukti transfer palsu. Kalau platform tidak menawarkan perlindungan apa pun, tanyakan kenapa kamu harus percaya.",
        ],
      },
      {
        heading: "9. Kenali modus akun kloningan",
        body: [
          "Penipu meniru akun penjual terkenal dengan nama yang hampir sama — beda satu huruf, tambah underscore, atau ganti \u201co\u201d dengan angka \u201c0\u201d. Selalu cek username huruf per huruf, dan jangan percaya hanya karena foto profilnya sama.",
          "Kalau ragu, hubungi akun asli lewat kanal resminya dan tanyakan apakah akun yang menghubungimu benar milik mereka. Butuh waktu dua menit, bisa menyelamatkan jutaan rupiah.",
        ],
      },
      {
        heading: "10. Laporkan penipuan, jangan diam saja",
        body: [
          "Kalau kamu — atau orang yang kamu kenal — kena tipu, laporkan. Ke platform tempat kejadian, ke penyedia layanan pembayaran, dan kalau perlu ke polisi. Laporanmu melindungi korban berikutnya. Diam justru membuat penipu bebas beraksi lagi.",
        ],
      },
      {
        heading: "Penutup: keamanan yang tidak merepotkan",
        body: [
          "Sepuluh tips di atas terdengar banyak, tapi intinya satu: jangan serahkan uang tanpa perlindungan. Cara termudah menerapkan semuanya sekaligus adalah bertransaksi di tempat yang sudah dirancang aman sejak awal.",
          "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Setiap pembayaran terlindungi — dana diteruskan ke penjual setelah pembeli konfirmasi terima — dan kalau ada sengketa, tim kami menengahi berdasarkan bukti. Biayanya transparan: 2,5% per transaksi, tanpa biaya pendaftaran.",
          "Belanja online seharusnya seru, bukan menegangkan. Jual beli semudah scroll medsos — dan seaman seharusnya.",
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
