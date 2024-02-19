"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import profilo from "../public/sallon.jpg";
import profilo2 from "../public/sallon2.jpg";

export default function Immagine() {
  const [immagine, setImmagine] = useState(true);
  function handleClick(event) {
    setImmagine(!immagine);
  }
  return (
    <>
      <div className=" basis-1/2 ">
        <Image
          src={immagine ? profilo : profilo2}
          alt={"Sallon alias Salvatore Lo Nardo"}
          className="mx-auto "
        />
      </div>
      <div className="flex flex-col items-center justify-center  mx-auto flex-auto gap-2  basis-1/2 p-5">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 1, delay: 4 },
          }}
          whileTap={{ scale: 0.6 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="text-4xl md:text-5xl text-verde antialiased text-font-sans tracking-tighter"
          onClick={handleClick}
        >
          Sal<span className=" text-giallo ">lon</span>
        </motion.h2>

        <p className="mt-1 text-verde text-lg tracking-tighter antialiased ">
          Salvatore <span className="text-giallo">Lo Nardo</span>
        </p>
        <div className="tracking-tighter font-semibold text-slate-300">
          <div className="flex h-6 w-56 justify-center items-center">
            <ReactTyped
              strings={[
                "Proud Linux lover",
                "Extremely Vim addicted",
                "Frontend Web Developer",
              ]}
              typeSpeed={40}
              backSpeed={30}
              cursorChar=""
              className=""
            />
          </div>
          <div className="my-4 flex gap-6 justify-center items-center ">
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
        </div>
      </div>
    </>
  );
}
