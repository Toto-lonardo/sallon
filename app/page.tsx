import Tile from "./tile";

export default function Home() {
  return (
    <>
      <main className=" h-dvh bg-sfondo flex flex-col items-center justify-center">
        <div className="container mx-auto max-h[80vh] ">
          <div className=" bg-sky-800 md:flex-row flex-col flex max-w-3xl shadow-celeste/40 shadow-lg rounded border-celeste border-4 md:mx-auto m-6  ">
            <Tile />
          </div>
        </div>
      </main>
    </>
  );
}
