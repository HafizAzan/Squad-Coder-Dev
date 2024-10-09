"use client";
import { Input } from "antd";
import React, { memo } from "react";

const CustomPassword = ({ children, ...props }) => {
  return <Input placeholder={children} {...props} />;
};

export default memo(CustomPassword);
