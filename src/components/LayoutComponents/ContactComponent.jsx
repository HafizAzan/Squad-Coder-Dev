"use client";
import CustomButton from "components/CustomButton/CustomButton";
import CustomInput from "components/CustomInput/CustomInput";
import { CustomTypography } from "components/CustomText/CustomText";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextWithImage";
import { imageUrl } from "imageConstant/ImagesUrl";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ScrollingAnimationWithGsap from "Gsap/ScrollingAnimation";
import { inputArray } from "utils/helper.function";
import Link from "next/link";

const ContactComponent = () => {
  const pathname = usePathname();
  const {
    actionTop,
    academicAboutHr,
    academicAboutParagraph,
    rightDiv,
    fadeText,
  } = ScrollingAnimationWithGsap();

  return (
    <section className="relative mt-16">
      <CustomImgArrow
        className="w-full flex absolute top-[-35px]"
        imgClass="w-[55px]"
        src={imageUrl.side_arrow}
      />
      <div className="h-contact h-[40rem]">
        {pathname == "/contact" && (
          <div className="absolute inset-0 z-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4101.606571938574!2d67.056444460116!3d25.002143712127438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341feec05d03d%3A0x6bf112bd05ddca2b!2sSquad%20Coders%20Dev!5e0!3m2!1sen!2s!4v1727683942268!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowfullscreen=""
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=""
            />
          </div>
        )}
        <div className="h-[100vh] container">
          <div
            className={`pt-[40px] pb-[60px] ${
              pathname == "/contact" ? "opacity-0" : "opacity-[1]"
            }`}
          >
            <CustomTextWithImage
              className={`contact-text !text-[#fff]`}
              image={imageUrl.small_arrow}
            >
              Contact Us
            </CustomTextWithImage>
            <hr className="contact-hr w-[284px] h-[2px] bg-gray-400 text-gray-400 my-3" />
            <CustomTypography className="contact-p text-[#fff] text-[1.8em]">
              Just Submit This Form
            </CustomTypography>
          </div>
          <form>
            <main className="flex gap-[40px] flex-wrap">
              <div className="input-main w-[42%]">
                {inputArray.map((item) => (
                  <div key={item.name} className="four-input mb-4">
                    <CustomInput
                      name={item.name}
                      className="w-full h-[45px] border-none rounded-none !font-inherit placeholder:text-[16px] placeholder:!text-[#b17878]"
                      placeholder={item.placeholder}
                    />
                  </div>
                ))}
              </div>
              <div className="area-main w-[42%]">
                <CustomTextArea
                  className="w-full !h-[228px] border-none rounded-none !font-inherit placeholder:text-[16px] placeholder:!text-[#b17878] placeholder:tracking-[0.2px]"
                  placeholder="Leave a comment here"
                />
              </div>
            </main>
            <div className="contact-btn">
              <CustomButton
                className="transition-all duration-[0.3s] ease-in-out rounded-[0px] w-[160px] 
              h-[45px] text-[1em] text-white bg-[#b067e9]  border-none font-inherit mt-10 font-normal
              sec-shadow contact "
              >
                Contact Now
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
