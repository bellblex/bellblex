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
          {index !== 0 && <hr className="border-gray-500/40" />}

          {/* Dot */}
          <div className="timeline-middle">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center flex-shrink-0">
              {exp.logo ? (
                <Image
                  src={exp.logo}
                  alt={exp.organization}
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              ) : (
                <span className="text-[10px] font-bold text-secondary uppercase">
                  {exp.organization.slice(0, 2)}
                </span>
              )}
            </div>
          </div>

          {/* Card */}
          <div
            className={cn(
              index % 2 === 0 ? "timeline-start" : "timeline-end",
              "mb-4 rounded-xl px-4 py-3 max-w-sm"
            )}
            style={{
              backgroundColor: "rgba(255,255,255,0.07)",
              border: "1.5px solid rgba(128,128,128,0.35)",
              boxShadow: "inset 0 0 8px rgba(255,255,255,0.04), 0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <time className="text-xs italic text-secondary/70">{exp.date}</time>
            <p className="text-sm font-bold text-primary leading-snug">{exp.title}</p>
            <p className="text-xs font-medium text-secondary mb-2">{exp.organization}</p>
            <ul className="space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-xs text-secondary/80 leading-relaxed flex gap-1.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary/40 flex-shrink-0" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-500/40" />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
