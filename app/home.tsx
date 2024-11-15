"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import profilo from "../public/sallon.jpg";
import profilo2 from "../public/sallon2.jpg";

export default function Home() {
  const [immagine, setImmagine] = useState(true);
  function handleClick() {
    setImmagine(() => !immagine);
  }
  return (
    <>
      <div className="basis-1/2" id="home">
        <Image
          src={immagine ? profilo : profilo2}
          alt={"Sallon alias Salvatore Lo Nardo"}
          className="mx-auto "
          priority
        />
      </div>
      <div className="mx-auto flex flex-auto flex-col items-center justify-center gap-1 p-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.6 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="text-font-sans text-5xl tracking-wider antialiased md:text-5xl"
          onClick={handleClick}
        >
          <span className="text-verde">Sal</span>
          <span className=" text-arancione">lon</span>
        </motion.h2>

        <p className="mt-1 text-lg antialiased ">
          <span className="mx-0.5 text-verde">Salvatore</span>
          <span className="mx-0.5 text-arancione">Lo</span>
          <span className="mx-0.5 text-arancione">Nardo</span>
        </p>
        <div className="mt-8 text-slate-300">
          <div className="flex h-6 w-56 items-center justify-center">
            <ReactTyped
              strings={[
                "Proud Linux lover",
                "Extremely Vim addicted",
                "Frontend Web Developer",
              ]}
              typeSpeed={40}
              backSpeed={30}
              cursorChar=""
              className="font-light"
            />
          </div>
          <div className="my-4 flex items-center justify-center gap-6 ">
            <a href="https://github.com/Toto-lonardo" target="_blank">
              <FaGithub className="size-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/salvatore-lo-nardo-813233b4/"
              target="_blank"
            >
              <FaLinkedin className="size-8" />
            </a>
            <a href="https://t.me/sallon87" target="_blank">
              <FaTelegram className="size-8" />
            </a>
          </div>
          <div className=" mt-4 text-center text-slate-300">
            <a
              href="/Lo-Nardo-Salvatore-Frontend-developer.pdf"
              target="_blank"
              className="flex flex-row items-center justify-center gap-1 text-slate-300"
            >
              <span>Curriculum Vitae</span>
              <FaFileDownload className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
