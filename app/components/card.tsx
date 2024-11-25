import React, { PropsWithChildren } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, white 60%, transparent 80%)`;  
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className="overflow-hidden relative group"
      style={{
        WebkitBackdropFilter: "blur(10px)",
        border: "2px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1)",
        clipPath: "url(#cloudClipPath)", // Reference dynamic cloud SVG
      }}
    >
      {/* Define the dynamic SVG clip path */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="cloudClipPath" clipPathUnits="objectBoundingBox">
            <path d="M0.2,0.6 C0.2,0.4 0.3,0.2 0.5,0.2 C0.7,0.2 0.8,0.4 0.8,0.6 C0.9,0.8 0.7,0.9 0.5,0.9 C0.3,0.9 0.1,0.8 0.2,0.6 Z" />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
        style={style}
      />
      <motion.div
        className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
        style={style}
      />
      <div className="p-10 w-full max-w-4xl relative shadow-lg">
        {children}
      </div>
    </div>
  );
};