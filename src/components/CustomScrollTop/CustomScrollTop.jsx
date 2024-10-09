"use client";
import React, { useEffect, useState } from "react";
import { UpOutlined } from "@ant-design/icons";

const CustomScrollTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ScrollHandler = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", ScrollHandler);
    return () => {
      window.removeEventListener("scroll", ScrollHandler);
    };
  }, []);

  return (
    <div
      className={`fixed right-10 bottom-[4.5rem] z-20 transition-opacity duration-500 ease-in-out ${
        scrolled ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      <div className=" arrow-shadow bg-[#993795] w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
        <i className="fa fa-chevron-up text-white text-[18px]"></i>
      </div>
    </div>
  );
};

export default CustomScrollTop;
