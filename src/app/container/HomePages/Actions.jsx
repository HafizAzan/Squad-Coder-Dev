"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import { imageUrl } from "imageConstant/ImagesUrl";
import { CaretRightOutlined } from "@ant-design/icons";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import AnimationWithGsap from "Gsap/Animations";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextWithImage";
import Image from "next/image";
import React, { useState } from "react";
import CustomModal from "components/CustomModal/CustomModal";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";

const Actions = ({
  title = "Html/Css Demo Classes",
  cal,
  width = "w-[310px]",
}) => {
  const { boxRef } = AnimationWithGsap();
  const { actionTop, academicAboutHr, academicAboutParagraph } =
    ScrollingAnimationWithGsap();
  const [isOpen, setOpen] = useState(false);
  const handleOk = () => setOpen(true);
  const handleCancel = () => setOpen(false);
  return (
    <>
      <section className="main-action w-full relative pt-12">
        <CustomImgArrow
          className="w-full flex justify-end absolute top-[-30px]"
          imgClass="w-[70px]"
          src={imageUrl.right_arrow}
        />
        <main className="action-bg h-[70vw] w-full">
          <div className="container flex flex-col">
            <div className="flex justify-between h-[170px] items-end">
              <div className="w-[60%]">
                <CustomTextWithImage
                  className="!text-[#fff]"
                  image={imageUrl.small_arrow}
                  ref={actionTop}
                >
                  In Action
                </CustomTextWithImage>
                <hr
                  className={`${width} h-[2px] bg-gray-400 text-gray-400 my-3`}
                  ref={academicAboutHr}
                />
                <CustomTypography
                  className={`text-[#fff] text-[1.8em] ${cal}`}
                  ref={academicAboutParagraph}
                >
                  {title}
                </CustomTypography>
              </div>
              <Image src={imageUrl.setting} id="setting" ref={boxRef} />
            </div>
            <div className="relative mt-[65px] self-center">
              <Image src={imageUrl.video_lap} className="w-[80vw] h-[43vw]" />
              <div className="play-btn absolute" onClick={handleOk}>
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <CaretRightOutlined className="relative z-10 flex justify-center items-center bg-gradient-to-b from-[#643e83] to-[#643578] via-[#643578] text-white w-[50px] h-[50px] text-[25px] rounded-[50%] cursor-pointer" />
              </div>
              <CustomModal
                isOpen={isOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/JNixBunE76U?list=PLhruWMYekkKoKL3BA-_RJRUNz4RTNsAac"
                  title="HTML &amp; CSS in Urdu/Hindi (Tutorial 01)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                />
              </CustomModal>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Actions;
