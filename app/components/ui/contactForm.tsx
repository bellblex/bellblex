"use client";

import React, { useState } from "react";
import ContactPopup from "./contactPopUp";

const ContactForm: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [fromName, setFromName] = useState("");

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

  const inputClass =
    "w-full rounded-md border border-[var(--surface-border)] bg-transparent px-4 py-3 text-sm text-primary outline-none transition-colors placeholder-secondary focus:border-[var(--accent-color)]";
  const labelClass = "block text-sm font-medium text-primary";

  return (
    <>
      <form onSubmit={handleSubmit} className="glass-card w-full p-5 sm:p-6">
        <input
          type="hidden"
          name="access_key"
          value="4ed0d717-3e99-4723-a22a-c09ad27c43e0"
        />
        <input type="hidden" name="from_name" value={fromName} />
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className={labelClass}>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className={inputClass}
              onChange={(e) => setFromName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <label className={labelClass}>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="What should we talk about?"
            required
            className={inputClass}
          />
        </div>

        <div className="mt-4 space-y-2">
          <label className={labelClass}>Message</label>
          <textarea
            name="message"
            placeholder="A few details are enough."
            required
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="hidden text-sm text-secondary sm:block">
            I usually reply by email.
          </p>
          <button type="submit" className="accent-btn">
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
