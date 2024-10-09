"use client";
import dayjs from "dayjs";

const FormatIncome = (income) => {
  if (income >= 1000) return `${(income / 1000).toFixed(0)}K`;
  else return income;
};

const ConvertDate = (date) => {
  if (!date) return null;
  dayjs(date).format("MMMM D Y YY");
};

const ConvertTime = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const Time = (timestamp) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const am_pm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes}:${seconds} ${am_pm}`;
};

export const HelperFunction = {
  FormatIncome,
  ConvertTime,
  ConvertDate,
  Time,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  {
    label: "Demo Classes",
    href: "https://www.youtube.com/watch?v=JNixBunE76U&list=PLhruWMYekkKoKL3BA-_RJRUNz4RTNsAac&ab_channel=MuzammilRafay",
    external: true,
  },
];

export const socialItems = [
  { label: "Facebook", href: "https://www.facebook.com/SquadCodersDev" },
  { label: "Instagram", href: "https://www.instagram.com/squadcodersdev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/squadcodersdev" },
  { label: "Twitter", href: "https://twitter.com/squadcodersdev" },
  {
    label: "Join in Our Community Group",
    href: "https://chat.whatsapp.com/F6uqHG2vEqE5jNPSouLCHx",
  },
];

export const infoItems = [
  {
    label: "03402322260",
    href: "tel:+923402322260",
    icon: "fas fa-phone-alt",
    rotate: true,
  },
  {
    label: "info@squadcodersdev.com",
    href: "mailto:info@squadcodersdev.com",
    icon: "fas fa-envelope",
  },
  {
    label:
      "  House No R-46, Sector 5A/4 Near Fresh Tasty Biryani on Madeeha Road North Karachi, Pakistan",
    href: "https://www.google.com/maps/place/House+No+R,+Squad+Coders+Dev,+46+5A%2F4,+Sector+5A%2F4+North+Karachi,+Karachi,+Karachi+City,+Sindh+75850/data=!4m2!3m1!1s0x3eb341feec05d03d:0x6bf112bd05ddca2b?utm_source=mstt_1&entry=gps&lucs=47068615,,47075915&g_ep=CAESCjExLjEwMS4xMDIYACDXggMqEjQ3MDY4NjE1LCw0NzA3NTkxNUICUEs%3D",
    icon: "fas fa-map-marker-alt",
  },
];

export const inputArray = [
  { name: "fullname", placeholder: "Fullname" },
  { name: "email", placeholder: "Email" },
  { name: "phone", placeholder: "Phone Number" },
  { name: "education", placeholder: "Education" },
];
