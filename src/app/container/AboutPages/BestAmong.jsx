"use client";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import { CustomTypography } from "components/CustomText/CustomText";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextwithImage";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import React from "react";

const BestAmong = () => {
  const {
    rightDiv,
    actionTop,
    academicAboutHr,
    academicAboutParagraph,
    leftArrowImg,
    fadeText,
  } = ScrollingAnimationWithGsap();
  return (
    <>
      <section className="main-about-us h-auto mt-10 relative">
        <CustomImgArrow
          className="w-[7%] absolute top-[120px] about-arrow"
          imgClass="w-[190px]"
          src={imageUrl.side_arrow}
          ref={leftArrowImg}
        />
        <main className="container flex justify-center gap-[85px] items-center">
          <Image
            src={imageUrl.among_com}
            className="com-about w-[440px]"
            ref={fadeText}
          />
          <div className="about-text w-[40.6%] mb-8">
            <CustomTextWithImage
              className="!text-[#423566]"
              image={imageUrl.purple_arrow}
              ref={actionTop}
            >
              About Us
            </CustomTextWithImage>
            <hr
              ref={academicAboutHr}
              className="w-[415px] h-[2px] bg-gray-400 text-gray-400 my-3"
            />
            <CustomTypography
              ref={academicAboutParagraph}
              className="sec-article text-[#993795] text-[1.8em] mb-4"
            >
              Why We Are the Best Among All
            </CustomTypography>
            <CustomTypography ref={rightDiv} className="text-[0.9em]">
              We are teaching how to code professionally in the web development
              field by creating some practical projects like Web Admin Panels
              (WEBSITES WITH ADMIN PANELS, RESTAURANT MANGEMENT SYSTEMS), Mobile
              Apps and much more and now we have decided to launch that in
              market so if anyone wants to learn programming so you can easily
              contact us by our phone numbers, email or submitting website form.
            </CustomTypography>
          </div>
        </main>
      </section>
    </>
  );
};

export default BestAmong;
