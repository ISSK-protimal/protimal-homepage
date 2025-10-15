"use client";

import React, { useState } from "react";

import { Spacing } from "@/components/ui/spacing";
import SectionLabel from "@/components/common/section-label";
import * as motion from "motion/react-client";
import { Step1, Step2, Step3, Step4, Step5 } from "@/assets/images";
import Image from "next/image";

const HowToSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "목표 단백질 섭취량 확인",
      description: "앱에서 개인별 목표 단백질 섭취량을 설정하고 확인합니다.",
      imgSrc: Step1.src,
    },
    {
      number: "02",
      title: "맞춤 제품 추천 및 구매",
      description: "AI가 분석한 개인별 추천 제품을 선택하고 구매합니다.",
      imgSrc: Step2.src,
    },
    {
      number: "03",
      title: "QR 생성 및 머신 인식",
      description: "구매한 제품의 QR 코드를 생성하고 머신에 스캔합니다.",
      imgSrc: Step3.src,
    },
    {
      number: "04",
      title: "자동 조제 및 음료 수령",
      description: "머신이 자동으로 조제한 맞춤 단백질 음료를 수령합니다.",
      imgSrc: Step4.src,
    },
    {
      number: "05",
      title: "자동 기록 및 피드백",
      description:
        "나의 프로틴 섭취 내역이 자동으로 기록되고, 프로틴에 대한 리뷰 및 피드백을 남길 수 있습니다.",
      imgSrc: Step5.src,
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="bg-black text-white">
      <section
        className="mx-auto max-w-screen-xl px-4 py-10 lg:px-18"
        id="how-to"
      >
        <Spacing className="h-4 md:h-20 lg:h-20" />
        <SectionLabel label="How it works" className="mx-auto w-fit" />
        <Spacing className="h-3" />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-3xl leading-tight font-bold lg:text-5xl"
        >
          복잡했던 단백질 관리, <br className="sm:hidden" />
          이제 단 5단계로 끝내세요.
        </motion.h1>
        <Spacing className="h-8 md:h-12" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-center font-semibold text-neutral-200 md:text-xl"
        >
          개인별 목표와 선호도를 분석해 최적의 제품을 추천하고, 구매와 섭취까지
          쉽게 이어질 수 있도록. <br />
          단백질 관리의 모든 과정이 Protimal로 통합됩니다.
        </motion.p>
        <Spacing className="h-16 md:h-20" />

        {/* Interactive Steps Slider */}
        <div className="relative xl:-mx-16">
          {/* Main Content Area */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl md:p-8">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] opacity-30"></div>

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Image Area */}
              <div className="mb-8 flex justify-center lg:mb-0 lg:w-1/2">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative flex h-72 w-80 items-center justify-center rounded-2xl bg-[#f3f3f3] md:h-80 md:w-96"
                >
                  <Image
                    src={steps[currentStep].imgSrc}
                    alt={steps[currentStep].title}
                    width={300}
                    height={300}
                    sizes="100vw"
                    className="h-full w-full object-cover"
                  />
                  {/*                   
                  <div className="absolute inset-0 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl"></div>

               
                  <div className="relative z-10 flex h-full flex-col justify-between p-8">
                    <div className="flex items-start justify-between">
                      <div className="text-sm font-medium tracking-wider text-white/60">
                        STEP
                      </div>
                      <div className="h-2 w-2 rounded-full bg-white/40"></div>
                    </div>

                    <div className="text-center">
                      <motion.div
                        key={`number-${currentStep}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="mb-4 text-5xl font-light tracking-tight text-white/90"
                      >
                        {steps[currentStep].number}
                      </motion.div>
                      <motion.div
                        key={`title-${currentStep}`}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="text-sm leading-relaxed font-medium text-white/70"
                      >
                        {steps[currentStep].title}
                      </motion.div>
                    </div>

                    <div className="flex justify-center">
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>
                  </div>

     
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 via-transparent to-orange-800/20 opacity-50 blur-xl"></div> */}
                </motion.div>
              </div>

              {/* Right - Content Area */}
              <div className="lg:w-1/2">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-center lg:text-left"
                >
                  <div className="text-primary mb-6 text-7xl font-bold">
                    {steps[currentStep].number}
                  </div>

                  <motion.h3
                    key={`step-title-${currentStep}`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="mb-6 text-3xl leading-tight font-semibold text-white md:text-4xl"
                  >
                    {steps[currentStep].title}
                  </motion.h3>

                  <motion.p
                    key={`step-desc-${currentStep}`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="text-lg leading-relaxed font-light text-white/70"
                  >
                    {steps[currentStep].description}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevStep}
            className="group absolute top-1/2 left-6 -translate-y-1/2 cursor-pointer rounded-full border border-white/20 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 active:scale-105 active:border-white/30 active:bg-white/10 sm:hover:scale-105 sm:hover:border-white/30 sm:hover:bg-white/10"
            aria-label="Previous step"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-5 w-5 text-white/80 transition-colors group-active:text-white sm:group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={nextStep}
            className="group absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer rounded-full border border-white/20 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 active:scale-105 active:border-white/30 active:bg-white/10 sm:hover:scale-105 sm:hover:border-white/30 sm:hover:bg-white/10"
            aria-label="Next step"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="h-5 w-5 text-white/80 transition-colors group-active:text-white sm:group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>

        {/* Step Indicators */}
        <div className="mt-8 flex justify-center px-4 sm:mt-10 md:mt-16">
          <div className="flex items-center space-x-1 sm:space-x-2">
            {steps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToStep(index)}
                className="group relative flex cursor-pointer items-center justify-center"
                aria-label={`Go to step ${index + 1}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                    index === currentStep
                      ? "bg-primary text-white"
                      : index < currentStep
                        ? "bg-primary-light/60 text-white"
                        : "bg-white/10 text-white/60 active:bg-white/20 active:text-white/80 sm:hover:bg-white/20 sm:hover:text-white/80"
                  }`}
                  layout
                >
                  <span className="text-xs font-medium sm:text-sm">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Progress line */}
                {index < steps.length - 1 && (
                  <div
                    className={`mx-1 h-px w-3 sm:mx-2 sm:w-6 ${
                      index < currentStep ? "bg-primary-light" : "bg-white/20"
                    }`}
                  ></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <Spacing className="h-16 md:h-20" />
      </section>
    </div>
  );
};

export default HowToSection;
