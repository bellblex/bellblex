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
      <div className="min-h-screen flex items-center justify-center w-full px-6 py-20">
        <CardContainer className="relative w-full max-w-3xl">
          <CardBody className="flex flex-col items-center text-center p-8 space-y-6 w-full max-w-2xl">
            <CardItem translateZ={30}>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                About Me
              </h1>
            </CardItem>

            <CardItem translateZ={20}>
              <div className="text-lg text-secondary leading-relaxed break-words text-left space-y-6">
                I'm Eduarda, a final-year CS student at FEUP with a broad foundation spanning software development, systems and infrastructure, data and applications, and applied computing, and a complementary focus on UI/UX design. I currently intern at GLS Germany IT working on design systems and lead the Communications and Image department at NIAEFEUP. When I'm not coding or designing, I'm probably drawing, gaming, or swimming.           
              </div>
            </CardItem>

          </CardBody>
        </CardContainer>
      </div>

        {/* Experience Section */}
        <div className="w-full max-w-5xl px-6 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-12 text-center">
            Experience
          </h1>
          <Timeline />
        </div>
      </div>
        );
      }
