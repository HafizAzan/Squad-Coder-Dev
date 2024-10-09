"use client";

import TextArea from "antd/es/input/TextArea";
import React, { memo } from "react";

const CustomTextArea = ({
  onChange = () => {},
  rows = 10,
  children,
  ...props
}) => {
  return (
    <>
      <TextArea
        rows={rows}
        placeholder={children}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default memo(CustomTextArea);
