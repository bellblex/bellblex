"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>(null); // Initial state for theme
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme); // Set theme from local storage or default to 'dark'
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Trigger transition state
    setIsTransitioning(true);

    setTimeout(() => {
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setIsTransitioning(false);
    }, 3000); // Match animation duration (3 seconds)
  };

  if (!theme) {
    // Avoid rendering anything until the theme is initialized
    return null;
  }

  if (isTransitioning) {
    const gradientColors =
      theme === "light"
        ? "linear-gradient(135deg, #FFF8DC, #FFD1DC, #4A5568)" // Light to Dark Transition
        : "linear-gradient(135deg, #1E293B, #FFD1DC, #F5DEB3)"; // Dark to Light Transition;

    const finalGradient =
      theme === "light"
        ? "linear-gradient(135deg, #1E293B, #2D3748, #4A5568)" // gradient-dark
        : "linear-gradient(135deg, #FAF3E0, #FFF8DC, #F5DEB3)"; // gradient-light;

    return (
      <div
        className="w-screen h-screen flex items-center justify-center relative"
        style={{
          background: gradientColors,
          backgroundSize: "200% 200%",
          animation: "gradient-animation 3s ease-in-out forwards",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-0"
          style={{
            background: finalGradient,
            animation: "fade-in 3s ease-in-out forwards",
          }}
        ></div>
        <style>
          {`
            @keyframes gradient-animation {
              0% {
                background-position: 0% 50%;
              }
              100% {
                background-position: 100% 50%;
              }
            }

            @keyframes fade-in {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className="w-screen h-screen"
        style={{
          background: theme === "light" ? "#FAF3E0" : "#1E293B", // Fallback background for static
          backgroundImage:
            theme === "light"
              ? "linear-gradient(135deg, #FAF3E0, #FFF8DC, #F5DEB3)" // gradient-light
              : "linear-gradient(135deg, #1E293B, #2D3748, #4A5568)", // gradient-dark
          transition: "background-image 0.3s ease, background-color 0.3s ease-in", // Smooth background fade
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
