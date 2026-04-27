"use client";

import { LinkPreview } from "@/app/components/ui/link-preview";
import React, { useEffect, useState } from "react";
import { useTheme } from "./themeContext";
import Particles from "./components/ui/particles";
import FluidCursor from "./components/ui/fluidCursor";
import { Navigation } from "./components/nav";

const roles = ["Engineer", "Designer", "Student"];

export default function Home() {
  const { theme } = useTheme();
  const [showFluidCursor, setShowFluidCursor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFluidCursor(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative flex flex-col w-screen h-screen overflow-hidden ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      {theme === "light" && showFluidCursor && <FluidCursor />}
      {theme === "dark" && <Particles className="absolute inset-0" quantity={100} />}

      {/* Same nav component as all inner pages, no back button */}
      <Navigation showBack={false} />

      {/* Hero — centered in the full viewport */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5 z-10">
        <h1
          className={`z-10 text-4xl text-transparent duration-1000 bg-clip-text cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap ${
            theme === "dark"
              ? "bg-gradient-to-r from-[#A0AEC0] via-[#63B3ED] to-[#FFD700]"
              : "bg-gradient-to-r from-[#6C757D] via-[#87CEEB] to-[#D97706]"
          }`}
        >
          Eduarda Magno
        </h1>

        <div className="animate-fade-in flex items-center gap-3 tracking-widest uppercase text-sm sm:text-base">
          {roles.map((role, i) => (
            <React.Fragment key={role}>
              <span className={theme === "dark" ? "text-zinc-400" : "text-zinc-600"}>
                {role}
              </span>
              {i < roles.length - 1 && (
                <span className={theme === "dark" ? "text-[#FFD700]" : "text-amber-500"}>·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom — university link */}
      <div className="flex justify-center pb-8 sm:pb-10 animate-fade-in z-10">
        <LinkPreview
          url="https://www.up.pt/feup/en/"
          className={`text-sm transition-colors duration-300 ${
            theme === "dark"
              ? "text-zinc-500 hover:text-zinc-300"
              : "text-zinc-500 hover:text-zinc-700"
          }`}
        >
          Faculdade de Engenharia da Universidade do Porto
        </LinkPreview>
      </div>
    </div>
  );
}
