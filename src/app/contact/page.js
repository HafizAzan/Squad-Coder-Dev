"use client";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextWithImage";
import InfoContact from "container/ContactPages/InfoContact";
import Future from "container/HomePages/Future";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";
import { imageUrl } from "imageConstant/ImagesUrl";
import React from "react";

const page = () => {
  const { leftDiv, fadeText } = ScrollingAnimationWithGsap();

  return (
    <>
      <Future
        className={"!bg-cover pt-[80px] !h-[82vh] bg-about-img"}
        con={"!h-[70vh]"}
        src={imageUrl.contact_pic}
        height={"!h-unset w-[45%]"}
      >
        <CustomTextWithImage
          image={imageUrl.small_arrow}
          imgClass="w-[26px]"
          className="!text-[2.2em] mb-[28%] about-img"
        >
          Contact Us
        </CustomTextWithImage>
      </Future>
      <InfoContact leftDiv={leftDiv} academicAboutRef={fadeText} />
    </>
  );
};

export default page;
