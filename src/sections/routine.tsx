import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { Chart, Routine1, Routine2, Routine3 } from "@/assets/images";
import SectionLabel from "@/components/common/section-label";
import { Spacing } from "@/components/ui/spacing";

const RoutineSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-10 lg:px-22.5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-between"
      >
        <Image src={Chart} alt="routine" className="lg:max-w-md" />

        <div className="flex flex-col gap-3 md:gap-6 lg:max-w-md">
          <div>
            <SectionLabel label="분석부터 구매, 섭취까지" />
            <Spacing className="h-3" />
            <h2 className="text-2xl font-bold lg:text-4xl">
              단백질도 루틴이 필요합니다.
            </h2>
          </div>
          <p className="font-semibold text-gray-500 md:text-xl">
            Protimal은 식단, 체성분, 운동기록을 분석해 가장 적절한 단백질 섭취
            루틴을 제안하고, 헬스장이나 운동 공간에 설치된 무인 머신을 통해 직접
            섭취까지 연결해드립니다.
          </p>
        </div>
      </motion.div>
      <Spacing className="h-10 md:h-20" />
      <div className="flex flex-col gap-12 md:gap-20 lg:gap-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-accent/50 relative isolate rounded-3xl lg:max-w-[474px]"
          >
            <Image src={Routine1} alt="routine" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col justify-center gap-2"
          >
            <div className="bg-primary flex size-6 items-center justify-center rounded-full font-black text-white">
              1
            </div>
            <h2 className="text-xl font-bold text-gray-600 md:text-2xl">
              사용자 루틴 분석
            </h2>
            <p className="text-sm text-gray-500 md:text-lg">
              Protimal 영양 분석 시스템은 식단, 운동기록, 체성분 등 다양한
              사용자 데이터를 기반으로 정밀한 분석을 실시합니다.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row-reverse lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-accent/50 relative isolate rounded-3xl lg:max-w-[474px]"
          >
            <Image src={Routine2} alt="routine" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col justify-center gap-2 lg:text-end"
          >
            <div className="bg-primary flex size-6 items-center justify-center rounded-full font-black text-white lg:self-end">
              2
            </div>
            <h2 className="text-xl font-bold text-gray-600 md:text-2xl">
              AI 기반 단백질 루틴 설계
            </h2>
            <p className="text-sm text-gray-500 md:text-lg">
              분석 결과를 바탕으로 AI가 당신에게 맞는 최적의 단백질 루틴을
              설계합니다.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-accent/50 relative isolate overflow-hidden rounded-3xl lg:max-w-[474px]"
          >
            <Image src={Routine3} alt="routine" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col justify-center gap-2"
          >
            <div className="bg-primary flex size-6 items-center justify-center rounded-full font-black text-white">
              3
            </div>
            <h2 className="text-xl font-bold text-gray-600 md:text-2xl">
              QR과 머신을 통한 프로틴 간편 구매
            </h2>
            <p className="text-sm text-gray-500 md:text-lg">
              앱에 저장된 프로틴 루틴을 기반으로 원하는 프로틴 제품의 QR코드를
              발급받고, 헬스장 내 비치된 머신에 인식시켜 구매할 수 있습니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoutineSection;
