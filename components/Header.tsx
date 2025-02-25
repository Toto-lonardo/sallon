import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 w-full bg-sfondo cursor-pointer flex flex-col items-center  md:justify-around  md:flex-row  md:items-center md:p-6 gap-4 md:gap-4">
        <Logo classNameContainer="text-5xl md:text-4xl uppercase py-4" />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
