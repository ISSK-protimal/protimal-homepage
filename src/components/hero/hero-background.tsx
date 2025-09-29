import { Hero7, Hero6 } from "@/assets/images";
import Image from "next/image";

const HeroBackground = () => {
  return (
    <>
      <Image
        src={Hero7}
        alt="hero"
        className="h-full w-full object-cover md:hidden"
      />
      <Image
        src={Hero6}
        alt="hero"
        className="hidden h-full w-full object-cover md:block"
      />
    </>
  );
};

export default HeroBackground;
