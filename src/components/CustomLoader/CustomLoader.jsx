"use client";
import { memo } from "react";
import "./CustomLoader.css";

const CustomLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  );
};

export default memo(CustomLoader);
