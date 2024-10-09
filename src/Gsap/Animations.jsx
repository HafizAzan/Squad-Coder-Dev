"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimationWithGsap = () => {
  const boxRef = useRef(null);
  const fadeIn = useRef(null);
  const fromTop = useRef(null);
  const leftSlide = useRef(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      gsap.to(boxRef.current, {
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center",
      });
      gsap.to(fadeIn.current, {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        fromTop.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          duration: 2,
          y: 0,
          opacity: 1,
          ease: "power2.inOut",
        }
      );
      gsap.fromTo(
        leftSlide.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          duration: 2,
          delay: 1,
          x: 0,
          opacity: 1,
          ease: "slow(0.5, 0.5, false)",
        }
      );
    }

    const rings = document.querySelectorAll(".ring");

    // GSAP Timeline for continuous ripple effect
    const rippleTimeline = gsap.timeline({
      repeat: -1,
    });

    // Create the ripple effect for each ring
    rings.forEach((ring, index) => {
      rippleTimeline.fromTo(
        ring,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 2, // How much the ring expands
          opacity: 0, // Fades out as it expands
          duration: 4,
          repeat: -1,
          ease: "slow(0.8 ,0.8 ,false)",
          delay: index * 0.9,
          border: "14px solid purple",
          boxShadow: "0px 0px 19px 14px purple",
        },
        0
      );
    });
    const NavLi = document.querySelectorAll(".li");
    NavLi.forEach((single, index) => {
      gsap.set(single, { x: -100, opacity: 0 });

      // Animation
      gsap.to(single, {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: index * 0.2,
        ease: "back.out(3)",
      });
    });

    gsap.set(".nav-image", { y: -200, opacity: 0 });

    gsap.to(".nav-image", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  return {
    boxRef,
    fromTop,
    fadeIn,
    leftSlide,
  };
};

export default AnimationWithGsap;
