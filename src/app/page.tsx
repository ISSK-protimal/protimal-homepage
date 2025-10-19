import HeroSection from "@/sections/hero";
import Navbar from "@/components/common/navbar";
import ProblemSection from "@/sections/problem";
// import WhyProtimalSection from "@/sections/why-protimal";
// import RoutineSection from "@/sections/routine";
import IntroSection from "@/sections/intro";
import HowToSection from "@/sections/how-to";
import TestimonialSection from "@/sections/testimonial";
import ContractSection from "@/sections/contract";
import ContactSection from "@/sections/contact";
import FooterSection from "@/sections/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protimal | 맞춤형 프로틴 제공 서비스",
  description: "맞춤형 단백질, 한 잔으로 완성되는 건강한 선택",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="dummy h-[clamp(64rem,51.259rem+56.6265vw,87.5rem)] lg:h-screen" />
      {/* <IntroSection />
      <RoutineSection />
      <div className="bg-neutral-50/40">
        <ContactSection />
      </div> */}
      <ProblemSection />
      {/* <WhyProtimalSection /> */}
      <IntroSection />
      <HowToSection />
      <TestimonialSection />
      <ContractSection />
      <div className="bg-neutral-50/40">
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  );
}
