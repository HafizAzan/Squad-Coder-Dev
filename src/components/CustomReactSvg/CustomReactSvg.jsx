"use client";
import React, { memo } from "react";
import { ReactSVG } from "react-svg";

const CustomReactSvg = ({ src, className = "", ...props }) => {
  return <ReactSVG src={src} className={className} {...props} />;
};

export default memo(CustomReactSvg);
