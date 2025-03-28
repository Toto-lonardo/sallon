"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect } from "react";
import { atom, useAtom } from "jotai";

const mobilestate = atom(false);
export const navbarstate = atom(false);

export default function Navbar() {
  const [isNavbarOpen, setIsNavOpen] = useAtom(navbarstate);
  const [isMobile, setIsMobile] = useAtom(mobilestate);

  const pathname = usePathname();

  const links = [
    {
      link: "Home",
      route: "/",
    },
    {
      link: "About me",
      route: "/about",
    },
    {
      link: "Portfolio",
      route: "/portfolio",
    },
    {
      link: "Get in touch",
      route: "/getintouch",
    },
  ];

  useEffect(() => {
    setIsMobile(window.innerWidth < 769);
    if (isMobile === true) {
      setIsNavOpen(false);
    }
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setIsMobile(() => false);
      } else setIsMobile(() => true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <nav aria-label="Main Navigation" className="">
      <div
        className={
          isMobile
            ? isNavbarOpen
              ? "min-h-dvh  flex flex-col items-center justify-center overflow-hidden  md:z-0 md:min-h-min md:justify-around"
              : "hidden"
            : "min-h-dvh items-md:justify-around z-10 hidden flex-col justify-center overscroll-auto md:z-0 md:flex md:min-h-min"
        }
      >
        <ul className=" flex flex-col items-start justify-start gap-12 bg-sfondo text-3xl font-bold uppercase  md:flex-row md:gap-12 md:text-xl ">
          {links.map((link) => (
            <li
              className="transition-all hover:text-arancione  "
              key={link.link}
            >
              <Link
                href={link.route}
                onClick={() => setIsNavOpen((prev) => !prev)}
                className={` ${
                  pathname === link.route ? "text-arancione" : "text-verde"
                }`}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isNavbarOpen && (
        <div
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="absolute right-0 top-[2px] px-8 py-4 md:hidden"
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
          className="absolute right-0 top-[2px] space-y-2 px-8 py-7 md:hidden"
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
