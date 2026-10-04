"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarBlank,
  Clock,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { Badge, Button, Card, EmptyState, Icon } from "@kahade/ui";
import { articles, articleReadTime, type Article } from "@/lib/articles";

/**
 * Grid artikel dengan filter kategori (client-side).
 * Kategori diambil otomatis dari data — tambah artikel berkategori baru
 * langsung muncul sebagai filter tanpa ubah kode.
 */
export function ArticleFilter() {
  const categories = ["Semua", ...Array.from(new Set(articles.map((a) => a.category)))];
  const [active, setActive] = useState("Semua");

  const filtered: Article[] =
    active === "Semua" ? articles : articles.filter((a) => a.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter kategori artikel"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {categories.map((c) => (
          <Button
            key={c}
            variant={active === c ? "primary" : "secondary"}
            size="md"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
          >
            {c}
          </Button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={MagnifyingGlass}
          title="Belum ada artikel"
          description={`Belum ada artikel pada kategori "${active}".`}
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
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
        </div>
      )}
    </div>
  );
}
