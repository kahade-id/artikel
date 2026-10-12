"use client";

import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Button, ButtonLink, Container, EmptyState } from "@kahade/ui";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Error boundary per-rute: menangkap kegagalan render halaman
 * (mis. data artikel rusak) dan menawarkan muat ulang.
 */
export default function Error({ reset }: ErrorProps) {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
      <EmptyState
        icon={WarningCircle}
        headingLevel={1}
        title="Terjadi kesalahan"
        description="Maaf, halaman ini gagal dimuat. Silakan coba lagi."
        action={
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => reset()}>Coba lagi</Button>
            <ButtonLink href="/" variant="secondary">
              Kembali ke beranda
            </ButtonLink>
          </div>
        }
      />
    </Container>
  );
}
