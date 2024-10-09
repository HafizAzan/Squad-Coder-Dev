"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import { infoItems, navItems, socialItems } from "utils/helper.function";

const Footer = () => {
  return (
    <>
      <section className="sub-footer relative flex gap-[42px] text-[16px] items-center h-[293px]">
        <div className="one-child-foot w-[28%] ml-4 ">
          <Image src={imageUrl.footerLogo} alt="Logo" />
          <CustomTypography className="mt-6 text-[0.9em]">
            Our vision is to teach you professional skills through practical
            projects and helping you to get good jobs and share our professional
            knowledge with you.
          </CustomTypography>
        </div>
        <div className="two-child-foot flex justify-around items-center w-[32%]">
          <div className="mt-[3.9em]">
            <CustomTypography className="text-[1.3em] mb-6">
              Menu
            </CustomTypography>
            <ul className="flex flex-col gap-3 ">
              {navItems?.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    {...(item.external == true && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-[0.9em] cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-[6.2em]">
            <CustomTypography className="text-[1.3em] mb-6">
              Social Media Links
            </CustomTypography>
            <ul className="flex flex-col gap-3 ">
              {socialItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="blank"
                    className="text-[0.9em] cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="three-child-foot w-[31%] mt-[3.4em]">
          <CustomTypography className="text-[1.3em] mb-6">
            Reach Out to Us
          </CustomTypography>
          <ul className="flex flex-col gap-3">
            {infoItems.map((item) => (
              <li key={item.label}>
                <i
                  className={`${item.icon} ${
                    item.rotate === true ? "rotate-[92deg]" : ""
                  } text-[1.3em] mr-4 text-[#993795]`}
                ></i>
                <Link
                  href={item.href}
                  target="blank"
                  className="text-[0.9em] cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <CustomImgArrow
          className="w-[5%] absolute top-[12px] right-0"
          imgClass="w-[70px]"
          src={imageUrl.right_arrow}
        />
      </section>
      <footer className="w-full h-[60px] bg-[#453567] text-white text-[1em] mt-14 flex justify-center items-center">
        Copyright © 2024 SquadCodersDev
      </footer>
    </>
  );
};

export default Footer;
