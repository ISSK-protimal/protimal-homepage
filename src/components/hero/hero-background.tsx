import { Hero7, Hero6 } from "@/assets/images";
import Image from "next/image";

const HeroBackground = () => {
  return (
    <>
      <Image
        src={Hero7}
        alt="hero"
        className="w-full h-full object-cover md:hidden"
      />
      <Image
        src={Hero6}
        alt="hero"
        className="w-full h-full object-cover hidden md:block"
      />
    </>
  );
};

export default HeroBackground;
