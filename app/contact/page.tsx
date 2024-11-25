"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import { Navigation } from "../components/nav";
import ContactForm from "../components/contactForm";
import { useTheme } from "../themeContext"; // Assuming a theme context for toggling

const socials = [
  {
    icon: <Instagram size={40} />,
    href: "https://www.instagram.com/eduardagmagno/",
    label: "Instagram",
    handle: "@eduardagmagno",
  },
  {
    icon: <Linkedin size={40} />,
    href: "https://www.linkedin.com/in/eduardagmagno",
    label: "LinkedIn",
    handle: "@eduardagmagno",
  },
  {
    icon: <Github size={40} />,
    href: "https://github.com/bellblex",
    label: "GitHub",
    handle: "bellblex",
  },
  {
    icon: <Mail size={40} />,
    href: "mailto:eduardagmagno@gmail.com",
    label: "Email",
    handle: "eduardagmagno@gmail.com",
  },
];

const ContactPage: React.FC = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center text-base-content ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      {/* Include Navigation */}
      <Navigation />

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex-grow flex items-center justify-center p-6 my-10 sm:p-12 relative z-10"
      >
        <motion.div
          className="p-10 w-full max-w-4xl relative rounded-lg shadow-lg animate-fade-in-up"
          style={{
            background: "transparent",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "2px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "16px",
            boxShadow: `
              inset 0 0 10px rgba(255, 255, 255, 0.3),
              0 4px 6px rgba(0, 0, 0, 0.1)
            `,
          }}
        >
          {/* Title Section */}
          <motion.div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              CONTACT
            </h1>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 relative animate-fade-in-up pr-0 sm:pr-8 "
          >
            {/* Vertical Divider */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l-2 border-secondary"></div>

            {/* Left Side (Profile Info) */}
            <motion.div className="space-y-8 flex flex-col items-center justify-center">
              <div className="relative flex justify-center">
                <div className="avatar">
                  <div className="w-64 h-64 rounded-lg shadow-lg overflow-hidden">
                    <img
                      src="/IMG_7011.jpg"
                      alt="Eduarda Magno"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-primary font-semibold text-lg text-center">
                  Eduarda Magno
                </h2>
                <p className="text-secondary text-sm mt-4 text-center">
                  I am an 18 year old student, studying in the 2º year of
                  Informatics Engineering and Computer Science at the University
                  of Porto.
                </p>
                <p className="text-secondary text-sm mt-4 text-center">
                  Contact me for proposals or any questions you might have!
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 mt-8">
                {socials.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    className="flex flex-col items-center gap-2 group duration-500"
                  >
                    <span className="flex items-center justify-center text-secondary transition-colors duration-300 ease-in-out group-hover:text-primary drop-shadow-md">
                      {s.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Right Side (Contact Form) */}
            <motion.div className="pl-0 sm:pl-8 flex justify-center items-center">
              <ContactForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
