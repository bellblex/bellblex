"use client";

import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import AnalyticsWrapper from "./components/analytics";
import { ThemeProvider } from "./themeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head></head>
      <body className="min-h-screen flex flex-col overflow-y-auto">
        <ThemeProvider>
          <div className="flex-grow flex flex-col">
            {children}
          </div>
        </ThemeProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
