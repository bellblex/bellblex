import React, { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps): JSX.Element {
  return (
    <div
      className="relative overflow-hidden group"
      style={{
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
        border: "2px solid rgba(128, 128, 128, 0.5)",
        borderRadius: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: `
          inset 0 0 10px rgba(255, 255, 255, 0.3),
          0 4px 6px rgba(0, 0, 0, 0.1)
        `,
      }}
    >
      <div className="relative z-10 p-10 w-full max-w-4xl">
        {children}
      </div>
    </div>
  );
}