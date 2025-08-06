import HeroSection from "@/sections/hero";
import Navbar from "@/components/common/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="dummy h-screen" />
      <div className="dummy h-screen" />
    </main>
  );
}
