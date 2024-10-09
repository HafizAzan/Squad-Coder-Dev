"use client";
import CustomScrollTop from "components/CustomScrollTop/CustomScrollTop";
import ContactComponent from "components/LayoutComponents/ContactComponent";
import Footer from "components/LayoutComponents/Footer";
import NavBar from "components/LayoutComponents/Nav";
import React from "react";

const LayoutComponents = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <ContactComponent />
      <Footer />
      <CustomScrollTop />
    </>
  );
};

export default LayoutComponents;
