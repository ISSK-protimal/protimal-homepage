import Image from "next/image";
import React from "react";
import { Spacing } from "@/components/ui/spacing";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const FooterSection = () => {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="container mx-auto w-fit px-4 py-10 text-center">
        <div className="relative mx-auto size-12 cursor-pointer">
          <Link
            href="https://www.instagram.com/issk_protimal/"
            className="contents"
          >
            <Image src="/images/insta-logo.svg" alt="Instagram Logo" fill />
          </Link>
        </div>
        <Spacing className="h-4" />
        <div className="flex flex-col gap-4">
          <h2 className="text-primary text-3xl font-bold">@issk_protimal</h2>
          <p className="text-lg text-neutral-300">
            맞춤형 단백질, 한 잔으로 완성되는 건강한 선택
          </p>
        </div>
        <Spacing className="h-10" />
        <Link
          href="https://www.instagram.com/issk_protimal/"
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "py-4 text-base !font-semibold md:py-8 md:text-xl",
          })}
        >
          인스타그램 바로가기
        </Link>
        <Spacing className="h-6" />
        <hr className="mx-[calc(50%-50vw)] w-screen border-neutral-600" />
        <Spacing className="h-6" />
        <p className="text-sm text-neutral-300">
          Copyright © 2025 ISSK. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default FooterSection;
