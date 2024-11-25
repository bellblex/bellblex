import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

export const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
  const [clipPathId, setClipPathId] = useState("");
  const [viewBox, setViewBox] = useState("0 0 100 100");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically calculate the bounding box of the content
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      setViewBox(`0 0 ${width} ${height}`);
    }
    // Generate a unique clipPath ID for multiple cards
    setClipPathId(`clipPath-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

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
      }}
    >
      {/* Dynamic SVG for clip path */}
      <svg width="0" height="0">
        <defs>
          <clipPath id={clipPathId} clipPathUnits="userSpaceOnUse">
            <path d="M20,60 C20,40 30,20 50,20 C70,20 80,40 80,60 C90,80 70,90 50,90 C30,90 10,80 20,60 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Apply clipPath dynamically */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
        style={{
          ...style,
          clipPath: `url(#${clipPathId})`,
        }}
      />
      <motion.div
        className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
        style={{
          ...style,
          clipPath: `url(#${clipPathId})`,
        }}
      />
      <div
        ref={ref}
        className="p-10 w-full max-w-4xl relative shadow-lg"
        style={{
          clipPath: `url(#${clipPathId})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
