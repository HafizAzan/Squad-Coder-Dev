"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextwithImage";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";
import { imageUrl } from "imageConstant/ImagesUrl";
import React, { memo } from "react";

const Vision = () => {
  const { rightDiv, leftDiv } = ScrollingAnimationWithGsap();
  return (
    <section className="main-vision h-auto  mt-[110px] mb-5">
      <main className="container flex justify-center gap-[136px] items-center mb-8">
        <div className="w-[30%]" ref={leftDiv}>
          <CustomTextWithImage
            className="!text-[#423566]"
            image={imageUrl.purple_arrow}
          >
            Our Vision
          </CustomTextWithImage>
          <hr className="w-[25vw] h-[2px] bg-gray-400 text-gray-400 my-3" />
          <CustomTypography className="text-[#993795] text-[2.2vw]">
            Our Target is Practical base Learning Approach
          </CustomTypography>
        </div>
        <div className="w-[35%]" ref={rightDiv}>
          <CustomTypography className="text-[0.9em]">
            Our vision is to teach you professional skills through practical
            projects and helping you to get good jobs and share our professional
            knowledge with you.
          </CustomTypography>
        </div>
      </main>
    </section>
  );
};

export default memo(Vision);
