"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";
import Image from "next/image";
import Link from "next/link";
import React, { forwardRef } from "react";

const CustomTeacherInfoCard = forwardRef(
  ({ href, image, classNameImg, children, ...props }, ref) => {
    const { fadeText } = ScrollingAnimationWithGsap();
    return (
      <div
        className="bg-pol-img w-[38vw] h-full flex flex-col gap-[20px] pl-[1.5%] text-[20px]"
        {...props}
        ref={fadeText}
      >
        <Image
          src={image}
          className={`w-[18vw] object-cover ${classNameImg}`}
          alt="Teacher's Image"
        />
        <Link href={href} target="blank" className="text-left w-[24vw]">
          <CustomTypography className="text-[#993795] text-[1.8vw]">
            {children}
          </CustomTypography>
          <CustomTypography className="text-[1.4vw]">
            He is a professional full stack developer since 2017 <br />
            (Software House).
          </CustomTypography>
        </Link>
      </div>
    );
  }
);

export default CustomTeacherInfoCard;
