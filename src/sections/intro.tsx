import React from "react";
import * as motion from "motion/react-client";
import SectionLabel from "@/components/common/section-label";
import { Spacing } from "@/components/ui/spacing";
import { Intro, AppScreen1, AppScreen2, AppScreen3 } from "@/assets/images";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section
      className="px-4 py-10 max-w-screen-xl mx-auto lg:px-22.5"
      id="intro"
    >
      <Spacing className="h-4 md:h-20 lg:h-40" />
      <SectionLabel label="ABOUT" className="lg:w-fit lg:mx-auto" />
      <Spacing className="h-3" />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl lg:text-4xl font-bold lg:text-center"
      >
        단백질, 운동에 맞게 설계되어야 합니다.
      </motion.h1>
      <Spacing className="h-3" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full aspect-[872/562] max-w-[872px] mx-auto"
      >
        <Image src={Intro.src} alt="앱 목업이미지" fill />
      </motion.div>
      <Spacing className="h-8 md:h-12" />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="md:text-center md:text-2xl font-semibold"
      >
        Protimal은 운동 목표에 맞춰 AI가 단백질 루틴을 설계하고,{" "}
        <br className="hidden md:block" />
        머신이 직접 제공하는 스마트 단백질 루틴 솔루션입니다.
      </motion.p>
      <Spacing className="h-8 md:h-12 lg:h-20" />
      <SectionLabel label="FEATURES" className="mx-auto" />
      <Spacing className="h-3" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="relative rounded-3xl bg-black overflow-hidden h-[753px] md:h-[566px] mx-auto"
      >
        <Image
          src={AppScreen1}
          alt="앱 목업이미지"
          width={312}
          height={527}
          className="absolute md:left-[11%] md:top-12 -translate-x-1/2 left-1/2 top-[37%] md:translate-x-0"
        />
        <h2 className="w-max absolute text-4xl md:text-6xl lg:text-[72px] font-extrabold -translate-x-1/2 left-1/2 top-[11.4%] text-white md:-translate-y-1/2 md:top-1/2 md:right-[7.7%] md:left-auto md:translate-x-0 tracking-tight leading-tight">
          단백질 섭취량
          <br />
          <span className="text-primary">실시간</span> 확인.
        </h2>
      </motion.div>
      <Spacing className="h-8" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="flex flex-col md:flex-row gap-8"
      >
        <div className="relative w-full rounded-3xl overflow-hidden h-[753px] bg-black">
          <Image
            src={AppScreen2}
            alt="앱 목업이미지"
            width={312}
            height={527}
            className="absolute -translate-x-1/2 left-1/2 top-[37%]"
          />
          <h2 className="w-max absolute text-nowrap text-4xl lg:text-5xl font-extrabold text-white -translate-x-1/2 left-1/2 top-[11.4%] leading-tight">
            섭취한 음식과
            <br />
            단백질 양 <span className="text-primary">기록</span>&
            <span className="text-primary">관리</span>.
          </h2>
        </div>
        <div className="relative w-full rounded-3xl overflow-hidden h-[753px] bg-primary">
          <Image
            src={AppScreen3}
            alt="앱 목업이미지"
            width={312}
            height={527}
            className="absolute -translate-x-1/2 left-1/2 bottom-[34%]"
          />
          <h2 className="absolute text-nowrap text-4xl lg:text-5xl font-extrabold text-white -translate-x-1/2 left-1/2 top-[76%] leading-tight">
            개인 맞춤형
            <br />
            단백질 <span className="text-black">제품 추천</span>.
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
