import { Contact } from "@/components/sections/Contact";
import { Description } from "@/components/sections/Description";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CustomizationPanel } from "@/components/ui/CustomizationPanel";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <Description />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <CustomizationPanel />
    </>
  );
}
