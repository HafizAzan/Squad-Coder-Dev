"use client";
import React from "react";
import CustomButton from "components/CustomButton/CustomButton";
import { CustomTypography } from "components/CustomText/CustomText";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import Link from "next/link";
import AnimationWithGsap from "Gsap/Animations";

const Future = ({
  className,
  src,
  show,
  con,
  height = "h-[57%]",
  width,
  children,
  ...props
}) => {
  const { fadeIn, fromTop, leftSlide } = AnimationWithGsap();

  return (
    <>
      <section className={`bg-img h-[40.2rem] w-full ${className}`} {...props}>
        <div className={`container flex justify-between items-center ${con}`}>
          <div
            className="future-text w-[40%] text-[18px] ml-4 mb-[60px]"
            ref={fromTop}
          >
            {children}

            {show === false ? (
              <>
                <CustomTypography className="text-[2.2em] text-white leading-[50px] tracking-[1px] mb-5">
                  Future Challenges in Software Engineering
                </CustomTypography>
                <CustomTypography className="text-[0.8em] text-white">
                  Push your web development skills to the next level with
                  experts
                </CustomTypography>
                    <div ref={leftSlide}>
                  <CustomButton
                    className="transition-all duration-[0.3s] ease-in-out rounded-[0px] w-[160px] border-none 
            h-[45px] text-[0.9em] text-[#423566] font-inherit mt-6 font-normal
             box-shadow hover"
                  >
                    Browse Courses
                  </CustomButton>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <Image
            src={src || imageUrl.comp}
            className={`future-img w-[550px] opacity-0`}
            ref={fadeIn}
          />
        </div>
      </section>
    </>
  );
};

export default Future;
