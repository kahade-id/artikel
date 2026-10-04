import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, EmptyState } from "@kahade/ui";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center px-5">
        {/* EmptyState me-render judul sebagai h3; halaman tetap butuh satu h1. */}
        <h1 className="sr-only">Halaman tidak ditemukan</h1>
        <EmptyState
          icon={MagnifyingGlass}
          title="Artikel tidak ditemukan"
          description="Alamat yang kamu tuju tidak ada atau sudah dipindahkan."
          action={
            <ButtonLink href="/">Lihat semua artikel</ButtonLink>
          }
        />
      </main>
      <SiteFooter />
    </div>
  );
}
