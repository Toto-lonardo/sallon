"use client";

import { ReactNode } from "react";

export default function Tiles({ children }: { children: ReactNode }) {
  return (
    <div className=" flex flex-col md:flex-row  rounded border-4 border-celeste bg-sky-800 shadow-lg shadow-celeste/40 md:mx-auto container  ">
      {children}
    </div>
  );
}
