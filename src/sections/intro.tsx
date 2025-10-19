import React from "react";
import * as motion from "motion/react-client";
import SectionLabel from "@/components/common/section-label";
import Chip from "@/components/common/chip";
import { Spacing } from "@/components/ui/spacing";
import {
  Routine1,
  Routine2,
  Intro,
  ProteinRecommendScreen,
  AppNotification,
  MachineIntro,
  QRCodeClipped,
  ProteinReady,
  ProteinIntakeRealtime,
} from "@/assets/images";
import Image from "next/image";
import PromoVideo from "@/components/intro/promo-video";

const IntroSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-10 lg:px-18" id="intro">
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
        className="font-semibold text-gray-500 md:text-2xl lg:text-center"
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
        className="relative contents h-fit w-full overflow-hidden rounded-2xl pt-0 md:block"
      >
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 60% 10%, rgb(255, 106, 0), transparent 60%), #000000",
          }}
        />

        <div className="relative z-1 mx-auto w-full">
          <PromoVideo fileName="Prtiimal_UI_Fin_Intro_B.mp4" />
        </div>
      </motion.div>
      <Spacing className="h-12 md:h-20 lg:h-40" />
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

      {/** 앱 소개 파트 */}
      <Spacing className="h-8 md:h-12 lg:h-20" />
      <SectionLabel label="Protimal App" className="mx-auto lg:w-fit" />
      <Spacing className="h-3" />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl font-bold lg:text-center lg:text-4xl"
      >
        단백질, 운동에 맞게 설계되어야 합니다.
      </motion.h1>
      <Spacing className="h-12 md:h-16" />
      <ul className="relative columns-1 gap-4 md:columns-2 [&>li]:mb-4 [&>li]:h-fit [&>li]:break-inside-avoid">
        {/* <div className="from-primary/60 absolute inset-0 -z-10 bg-radial to-transparent to-50%" /> */}
        <motion.li
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary-light/15 overflow-clip rounded-xl p-4 md:p-6 lg:rounded-3xl lg:p-8"
        >
          <h2 className="px-5 pt-5 text-2xl font-semibold md:px-8 md:pt-8 md:text-3xl">
            개인 프로필 설정
          </h2>
          <Spacing className="h-4" />
          <p className="px-5 text-gray-800 md:px-8">
            성별, 나이, 신장, 체중, 운동량, 섭취 목적 등 개인화 데이터를
            저장해요.
          </p>
          <Image
            src={Routine1}
            alt="앱 목업이미지"
            width={478 * 2}
            height={333 * 2}
            className="-z-10 mx-auto w-full translate-y-8 scale-110"
          />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary-light/15 max-h-[400px] overflow-clip rounded-xl p-4 min-[460px]:max-h-180 md:max-h-150 md:p-6 lg:rounded-3xl lg:p-8"
        >
          <h2 className="px-5 pt-5 text-2xl font-semibold md:px-8 md:pt-8 md:text-3xl">
            개인 맞춤형 단백질 제품 추천
          </h2>
          <Spacing className="h-4" />
          <p className="px-5 text-gray-800 md:px-8">
            성별, 나이, 신장, 체중, 운동량, 섭취 목적 등 개인화 데이터를
            저장해요.
          </p>
          <Image
            src={ProteinRecommendScreen}
            alt="앱 목업이미지"
            width={478 * 2}
            height={333 * 2}
            className="-z-10 mx-auto mt-10 w-3/4 md:mt-0 md:translate-y-10"
          />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary-light/15 overflow-clip rounded-xl p-4 md:p-6 lg:rounded-3xl lg:p-8"
        >
          <h2 className="px-5 pt-5 text-2xl font-semibold md:px-8 md:pt-8 md:text-3xl">
            권장 단백질 섭취량 자동 산출
          </h2>
          <Spacing className="h-4" />
          <p className="px-5 text-gray-800 md:px-8">
            설정된 프로필을 기반으로 나에게 맞는 단백질 루틴을 찾아줘요.
          </p>
          <Image
            src={Routine2}
            alt="앱 목업이미지"
            width={478 * 3}
            height={333 * 3}
            className="-z-10 mx-auto my-8 w-full translate-y-10 scale-115"
          />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-primary-light/15 overflow-clip rounded-xl p-4 md:p-6 lg:rounded-3xl lg:p-8"
        >
          <h2 className="px-5 pt-5 text-2xl font-semibold md:px-8 md:pt-8 md:text-3xl">
            실시간 피드백 및 리마인드
          </h2>
          <Spacing className="h-4" />
          <p className="px-5 text-gray-800 md:px-8">
            오늘 부족한 단백질 보충도 잊지 않게. <br />
            실시간으로 일일 섭취량을 확인하고, 알림을 통해 리마인드 받아요.
          </p>
          <Image
            src={AppNotification}
            alt="앱 목업이미지"
            width={478 * 2}
            height={333 * 2}
            className="-z-10 mx-auto my-20 w-full scale-110"
          />
        </motion.li>
      </ul>
      <Spacing className="h-8 md:h-12 lg:h-20 xl:h-40" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative contents h-fit w-full overflow-hidden rounded-2xl pt-0 md:block"
      >
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 60% 10%, rgb(255, 106, 0), transparent 60%), #000000",
          }}
        />

        <div className="relative z-1 mx-auto w-full">
          <PromoVideo fileName="Prtiimal_3D_Fin.mp4" />
        </div>
      </motion.div>
      <Spacing className="h-8 md:h-12 lg:h-20 xl:h-25" />
      {/** Machine 소개 파트 */}
      <div className="flex flex-col gap-10 lg:gap-20 xl:-mx-15 xl:flex-row xl:items-center">
        <div className="flex-4">
          <SectionLabel label="Protimal Machine" className="mx-auto lg:w-fit" />
          <Spacing className="h-3" />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold lg:text-center lg:text-[30px]"
          >
            앱과 연동된 무인 프로틴 머신으로 <br className="hidden lg:block" />
            운동 후 즉시 프로틴 보충이 가능합니다.
          </motion.h1>
          <Spacing className="h-8 md:h-12" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Image
              src={MachineIntro}
              alt="머신이미지"
              width={400}
              height={400}
              className="mx-auto w-1/2 -translate-x-[7%] md:w-1/3 xl:w-full"
            />
          </motion.div>
        </div>
        <ul className="mx-auto flex h-fit w-full flex-6 flex-col gap-10 sm:w-9/10 xl:w-full">
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-10"
          >
            <div className="flex flex-col gap-2">
              <Chip>간편 주문</Chip>
              <h3 className="text-xl font-bold md:text-2xl">
                QR코드로 원터치 주문
              </h3>
              <p className="flex flex-col">
                앱에서 발급받은 QR 코드를 머신에 인식시키면 해당하는
                프로틴이&nbsp;
                <br className="hidden md:block" />
                자동으로 디스펜싱됩니다.
              </p>
            </div>
            {/** 이미지 */}
            <div className="bg-primary mx-auto flex size-8/10 shrink-0 overflow-hidden rounded-xl sm:mx-0 sm:size-50">
              <Image
                src={QRCodeClipped}
                alt="QRCodeClipped"
                className="mx-auto w-9/10 translate-y-8 sm:w-2/3 sm:translate-y-0 sm:scale-120 sm:self-end"
              />
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-10"
          >
            <div className="flex flex-col gap-2">
              <Chip>고속 제조</Chip>
              <h3 className="text-xl font-bold md:text-2xl">
                30초 이내 고속 제조
              </h3>
              <p className="flex flex-col">
                마시기 좋게 고속 셰이킹하고, 컵에 담아 빠르게 배출합니다.
              </p>
            </div>
            {/** 이미지 */}
            <div className="bg-primary mx-auto flex size-8/10 shrink-0 overflow-hidden rounded-xl sm:mx-0 sm:size-50">
              <Image
                src={ProteinReady}
                alt="ProteinReady"
                className="mx-auto"
              />
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-10"
          >
            <div className="flex flex-col gap-2">
              <Chip>데이터 연동</Chip>
              <h3 className="text-xl font-bold md:text-2xl">
                단백질 섭취량 자동 기록
              </h3>
              <p className="flex flex-col">
                연동된 앱 프로필 기반으로 목표 단백질 섭취율이 실시간으로
                반영됩니다.
              </p>
            </div>
            {/** 이미지 */}
            <div className="bg-primary mx-auto flex size-8/10 shrink-0 overflow-hidden rounded-xl sm:mx-0 sm:size-50">
              <Image
                src={ProteinIntakeRealtime}
                alt="ProteinIntakeRealtime"
                className="mx-auto w-9/10 translate-y-8 sm:w-2/3 sm:translate-y-0 sm:scale-120 sm:self-end"
              />
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
