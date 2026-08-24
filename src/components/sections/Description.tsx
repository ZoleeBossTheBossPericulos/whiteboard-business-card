import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site-config";

export function Description() {
  const { description } = siteConfig;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-theme-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-theme sm:text-4xl"
          >
            {description.title}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {description.paragraphs.map((paragraph, index) => (
            <ScrollReveal key={paragraph} delay={index * 100}>
              <article className="h-full rounded-2xl border border-theme bg-theme-surface p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="leading-relaxed text-theme-muted">{paragraph}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
