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
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-500 md:text-xl"
      >
        간단해 보이는 단백질 섭취, 생각보다 간단하지 않습니다.
      </motion.p>
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
      <div className="flex gap-10 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-1/2"
        >
          <Image src={Protein} alt="protein" className="rounded-2xl" />
        </motion.div>
        <div className="flex flex-col gap-4">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default WhyProtimalSection;
