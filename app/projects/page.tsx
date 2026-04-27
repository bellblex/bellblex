"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Layers3, Megaphone, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Navigation } from "../components/nav";
import SectionDivider from "../components/ui/section-divider";

const projects = [
  {
    title: "Design System Alignment",
    eyebrow: "GLS Germany IT",
    icon: <Layers3 className="h-5 w-5" />,
    description:
      "Auditing Figma and Storybook components, documenting inconsistencies, and helping define a clearer roadmap for a scalable component system.",
    role: "UI/UX and front-end intern",
    tools: ["Figma", "Storybook", "Design systems", "Front-end"],
    status: "In progress",
  },
  {
    title: "Communications Identity",
    eyebrow: "NIAEFEUP",
    icon: <Megaphone className="h-5 w-5" />,
    description:
      "Leading visual communication for a student tech organization, coordinating design output, social content, and brand consistency across initiatives.",
    role: "Head coordinator",
    tools: ["Brand systems", "Social design", "Team leadership", "Content"],
    status: "Ongoing",
  },
  {
    title: "Portfolio System",
    eyebrow: "Personal site",
    icon: <MonitorSmartphone className="h-5 w-5" />,
    description:
      "A Next.js portfolio focused on interactive presentation, theme-aware design, accessible content, and a more expressive personal brand.",
    role: "Designer and developer",
    tools: ["Next.js", "React", "Tailwind", "Framer Motion"],
    status: "Live iteration",
    href: "https://github.com/bellblex",
  },
];

const principles = [
  "Useful motion before decorative motion",
  "Design language that can scale past one page",
  "Clear content hierarchy for fast scanning",
  "Frontend choices that respect accessibility",
];

export default function ProjectsPage(): JSX.Element {
  return (
    <div className="relative min-h-screen flex flex-col items-center">
      <Navigation />

      <main className="page-wrapper">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Selected work
          </p>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="page-title">Projects</h1>
              <p className="body-text mt-5 max-w-3xl">
                A snapshot of the work I am shaping across design systems,
                student organizations, and front-end interfaces.
              </p>
            </div>

            <div className="glass-card p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                How I approach work
              </p>
              <div className="mt-4 grid gap-3">
                {principles.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-color)" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <SectionDivider title="Case Notes" />

        <section className="grid w-full gap-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card group grid gap-5 p-5 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[auto_1fr_auto]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md text-white" style={{ background: "var(--accent-color)" }}>
                {project.icon}
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  {project.eyebrow}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-primary font-display">
                  {project.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                  {project.description}
                </p>
                <p className="mt-4 text-sm font-medium text-primary">{project.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tag-chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 md:flex-col md:items-end">
                <span className="rounded-full px-3 py-1 text-sm text-primary" style={{ background: "color-mix(in srgb, var(--accent-warm) 16%, transparent)" }}>
                  {project.status}
                </span>
                {project.href && (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </section>
      </main>
    </div>
  );
}
