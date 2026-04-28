"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import experience from "@/app/about/experience";
import { cn } from "@/util/classNames";

const Timeline = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".timeline-item").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-4");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {experience.map((exp, index) => (
        <li key={index} className="timeline-item opacity-0 translate-y-4 transition-all duration-500 ease-out">
          {index !== 0 && <hr className="border-[color-mix(in_srgb,var(--accent-color)_20%,transparent)]" />}

          {/* Dot */}
          <div className="timeline-middle">
            <div
              className="w-12 h-12 rounded-2xl overflow-hidden bg-white/80 dark:bg-white/10 flex items-center justify-center flex-shrink-0 p-1.5 border border-[color-mix(in_srgb,var(--accent-color)_40%,transparent)]"
              style={exp.logoBg ? { backgroundColor: exp.logoBg } : undefined}
            >
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={exp.organization}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              ) : (
                <span className="text-xs font-bold text-secondary uppercase">
                  {exp.organization.slice(0, 2)}
                </span>
              )}
            </div>
          </div>

          {/* Card */}
          <div
            className={cn(
              index % 2 === 0 ? "timeline-start" : "timeline-end",
              "glass-card mb-4 px-4 py-3 max-w-sm"
            )}
          >
            <time className="text-sm italic text-secondary">{exp.date}</time>
            <p className="text-base font-bold text-primary leading-snug">{exp.title}</p>
            <p className="text-sm font-medium text-secondary mb-2">{exp.organization}</p>
            <ul className="space-y-1.5 mt-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm text-secondary leading-relaxed flex gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary/40 flex-shrink-0" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-[color-mix(in_srgb,var(--accent-color)_20%,transparent)]" />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
