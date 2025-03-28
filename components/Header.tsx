"use client";

import Link from "next/link";
import Logo from "./Logo";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 flex w-full cursor-pointer flex-col items-center gap-4  overscroll-none  bg-sfondo  md:flex-row md:items-center md:justify-around md:gap-4 md:p-6">
        <Link href="/">
          <Logo classNameContainer="py-4 text-5xl uppercase md:text-4xl" />
        </Link>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
