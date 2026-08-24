"use client";

import Image from "next/image";
import Link from "next/link";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[88vh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--theme-hero-overlay)" }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
            {siteConfig.name}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {hero.subheadline}
          </p>
          <Link
            href={hero.ctaHref}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-theme-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-theme-primary-hover hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {hero.ctaLabel}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
