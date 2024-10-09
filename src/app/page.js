"use client";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextWithImage";
import Academics from "container/HomePages/Academics";
import Actions from "container/HomePages/Actions";
import Future from "container/HomePages/Future";
import Skill from "container/HomePages/Skill";
import { imageUrl } from "imageConstant/ImagesUrl";
import React from "react";

export default function App() {
  return (
    <>
      <Future show={false}>
        <CustomTextWithImage image={imageUrl.small_arrow} className="mb-3">
          We help you overcome
        </CustomTextWithImage>
      </Future>
      <Academics />
      <Skill />
      <Actions />
    </>
  );
}
