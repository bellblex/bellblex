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
      <head>
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
