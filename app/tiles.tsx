"use client";

import { ReactNode } from "react";

export default function Tiles({ children }: { children: ReactNode }) {
  return (
    <div className=" m-6 mt-40 flex flex-col md:flex-row max-w-md rounded border-4 border-celeste bg-sky-800 shadow-lg shadow-celeste/40 md:mx-auto md:max-w-3xl xl:max-w-5xl ">
      {children}
    </div>
  );
}
