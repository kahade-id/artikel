import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Icon, Logo } from "@kahade/ui";

interface SiteHeaderProps {
  /** Bila true, tampilkan tautan "Semua artikel" (halaman artikel). */
  backToHome?: boolean;
}

/**
 * Header bersama situs artikel: logo + nama situs.
 * Dipakai di hub, halaman artikel, dan 404 agar konsisten.
 */
export function SiteHeader({ backToHome = false }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
        >
          <Logo size={26} />
          <span className="text-base font-extrabold tracking-tight text-black">
            Artikel Kahade
          </span>
        </Link>
        {backToHome ? (
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg text-sm font-semibold text-neutral-500 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            <Icon icon={ArrowLeft} size={15} />
            Semua artikel
          </Link>
        ) : (
          <a
            href="https://kahade.id"
            className="rounded-lg text-sm font-semibold text-neutral-500 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            kahade.id
          </a>
        )}
      </div>
    </header>
  );
}
