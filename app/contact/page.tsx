"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import { Navigation } from "../components/nav";
import ContactForm from "../components/ui/contactForm";
import { Card } from "../components/ui/card";

interface Social {
  icon: ReactNode;
  href: string;
  label: string;
  handle: string;
}

const socials: Social[] = [
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

export default function ContactPage(): JSX.Element {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Navigation />

      <div className="flex-grow flex items-center justify-center p-6 my-10 sm:p-12 relative z-10">
        <Card>
          <h1 className="page-title mb-12 text-center w-full">Contact</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
            <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-gray-500/30" />

            <div className="flex flex-col items-center gap-8">
              <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/IMG_7011.jpg"
                  alt="Eduarda Magno"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="text-center">
                <h2 className="section-title">Eduarda Magno</h2>
                <p className="body-text mt-3 text-base">
                  CS student at FEUP, interning at GLS Germany IT.
                </p>
                <p className="text-base text-secondary mt-2">
                  Open to proposals and questions!
                </p>
              </div>

              <div className="flex gap-6">
                {socials.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    aria-label={s.label}
                    className="text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <ContactForm />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
