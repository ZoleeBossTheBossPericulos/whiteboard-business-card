import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-theme bg-theme-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="text-sm text-theme-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-sm text-theme-muted">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
