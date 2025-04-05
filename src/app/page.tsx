import { HeroSection } from "@/components/hero-section";
import { FeaturedDAOs } from "@/components/featured-daos";
import { Header } from "@/components/header";
import { KingOfTheHill } from "@/components/king-of-the-hill";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <KingOfTheHill />
        <FeaturedDAOs />
      </main>
    </>
  );
}
