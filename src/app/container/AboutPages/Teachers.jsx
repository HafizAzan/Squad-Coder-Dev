"use client";
import CustomTeacherInfoCard from "components/CustomTeacherInfoCard/CustomTeacherInfoCard";
import { CustomTypography } from "components/CustomText/CustomText";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextwithImage";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import React, { memo } from "react";

const Teachers = () => {
  const {
    imageRef,
    academicAboutRef,
    academicAboutHr,
    academicAboutParagraph,
    fadeText,
  } = ScrollingAnimationWithGsap();
  return (
    <section className="teacher h-auto mb-8 mt-7">
      <main className="container">
        <div className="flex justify-between items-end mb-8">
          <div className="w-[74%]">
            <CustomTextWithImage
              className="!text-[#423566]"
              image={imageUrl.purple_arrow}
              ref={academicAboutRef}
            >
              Our Team
            </CustomTextWithImage>
            <hr
              ref={academicAboutHr}
              className="w-[340px] h-[2px] bg-gray-400 text-gray-400 my-3"
            />
            <CustomTypography
              ref={academicAboutParagraph}
              className="text-[#993795] text-[1.8em]"
            >
              Our Professional Teachers
            </CustomTypography>
          </div>
          <Image src={imageUrl.shape} className="w-[130px]" ref={imageRef} />
        </div>
        <div className="w-full flex items-center justify-around h-[590px] mt-[3.25rem]">
          <CustomTeacherInfoCard
            image={imageUrl.sir_muzzammil}
            href={"https://www.linkedin.com/in/muzammil-mustaqeem-b89b39150/"}
          >
            Muzzammil Mustaqeem
          </CustomTeacherInfoCard>
          <CustomTeacherInfoCard
            image={imageUrl.sir_musaddiq}
            classNameImg="aspect-custom object-left"
            href={"https://www.linkedin.com/in/muhammad-musaddiq-mustaqeem/"}
          >
            Musaddiq Mustaqeem
          </CustomTeacherInfoCard>
        </div>
      </main>
    </section>
  );
};

export default memo(Teachers);
