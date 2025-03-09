"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { CardContainer, CardBody, CardItem } from "../components/ui/3dCard";
import Timeline from "../components/ui/timeline";

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Navigation />

      {/* Full-screen About Me Section */}
      <div className="h-screen flex items-center justify-center w-full px-6">
        <CardContainer className="relative w-full max-w-3xl">
          <CardBody className="flex flex-col items-center text-center p-8 space-y-6 w-full max-w-2xl">
            <CardItem translateZ={30}>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                About Me
              </h1>
            </CardItem>
            <CardItem translateZ={25}>
              <p className="text-xl text-primary leading-snug">
                Hi! I'm Eduarda, an Informatics Engineer and Computer Science student at Universidade do Porto.
              </p>
            </CardItem>
            <CardItem translateZ={20}>
              <p className="text-lg text-secondary leading-relaxed">
                I am a second-year computer informatics engineering student with strong social skills and leadership capabilities. My commitment to academic excellence reflects my passion for technology. I am dedicated to using my skills and knowledge to make a positive impact on both my chosen field and society.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      {/* Experience Section that appears after scrolling */}
      <div className="w-full max-w-5xl px-6 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-12 text-center">
          Experience
        </h1>
        <Timeline />
      </div>
    </div>
  );
}
