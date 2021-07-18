import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <title>ខេត្តកំពង់ស្ពឺ</title>
        <link rel="icon" href="logo.ico" />
      </head>
      <nav className="h-16">
        <Navbar />
      </nav>
    </>
  );
};

export default Header;
