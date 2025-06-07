import { cn } from "@/util/classNames";
import React, { ReactNode } from "react";
import { Card } from "./card"; // Import the Card component

export interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export function BentoGrid({
  className,
  children,
}: BentoGridProps): JSX.Element {
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
}
export interface BentoGridItemProps {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps): JSX.Element {
  return (
    <Card>
      <div className={cn("flex flex-col space-y-4", className)}>
        {header && (
          <div className="w-full h-32 rounded-t-lg overflow-hidden">
            {header}
          </div>
        )}

        {icon && <div className="mb-4">{icon}</div>}

        {title && (
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
        )}

        {description && (
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        )}
      </div>
    </Card>
  );
}