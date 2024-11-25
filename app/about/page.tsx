"use client";

import React from "react";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { useTheme } from "../themeContext";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023",
    title: "Software Engineer Intern",
    company: "Tech Company XYZ",
    description:
      "Developed features for the main product and collaborated with the front-end team to improve user experience.",
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "Startup ABC",
    description:
      "Worked on full-stack development projects and contributed to the design and implementation of new features.",
  },
  {
    year: "2021",
    title: "Computer Science Student",
    company: "Universidade do Porto",
    description:
      "Focused on software engineering, algorithms, and web development.",
  },
];

const skills = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"];

export default function AboutMe() {
  const { theme } = useTheme();

  const cardAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
        }`}
    >
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          About Me
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div {...cardAnimation}>
            <Card>
              <div className="p-8 text-center text-primary">
                <h2 className="text-2xl font-semibold mb-4">Background</h2>
                <p className="text-secondary">
                  I'm Eduarda Magno, an Informatics Engineer and Computer
                  Scientist Student at{" "}
                  <a
                    href="https://goo.gl/maps/4ZkNnFojigT2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    Universidade do Porto
                  </a>
                  . My passion for technology drives me to continuously learn
                  and innovate.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div {...cardAnimation} transition={{ delay: 0.2 }}>
            <Card>
              <div className="p-8 text-center text-primary">
                <h2 className="text-2xl font-semibold mb-4">Interests</h2>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus dolor, et suscipit massa. Vivamus pharetra tortor nec ipsum efficitur posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus arcu eros, fermentum vitae tristique et, lacinia at diam. Proin consequat ex arcu, id vehicula erat lacinia ac. Nam posuere felis ante, eu ornare libero suscipit ac. Mauris aliquam arcu quis tincidunt volutpat.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div {...cardAnimation} transition={{ delay: 0.4 }}>
            <Card>
              <div className="p-8 text-center text-primary">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill, index) => (
                    <span key={index} className="badge badge-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div {...cardAnimation} transition={{ delay: 0.6 }}>
            <Card>
              <div className="p-8 text-center text-primary">
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus dolor, et suscipit massa. Vivamus pharetra tortor nec ipsum efficitur posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus arcu eros, fermentum vitae tristique et, lacinia at diam. Proin consequat ex arcu, id vehicula erat lacinia ac. Nam posuere felis ante, eu ornare libero suscipit ac. Mauris aliquam arcu quis tincidunt volutpat. 
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div {...cardAnimation} transition={{ delay: 0.8 }}>
            <Card>
              <div className="p-8 text-center text-primary">
                <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
                <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus dolor, et suscipit massa. Vivamus pharetra tortor nec ipsum efficitur posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus arcu eros, fermentum vitae tristique et, lacinia at diam. Proin consequat ex arcu, id vehicula erat lacinia ac. Nam posuere felis ante, eu ornare libero suscipit ac. Mauris aliquam arcu quis tincidunt volutpat. 
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div {...cardAnimation} transition={{ delay: 1 }}>
            <Card>
              <div className="p-8 text-center text-primary">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-secondary">
                  If you'd like to connect, feel free to{" "}
                  <a
                    href="mailto:eduardagouveiamagno@gmail.com"
                    className="text-accent underline"
                  >
                    send me an email
                  </a>
                  . I'm always open to discussing new projects, ideas, or
                  collaborations.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
