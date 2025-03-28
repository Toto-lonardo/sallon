"use client";
import { ReactNode } from "react";
import { navbarstate } from "./Navbar";
import { useAtom } from "jotai";
const Container = ({ children }) => {
  const [isNavbarOpen, _] = useAtom(navbarstate);
  return (
    <body
      className={
        isNavbarOpen ? "bg-sfondo overflow-hidden" : "bg-sfondo overflow-auto"
      }
    >
      {children}
    </body>
  );
};

export default Container;
