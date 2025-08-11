import HeroSection from "@/sections/hero";
import Navbar from "@/components/common/navbar";
import IntroSection from "@/sections/intro";
import RoutineSection from "@/sections/routine";
import ContactForm from "@/components/forms/contact-form";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="dummy h-screen" />
      <IntroSection />
      <RoutineSection />
      <ContactForm />
    </main>
  );
}
