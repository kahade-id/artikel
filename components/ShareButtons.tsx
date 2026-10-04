"use client";

import {
  FacebookLogo,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { CopyButton, Icon } from "@kahade/ui";

interface ShareButtonsProps {
  /** Judul artikel untuk teks bagikan. */
  title: string;
  /** URL kanonis artikel (mis. https://artikel.kahade.id/slug). */
  url: string;
}

/**
 * Tombol bagikan artikel: salin tautan + intent X/WhatsApp/Facebook.
 * Blog tanpa tombol bagikan = kehilangan distribusi organik.
 */
export function ShareButtons({ title, url }: ShareButtonsProps) {
  const text = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);

  const targets = [
    {
      label: "Bagikan ke X",
      href: `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`,
      icon: XLogo,
    },
    {
      label: "Bagikan ke WhatsApp",
      href: `https://wa.me/?text=${text}%20${shareUrl}`,
      icon: WhatsappLogo,
    },
    {
      label: "Bagikan ke Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: FacebookLogo,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <CopyButton text={url} label="Salin tautan" />
      {targets.map((t) => (
        <a
          key={t.label}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.label}
          title={t.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all duration-150 hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 active:scale-95"
        >
          <Icon icon={t.icon} size={18} />
        </a>
      ))}
    </div>
  );
}
