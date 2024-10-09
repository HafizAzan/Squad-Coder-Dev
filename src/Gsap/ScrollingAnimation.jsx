"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ScrollingAnimationWithGsap = () => {
  const imageRef = useRef(null);
  const academicAboutRef = useRef(null);
  const academicAboutHr = useRef(null);
  const academicAboutParagraph = useRef(null);
  const fadeText = useRef(null);
  const leftArrowImg = useRef(null);
  const rightDiv = useRef(null);
  const leftSlideScroll = useRef(null);
  const actionTop = useRef(null);
  const academicTop = useRef(null);
  const leftDiv = useRef(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.fromTo(
        imageRef.current,
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "slow(0.5, 0.5, false)",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play play none none",
          },
        }
      );
      gsap.fromTo(
        academicAboutRef.current,
        {
          y: -120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "slow(0.3, 0.3, false)",
          scrollTrigger: {
            trigger: academicAboutRef.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      gsap.fromTo(
        academicAboutHr.current,
        {
          y: -80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.3,
          ease: "slow(0.3 0.3, false)",
          scrollTrigger: {
            trigger: academicAboutHr.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      gsap.fromTo(
        academicAboutParagraph.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.6,
          ease: "slow(0.3, 0.3, false)",
          scrollTrigger: {
            trigger: academicAboutParagraph.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      gsap.fromTo(
        fadeText.current,
        {
          opacity: 0,
          duration: 0,
        },
        {
          opacity: 1,
          duration: 2,
          delay: 0.4,
          ease: "slow(0.3, 0.3, false)",
          scrollTrigger: {
            trigger: fadeText.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play play none none",
            once: true,
          },
        }
      );
      gsap.fromTo(
        academicTop.current,
        {
          y: -120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "slow(0.3, 0.3, false)",
          scrollTrigger: {
            trigger: academicTop.current,
            start: "top 90%",
            end: "top 10%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      gsap.fromTo(
        leftArrowImg.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "slow(0.5, 0.5, false)",
          scrollTrigger: {
            trigger: leftArrowImg.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play play none none",
          },
        }
      );
      gsap.fromTo(
        leftSlideScroll.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.8,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: leftSlideScroll.current,
            start: "left 85%",
            end: "left 15%",
            toggleActions: "play none play none",
            once: true,
          },
        }
      );
      gsap.fromTo(
        actionTop.current,
        {
          y: -120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: actionTop.current,
            start: "top 80%",
            end: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      gsap.fromTo(
        rightDiv.current,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightDiv.current,
            start: "top 80%",
            end: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
      gsap.fromTo(
        leftDiv.current,
        {
          x: -80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftDiv.current,
            start: "left 80%",
            end: "left 80%",
            toggleActions: "play play none none",
            once: true,
          },
        }
      );
    }

    const logos = document.querySelectorAll(".logo");
    logos.forEach((logo, index) => {
      gsap.fromTo(
        logo,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: logo,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play play none none",
          },
        }
      );
    });

    const inputs = document.querySelectorAll(".four-input");
    inputs.forEach((input, index) => {
      gsap.fromTo(
        input,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: input,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    const TwoTeachers = document.querySelectorAll(".bg-pol-img");
    TwoTeachers.forEach((single, index) =>
      gsap.fromTo(
        single.current,
        {
          opacity: 0,
          duration: 0,
        },
        {
          opacity: 1,
          duration: 2,
          delay: index * 0.1,
          ease: "slow(0.2, 0.1, false)",
          scrollTrigger: {
            trigger: single.current,
            start: "top 70%",
            end: "top 30%",
            toggleActions: "play play none none",
            once: true,
          },
        }
      )
    );

    const TextArea = document.querySelector(".area-main");
    gsap.fromTo(
      TextArea,
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: TextArea,
          start: "top 80%",
          end: "top 80%",
          toggleActions: "play play none none",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".contact-text",
      {
        y: -120,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "slow(0.3, 0.3, false)",
        scrollTrigger: {
          trigger: ".contact-text",
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      ".contact-hr",
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.3,
        ease: "slow(0.3 0.3, false)",
        scrollTrigger: {
          trigger: ".contact-hr",
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      ".contact-p",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.6,
        ease: "slow(0.3, 0.3, false)",
        scrollTrigger: {
          trigger: ".contact-p",
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      ".contact-btn",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-btn",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play play play none",
        },
      }
    );
  }, []);
  return {
    imageRef,
    academicAboutRef,
    academicAboutHr,
    academicAboutParagraph,
    fadeText,
    leftArrowImg,
    rightDiv,
    leftSlideScroll,
    actionTop,
    leftDiv,
  };
};

export default ScrollingAnimationWithGsap;
