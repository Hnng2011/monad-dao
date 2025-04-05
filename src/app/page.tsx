import { HeroSection } from "@/components/hero-section";
import { FeaturedDAOs } from "@/components/featured-daos";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedDAOs />
      </main>
    </>
  );
}
