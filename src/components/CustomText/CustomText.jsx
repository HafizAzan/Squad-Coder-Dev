"use client";
import { Typography } from "antd";
import React, { forwardRef } from "react";

export const CustomTypography = forwardRef(({ children, ...props }, ref) => {
  return (
    <Typography ref={ref} {...props}>
      {children}
    </Typography>
  );
});
