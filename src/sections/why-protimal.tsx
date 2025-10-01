import SectionLabel from "@/components/common/section-label";
import { Spacing } from "@/components/ui/spacing";
import * as motion from "motion/react-client";
import React from "react";
import NumberTicker from "@/components/interactive/number-ticker";

const WhyProtimalSection = () => {
  return (
    <section className="relative mx-auto px-4 py-10 text-center lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-screen-xl flex-col">
        <SectionLabel label="Why Protimal?" className="mx-auto w-fit" />
        <Spacing className="h-3" />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl leading-tight font-bold text-black lg:text-5xl"
        >
          우리가 만난 사람들은 한결같이 말합니다.
        </motion.h1>
        <Spacing className="h-3" />
        <div className="from-primary/40 to-primary/20 rounded-2xl bg-gradient-to-r p-8">
          <div className="text-center">
            <NumberTicker
              className="text-primary mb-2 text-6xl font-bold"
              value={76}
              duration={2000}
              decimalPlaces={0}
              suffix="%"
            />
            <p className="mb-4 text-xl font-semibold">
              &quot;헬스장에 프로틴 머신이 있다면 사용하겠다&quot;
            </p>
            <div className="h-3 w-full rounded-full bg-gray-50">
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
        </div>
      </div>
    </section>
  );
};

export default WhyProtimalSection;
