import React, { useEffect, useRef } from "react";
import experience from "@/app/about/experience";
import { cn } from "@/util/classNames";

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".timeline-item");
      const lines = document.querySelectorAll(".timeline-line");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-10");
        }
      });

      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          line.classList.add("scale-y-100");
          line.classList.remove("scale-y-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to show already visible elements
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ul ref={timelineRef} className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {experience.map((exp, index) => (
        <li key={index} className="timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-in-out">
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={cn(
              `timeline-${index % 2 === 0 ? "start" : "end"} relative transition-all duration-200 ease-linear p-6 border border-secondary rounded-lg shadow-lg hover:shadow-xl group-hover:scale-105 group-hover:translate-y-[-2px] backdrop-filter backdrop-blur-md dark:backdrop-blur-lg border-opacity-40 dark:border-opacity-40`
            )}
            style={{
              transformStyle: "preserve-3d",
              background: "transparent",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(128, 128, 128, 0.5)",
              borderRadius: "16px",
              boxShadow: `
                inset 0 0 10px rgba(255, 255, 255, 0.3),
                0 4px 6px rgba(0, 0, 0, 0.1)
              `,
            }}
          >
            <time className="font-mono italic text-secondary">{exp.date}</time>
            <div className="text-lg font-black text-primary">{exp.title}</div>
            <div className="text-sm font-semibold text-primary">{exp.organization}</div> <br />
            <div className="ml-4 text-secondary">
              {exp.description.map((desc, i) => (
                <p key={i} className="mb-2">{desc}</p>
              ))}
            </div>
          </div>
          <hr className="timeline-line scale-y-0 transition-transform duration-1000 ease-in-out origin-top border-gray-500" />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;