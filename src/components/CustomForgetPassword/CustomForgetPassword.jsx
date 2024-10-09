"use client";
import Link from "next/link";
import React, { memo } from "react";

const CustomForgetPassword = ({ children, ...props }) => {
  return (
    <Link
      href="/"
      className="absolute bottom-[29%] font-inter text-base font-normal leading-20 text-left text-blue-500 underline"
      {...props}
    >
      {children}
    </Link>
  );
};

export default memo(CustomForgetPassword);
