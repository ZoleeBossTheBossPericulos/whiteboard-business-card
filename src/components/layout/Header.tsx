import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white sm:px-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
