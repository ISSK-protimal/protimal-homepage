import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Hero1, Hero2, Hero3, Hero4, Logo } from "@/assets/images";
import Image from "next/image";
import { Spacing } from "@/components/ui/spacing";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="absolute top-0 bg-black w-full h-screen text-white">
      <Image
        src={Hero1}
        alt="hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 w-full">
        <Image src={Logo} alt="logo" className="w-24 mx-auto select-none" />
        <Spacing size={24} />
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
          운동은 꼼꼼하게, <br />
          <span className="text-primary">단백질</span>은 아무렇게나?
        </h1>
        <Spacing size={24} />
        <h2 className="text-lg md:text-2xl font-semibold text-center">
          당신의 운동 루틴, <br className="block md:hidden" />
          단백질도 맞춰야 진짜 변화가 시작됩니다.
        </h2>
        <Spacing size={24} />

        <div className="mx-auto w-fit">
          <Link
            href="/#"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "font-semibold",
            })}
          >
            자세히 알아보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
