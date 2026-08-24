import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.metaDescription,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        contactType: "customer service",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
