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
        <h1 className="page-title">About Me</h1>

        <p className="body-text max-w-2xl">
          I'm Eduarda, a CS student at FEUP with a foundation spanning software
          development, systems, data, and applied computing — with a strong
          complementary focus on UI/UX design. I currently intern at GLS Germany IT
          working on design systems and lead the Communications department at
          NIAEFEUP.
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>

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
