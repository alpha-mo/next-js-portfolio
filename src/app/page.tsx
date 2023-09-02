import CardsSection from "@/components/homePage/DescSection";
import HeroSection from "@/components/homePage/Hero";
import { content } from "@/content/home/cards";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="bg-divider-300 h-[2px] m-auto my-4" />
      <CardsSection />
    </main>
  );
}
