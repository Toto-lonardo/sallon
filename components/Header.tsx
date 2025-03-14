"use client"

import Link from "next/link";
import Logo from "./Logo";
import dynamic from "next/dynamic";

const ClientHeader = dynamic(()=> import('./Navbar'),
  {
    ssr: false // disable ssr for using navbar only on client renderer
  });
const Header = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 w-full bg-sfondo cursor-pointer flex flex-col items-center  md:justify-around  md:flex-row  md:items-center md:p-6 gap-4 md:gap-4">
        <Link href='/'>
        <Logo classNameContainer="text-5xl md:text-4xl uppercase py-4"  />
        </Link>
        <ClientHeader />
      </div>
    </>
  );
};

export default Header;
