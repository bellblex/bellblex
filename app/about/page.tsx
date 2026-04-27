"use client";

import React from "react";
import { Navigation } from "../components/nav";
import Timeline from "../components/ui/timeline";
import SectionDivider from "../components/ui/section-divider";

const tags = [
  "Informatics Engineering @ FEUP",
  "UI/UX and Front-End",
  "Design Systems",
  "Drawing, gaming, swimming",
];

const current = [
  {
    label: "Currently",
    value: "UI/UX and front-end intern at GLS Germany IT",
  },
  {
    label: "Building",
    value: "Component documentation, portfolio systems, student community visuals",
  },
  {
    label: "Interested in",
    value: "Accessible UI, design systems, AI-assisted product workflows",
  },
];

const polaroids = [
  {
    src: "/IMG_7011.jpg",
    alt: "Eduarda Magno portrait",
    caption: "FEUP days",
    rotate: "-rotate-6",
    position: "object-center",
  },
  {
    src: "/IMG_7011.jpg",
    alt: "Eduarda Magno candid moment",
    caption: "Design work",
    rotate: "rotate-3",
    position: "object-[50%_38%]",
  },
  {
    src: "/IMG_7011.jpg",
    alt: "Eduarda Magno personal photo",
    caption: "After hours",
    rotate: "-rotate-2",
    position: "object-[50%_62%]",
  },
];

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Navigation />

      <main className="page-wrapper">
        <section className="w-full grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-center">
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                About
              </p>
              <h1 className="page-title">Design-minded engineer</h1>
            </div>
            <p className="body-text max-w-3xl">
              I am Eduarda, an Informatics Engineering student at FEUP with a
              foundation in software development, systems, data, and applied
              computing, paired with a strong focus on UI/UX. I like the space
              where engineering decisions, visual systems, and user experience
              start influencing each other.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="tag-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[24rem] w-full">
            <div className="absolute inset-0 rounded-full bg-[color-mix(in_srgb,var(--accent-color)_14%,transparent)] blur-3xl" />
            <div className="relative mx-auto h-[24rem] max-w-sm">
              {polaroids.map((photo, index) => (
                <figure
                  key={`${photo.caption}-${index}`}
                  className={`absolute w-44 rounded-sm bg-white p-2 pb-8 shadow-2xl transition-transform duration-300 hover:z-20 hover:scale-105 sm:w-52 ${photo.rotate} ${
                    index === 0
                      ? "left-0 top-8"
                      : index === 1
                        ? "right-0 top-0"
                        : "bottom-2 left-1/2 -translate-x-1/2"
                  }`}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={`h-full w-full object-cover ${photo.position}`}
                    />
                  </div>
                  <figcaption className="mt-3 text-center font-display text-lg text-slate-900">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="grid w-full gap-4 md:grid-cols-3">
          {current.map((item) => (
            <article key={item.label} className="glass-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                {item.label}
              </p>
              <p className="mt-3 text-lg font-semibold leading-snug text-primary">
                {item.value}
              </p>
            </article>
          ))}
        </section>

        <div className="w-full mt-4">
          <SectionDivider title="Experience" />
        </div>

        <div className="w-full">
          <Timeline />
        </div>
      </main>
    </div>
  );
}
