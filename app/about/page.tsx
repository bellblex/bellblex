"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { CardContainer, CardBody, CardItem } from "../components/ui/3dCard";

export default function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Navigation />

      <div className="flex-grow flex items-center justify-center p-6 my-10 sm:p-12">
        <CardContainer
          className="relative w-[500px] h-[700px] flex items-center justify-center"
          containerClassName="w-[500px] h-[700px]"
        >
          <CardBody className="flex flex-col items-center text-center p-8 space-y-6">
            <CardItem translateZ={30}>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                About Me
              </h1>
            </CardItem>
            <CardItem translateZ={25}>
              <p className="text-xl text-primary leading-snug">
                Hi! I'm Eduarda, an Informatics Engineer and Computer Science
                student at Universidade do Porto.
              </p>
            </CardItem>
            <CardItem translateZ={20}>
              <p className="text-lg text-secondary leading-relaxed">
                I am a second-year computer informatics engineering student with
                strong social skills and leadership capabilities. My commitment
                to academic excellence reflects my passion for technology. I am
                dedicated to using my skills and knowledge to make a positive
                impact on both my chosen field and society.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
