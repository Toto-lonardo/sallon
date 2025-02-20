"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav aria-label="Main Navigation" className="text-verde  m-2">
      <div
        className={
          !isMobile
            ? "flex flex-col min-h-lvh md:min-h-min items-center justify-around z-30 md:z-0"
            : isNavOpen
            ? "flex flex-col min-h-lvh md:min-h-min items-center justify-around z-30 md:z-0"
            : "hidden"
        }
      >
        <ul className=" font-bold uppercase  text-xl flex flex-col justify-center md:gap-4 gap-8 bg-sfondo md:flex-row  ">
          <li className="transition-all hover:scale-110 hover:text-arancione ">
            <Link href="/">Home</Link>
          </li>
          <li className="transition-all hover:scale-110 hover:text-arancione ">
            <Link href="#aboutme" onClick={() => setIsNavOpen((prev) => !prev)}>
              About me
            </Link>
          </li>
          <li className="transition-all hover:scale-110 hover:text-arancione">
            <Link
              href="#portfolio"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              Portfolio
            </Link>
          </li>
          <li className="transition-all hover:scale-110 hover:text-arancione">
            <Link
              href="#getintouch"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
      {isNavOpen && (
        <div
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="absolute top-1 right-0 px-8 py-8 md:hidden"
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      )}
      {!isNavOpen && (
        <div
          className="absolute top-1 right-0 px-8 py-8 space-y-2 md:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
      )}
    </nav>
  );
}
