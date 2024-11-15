import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      aria-label="Main Navigation"
      className="fixed left-0 right-0 top-0 mx-auto h-14 w-full bg-sfondo p-4 text-verde"
    >
      <ul className="flex cursor-pointer flex-row justify-center gap-4 font-bold uppercase   md:gap-20 md:text-xl">
        <li className="transition-all hover:scale-110 hover:text-arancione ">
          <Link href="#aboutme">About me</Link>
        </li>
        <li className="transition-all hover:scale-110 hover:text-arancione">
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li className="transition-all hover:scale-110 hover:text-arancione">
          <Link href="#getintouch">Get in Touch</Link>
        </li>
      </ul>
    </nav>
  );
}
