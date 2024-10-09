"use client";
import { CustomTypography } from "src/components/CustomText/CustomText";
import Link from "next/link";
import React from "react";

const CustomBreadCrumb = ({ children, className, ...props }) => {
  return (
    <header className={`bg-green-500 ${className}`} {...props}>
      <CustomTypography>Logo / image</CustomTypography>
      <nav>
        <ul>
          <li>
            <Link>home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CustomBreadCrumb;
