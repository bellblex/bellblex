"use client";

import React, { useEffect, useState } from "react";
import { MailCheck } from "lucide-react";

const ContactPopup: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

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

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 transition-opacity duration-500  ${visible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div
        className={`glass-card p-8 text-center max-w-sm w-full transform transition-transform duration-500 ${visible ? "scale-100" : "scale-90"
          }`}
      >
        <div className="flex justify-center mb-6 animate-bounce text-primary">
          <MailCheck size={48} className="text-current" />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary">Message Sent Successfully!</h2>

        <p className="text-base text-secondary">{message}</p>

        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[var(--accent-color)]" />
      </div>
    </div>
  );
};

export default ContactPopup;
