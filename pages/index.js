import Head from "next/head";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../components/AnimatedTextCharacter"
import profilo from "../public/sallon.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sallon Sicilian Proud Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className=" h-screen bg-sfondo flex flex-col items-center justify-center">
        <div className="container mx-auto ">
          <Image src={profilo} width={"auto"} height={"auto"} alt={"Sallon alias Salvatore Lo Nardo"} className="rounded-full max-w-xs mx-auto border-celeste border-2 shadow-black/50 shadow-lg"  />
            <div className="flex flex-col items-center justify-items-center mt-4">
              <motion.h2 initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1, delay:4 }, }}
 whileTap={{ scale: 0.6 }}
whileInView={{ opacity: 1}}
    transition={{ type: "spring", stiffness: 100, damping: 12}} className="text-5xl text-verde antialiased text-font-sans tracking-tighter">S.<span className="text-celeste ">all</span><span className=" text-giallo text-4xl inline-block  align-[0.5rem]">(<span className="text-verde text-5xl align-[-0.5rem] font-normal ">On</span>)</span></motion.h2>

              <p className="mt-2 text-verde tracking-tighter antialiased ">Sicilian <span className="text-celeste">Addicted<span className="text-giallo"> to </span></span><span className="text-verde">Coding</span></p>
            </div>
        </div>
          {/* <AnimatedTextCharacter text="hello world" /> */}
        </main>
    </>
  );
}
