import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import {
  Inter,
  Lato,
  Open_Sans,
  Poppins,
  Roboto,
} from "next/font/google";

import { CustomizationProvider } from "@/context/CustomizationContext";
import { defaultThemeId, getTheme } from "@/lib/themes";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const defaultTheme = getTheme(defaultThemeId);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  keywords: [
    "single page app",
    "next.js template",
    "tailwind css",
    "typescript",
    "responsive website",
    "SEO friendly",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.metaDescription,
    images: [
      {
        url: siteConfig.hero.image.src,
        width: 1920,
        height: 1080,
        alt: siteConfig.hero.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.metaDescription,
    images: [siteConfig.hero.image.src],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: defaultTheme.vars["--theme-primary"],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme={defaultThemeId}
      data-font="inter"
      data-text-size="medium"
      className={`${inter.variable} ${roboto.variable} ${openSans.variable} ${poppins.variable} ${lato.variable} scroll-smooth`}
      style={defaultTheme.vars as CSSProperties}
    >
      <body className="min-h-screen bg-theme-bg text-theme antialiased">
        <CustomizationProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-theme-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          {children}
        </CustomizationProvider>
      </body>
    </html>
  );
}
