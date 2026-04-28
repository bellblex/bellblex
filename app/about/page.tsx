"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { Navigation } from "../components/nav";
import Timeline from "../components/ui/timeline";
import SectionDivider from "../components/ui/section-divider";

const tags = [
  "Informatics Engineering @ FEUP",
  "Software, systems, data and web",
  "UI/UX and front-end intern",
  "Painting, gaming, swimming",
];

const current = [
  {
    label: "Currently",
    value: "UI/UX and front-end intern at GLS Germany IT",
  },
  {
    label: "Building",
    value: "Component documentation, web systems, course projects, and student community work",
  },
  {
    label: "Interested in",
    value: "Software engineering, systems design, scalable software, and thoughtful interfaces",
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
    caption: "Campus life",
    rotate: "rotate-3",
    position: "object-[50%_38%]",
  },
  {
    src: "/IMG_7011.jpg",
    alt: "Eduarda Magno personal photo",
    caption: "Painting breaks",
    rotate: "-rotate-2",
    position: "object-[50%_62%]",
  },
];

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Navigation />

      <main className="page-wrapper">
        <section className="flex min-h-[calc(100vh-8rem)] w-full flex-col justify-start gap-8">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_22rem] lg:items-center">
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                  About
                </p>
                <h1 className="page-title">CS student with a practical streak</h1>
              </div>
              <p className="max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
                I am Eduarda, a final-year Informatics and Computing Engineering
                student at FEUP, with a broad foundation across software,
                systems, data, web applications, AI, graphics, security, and
                applied computing.
              </p>
              <p className="max-w-3xl text-base leading-relaxed text-secondary sm:text-lg">
                I am currently complementing that technical base with hands-on
                UI/UX and front-end experience at GLS Germany IT. Outside class,
                I am involved in student organizations, communications, events,
                and representation work. I also like painting, gaming, swimming,
                and small creative side projects.
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[22rem] w-full">
              <div className="absolute inset-0 rounded-full bg-[color-mix(in_srgb,var(--accent-color)_14%,transparent)] blur-3xl" />
              <div className="relative mx-auto h-[22rem] max-w-sm">
                {polaroids.map((photo, index) => (
                  <figure
                    key={`${photo.caption}-${index}`}
                    className={`absolute w-40 rounded-sm bg-white p-2 pb-7 shadow-2xl transition-transform duration-300 hover:z-20 hover:scale-105 sm:w-48 ${photo.rotate} ${
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
                    <figcaption className="mt-3 text-center font-display text-base text-slate-900">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <section className="grid w-full gap-3 md:grid-cols-3">
            {current.map((item) => (
              <article key={item.label} className="glass-card p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-semibold leading-snug text-primary">
                  {item.value}
                </p>
              </article>
            ))}
          </section>

          <a
            href="#experience"
            className="mx-auto inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            Experience below
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </section>

        <div id="experience" className="w-full scroll-mt-28">
          <SectionDivider title="Experience" />
        </div>

        <div className="w-full">
          <Timeline />
        </div>
      </main>
    </div>
  );
}
