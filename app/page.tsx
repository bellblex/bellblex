"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/app/components/ui/link-preview";
import Particles from "./components/ui/particles";
import FluidCursor from "./components/ui/fluidCursor";
import { Navigation } from "./components/nav";
import { useTheme } from "./themeContext";

const proofCards = [
  {
    icon: <Layers3 className="h-5 w-5" />,
    label: "Design systems",
    title: "GLS Germany IT",
    text: "Auditing Figma and Storybook components so design and front-end implementation stay aligned.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Leadership",
    title: "NIAEFEUP",
    text: "Leading communications and image work for a student tech organization at FEUP.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    label: "Focus",
    title: "Product UI",
    text: "Combining engineering, visual systems, accessibility, and thoughtful interaction details.",
  },
];

const roles = ["Front-end", "UI/UX", "Design systems"];

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className={`relative min-h-screen w-screen overflow-hidden ${
        theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
      }`}
    >
      {theme === "light" && <FluidCursor />}
      {theme === "dark" && <Particles className="absolute inset-0" quantity={90} />}
      <Navigation showBack={false} />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-12 pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start gap-7"
          >
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <span key={role} className="tag-chip">
                  {role}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-6xl font-bold leading-none text-primary font-display sm:text-7xl lg:text-8xl">
                Eduarda Magno
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-secondary sm:text-2xl">
                Informatics Engineering student at FEUP building clean front-end
                experiences, practical design systems, and interfaces with a bit
                more pulse.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/projects" className="accent-btn inline-flex items-center gap-2">
                View work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="quiet-btn inline-flex items-center gap-2">
                Contact
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <LinkPreview
              url="https://www.up.pt/feup/en/"
              className="text-sm text-secondary transition-colors duration-300 hover:text-primary"
            >
              Faculdade de Engenharia da Universidade do Porto
            </LinkPreview>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="grid gap-4"
          >
            <div className="glass-card overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src="/IMG_7011.jpg"
                  alt="Eduarda Magno"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/78 to-transparent p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70">
                    Currently
                  </p>
                  <p className="mt-1 text-xl font-semibold">
                    UI/UX and front-end intern at GLS Germany IT
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {proofCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.24 + index * 0.08 }}
                  className="glass-card p-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md text-white" style={{ background: "var(--accent-color)" }}>
                    {card.icon}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {card.label}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-primary">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{card.text}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
