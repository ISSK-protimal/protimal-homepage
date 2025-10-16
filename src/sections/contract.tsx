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
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <>
      <div className="relative bg-black text-white">
        <Image
          src={IsometricGym}
          alt="IsoMetricGym"
          width={100}
          height={100}
          sizes="150vw"
          className="absolute inset-0 size-full object-cover object-[10%_0%] opacity-80"
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
            도입 프로세스
          </motion.h1>
          <Spacing className="h-8 md:h-12" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="text-center font-semibold text-neutral-200 md:text-xl"
          >
            Protimal을 도입하고 싶으신가요?
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
                    <div className="embla_slide_content flex flex-col items-center justify-center gap-4 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm select-none">
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
        </section>
      </div>
    </>
  );
};

export default ContractSection;
