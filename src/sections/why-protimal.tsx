import SectionLabel from "@/components/common/section-label";
import React from "react";
import * as motion from "motion/react-client";
import { Spacing } from "@/components/ui/spacing";
import NumberTicker from "@/components/interactive/number-ticker";
import { Protein } from "@/assets/images";
import Image from "next/image";

const WhyProtimalSection = () => {
  return (
    <section className="px-4 py-10 max-w-screen-xl mx-auto lg:px-16 lg:py-20">
      <SectionLabel label="Why Protimal?" className="lg:w-fit" />
      <Spacing className="h-3" />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl lg:text-5xl font-bold leading-tight"
      >
        단백질 섭취, 이렇게 어려워도 되나요?
      </motion.h1>
      <div className="md:h-5" />

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
      <div className="md:h-5" />
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full relative"
        >
          <Image
            src={Protein}
            alt="protein"
            className="rounded-2xl w-full brightness-30"
          />
          <div className="absolute inset-0 flex flex-col gap-6 justify-center p-10">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white md:text-xl"
            >
              사람들이 단백질 섭취에서 겪는 어려움
            </motion.h3>
            <div className="flex flex-col gap-12 justify-self-center">
              {/* 말풍선 스타일 - 첫 번째 */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-2 md:p-6 shadow-lg w-fit">
                  <h2 className="text-xl font-bold text-gray-800">
                    얼마나 먹어야 하는지 모르겠어요
                  </h2>
                </div>
                {/* 말풍선 꼬리 */}
                <div className="absolute -bottom-2 left-8 w-8 h-8 bg-white rotate-45"></div>
              </div>

              {/* 말풍선 스타일 - 두 번째 */}
              <div className="relative self-end">
                <div className="bg-white rounded-3xl p-6 shadow-lg w-fit">
                  <h2 className="text-xl font-bold text-gray-800">
                    뭘 사야 할지 너무 헷갈려요
                  </h2>
                </div>
                {/* 말풍선 꼬리 */}
                <div className="absolute -bottom-2 right-8 w-8 h-8 bg-white rotate-45"></div>
              </div>

              {/* 말풍선 스타일 - 세 번째 */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-lg w-fit">
                  <h2 className="text-xl font-bold text-gray-800">
                    운동 끝나고 바로 먹기 어려워요
                  </h2>
                </div>
                {/* 말풍선 꼬리 */}
                <div className="absolute -bottom-2 left-8 w-8 h-8 bg-white rotate-45"></div>
              </div>

              {/* 말풍선 스타일 - 네 번째 */}
              <div className="relative self-end">
                <div className="bg-white rounded-3xl p-6 shadow-lg w-fit">
                  <h2 className="text-xl font-bold text-gray-800">
                    비싸서 부담스러워요
                  </h2>
                </div>
                {/* 말풍선 꼬리 */}
                <div className="absolute -bottom-2 right-8 w-8 h-8 bg-white rotate-45"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyProtimalSection;
