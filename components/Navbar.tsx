"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

const navbarstate = atom(false)
const mobilestate = atom( window.innerWidth < 769);

export default function Navbar() {
  const [isNavbarOpen, setIsNavOpen] = useAtom(navbarstate);
  const [isMobile, setIsMobile] = useAtom(mobilestate);
  
  const pathname = usePathname();

  const links = [
{
link: "Home",
route: "/"
},
{
link: "About me",
route: "/about"
},
{
link: "Portfolio",
route: "/portfolio"
},
{
link: "Get in touch",
route: "/getintouch"
}
  ]



useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {

      setIsMobile(()=> false);
      } else setIsMobile(()=> true) 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return (
    <nav aria-label="Main Navigation" className="">
      <div
        className={
          isMobile
            ? isNavbarOpen
            ? "flex flex-col min-h-dvh md:min-h-min items-center md:justify-around z-50 md:z-0 justify-center"
            : "hidden"
            : "hidden md:flex flex-col min-h-dvh md:min-h-min items-md:justify-around z-10 md:z-0 justify-center"
        }
      >
        <ul className=" font-bold uppercase text-3xl md:text-xl flex flex-col items-start justify-start md:gap-12  gap-12 bg-sfondo md:flex-row ">
          {links.map((link) => (
          <li className="transition-all hover:text-arancione  " key={link.link}>
            <Link href={link.route} onClick={() => setIsNavOpen((prev) => !prev)} className={` ${pathname === link.route ? "text-arancione" : "text-verde"}`} >
              {link.link}
            </Link>
          </li>
          ))}
        </ul>
      </div>
      {isNavbarOpen && (
        <div
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="absolute top-[2px] right-0 px-8 py-4 md:hidden"
        >
          <svg
            className="h-10 w-10 text-gray-600"
            viewBox="0 0 28 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="24" y1="8" x2="8" y2="24" />
            <line x1="8" y1="8" x2="24" y2="24" />
          </svg>
        </div>
      )}
      {!isNavbarOpen && (
        <div
          className="absolute top-[2px] right-0 px-8 py-7 space-y-2 md:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 bg-gray-600"></span>
          <span className="block h-0.5 w-8 bg-gray-600"></span>
          <span className="block h-0.5 w-8 bg-gray-600"></span>
        </div>
      )}
    </nav>
  );
}
