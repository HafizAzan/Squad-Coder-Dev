"use client";
import { Select } from "antd";
import React, { memo } from "react";

const CustomSelect = ({ children, ...props }) => {
  return (
    <Select
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      {...props}
    >
      {children}
    </Select>
  );
};

export default memo(CustomSelect);
