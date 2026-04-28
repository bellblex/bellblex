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
    icon: <Briefcase className="h-5 w-5" />,
    label: "Engineering",
    title: "CS foundation",
    text: "Coursework across algorithms, systems, databases, networks, compilers, AI, graphics, security, and web technologies.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    label: "Internship",
    title: "GLS Germany IT",
    text: "UI/UX and front-end intern working on design system auditing, Figma and Storybook alignment, and component documentation.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    label: "Leadership",
    title: "Student organizations",
    text: "Head coordinator in image & communications at NIAEFEUP, with experience in events, logistics, student representation, and team coordination.",
  },
];

const revealDelay = 2.15;

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="theme-bg relative min-h-screen w-screen overflow-hidden">
      {theme === "light" && <FluidCursor />}
      {theme === "dark" && <Particles className="absolute inset-0" quantity={90} />}
      <Navigation showBack={false} />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 pb-10 pt-28 text-center">
        <div className="flex w-full flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: revealDelay, ease: "easeOut" }}
            className="relative"
          >
            <div className="glass-card h-36 w-36 overflow-hidden p-1 sm:h-44 sm:w-44">
              <div className="relative h-full w-full overflow-hidden rounded-md">
                <Image
                  src="/IMG_7011.jpg"
                  alt="Eduarda Magno"
                  fill
                  priority
                  sizes="11rem"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute left-[calc(100%-0.2rem)] top-6 hidden sm:block">
              <div className="relative" style={{ width: 130 }}>
                <span
                  className="absolute left-0 whitespace-nowrap font-display text-lg text-primary drop-shadow-sm"
                  style={{ top: -28, left: 90 }}
                >
                  this is me :)
                </span>
                <svg
                  aria-hidden="true"
                  width="130"
                  viewBox="0 0 89 31"
                  fill="none"
                >
                  <path
                    d="M51.5067 19.8109L51.7208 20.7878V20.7878L51.5067 19.8109ZM0.319518 21.6898C-0.0851771 22.0656 -0.108585 22.6983 0.267236 23.103L6.39158 29.6979C6.7674 30.1026 7.40013 30.126 7.80482 29.7502C8.20952 29.3744 8.23293 28.7416 7.85711 28.337L2.41325 22.4748L8.27536 17.031C8.68006 16.6552 8.70346 16.0224 8.32764 15.6177C7.95182 15.213 7.31909 15.1896 6.9144 15.5654L0.319518 21.6898ZM88 0.752586L87.3415 1.84774e-06C76.1172 9.821 65.5696 15.705 51.2926 18.8341L51.5067 19.8109L51.7208 20.7878C66.3799 17.5748 77.2245 11.5096 88.6585 1.50517L88 0.752586ZM51.5067 19.8109L51.2926 18.8341C38.581 21.6202 22.8746 22.2311 1.03697 21.4232L1 22.4226L0.963031 23.4219C22.8417 24.2313 38.7543 23.6297 51.7208 20.7878L51.5067 19.8109Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          <h1
            className="brand-gradient-text animate-title mx-auto w-full cursor-default whitespace-nowrap text-center text-5xl font-bold leading-none font-display duration-1000 sm:text-7xl md:text-8xl"
          >
            Eduarda Magno
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: revealDelay + 0.22, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-secondary sm:text-xl">
              Informatics Engineering student at{" "}
              <LinkPreview
                url="https://www.up.pt/feup/en/"
                className="text-secondary"
              >
                the Faculty of Engineering of the University of Porto
              </LinkPreview>
              , currently complementing a broad CS foundation with hands-on
              UI/UX and front-end experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: revealDelay + 0.38, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/projects" className="accent-btn inline-flex items-center gap-2">
              View work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="quiet-btn inline-flex items-center gap-2">
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: revealDelay + 0.58, ease: "easeOut" }}
            className="mt-4 grid w-full gap-3 sm:grid-cols-3"
          >
            {proofCards.map((card) => (
              <article key={card.title} className="glass-card p-4 text-left">
                <div className="mb-3 flex items-center gap-3">
                  <span className="icon-badge h-8 w-8">
                    {card.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      {card.label}
                    </p>
                    <h2 className="text-base font-semibold text-primary">{card.title}</h2>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-secondary">{card.text}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
