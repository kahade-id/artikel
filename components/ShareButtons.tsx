"use client";

import { useEffect, useRef, useState } from "react";
import {
  Check,
  FacebookLogo,
  LinkSimple,
  WhatsappLogo,
  X,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Icon } from "@kahade/ui";

interface ShareButtonsProps {
  /** Judul artikel untuk teks bagikan. */
  title: string;
  /** URL kanonis artikel (mis. https://artikel.kahade.id/slug). */
  url: string;
  className?: string;
}

const ROUND =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border bg-surface transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 active:scale-[0.97]";

/**
 * Tombol bagikan artikel: salin tautan + intent X/WhatsApp/Facebook.
 * Tombol bulat 44px (target sentuh), ikon saja dengan label aksesibel.
 */
export function ShareButtons({ title, url, className = "" }: ShareButtonsProps) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const flash = (s: "copied" | "failed") => {
    setState(s);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      flash("copied");
    } catch {
      flash("failed");
    }
  };

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

  const copyLabel =
    state === "copied" ? "Tautan tersalin" : state === "failed" ? "Gagal menyalin" : "Salin tautan";

  return (
    <div className={className}>
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          <button
            type="button"
            onClick={copy}
            aria-label="Salin tautan artikel"
            title={copyLabel}
            className={`${ROUND} ${
              state === "copied"
                ? "border-positive text-positive"
                : state === "failed"
                  ? "border-critical text-critical"
                  : "border-line-strong text-fg hover:border-fg"
            }`}
          >
            <Icon icon={state === "copied" ? Check : state === "failed" ? X : LinkSimple} size={20} />
          </button>
        </li>
        {targets.map((t) => (
          <li key={t.label}>
            <a
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.label}
              title={t.label}
              className={`${ROUND} border-line-strong text-fg hover:border-fg`}
            >
              <Icon icon={t.icon} size={20} />
            </a>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-2 min-h-5 text-caption text-fg-muted">
        {state === "idle" ? "" : copyLabel}
      </p>
    </div>
  );
}
