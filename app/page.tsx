import Tile from "./tile";

export default function Home() {
  return (
    <>
      <main className=" min-h-dvh bg-sfondo flex flex-col items-center justify-center">
        <div className="container mx-auto ">
          <div className=" bg-sky-800 md:flex-row flex-col flex max-w-md md:max-w-3xl shadow-celeste/40 shadow-lg rounded border-celeste border-4 md:mx-auto m-6  ">
            <Tile />
          </div>
        </div>
      </main>
    </>
  );
}
