"use client";
import CustomDrawer from "components/CustomDrawer/CustomDrawer";
import CustomLoader from "components/CustomLoader/CustomLoader";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { navItems } from "utils/helper.function";

const NavBar = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const matchingNavItem = navItems.find((item) => item.href === currentPath);
    if (matchingNavItem) {
      setActiveLink(matchingNavItem.label);
    }
  }, [currentPath]);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleNavigation = (href) => {
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <>
      <nav
        id="nav"
        className={`fixed top-0 flex justify-between w-full h-[5rem] transition-all duration-200 ease-in-out items-center pl-5 z-[1000] ${
          scrolled
            ? "scroll-header"
            : "bg-transparent transition-all duration-200 ease-in-out"
        } `}
      >
        <Link href="/" className="nav-image">
          <Image
            src={imageUrl.logo}
            alt="Logo"
            className="scale-[1] transition-all duration-[0.5s] ease-in-out hover:scale-[1.1] hover:transition-all hover:duration-[0.5s] hover:ease-in-out"
          />
        </Link>
        <ul className="flex gap-10 text-[17px] pr-12">
          {navItems.map((item) => (
            <li key={item.label} className="li">
              <Link
                href={item.href}
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                onClick={() => handleNavigation(item.href)}
                className={`relative text-white text-[1em] pb-2 ${
                  activeLink === item.label ? "border-b-2 border-white" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <i
          className="fa-solid fa-bars menu-icon text-[22px] rounded-[5px] text-white px-3 py-2 mr-6 border-[2px] border-white text-center"
          onClick={() => setOpen(true)}
        ></i>
        <CustomDrawer open={open} setOpen={setOpen} />
      </nav>
    </>
  );
};

export default NavBar;
