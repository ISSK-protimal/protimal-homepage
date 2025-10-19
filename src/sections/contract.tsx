"use client";

import React from "react";
import SectionLabel from "@/components/common/section-label";
import * as motion from "motion/react-client";
import useEmblaCarousel from "embla-carousel-react";
import { Spacing } from "@/components/ui/spacing";
import Image from "next/image";
import { IsometricGym } from "@/assets/images";
import {
  Contract1,
  Contract2,
  Contract3,
  Contract4,
  Contract5,
} from "@/assets/images";
import { useDotButton } from "@/components/contract/carousel-dot-button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const contractSteps = [
  {
    order: "01",
    title: "제휴 문의",
    imgSrc: Contract1.src,
  },
  {
    order: "02",
    title: "협의 및 계약",
    imgSrc: Contract2.src,
  },
  {
    order: "03",
    title: "프로티멀 머신 설치",
    imgSrc: Contract3.src,
  },
  {
    order: "04",
    title: "제품 공급 및 관리",
    imgSrc: Contract4.src,
  },
  {
    order: "05",
    title: "수익 관리",
    imgSrc: Contract5.src,
  },
];

const ContractSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const router = useRouter();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <>
      <div
        className="relative isolate scroll-mt-10 bg-black text-white lg:scroll-mt-20"
        id="contract"
      >
        <Image
          src={IsometricGym}
          alt="IsoMetricGym"
          width={100}
          height={100}
          sizes="150vw"
          className="absolute inset-0 -z-10 mx-auto size-full max-w-screen-xl object-cover object-[0%_10%] opacity-80"
        />
        <section className="mx-auto max-w-screen-xl px-4 py-10 lg:px-22.5">
          <SectionLabel label="Get Protimal" className="mx-auto w-fit" />
          <Spacing className="h-3" />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-3xl leading-tight font-bold lg:text-5xl"
          >
            Protimal과 함께하세요.
          </motion.h1>
          <Spacing className="h-8 md:h-12" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-center font-semibold text-neutral-200 md:text-xl"
          >
            사전 신청하신 피트니스 센터 및 사용자에게 먼저 찾아갑니다.
          </motion.p>
          <Spacing className="h-3 md:h-6" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mx-auto text-center text-xs font-light text-neutral-200 sm:text-sm md:text-base lg:max-w-[70%]"
          >
            ※ 프로티멀은 현재 빠르게 생산을 마무리하고 있으며, 다양한 단백질
            제품을 테스트 및 선별 중입니다.{" "}
            <br className="hidden min-[513px]:block" />
            센터 환경과 소비자 반응에 적합한 제품 구성을 위해
            <br /> 사전 테스트 및 유저 피드백을 기반으로 최적의 라인업을
            조율하고 있습니다.
          </motion.p>
          <Spacing className="h-8 md:h-12" />
          <SectionLabel
            label="Process"
            className="mx-auto md:w-fit"
            labelClassName="!text-lg"
          />
          <Spacing className="h-1" />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold md:text-center lg:text-4xl"
          >
            도입 프로세스
          </motion.h1>
          <Spacing className="h-3 md:h-6" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mx-auto text-start text-xs font-medium text-neutral-200 sm:text-base md:text-center md:text-lg lg:max-w-[60%]"
          >
            지금 문의하고, 보다 경쟁력 있는 센터로 거듭나세요.
          </motion.p>
          <Spacing className="h-8 md:h-12" />
          <div className="embla m-auto max-w-192">
            <style jsx>{`
              .embla {
                --slide-height: 19rem;
                --slide-spacing: 1rem;
                --slide-size: 100%;
              }
              .embla_viewport {
                overflow: hidden;
              }
              .embla_container {
                display: flex;
                touch-action: pan-y pinch-zoom;
                margin-left: calc(var(--slide-spacing) * -1);
              }
              .embla_slide {
                transform: translate3d(0, 0, 0);
                flex: 0 0 var(--slide-size);
                min-width: 0;
                padding-left: var(--slide-spacing);
              }
              .embla__controls {
                display: grid;
                grid-template-columns: auto;
                justify-content: center;
                gap: 1.2rem;
                margin-top: 1rem;
              }
              .embla__dots {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                align-items: center;
                margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
              }
              .embla__dot {
                -webkit-tap-highlight-color: transparent;
                -webkit-appearance: none;
                appearance: none;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(8px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                touch-action: manipulation;
                display: inline-flex;
                text-decoration: none;
                cursor: pointer;
                padding: 0;
                margin: 0 0.25rem;
                width: 0.75rem;
                height: 0.75rem;
                border-radius: 50%;
                transition: all 0.3s ease;
              }
              .embla__dot:hover {
                background: rgba(255, 255, 255, 0.2);
                border-color: rgba(255, 255, 255, 0.3);
                transform: scale(1.1);
              }
              .embla__dot--selected {
                background: rgba(255, 106, 0, 0.8);
                border-color: rgba(255, 106, 0, 1);
                box-shadow: 0 0 0 2px rgba(255, 106, 0, 0.3);
              }
            `}</style>
            <div className="embla_viewport" ref={emblaRef}>
              <div className="embla_container">
                {contractSteps.map((item) => (
                  <div className="embla_slide" key={item.order}>
                    <div className="embla_slide_content flex flex-col items-center justify-center gap-4 rounded-xl border border-white/20 bg-black/10 p-6 backdrop-blur-lg select-none">
                      <div className="size-40">
                        <Image
                          src={item.imgSrc}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-primary text-4xl font-bold">
                          {item.order}
                        </div>
                        <h3 className="text-center text-2xl font-semibold">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="embla__controls">
                <div className="embla__dots">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onDotButtonClick(index)}
                      className={cn(
                        "embla__dot",
                        index === selectedIndex ? "embla__dot--selected" : ""
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Spacing className="h-8 md:h-12" />

          <Button
            variant="default"
            className="mx-auto flex cursor-pointer font-semibold"
            onClick={() => {
              router.push("/#contact");
            }}
          >
            문의하러 가기
          </Button>
        </section>
      </div>
    </>
  );
};

export default ContractSection;
