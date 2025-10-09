import React from "react";
import * as motion from "motion/react-client";
import SectionLabel from "@/components/common/section-label";
import { Spacing } from "@/components/ui/spacing";
import {
  AppMockup,
  AppScreen1,
  AppScreen2,
  AppScreen3,
  Intro,
} from "@/assets/images";
import Image from "next/image";
import PromoVideo from "@/components/intro/promo-video";

const IntroSection = () => {
  return (
    <section
      className="mx-auto max-w-screen-xl px-4 py-10 lg:px-22.5"
      id="intro"
    >
      <Spacing className="h-4 md:h-20 lg:h-20" />
      <SectionLabel
        label="스마트한 단백질 솔루션, Protimal"
        className="lg:mx-auto lg:w-fit"
      />
      <Spacing className="h-3" />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-bold lg:text-center lg:text-4xl"
      >
        단백질은 Protimal에게 맡기고, 운동에만 집중하세요.
      </motion.h1>
      <Spacing className="h-8 md:h-12" />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="font-semibold text-gray-500 md:text-center md:text-2xl"
      >
        Protimal은 운동 목표에 맞춰 AI가 단백질 루틴을 설계하고,{" "}
        <br className="hidden md:block" />
        머신이 직접 제공하는 스마트 단백질 루틴 솔루션입니다.
      </motion.p>

      <Spacing className="h-8 md:h-12 lg:h-20" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative contents h-fit w-full overflow-hidden rounded-2xl pt-20 md:block"
      >
        {/* Golden Horizon Background with Top Glow */}
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 60% 10%, rgb(255, 106, 0), transparent 60%), #000000",
          }}
        />

        <div className="relative z-1 mx-auto w-full md:w-4/5 md:translate-y-px">
          <PromoVideo />
        </div>
      </motion.div>
      <Spacing className="h-12 lg:h-20" />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl leading-snug font-bold lg:text-center lg:text-4xl"
      >
        계획은 <span className="text-primary">앱</span>으로 똑똑하게,
        <br />
        실천은 <span className="text-primary">머신</span>으로 간편하게
      </motion.h1>
      <Spacing className="h-6" />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-semibold text-gray-500 md:text-xl lg:text-center"
      >
        *Protimal 서비스는 전용 앱과, 앱에 연동된 프로틴 머신으로 구성됩니다.
      </motion.p>
      <Spacing className="h-8" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto aspect-[872/562] w-full max-w-[872px]"
      >
        <Image src={Intro.src} alt="앱 목업이미지" fill />
      </motion.div>
      <Spacing className="h-8 md:h-12 lg:h-20" />
      <SectionLabel label="Protimal App" className="mx-auto" />
      <Spacing className="h-3" />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-bold lg:text-4xl"
      >
        단백질, 운동에 맞게 설계되어야 합니다.
      </motion.h1>
      <Spacing className="h-8" />
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="relative mx-auto h-[753px] overflow-hidden rounded-3xl bg-black md:h-[566px]"
      >
        <Image
          src={AppScreen1}
          alt="앱 목업이미지"
          width={312}
          height={527}
          className="absolute top-[37%] left-1/2 -translate-x-1/2 md:top-12 md:left-[11%] md:translate-x-0"
        />
        <h2 className="absolute top-[11.4%] left-1/2 w-max -translate-x-1/2 text-4xl leading-tight font-extrabold tracking-tight text-white md:top-1/2 md:right-[7.7%] md:left-auto md:translate-x-0 md:-translate-y-1/2 md:text-6xl lg:text-[72px]">
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
        className="flex flex-col gap-8 md:flex-row"
      >
        <div className="relative h-[753px] w-full overflow-hidden rounded-3xl bg-black">
          <Image
            src={AppScreen2}
            alt="앱 목업이미지"
            width={312}
            height={527}
            className="absolute top-[37%] left-1/2 -translate-x-1/2"
          />
          <h2 className="absolute top-[11.4%] left-1/2 w-max -translate-x-1/2 text-4xl leading-tight font-extrabold text-nowrap text-white lg:text-5xl">
            섭취한 음식과
            <br />
            단백질 양 <span className="text-primary">기록</span>&
            <span className="text-primary">관리</span>.
          </h2>
        </div>
        <div className="bg-primary relative h-[753px] w-full overflow-hidden rounded-3xl">
          <Image
            src={AppScreen3}
            alt="앱 목업이미지"
            width={312}
            height={527}
            className="absolute bottom-[34%] left-1/2 -translate-x-1/2"
          />
          <h2 className="absolute top-[76%] left-1/2 -translate-x-1/2 text-4xl leading-tight font-extrabold text-nowrap text-white lg:text-5xl">
            개인 맞춤형
            <br />
            단백질 <span className="text-black">제품 추천</span>.
          </h2>
        </div>
      </motion.div> */}
    </section>
  );
};

export default IntroSection;
