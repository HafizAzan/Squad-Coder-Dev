"use client";

import { Input } from "antd";
import React, { memo, useState } from "react";

const CustomInput = ({ onChange = () => {}, placeholder, ...props }) => {
  return (
    <>
      <Input placeholder={placeholder} onChange={onChange} {...props} />
    </>
  );
};

export default memo(CustomInput);
