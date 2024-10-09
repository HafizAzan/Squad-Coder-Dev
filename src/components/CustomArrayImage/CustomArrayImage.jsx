"use client";
import { imageUrls } from "imageConstant/ImagesUrl";
import Image from "next/image";
import React, { memo } from "react";

const CustomArrayImage = ({ className, ...props }) => {
  return (
    <div
      className="c-arr-img flex flex-wrap justify-between gap-[50px] w-full"
      {...props}
    >
      {imageUrls?.map((url, index) => {
        return (
          <Image
            key={index}
            src={url}
            className={`logo bg-white w-[20%] h-[90px] flex justify-center items-center p-[10px] object-contain ${className}`}
          />
        );
      })}
    </div>
  );
};

export default memo(CustomArrayImage);
