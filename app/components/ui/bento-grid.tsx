import { cn } from "@/util/classNames";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../themeContext";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  // Delay animations until mounted
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Animation variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Apply staggered effect to children
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "text-primary" : "text-primary";
  const borderColor = theme === "dark" ? "border-secondary" : "border-secondary";
  const hoverShadow = theme === "dark" ? "hover:shadow-lg" : "hover:shadow-xl";

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        `group/bento transition duration-200 relative p-6 bg-transparent border ${borderColor} rounded-lg shadow-lg ${hoverShadow} group-hover:scale-105 group-hover:translate-y-[-2px] backdrop-filter backdrop-blur-md dark:backdrop-blur-lg border-opacity-40 dark:border-opacity-40`,
        className
      )}
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "2px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "16px",
        boxShadow: `
          inset 0 0 10px rgba(255, 255, 255, 0.3),
          0 4px 6px rgba(0, 0, 0, 0.1)
        `,
      }}
    >
      {header && (
        <div className="w-full rounded-t-lg overflow-hidden">
          {header}
        </div>
      )}
      {icon && (
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
        </div>
      )}
      <div className={`font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 ${textColor}`}>
        {title}
      </div>
      <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        {description}
      </div>
    </motion.div>
  );
};
