import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Button, EmptyState } from "@kahade/ui";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-5">
        <EmptyState
          icon={MagnifyingGlass}
          title="Artikel tidak ditemukan"
          description="Alamat yang kamu tuju tidak ada atau sudah dipindahkan."
          action={
            <Link href="/">
              <Button>Lihat semua artikel</Button>
            </Link>
          }
        />
      </main>
      <SiteFooter />
    </div>
  );
}
