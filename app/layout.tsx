"use client";

import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import AnalyticsWrapper from "./components/analytics";
import { ThemeProvider, useTheme } from "./themeContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head></head>
      <body className="min-h-screen flex flex-col overflow-y-auto">
        <ThemeProvider>
          <ThemeWrapper>
            <div className="flex-grow flex flex-col">{children}</div>
          </ThemeWrapper>
        </ThemeProvider>
        <AnalyticsWrapper />
        <SpeedInsights />
      </body>
    </html>
  );
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
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
