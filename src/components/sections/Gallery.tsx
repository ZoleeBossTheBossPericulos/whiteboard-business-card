import Image from "next/image";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site-config";

export function Gallery() {
  const { gallery } = siteConfig;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-theme-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2
            id="gallery-heading"
            className="text-3xl font-bold tracking-tight text-theme sm:text-4xl"
          >
            {gallery.title}
          </h2>
          <p className="mt-4 text-lg text-theme-muted">{gallery.subtitle}</p>
        </ScrollReveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.items.map((item, index) => (
            <li key={item.src}>
              <ScrollReveal delay={index * 80}>
                <figure className="group overflow-hidden rounded-2xl border border-theme bg-theme-bg shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-medium text-theme">
                    {item.caption}
                  </figcaption>
                </figure>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
