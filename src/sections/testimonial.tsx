"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/common/section-label";
import { Spacing } from "@/components/ui/spacing";
import * as motion from "motion/react-client";
import Image from "next/image";
import { TestimonialIcon } from "@/assets/images";
import { UserAvatar1, UserAvatar2, UserAvatar3 } from "@/assets/images";

const testimonials = [
  {
    text: "운동 직후 뭘 먹어야 할지 항상 고민이었어요. 이젠 고민 없이 바로 챙길 수 있어서 너무 편해요.",
    name: "헬스장 회원 A씨",
    info: "20대, 헬스 1년 차",
    imgSrc: UserAvatar1,
  },
  {
    text: "회원들이 알아서 챙기니까 관여도가 줄어들고 만족도는 올라갔습니다. 운동 후 보충 루틴이 자연스럽게 자리 잡았어요.",
    name: "헬스장 운영자 B씨",
    info: "소형 PT 센터",
    imgSrc: UserAvatar2,
  },
  {
    text: "식사나 단백질 보충 타이밍을 회원들에게 직접 설명하던 게 이젠 시스템으로 대체돼서 체계적인 느낌이 강해졌어요.",
    name: "운동 강사 C씨",
    info: "중형 체육관",
    imgSrc: UserAvatar3,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-white p-4 pb-0">
      <div className="from-primary-light via-primary to-primary-heavy rounded-4xl rounded-b-none bg-gradient-to-br p-4">
        <section className="mx-auto max-w-screen-xl px-4 py-15 lg:px-18 lg:py-20">
          <SectionLabel
            label="What others say"
            className="mx-auto w-fit"
            labelClassName="text-black"
          />
          <Spacing className="h-3" />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-3xl leading-tight font-bold lg:text-5xl"
          >
            사용자들이 전하는 Protimal
          </motion.h1>
          <Spacing className="h-8 md:h-12" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
              <div className="flex flex-col lg:max-w-[60%]">
                <Image
                  src={TestimonialIcon}
                  alt="TesttimonialIcon"
                  width={30}
                  height={30}
                  className="mb-2 h-10 w-10"
                />
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="justify-self-center text-2xl leading-tight font-semibold sm:text-3xl lg:text-4xl"
                  dangerouslySetInnerHTML={{
                    __html: '"' + testimonials[currentIndex].text + '"',
                  }}
                />
              </div>
              <div className="flex shrink-0 flex-col items-center self-center">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={testimonials[currentIndex].imgSrc}
                    alt="User Avatar"
                    width={30}
                    height={30}
                    sizes="100vw"
                    className="mb-4 aspect-[680/736] w-40 sm:w-60 lg:w-80"
                  />
                </motion.div>
                <motion.p
                  key={`name-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl font-semibold"
                >
                  {testimonials[currentIndex].name}
                </motion.p>
                <motion.p
                  key={`info-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-neutral-800"
                >
                  {testimonials[currentIndex].info}
                </motion.p>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-start gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-black transition-all hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none"
                aria-label="이전 후기"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-black transition-all hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none"
                aria-label="다음 후기"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialSection;
