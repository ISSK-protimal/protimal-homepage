import HeroSection from "@/sections/hero";
import Navbar from "@/components/common/navbar";
import IntroSection from "@/sections/intro";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="dummy h-screen" />
      <IntroSection />
    </main>
  );
}
