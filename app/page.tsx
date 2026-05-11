import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InfoPills } from "@/components/InfoPills";
import { ProductGrid } from "@/components/ProductGrid";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <HeroCarousel />
        <InfoPills />
        <ProductGrid />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
