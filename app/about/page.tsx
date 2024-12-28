"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { useTheme } from "../themeContext";
import { CardContainer, CardBody, CardItem } from "../components/ui/3dCard";

export default function AboutMe() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      <Navigation />

      <div className="flex-grow flex items-center justify-center p-6 my-10 sm:p-12">
        <CardContainer
          className="relative w-[600px] h-[800px] flex items-center justify-center"
          containerClassName="w-[600px] h-[800px]"
        >
          <CardBody className="flex flex-col items-center text-center p-12 space-y-8">
            <CardItem translateZ={30}>
              <h1 className="text-5xl font-bold">About Me</h1>
            </CardItem>
            <CardItem translateZ={25}>
              <p className="text-2xl text-zinc-300">
                I'm a creative developer with a passion for interactive design.
              </p>
            </CardItem>
            <CardItem translateZ={20}>
              <p className="text-xl text-zinc-400">
                I enjoy building engaging user experiences and exploring the
                latest in web technologies.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
