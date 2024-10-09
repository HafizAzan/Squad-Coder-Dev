"use client";
import { ReactQueryProvider } from "./ReactQueryProvider";
import LayoutComponents from "container/layout/layout";
import "./globals.css";
import { metadata } from "./MetaData";
import React, { useState, useEffect } from "react";
import CustomLoader from "components/CustomLoader/CustomLoader";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.addEventListener("load", handleLoad);

    setLoading(true);
    const timeoutAfterRouteChange = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
      clearTimeout(timeoutAfterRouteChange);
    };
  }, [pathname]);

  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link
            rel="icon"
            href="../assets/purplearrow.png"
            type="image/x-icon"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body>
          {loading ? (
            <CustomLoader />
          ) : (
            <LayoutComponents>{children}</LayoutComponents>
          )}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
