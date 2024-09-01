"use client";
import React from "react";
import { Card } from "../components/card"; // Ensure the correct import path
import { Navigation } from "../components/nav";
import Timeline from "../components/timeline";


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
  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#000033] via-[#301934] to-[#0e3d31] flex flex-col items-center justify-center">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          About Me
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="p-8 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-zinc-400">
                I'm Eduarda Magno, an Informatics Engineer and Computer Scientist
                Student at{" "}
                <a
                  href="https://goo.gl/maps/4ZkNnFojigT2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Universidade do Porto
                </a>
                . My passion for technology drives me to continuously learn and
                innovate.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-8 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">Interests</h2>
              <p className="text-zinc-400">
                I have a keen interest in software development, artificial
                intelligence, and solving complex problems. I'm always excited to
                work on projects that challenge me and help me grow as a
                professional.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-8 text-center text-white">
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
          <Card>
            <div className="p-8 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <p className="text-zinc-400">
                I have worked on several projects during my studies and
                internships, including web applications, machine learning models,
                and data analysis tools. Each project has contributed to my
                understanding and growth as a developer.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-8 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
              <p className="text-zinc-400">
                Outside of technology, I enjoy reading, hiking, and exploring new
                places. I believe that a balance between work and personal
                interests is key to a fulfilling life.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-8 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-zinc-400">
                If you'd like to connect, feel free to{" "}
                <a
                  href="mailto:eduardagouveiamagno@gmail.com"
                  className="text-blue-500 underline"
                >
                  send me an email
                </a>
                . I'm always open to discussing new projects, ideas, or
                collaborations.
              </p>
            </div>
          </Card>
        </div>
        <Timeline></Timeline>

      </div>
    </div>
  );
}
