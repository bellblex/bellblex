"use client";

import React, { useEffect, useState } from "react";
import { MailCheck } from "lucide-react";
import { useTheme } from "../../themeContext";

const ContactPopup: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme(); // Get the current theme from ThemeProvider

  useEffect(() => {
    // Add slight delay before making the popup visible to trigger fade-in
    const timer = setTimeout(() => setVisible(true), 10);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Wait for fade-out to complete before closing
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [onClose]);

  // Define styles based on the current theme
  const popupStyles =
    theme === "light"
      ? {
        backgroundColor: "#FAF3E0",
        color: "#1E293B",
        border: "1px solid #F5DEB3",
      }
      : {
        backgroundColor: "#1E293B",
        color: "#FAF3E0",
        border: "1px solid #4A5568",
      };
  const containerStyles = {

    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "16px",
    boxShadow: `
              inset 0 0 10px rgba(255, 255, 255, 0.3),  /* Inner glow */
              0 4px 6px rgba(0, 0, 0, 0.1)            /* Subtle drop shadow */
            `,
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 transition-opacity duration-500  ${visible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div
        className={`p-8 rounded-lg shadow-2xl text-center max-w-sm w-full transform transition-transform duration-500 ${visible ? "scale-100" : "scale-90"
          }`}
        style={{ ...popupStyles, ...containerStyles }}
      // Apply both the popup styles and container styles      
      >
        {/* Animated Icon */}
        <div className="flex justify-center mb-6 animate-bounce">
          <MailCheck size={48} className="text-current" />
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-bold mb-4">Message Sent Successfully!</h2>

        {/* Message Content */}
        <p className="text-base">{message}</p>

        {/* Bottom Accent Line */}
        <div
          className="mt-6 w-16 h-1 mx-auto rounded-full"
          style={{
            backgroundColor: theme === "light" ? "#1E293B" : "#FAF3E0",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ContactPopup;
