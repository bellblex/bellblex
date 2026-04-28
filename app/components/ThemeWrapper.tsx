"use client";

import { ReactNode } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="theme-bg min-h-screen w-screen">
      {children}
    </div>
  );
}
