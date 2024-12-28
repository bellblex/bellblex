"use client";

import React, { useState } from "react";
import ContactPopup from "./contactPopUp";
import { useTheme } from "../../themeContext";

const ContactForm: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [fromName, setFromName] = useState(""); // State to track the user's name
  const { theme } = useTheme(); // Access current theme

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatusMessage("Your message has been sent successfully!");
        setShowPopup(true);
        form.reset();
        setFromName("");
      } else {
        setStatusMessage("Something went wrong. Please try again later.");
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatusMessage("An error occurred. Please try again.");
      setShowPopup(true);
    }
  };

  const textColor = theme === "dark" ? "text-primary" : "text-primary"; // Dark: white, Light: primary
  const borderColor = theme === "dark" ? "border-secondary" : "border-secondary"; // Dark: secondary, Light: primary
  const buttonHoverBg = theme === "dark" ? "hover:bg-secondary" : "hover:bg-secondary";
  const buttonHoverText = theme === "dark" ? "hover:text-primary" : "hover:text-primary";

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hidden Fields for Web3Forms */}
        <input
          type="hidden"
          name="access_key"
          value="4ed0d717-3e99-4723-a22a-c09ad27c43e0"
        />
        <input type="hidden" name="from_name" value={fromName} />
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

        {/* Name Input */}
        <div className="space-y-3">
          <label className={`block text-sm ${textColor}`}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`w-full p-4 text-sm bg-transparent border-b-2 ${borderColor} ${textColor} focus:border-primary outline-none placeholder-secondary`}
            onChange={(e) => setFromName(e.target.value)} // Update fromName state
          />
        </div>

        {/* Email Input */}
        <div className="space-y-3">
          <label className={`block text-sm ${textColor}`}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`w-full p-4 text-sm bg-transparent border-b-2 ${borderColor} ${textColor} focus:border-primary outline-none placeholder-secondary`}
          />
        </div>

        {/* Subject Input */}
        <div className="space-y-3">
          <label className={`block text-sm ${textColor}`}>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className={`w-full p-4 text-sm bg-transparent border-b-2 ${borderColor} ${textColor} focus:border-primary outline-none placeholder-secondary`}
          />
        </div>

        {/* Message Textarea */}
        <div className="space-y-3">
          <label className={`block text-sm ${textColor}`}>Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className={`w-full p-4 text-sm bg-transparent border-b-2 ${borderColor} ${textColor} focus:border-primary outline-none placeholder-secondary`}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className={`px-6 py-3 text-sm border-2 ${borderColor} ${textColor} rounded-md bg-transparent ${buttonHoverBg} ${buttonHoverText} transition-all duration-300 focus:outline-none`}
          >
            Send Message
          </button>
        </div>
      </form>

      {showPopup && (
        <ContactPopup
          message={statusMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default ContactForm;
