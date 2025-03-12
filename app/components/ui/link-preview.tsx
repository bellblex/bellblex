"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/app/themeContext";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: "intrinsic" | "responsive" | "fill" | "fixed";
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "intrinsic",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  const { theme } = useTheme(); // Get theme from context
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: theme === "dark" ? "dark" : "light", // Change based on theme
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const boxStyles = `border rounded-lg p-2 shadow-lg 
  ${theme === "dark" 
    ? "bg-[#1E293B] border-[#1E293B] text-white"  // Dark mode
    : "bg-[#FAF3E0] border-[#FAF3E0] text-black"  // Light mode
  }`;

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {/* Prevents hydration mismatch */}
      {isMounted && (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            priority
            alt="hidden preview image"
          />
        </div>
      )}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => setOpen(open)}
      >
        <HoverCardPrimitive.Trigger onMouseMove={handleMouseMove} className={cn("cursor-pointer", className)}>
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content className="transform-gpu" side="bottom" align="center" sideOffset={10}>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className={`shadow-xl rounded-xl ${boxStyles}`}
                style={{ x: translateX }}
              >
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    quality={quality}
                    priority
                    className="rounded-lg"
                    alt="preview image"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
