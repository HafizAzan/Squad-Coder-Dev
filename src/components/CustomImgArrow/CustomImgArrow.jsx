"use client";
import Image from "next/image";
import React, { memo, forwardRef } from "react";

const CustomImgArrow = forwardRef(({ src, imgClass, className }, ref) => (
  <div className={className} ref={ref}>
    <Image src={src} className={imgClass} alt="image" />
  </div>
));
export default memo(CustomImgArrow);
