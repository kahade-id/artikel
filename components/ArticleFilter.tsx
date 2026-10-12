"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Button, EmptyState, Icon, Reveal, Tabs } from "@kahade/ui";
import type { ArticleSummary } from "@/lib/articles";

const ALL = "Semua";

interface ArticleFilterProps {
  /** Ringkasan artikel, terbaru lebih dulu (tanpa isi — ringan di klien). */
  articles: ArticleSummary[];
  /** Kategori unik dari data — kategori baru otomatis jadi filter. */
  categories: string[];
}

/**
 * Daftar artikel editorial (tanggal | judul + ringkasan | kategori · durasi)
 * dengan filter kategori berbentuk tab. Tanpa JS, tab "Semua" tetap tampil
 * dengan seluruh artikel.
 */
export function ArticleFilter({ articles, categories }: ArticleFilterProps) {
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? articles : articles.filter((a) => a.category === active);

  return (
    <div>
      <Tabs
        label="Filter kategori artikel"
        activeId={active}
        onChange={setActive}
        tabs={[ALL, ...categories].map((c) => ({ id: c, label: c }))}
        renderPanel={() =>
          filtered.length === 0 ? (
            <EmptyState
              icon={MagnifyingGlass}
              title="Belum ada artikel"
              description={`Belum ada artikel pada kategori "${active}".`}
              action={
                <Button variant="secondary" onClick={() => setActive(ALL)}>
                  Tampilkan semua artikel
                </Button>
              }
            />
          ) : (
            <ol
              aria-label={active === ALL ? "Semua artikel" : `Artikel kategori ${active}`}
              className="-mt-2"
            >
              {filtered.map((a, i) => (
                <ArticleRow key={a.slug} article={a} delay={Math.min(i, 5) * 70} />
              ))}
            </ol>
          )
        }
      />

      {/* Pengumuman perubahan hasil filter untuk screen reader. */}
      <p role="status" aria-live="polite" className="sr-only">
        Menampilkan {filtered.length} artikel
        {active !== ALL ? ` pada kategori "${active}"` : ""}.
      </p>
    </div>
  );
}

function ArticleRow({ article: a, delay }: { article: ArticleSummary; delay: number }) {
  return (
    <Reveal as="li" delay={delay} className="border-b border-line">
      <Link
        href={`/${a.slug}`}
        className="group grid gap-y-2 rounded-tag py-7 sm:py-8 lg:grid-cols-12 lg:gap-x-8"
      >
        <p className="text-small text-fg-subtle tabular-nums lg:col-span-2 lg:pt-1">
          <time dateTime={a.dateISO}>{a.date}</time>
          <span className="lg:hidden">
            <span aria-hidden="true"> · </span>
            <span className="sr-only">, </span>
            {a.category}
          </span>
        </p>
        <div className="min-w-0 lg:col-span-7">
          <h3 className="text-h3 text-fg decoration-1 underline-offset-[5px] group-hover:underline">
            {a.title}
          </h3>
          <p className="mt-2 max-w-[62ch] text-small text-fg-muted sm:text-body">{a.excerpt}</p>
          <p className="mt-3 text-small text-fg-subtle lg:hidden">{a.readTime} baca</p>
        </div>
        <div className="hidden lg:col-span-3 lg:flex lg:items-start lg:justify-end lg:gap-6 lg:pt-1">
          <p className="text-right text-small">
            <span className="block font-semibold text-fg">{a.category}</span>
            <span className="block text-fg-subtle">{a.readTime} baca</span>
          </p>
          <span className="text-fg transition-transform duration-200 ease-out group-hover:translate-x-1">
            <Icon icon={ArrowRight} size={20} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
