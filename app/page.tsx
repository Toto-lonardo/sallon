import GetInTouch from "./getintouch";
import Home from "./home";
import Portfolio from "./portfolio";
import Tiles from "./tiles";

export default function Root() {
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-32">
        <Tiles>
          <Home />
        </Tiles>
        <h3 className="text-3xl font-semibold uppercase text-arancione">
          Portfolio
        </h3>
        <Tiles>
          <Portfolio />
        </Tiles>
        <h3 className="text-3xl font-semibold uppercase text-arancione">
          Contact me
        </h3>
        <Tiles>
          <GetInTouch />
        </Tiles>
      </main>
    </>
  );
}
