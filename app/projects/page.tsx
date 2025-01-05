"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { useTheme } from "../themeContext";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid"; // Use BentoGrid and BentoGridItem
import { projects } from "./BentoItemsData";
import Image from "next/image";


export default function Projects() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          Projects
        </h1>
        <BentoGrid className="gap-8">
          {projects.map((project, index) => (
            <BentoGridItem
              key={index}
              header={
                project.image && (
                  <div className="w-full h-32 rounded-t-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              }
              title={project.title}
              description={project.description}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
