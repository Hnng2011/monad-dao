import { HeroSection } from "@/components/hero-section";
import { FeaturedDAOs } from "@/components/featured-daos";
import { Header } from "@/components/header";
import { KingOfTheHill } from "@/components/king-of-the-hill";
import { NewsCarousel } from "@/components/news-carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <NewsCarousel />
        <KingOfTheHill />
        <FeaturedDAOs />
      </main>
    </>
  );
}
