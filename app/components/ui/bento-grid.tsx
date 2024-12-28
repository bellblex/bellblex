import { cn } from "@/util/classNames";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./3dCard";

export const BentoGrid = ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    };
  
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
  return (
    <CardContainer
      className={cn(
        "w-full h-full transition duration-200 ease-linear group-hover:scale-105 group-hover:translate-y-[-2px]"
      )}
    >
      {header && (
        <CardItem
          className="w-full h-32 rounded-t-lg overflow-hidden"
          translateZ={20}
        >
          {header}
        </CardItem>
      )}
      {icon && (
        <CardItem
          className="group-hover:translate-x-2 transition duration-200 flex justify-center"
          translateZ={15}
        >
          {icon}
        </CardItem>
      )}
      <CardItem
        className={`font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2`}
        translateZ={10}
      >
        {title}
      </CardItem>
      <CardItem
        className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"
        translateZ={5}
      >
        {description}
      </CardItem>
    </CardContainer>
  );
};
