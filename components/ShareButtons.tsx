"use client";

import {
  FacebookLogo,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { CopyButton, ButtonLink, Icon } from "@kahade/ui";

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
      <CopyButton text={url} label="Salin tautan" className="min-h-[44px]" />
      {targets.map((t) => (
        <ButtonLink
          key={t.label}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          aria-label={t.label}
          title={t.label}
          style={{ width: 44, height: 44, padding: 0 }}
        >
          <Icon icon={t.icon} size={18} />
        </ButtonLink>
      ))}
    </div>
  );
}
