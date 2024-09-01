import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About Me", href: "/maintenance" },
  { name: "Projects", href: "/maintenance" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-[#000033] via-[#301934] to-[#0e3d31]">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 z-10 animate-fade-in pointer-events-none"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Eduarda Magno
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">

        I am an Informatics Engineer and Computer Scientist Student at{" "}
        <Link
          href="https://goo.gl/maps/4ZkNnFojigT2"
          target="_blank"
          className=" duration-500 hover:text-zinc-300"
        >
          Universidade do Porto
        </Link>.        
        </h2>
        <h2 className="text-sm text-zinc-500 ">
        You can download my resume {" "}
        <Link
          href="/Resume.pdf"
          download
          className=" underline duration-500 hover:text-zinc-300"
        >
        here
        </Link>
        .
        </h2>
      </div>
    </div>
  );
}