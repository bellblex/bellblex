"use client";

import React from "react";
import Link from "next/link";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import { Navigation } from "../components/nav";
import ContactForm from "../components/ui/contactForm";
import { useTheme } from "../themeContext";
import { Card } from "../components/ui/card"; // Import the Card component

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
  const { theme } = useTheme();

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center text-base-content ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      {/* Include Navigation */}
      <Navigation />

      <div className="flex-grow flex items-center justify-center p-6 my-10 sm:p-12 relative z-10">
        {/* Using Card Component */}
        <Card>
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-12">
              Contact
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 relative">
            {/* Vertical Divider */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 border-l-2 border-secondary"></div>

            {/* Left Side (Profile Info) */}
            <div className="space-y-8 flex flex-col items-center justify-center">
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
                  I am an 18-year-old student, studying in the 2nd year of
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
                    className="flex flex-col items-center gap-2 duration-500"
                  >
                    <span className="flex items-center justify-center text-secondary transition-colors duration-300 ease-in-out hover:text-primary drop-shadow-md">
                      {s.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side (Contact Form) */}
            <div className="pl-0 sm:pl-8 flex justify-center items-center">
              <ContactForm />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
