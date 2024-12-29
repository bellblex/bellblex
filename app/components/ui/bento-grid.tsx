import { cn } from "@/util/classNames";
import React from "react";
import { Card } from "./card"; // Import the Card component

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
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
    <Card>
      <div
        className={cn(
          "flex flex-col space-y-4",
          className
        )}
      >
        {/* Header (e.g., image) */}
        {header && <div className="w-full h-32 rounded-t-lg overflow-hidden">{header}</div>}

        {/* Icon */}
        {icon && <div className="mb-4">{icon}</div>}

        {/* Title */}
        {title && (
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        )}

        {/* Description */}
        {description && (
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        )}
      </div>
    </Card>
  );
};
