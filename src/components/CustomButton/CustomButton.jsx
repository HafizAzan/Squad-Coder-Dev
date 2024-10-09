"use client";
import React, { forwardRef, memo } from "react";
import { Button } from "antd";

const CustomButton = forwardRef(
  ({ type = "", loading = "", children = "", ...props }, ref) => {
    return (
      <Button type={type} loading={loading} ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);

export default memo(CustomButton);
