import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sallon Sicilian Proud Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className=" h-screen bg-slate-700/40 flex flex-col items-center justify-center">
        <div className="container mx-auto ">
            <div className="flex flex-col items-center justify-items-center">
              <motion.h2 initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className="text-4xl font-sans ">sa110n</motion.h2>

              <p className="mt-2">Sicilian Addicted to Coding</p>
            </div>
        </div>
        </main>
    </>
  );
}
