import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { dictionaries } from "@/i18n/dictionaries";
import { useLanguage } from "@/i18n/LanguageProvider";

const title = "Žar Klik — zagrejan obrok bilo kad i bilo gde";
const description =
  "Žar Klik zagreva obrok koji si poneo od kuće, bez struje i otvorenog plamena. Rešenje za vozače i sve koji žive u pokretu.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (description) description.content = t.meta.description;
    if (ogTitle) ogTitle.content = t.meta.title;
    if (ogDescription) ogDescription.content = t.meta.description;
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <ProductShowcase />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
