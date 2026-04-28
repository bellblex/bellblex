"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import { Navigation } from "../components/nav";
import ContactForm from "../components/ui/contactForm";
import PageIntro from "../components/ui/page-intro";
import SectionDivider from "../components/ui/section-divider";

interface Social {
  icon: ReactNode;
  href: string;
  label: string;
  detail: string;
}

const socials: Social[] = [
  {
    icon: <Instagram size={22} />,
    href: "https://www.instagram.com/eduardagmagno/",
    label: "Instagram",
    detail: "@eduardagmagno",
  },
  {
    icon: <Linkedin size={22} />,
    href: "https://www.linkedin.com/in/eduardagmagno",
    label: "LinkedIn",
    detail: "/in/eduardagmagno",
  },
  {
    icon: <Github size={22} />,
    href: "https://github.com/bellblex",
    label: "GitHub",
    detail: "github.com/bellblex",
  },
  {
    icon: <Mail size={22} />,
    href: "mailto:eduardagmagno@gmail.com",
    label: "Email",
    detail: "eduardagmagno@gmail.com",
  },
];

export default function ContactPage(): JSX.Element {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <Navigation />

      <main className="page-wrapper">
        <div className="w-full">
          <PageIntro eyebrow="Get in touch" title="Contact">
            Open to proposals, questions, collaborations, and anything that
            sounds like an interesting challenge.
          </PageIntro>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              aria-label={s.label}
              className="glass-card group flex items-center gap-3 p-3 text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="icon-badge h-9 w-9 flex-shrink-0">
                {s.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-primary">
                  {s.label}
                </span>
                <span className="block truncate text-xs text-secondary transition-colors group-hover:text-primary">
                  {s.detail}
                </span>
              </span>
            </Link>
          ))}
        </div>
        
        <SectionDivider title="Contact Form" />
            
        <div className="w-full">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
