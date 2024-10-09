import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import { imageUrl } from "imageConstant/ImagesUrl";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextwithImage";
import React, { memo } from "react";
import { CustomTypography } from "components/CustomText/CustomText";
import Link from "next/link";
import CustomButton from "components/CustomButton/CustomButton";
import CustomArrayImage from "components/CustomArrayImage/CustomArrayImage";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";

const Skill = () => {
  const {
    rightDiv,
    actionTop,
    academicAboutHr,
    academicAboutParagraph,
    leftArrowImg,
    fadeText,
  } = ScrollingAnimationWithGsap();
  return (
    <>
      <section className="main-academic w-full h-auto mb-8 mt-12">
        <div className="flex items-center">
          <CustomImgArrow
            className="w-[5%] !self-start side-arrow"
            imgClass="w-[40px]"
            src={imageUrl.side_arrow}
            ref={leftArrowImg}
          />
          <main className="container !w-[90%]">
            <div className="w-[97%] flex items-end mb-8">
              <div className="w-[85%]">
                <CustomTextWithImage
                  className="!text-[#423566]"
                  image={imageUrl.purple_arrow}
                  ref={actionTop}
                >
                  Academics
                </CustomTextWithImage>
                <hr
                  ref={academicAboutHr}
                  className="w-[230px] h-[2px] bg-gray-400 text-gray-400 my-3"
                />
                <CustomTypography
                  ref={academicAboutParagraph}
                  className="text-[#993795] text-[1.8em]"
                >
                  Courses We Offer
                </CustomTypography>
              </div>
              <Link href="/" ref={rightDiv}>
                <CustomButton className="border-none !shadow-none  text-[#423566] text-[1em] font-inherit font-normal !bg-transparent">
                  View All Courses
                </CustomButton>
              </Link>
            </div>
            <CustomArrayImage
              className={
                "box-shadows transition-all duration-[0.3s] ease-in cursor-pointer hover:transition-all hover:duration-[0.3s] hover:ease-in"
              }
              style={{
                width: "97%",
              }}
            />
            <CustomButton
              ref={fadeText}
              className="transition-all duration-[0.3s] ease-in-out rounded-[0px] w-[155px] 
            h-[43px] text-[1em] text-white bg-[#993795]  border-none font-inherit mt-12 font-normal
             sec-shadow onHover"
            >
              Join Us Today
            </CustomButton>
          </main>
        </div>
      </section>
    </>
  );
};

export default memo(Skill);
