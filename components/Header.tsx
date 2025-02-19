import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 mx-auto w-full bg-sfondo  cursor-pointer flex flex-col items-center  md:flex-row justify-between md:items-start p-8 gap-4 ">
        <Logo classNameContainer="text-3xl uppercase" />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
