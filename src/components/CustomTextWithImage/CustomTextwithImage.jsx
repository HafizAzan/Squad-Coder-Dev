"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import Image from "next/image";
import React, { forwardRef, memo } from "react";

const CustomTextWithImage = forwardRef(
  ({ image, imgClass, className, children, ...props }, ref) => {
    return (
      <CustomTypography
        className={`text-[1.6em] text-white flex gap-3 items-center  ${className}`}
        {...props}
        ref={ref}
      >
        <Image src={image} className={`${imgClass}`} alt="Image Loaded" />
        {children}
      </CustomTypography>
    );
  }
);

export default memo(CustomTextWithImage);
