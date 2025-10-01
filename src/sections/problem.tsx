import SectionLabel from "@/components/common/section-label";
import React from "react";
import * as motion from "motion/react-client";
import { Spacing } from "@/components/ui/spacing";
import { Protein, ThinkingFace } from "@/assets/images";
import Image from "next/image";

const ProblemSection = () => {
  return (
    <section className="relative mx-auto flex h-screen max-w-screen-xl flex-col justify-center px-4 py-10 text-center lg:px-16 lg:py-20">
      <Image
        src={Protein}
        alt="protein"
        className="absolute inset-0 -z-10 mx-[calc(50%-50vw)] h-[100dvh] w-screen max-w-none object-cover object-center brightness-30 select-none"
      />
      <SectionLabel label="Why Protimal?" className="mx-auto w-fit" />
      <Spacing className="h-3" />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl leading-tight font-bold text-white lg:text-5xl"
      >
        단백질 섭취, 이렇게 어려워도 되나요?
      </motion.h1>
      <Spacing className="h-3 shrink-0 md:h-8" />
      <motion.h3 className="sub-title">
        무엇을, 얼마나, 언제…? 끝없는 고민의 연속
      </motion.h3>

      <Spacing className="h-10 shrink-0 md:h-8 lg:h-20" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full px-0 md:px-30 lg:px-40"
      >
        <div className="flex flex-col justify-between gap-6 tracking-[-0.04em]">
          <div className="flex flex-col gap-12 justify-self-center">
            {/* 말풍선 스타일 - 첫 번째 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative isolate"
            >
              <div className="w-fit rounded-3xl bg-white p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  얼마나 먹어야 하는지 모르겠어요
                </h2>
              </div>
              {/* 말풍선 꼬리 */}
              <div className="absolute -bottom-2 left-8 -z-10 size-6 rotate-45 bg-white md:size-8"></div>
            </motion.div>

            {/* 말풍선 스타일 - 두 번째 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative isolate self-end"
            >
              <div className="w-fit rounded-3xl bg-white p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  종류가 많아서 뭘 사야 할지 너무 헷갈려요
                </h2>
              </div>
              {/* 말풍선 꼬리 */}
              <div className="absolute right-8 -bottom-2 -z-10 size-6 rotate-45 bg-white md:size-8"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              className="mx-auto hidden size-fit md:block"
            >
              <Image
                src={ThinkingFace}
                alt="고민"
                width={100}
                height={100}
                className="size-20 md:size-30 lg:size-40"
              />
            </motion.div>
            {/* 말풍선 스타일 - 세 번째 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative isolate"
            >
              <div className="w-fit rounded-3xl bg-white p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  운동 끝나고 바로 먹기 어려워요
                </h2>
              </div>
              {/* 말풍선 꼬리 */}
              <div className="absolute -bottom-2 left-8 -z-10 size-6 rotate-45 bg-white md:size-8"></div>
            </motion.div>

            {/* 말풍선 스타일 - 네 번째 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="relative isolate self-end"
            >
              <div className="w-fit rounded-3xl bg-white p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  비싸서 부담스러워요
                </h2>
              </div>
              {/* 말풍선 꼬리 */}
              <div className="absolute right-8 -bottom-2 -z-10 size-6 rotate-45 bg-white md:size-8"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
