import HeroSection from "@/sections/hero";
import Navbar from "@/components/common/navbar";
import IntroSection from "@/sections/intro";
import RoutineSection from "@/sections/routine";
import ContactSection from "@/sections/contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="dummy h-screen" />
      <IntroSection />
      <RoutineSection />
      <div className="bg-neutral-50/40">
        <ContactSection />
      </div>
    </main>
  );
}
