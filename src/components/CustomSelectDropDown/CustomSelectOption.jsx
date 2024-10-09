"use client";
import { Select } from "antd";
import React, { memo } from "react";

const { Option } = Select;

const CustomSelectOption = ({ value = "", children, ...props }) => {
  return (
    <Option value={value} {...props}>
      {children}
    </Option>
  );
};

export default memo(CustomSelectOption);
