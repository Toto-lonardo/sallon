import Head from "next/head";
import { motion } from "framer-motion";
// import AnimatedTextCharacter from "../components/AnimatedTextCharacter"
import profilo from "../public/sallon.jpg"
import Image from "next/image";
import Card from "../components/card"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sallon Sicilian Proud Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-sfondo flex flex-col items-center justify-center">
        <div className="container mx-auto ">
          <div className=" bg-sky-800 md:flex-row flex-col flex max-w-3xl shadow-celeste/40 shadow-xl rounded border-celeste border-4 md:mx-auto mx-8 my-16 ">
            <div className=" basis-1/2">
              <Image src={profilo} width={"auto"} height={"auto"} alt={"Sallon alias Salvatore Lo Nardo"} className="mx-auto " />
            </div>
            <div className="flex flex-col items-center justify-center  mx-auto flex-auto  basis-1/2 p-10">
              <motion.h2 initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1, delay: 4 },
                }}
                whileTap={{ scale: 0.6 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 12 }} className="text-5xl text-verde antialiased text-font-sans tracking-tighter">Sal<span className=" text-giallo ">lon</span></motion.h2>

              <p className="mt-1 text-verde text-xl tracking-tighter antialiased ">Salvatore <span className="text-giallo">Lo Nardo</span></p>
              <div className="tracking-tighter font-semibold text-slate-300">
                <hr className=" border-giallo my-2"></hr>
                <h3>Front-end  Web Developer</h3>
              </div>
            </div>
          </div>
            <Card children={"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."} title={"About me"} />
            <Card children={"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."} title={"Portfolio"} />
            <Card children={"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."} title={"Contacts"} />
        </div>
        {/* <AnimatedTextCharacter text="hello world" /> */}
      </main>
    </>
  );
}
