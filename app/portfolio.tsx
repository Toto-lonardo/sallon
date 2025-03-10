"use client";
import Image from "next/image";
import marvelsearch from "../public/marvelsearch.png";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <>
      <div className="" id="portfolio">
        <div className="">
          <Image
            src={marvelsearch}
            alt="Project Marvelsearch"
            className="mx-auto"
          />
        </div>
        <div className="mx-auto flex flex-auto flex-col items-center justify-center gap-1 p-6">
          <h2
            className="text-5xl antialiased md:text-5xl"
          >
            <span className="uppercase text-arancione">Marvelpedia</span>
          </h2>
          <p className=" mt-4 text-white">
            Marvelpedia is an open-source project dedicated to one of my
            passions, the Marvel universe. This web app was created with the
            intention of experimenting and strengthening some skills related to
            frontend web development. Using the{" "}
            <span className="font-bold">Marvel Comics API,</span> I developed a
            <span className="font-bold"> React </span>application.The project is
            still under development because I would like to implement more
            interesting features. React Bootstrap as a framework for component
            and styles react, typescript, redux, rtk query, vite, react
            bootstrap
          </p>
          <ul className="*:text-arancione list-inside list-disc font-bold text-white">
            Technologies:
            <li>Vite for the project setup</li>
            <li>
              RTK Query to manage API calls Redux to handle the storage of some
              data and limit API calls
            </li>
            <li>React-Bootstrap for component</li>
          </ul>
          <div className="mt-8 text-slate-300">
            <div className="flex h-6 w-56 items-center justify-center"></div>
            <div className="my-4 flex items-center justify-center gap-6 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
