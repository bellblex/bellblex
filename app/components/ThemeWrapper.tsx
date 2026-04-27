"use client";

import { ReactNode } from "react";
import { useTheme } from "../themeContext";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen w-screen ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      {children}
    </div>
  );
}
