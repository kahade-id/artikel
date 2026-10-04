import { Logo } from "@kahade/ui";

const SIBLING_LINKS = [
  { label: "Beranda", href: "https://kahade.id" },
  { label: "Karir", href: "https://karir.kahade.id" },
  { label: "Legalitas", href: "https://legal.kahade.id" },
  { label: "Bantuan", href: "https://bantuan.kahade.id" },
  { label: "Status Layanan", href: "https://status.kahade.id" },
  { label: "Investor", href: "https://investor.kahade.id" },
];

/**
 * Footer bersama situs artikel: logo, tagline, tautan ekosistem, copyright.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-100">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-5 py-10 text-center">
        <Logo size={30} />
        <p className="text-sm text-neutral-500">Jual beli semudah scroll medsos.</p>
        <nav
          aria-label="Tautan ekosistem Kahade"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-500"
        >
          {SIBLING_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} PT Kawal Hak Dengan Aman
        </p>
      </div>
    </footer>
  );
}
