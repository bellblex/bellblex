"use client";

import React from "react";
import { Navigation } from "../../components/nav";
import { useTheme } from "../../themeContext";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { projects } from "./BentoItemsData";
import Image from "next/image";

// Define DebugComponent
function DebugComponent() {
  if (process.env.NODE_ENV !== "development") {
    return null; // Do not render in production
  }
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      Development Debug Panel
    </div>
  );
}

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
              title={project.title}
              description={
                <>
                  <p>{project.description}</p>
                </>
              }
              header={
                project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={200}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                ) : null // Render nothing if no image
              }
            />
          ))}
        </BentoGrid>
      </div>
      {/* Include DebugComponent */}
      <DebugComponent />
    </div>
  );
}
