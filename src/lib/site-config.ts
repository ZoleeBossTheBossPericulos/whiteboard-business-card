export const siteConfig = {
  name: "Your Brand",
  title: "Your Brand — Modern Single Page Template",
  metaDescription:
    "A responsive, SEO-friendly single page template built with Next.js, TypeScript, and Tailwind CSS. Customize themes, fonts, and content for your next project.",
  url: "https://yourbrand.example.com",
  locale: "en_US",
  contact: {
    title: "Let's connect",
    subtitle:
      "Reach out through your preferred channel — we would love to hear from you.",
    email: "hello@yourbrand.com",
    phone: "+1234567890",
    phoneDisplay: "+1 (234) 567-890",
    facebook: "https://facebook.com/yourbrand",
    whatsapp: "https://wa.me/1234567890",
  },
  hero: {
    headline: "Build something remarkable",
    subheadline:
      "A polished single-page foundation you can fork, customize, and ship. Swap themes, fonts, and copy in minutes.",
    ctaLabel: "Get Started",
    ctaHref: "#contact",
    image: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
      alt: "Modern workspace with natural light and clean design",
    },
  },
  description: {
    title: "Designed for flexibility",
    paragraphs: [
      "This template gives you a production-ready starting point with hero, description, gallery, and contact sections — everything you need to launch quickly and iterate fast.",
      "Twelve curated color themes, five popular free fonts, and three text sizes let you match any brand without touching CSS. Preferences persist in the browser so visitors keep their choices.",
      "Built with semantic HTML, structured metadata, and responsive layouts, it is optimized for search engines and looks great on every screen size.",
    ],
  },
  gallery: {
    title: "Gallery",
    subtitle: "Showcase your work, products, or moments",
    items: [
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
        alt: "Minimal office interior with glass walls",
        caption: "Clean workspace",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        alt: "Design studio with mood boards and samples",
        caption: "Creative studio",
      },
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        alt: "Restaurant interior with warm ambient lighting",
        caption: "Warm ambiance",
      },
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        alt: "Bright living room with modern furniture",
        caption: "Modern living",
      },
      {
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
        alt: "Team collaborating around a table with laptops",
        caption: "Team collaboration",
      },
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        alt: "Glass skyscraper reflecting the sky",
        caption: "Urban architecture",
      },
    ],
  },
} as const;
