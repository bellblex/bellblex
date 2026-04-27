import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { ReactNode } from "react";
import AnalyticsWrapper from "./components/analytics";
import { ThemeProvider } from "./themeContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeWrapper from "./components/ThemeWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
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
