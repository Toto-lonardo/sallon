"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isNavbarOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
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
    <nav aria-label="Main Navigation" className="text-verde">
      <div
        className={
          !isMobile
            ? "flex flex-col min-h-dvh md:min-h-min items-center md:justify-around z-50 md:z-0 justify-center"
            : isNavbarOpen
            ? "flex flex-col min-h-dvh md:min-h-min items-center md:justify-around z-50 md:z-0 justify-center"
            : "hidden"
        }
      >
        <ul className=" font-bold uppercase text-3xl md:text-xl flex flex-col justify-center md:gap-12  gap-12 bg-sfondo md:flex-row ">
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
      {isNavbarOpen && (
        <div
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="absolute top-1 right-0 px-8 py-4 md:hidden"
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
          className="absolute top-1 right-0 px-8 py-7 space-y-2 md:hidden"
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
