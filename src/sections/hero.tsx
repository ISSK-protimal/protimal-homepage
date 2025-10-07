/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

import React from "react";

import {
  Hero1,
  Hero2,
  Hero3,
  Hero4,
  Hero7,
  Logo,
  Hero5,
  Hero6,
} from "@/assets/images";
import Image from "next/image";
import { Spacing } from "@/components/ui/spacing";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import HeroBackground from "@/components/hero/hero-background";
import * as motion from "motion/react-client";

const HeroSection = () => {
  return (
    <section className="absolute top-0 h-[clamp(64rem,51.259rem+56.6265vw,87.5rem)] w-full overflow-hidden text-white lg:h-screen">
      <HeroBackground />
      <div className="lg:max-w-8xl absolute inset-0 z-2 flex flex-col items-center gap-15 px-4 md:gap-20 lg:mx-auto lg:flex-row lg:justify-center lg:gap-24 lg:px-10">
        <div className="relative mt-30 max-w-3xl lg:mt-0 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0 }}
          >
            <Image src={Logo} alt="logo" className="mx-auto w-24 select-none" />
          </motion.div>
          <Spacing className="h-6" />
          <h1 className="text-center text-4xl leading-tight font-bold md:text-5xl lg:text-[clamp(3rem,0rem+4.6875vw,3.75rem)]">
            {/* 운동은 꼼꼼하게, <br />
            <span className="text-primary">단백질</span>은 아무렇게나? */}
            {"맞춤형 단백질,".split(" ").map((word, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
            <br />
            {"한 잔으로 완성되는".split(" ").map((word, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
            <br />
            {"건강한 선택".split(" ").map((word, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (index + 1) * 0.2,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>
          <Spacing className="h-6" />
          <motion.h2
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
            className="sub-title px-2 text-center"
          >
            운동 후, 내 몸에 맞는 단백질을 빠르게 보충하는{" "}
            <br className="sm:hidden" />
            새로운 방식. <br />
            프로틴 머신과 어플리케이션이 연동된 <br className="sm:hidden" />
            스마트 단백질 솔루션을 소개합니다.
          </motion.h2>
          <Spacing className="h-6" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="mx-auto w-fit"
          >
            <Link
              href="/#intro"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "font-semibold",
              })}
            >
              자세히 알아보기
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-full max-w-xl lg:w-1/2"
        >
          <Image
            src={Hero5}
            alt="hero"
            className="object-contain object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
