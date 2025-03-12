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
            <CardItem translateZ={25}>
              <p className="text-xl text-primary leading-snug text-left">
                Hi! I'm Eduarda, an Informatics Engineer and Computer Science student at Universidade do Porto.
              </p>
            </CardItem>
            <CardItem translateZ={20}>
            <div className="text-lg text-secondary leading-relaxed break-words text-left space-y-6">
              <p>
                With a strong foundation in Computer Informatics Engineering, I have developed a versatile skill set that enables me to navigate both technical and creative domains. My academic journey, coupled with hands-on experience, has shaped my problem-solving abilities, adaptability, and leadership skills, allowing me to thrive in both collaborative and independent environments.
              </p>

              <p>
                Beyond academics, I have actively contributed to student organizations such as AEFEUP, NIAFEUP, and ENEI, where I have taken on key roles in event organization, social impact initiatives, and digital content creation. These experiences have strengthened my ability to coordinate projects, foster community engagement, and communicate effectively in diverse settings.
              </p>

              <p>
                Driven by my passion for technology and innovation, I continuously explore emerging trends such as low-level programming, computer architecture, and database management, as well as advancements in big data analytics, blockchain, IoT, and machine learning. My interest in systems optimization and data-driven solutions fuels my motivation to develop efficient, scalable, and high-performance applications.
              </p>

              <p>
                I am committed to continuous learning and professional growth, always seeking new challenges that allow me to expand my expertise and make a positive impact in both my field and society.
              </p>
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
