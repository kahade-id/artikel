import Link from "next/link";
import { ArrowRight, CalendarBlank, Clock } from "@phosphor-icons/react/dist/ssr";
import { Badge, Card, Icon, Logo } from "@kahade/ui";
import { articles, articleReadTime } from "@/lib/articles";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-neutral-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={26} />
            <span className="text-base font-extrabold tracking-tight text-black">
              Artikel Kahade
            </span>
          </Link>
          <a
            href="https://kahade.id"
            className="text-sm font-semibold text-neutral-500 transition-colors hover:text-black"
          >
            kahade.id
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-20">
        {/* Hero */}
        <section className="py-14 text-center sm:py-20">
          <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
            Cerita dari dunia jual-beli sosial
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
            Panduan, tips aman bertransaksi, dan kabar terbaru dari Kahade —
            aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti
            media sosial.
          </p>
        </section>

        {/* Grid artikel */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.slug} href={`/${a.slug}`} className="group block">
              <Card
                interactive
                className="flex h-full flex-col p-6 transition-shadow group-hover:shadow-lift"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="neutral">{a.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-neutral-500">
                    <Icon icon={Clock} size={13} />
                    {articleReadTime(a)}
                  </span>
                </div>
                <h2 className="text-lg font-bold leading-snug tracking-tight text-black">
                  {a.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                  {a.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                  <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Icon icon={CalendarBlank} size={13} />
                    {a.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-black">
                    Baca
                    <Icon
                      icon={ArrowRight}
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-5 py-10 text-center">
          <Logo size={30} />
          <p className="text-sm text-neutral-500">
            Jual beli semudah scroll medsos.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-500">
            <a href="https://kahade.id" className="transition-colors hover:text-black">
              Beranda
            </a>
            <a
              href="https://karir.kahade.id"
              className="transition-colors hover:text-black"
            >
              Karir
            </a>
            <a
              href="https://legal.kahade.id"
              className="transition-colors hover:text-black"
            >
              Legalitas
            </a>
            <a
              href="https://bantuan.kahade.id"
              className="transition-colors hover:text-black"
            >
              Pusat Bantuan
            </a>
            <a
              href="https://status.kahade.id"
              className="transition-colors hover:text-black"
            >
              Status Layanan
            </a>
          </div>
          <p className="text-xs text-neutral-500">
            © 2026 PT Kawal Hak Dengan Aman
          </p>
        </div>
      </footer>
    </div>
  );
}
