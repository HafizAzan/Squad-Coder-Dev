

"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextwithImage";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import React, { memo } from "react";

const Academics = () => {
  const {
    imageRef,
    academicAboutRef,
    academicAboutHr,
    academicAboutParagraph,
    fadeText,
  } = ScrollingAnimationWithGsap();
  return (
    <>
      <section className="main-about h-auto mb-8 mt-7">
        <main className="container">
          <div className="flex justify-between items-end mb-8">
            <div className=" w-[74%]">
              <CustomTextWithImage
                className="!text-[#423566]"
                image={imageUrl.purple_arrow}
                ref={academicAboutRef}
              >
                About Us
              </CustomTextWithImage>
              <hr
                ref={academicAboutHr}
                className="w-[414px] h-[2px] bg-gray-400 text-gray-400 my-3"
              />
              <CustomTypography
                ref={academicAboutParagraph}
                className="text-[#993795] text-[1.8em]"
              >
                Why We Are the Best Among All
              </CustomTypography>
            </div>
            <Image src={imageUrl.shape} className="w-[170px]" ref={imageRef} />
          </div>
          <div>
            <CustomTypography ref={fadeText} className="text-[0.9em] ">
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

export default memo(Academics);
