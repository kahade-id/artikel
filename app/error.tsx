"use client";

import { useEffect } from "react";
import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Button, ButtonLink, EmptyState } from "@kahade/ui";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Error boundary per-rute: menangkap kegagalan render halaman
 * (mis. data artikel rusak) dan menawarkan muat ulang.
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-5">
        <EmptyState
          icon={WarningCircle}
          title="Terjadi kesalahan"
          description="Maaf, halaman ini gagal dimuat. Silakan coba lagi."
          action={
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" onClick={reset}>
                Coba lagi
              </Button>
              <ButtonLink href="/" variant="secondary">
                Kembali ke beranda
              </ButtonLink>
            </div>
          }
        />
      </main>
      <SiteFooter />
    </div>
  );
}
