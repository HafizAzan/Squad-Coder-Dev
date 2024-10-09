"use client";
import React from "react";
import Future from "container/HomePages/Future";
import { imageUrl } from "imageConstant/ImagesUrl";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextWithImage";
import BestAmong from "container/AboutPages/BestAmong";
import Actions from "container/HomePages/Actions";
import Teachers from "container/AboutPages/Teachers";
import Vision from "container/AboutPages/Vision";

const page = () => {
  return (
    <>
      <Future
        className={"!bg-cover pt-[80px] !h-[34rem] bg-about-img"}
        con={"!h-[70vh]"}
        src={imageUrl.about_main}
        height={"!h-unset w-[45%]"}
      >
        <CustomTextWithImage
          image={imageUrl.small_arrow}
          imgClass="w-[26px]"
          className="!text-[2.2em] mb-[28%] about-img"
        >
          About Us
        </CustomTextWithImage>
      </Future>
      <BestAmong />
      <Vision />
      <Actions
        title="Glimpse of Previous Sessions"
        width="about-hr w-[380px]"
        cal="cal"
      />
      <Teachers />
    </>
  );
};

export default page;
