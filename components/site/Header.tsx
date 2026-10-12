"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@kahade/ui";

const NAV = [{ href: "/", label: "Semua artikel" }];

export function Header() {
  const pathname = usePathname();
  return <SiteHeader site="artikel" nav={NAV} pathname={pathname} linkAs={Link} />;
}
