"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import { Navigation } from "../components/nav";
import ContactForm from "../components/ui/contactForm";
import SectionDivider from "../components/ui/section-divider";

interface Social {
  icon: ReactNode;
  href: string;
  label: string;
}

const socials: Social[] = [
  {
    icon: <Instagram size={22} />,
    href: "https://www.instagram.com/eduardagmagno/",
    label: "Instagram",
  },
  {
    icon: <Linkedin size={22} />,
    href: "https://www.linkedin.com/in/eduardagmagno",
    label: "LinkedIn",
  },
  {
    icon: <Github size={22} />,
    href: "https://github.com/bellblex",
    label: "GitHub",
  },
  {
    icon: <Mail size={22} />,
    href: "mailto:eduardagmagno@gmail.com",
    label: "Email",
  },
];

export default function ContactPage(): JSX.Element {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <Navigation />

      <main className="page-wrapper">
        <div className="w-full grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-col gap-4">
            <h1 className="page-title">Contact</h1>
            <p className="body-text max-w-2xl">
              CS student at FEUP, currently interning at GLS Germany IT.
              Open to proposals, questions, and collaborations.
            </p>
          </div>

          <div className="glass-card flex gap-5 p-4">
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

        <SectionDivider title="Get in Touch" />

        <div className="w-full">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
