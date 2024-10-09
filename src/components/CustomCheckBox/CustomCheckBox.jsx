"use client";

import { Checkbox } from "antd";
import React, { memo } from "react";

const CustomCheckBox = ({ children, onChange = () => {}, ...props }) => {
  return (
    <Checkbox onChange={onChange} {...props}>
      {children}
    </Checkbox>
  );
};

export default memo(CustomCheckBox);
