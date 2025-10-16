import React from "react";
import SectionLabel from "@/components/common/section-label";
import { Spacing } from "@/components/ui/spacing";
import * as motion from "motion/react-client";
import ContactForm from "@/components/forms/contact-form";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-screen-lg scroll-mt-10 px-4 py-10 md:py-20 lg:scroll-mt-20 lg:px-22.5"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-3 md:gap-6"
      >
        <div className="md:text-center">
          <SectionLabel label="문의하기" className="md:mx-auto md:w-fit" />
          <Spacing className="h-3" />
          <h2 className="text-2xl font-bold lg:text-4xl">
            문의 사항이 있으신가요?
          </h2>
        </div>
        <p className="font-semibold text-gray-500 md:text-center md:text-xl">
          프로틴 머신 사전 등록 신청부터, 기업 제휴, 개인 문의까지 담당자가
          신속하게 연락드리겠습니다.
        </p>
      </motion.div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
