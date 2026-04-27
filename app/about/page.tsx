"use client";

import React from "react";
import { Navigation } from "../components/nav";
import Timeline from "../components/ui/timeline";
import SectionDivider from "../components/ui/section-divider";

const tags = [
  "Informatics Engineering @ FEUP",
  "UI/UX & Front-End",
  "Design Systems",
  "Drawing · Gaming · Swimming",
];

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Navigation />

      <div className="page-wrapper">

        {/* Intro — photo + bio side by side */}
        <div className="w-full flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full h-64 sm:w-56 sm:h-72 md:w-52 md:h-80 rounded-2xl overflow-hidden flex-shrink-0 glass-card">
            <img
              src="/IMG_7011.jpg"
              alt="Eduarda Magno"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="page-title">About Me</h1>
            <p className="body-text max-w-2xl">
              I'm Eduarda, a CS student at FEUP with a foundation spanning software
              development, systems, data, and applied computing — with a strong
              complementary focus on UI/UX design. I currently intern at GLS Germany IT
              working on design systems and lead the Communications department at NIAEFEUP.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="tag-chip">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="w-full mt-10">
          <SectionDivider title="Experience" />
        </div>

        <div className="w-full">
          <Timeline />
        </div>

      </div>
    </div>
  );
}
