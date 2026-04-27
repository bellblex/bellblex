import React, { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps): JSX.Element {
  return (
    <div className="glass-card backdrop-blur-md relative overflow-hidden group">
      <div className="relative z-10 p-10 w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
}
