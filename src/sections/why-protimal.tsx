import SectionLabel from "@/components/common/section-label";
import React from "react";
import * as motion from "motion/react-client";
import { Spacing } from "@/components/ui/spacing";
import NumberTicker from "@/components/interactive/number-ticker";
import { Protein } from "@/assets/images";
import Image from "next/image";

const WhyProtimalSection = () => {
  return (
    <section className="relative mx-auto max-w-screen-xl px-4 py-10 lg:px-16 lg:py-20">
      <Image
        src={Protein}
        alt="protein"
        className="absolute inset-0 -z-10 mx-[calc(50%-50vw)] h-[100dvh] w-screen max-w-none object-cover object-center brightness-30 select-none"
      />
      <SectionLabel label="Why Protimal?" className="lg:w-fit" />
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
      <div className="h-3 md:h-5" />

      {/* <div className="bg-gradient-to-r from-primary/40 to-primary/20 rounded-2xl p-8">
        <div className="text-center">
          <NumberTicker
            className="text-6xl font-bold text-primary mb-2"
            value={76}
            duration={2000}
            decimalPlaces={0}
            suffix="%"
          />
          <p className="text-xl font-semibold mb-4">
            &quot;헬스장에 프로틴 머신이 있다면 사용하겠다&quot;
          </p>
          <div className="w-full bg-gray-50 rounded-full h-3">
            <motion.div
              className="bg-primary h-3 rounded-full"
              style={{ width: "76%" }}
              initial={{ width: 0 }}
              whileInView={{ width: "76%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </div>
      </div> */}
      <Spacing className="md:h-5" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full"
      >
        <div className="absolute inset-0 flex flex-col justify-between gap-6 tracking-[-0.04em]">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white md:text-2xl"
          >
            사람들이 단백질 섭취에서 겪는 어려움
          </motion.h3>
          <div className="flex flex-col gap-12 justify-self-center">
            {/* 말풍선 스타일 - 첫 번째 */}
            <div className="relative isolate">
              <div className="w-fit rounded-3xl bg-white p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  얼마나 먹어야 하는지 모르겠어요
                </h2>
              </div>
              {/* 말풍선 꼬리 */}
              <div className="absolute -bottom-2 left-8 -z-10 size-6 rotate-45 bg-white md:size-8"></div>
            </div>

            {/* 말풍선 스타일 - 두 번째 */}
            <div className="relative isolate self-end">
              <div className="w-fit rounded-3xl bg-white p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  뭘 사야 할지 너무 헷갈려요
                </h2>
              </div>
              {/* 말풍선 꼬리 */}
              <div className="absolute right-8 -bottom-2 -z-10 size-6 rotate-45 bg-white md:size-8"></div>
            </div>

            {/* 말풍선 스타일 - 세 번째 */}
            <div className="relative isolate">
              <div className="w-fit rounded-3xl bg-white p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  운동 끝나고 바로 먹기 어려워요
                </h2>
              </div>
              {/* 말풍선 꼬리 */}
              <div className="absolute -bottom-2 left-8 -z-10 size-6 rotate-45 bg-white md:size-8"></div>
            </div>

            {/* 말풍선 스타일 - 네 번째 */}
            <div className="relative isolate self-end">
              <div className="w-fit rounded-3xl bg-white p-4 md:p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  비싸서 부담스러워요
                </h2>
              </div>
              {/* 말풍선 꼬리 */}
              <div className="absolute right-8 -bottom-2 -z-10 size-6 rotate-45 bg-white md:size-8"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyProtimalSection;
