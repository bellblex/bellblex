"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Binary,
  BookOpen,
  Bot,
  Briefcase,
  Cpu,
  Database,
  Gamepad2,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Megaphone,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navigation } from "../components/nav";
import PageIntro from "../components/ui/page-intro";
import SectionDivider from "../components/ui/section-divider";

const filters = [
  "All",
  "Leadership",
  "Research",
  "Course projects",
  "Web apps",
  "Systems",
  "AI and data",
  "Games and graphics",
] as const;

type Filter = (typeof filters)[number];

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  categories: Filter[];
  tools: string[];
  status: string;
  icon: React.ReactNode;
  githubHref?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio System",
    eyebrow: "Personal site",
    icon: <MonitorSmartphone className="h-5 w-5" />,
    description:
      "A Next.js portfolio with theme-aware visuals, animated interactions, and a more personal presentation system.",
    categories: ["Web apps"],
    tools: ["Next.js", "React", "Tailwind", "Framer Motion"],
    status: "Live iteration",
    githubHref: "https://github.com/bellblex",
  },
  {
    title: "Is It Ethical to Kill Intelligent Machines?",
    eyebrow: "Philosophy, 12th grade",
    icon: <BookOpen className="h-5 w-5" />,
    description:
      "An essay on artificial intelligence, abstract intelligence, Turing, Searle, Dennett, and whether intelligent machines could hold rights.",
    categories: ["Research", "AI and data"],
    tools: ["AI ethics", "Philosophy", "Research writing"],
    status: "Completed",
  },
  {
    title: "Molecular Computing Report",
    eyebrow: "University of Porto Project",
    icon: <Binary className="h-5 w-5" />,
    description:
      "A research report on molecular computing, DNA-based computation, molecular robotics, and possible future applications.",
    categories: ["Research"],
    tools: ["Molecular computing", "Biotechnology", "Research"],
    status: "Completed",
  },
  {
    title: "Distribution Company Database",
    eyebrow: "Databases",
    icon: <Database className="h-5 w-5" />,
    description:
      "A relational database model for suppliers, clients, products, sales, stock, finances, and seller performance in a distribution company.",
    categories: ["Course projects", "AI and data"],
    tools: ["SQLite", "Relational schema", "ER modeling", "SQL"],
    status: "Completed",
  },
  {
    title: "Real Estate Power BI Report",
    eyebrow: "Power BI / Data Visualization",
    icon: <BarChart3 className="h-5 w-5" />,
    description:
      "An interactive real estate analytics report with summary, map, and key-influencer views for exploring prices by district, property type, typology, condition, construction year, and IMI metrics.",
    categories: ["AI and data"],
    tools: ["Power BI", "Data visualization", "Real estate analytics", "Maps", "Key influencers"],
    status: "Completed",
  },
  {
    title: "Robbing Diamonds",
    eyebrow: "Software Design and Testing Laboratory",
    icon: <Gamepad2 className="h-5 w-5" />,
    description:
      "A terminal stealth game in Java where a thief collects diamonds, avoids guards, manages lives, and progresses through harder mazes.",
    categories: ["Course projects", "Games and graphics"],
    tools: ["Java", "Lanterna", "JUnit", "Mockito", "jqwik", "PITest"],
    status: "Completed",
    githubHref: "https://github.com/bellblex/Software-Design-and-Testing-Laboratory",
  },
  {
    title: "Scientific Conference Review Assignment Tool",
    eyebrow: "Algorithm Design",
    icon: <Network className="h-5 w-5" />,
    description:
      "A review assignment tool that models paper-reviewer allocation as a maximum-flow problem with risk analysis.",
    categories: ["Course projects", "Systems"],
    tools: ["Maximum flow", "Greedy algorithms", "Graphs"],
    status: "Completed",
  },
  {
    title: "Fruggies - Mobile App",
    eyebrow: "Software Engineering",
    icon: <Sprout className="h-5 w-5" />,
    description:
      "A sustainable urban gardening and produce-exchange app covering requirements, domain modeling, architecture, sprints, and release planning.",
    categories: ["Course projects"],
    tools: ["Software engineering", "Product vision", "User stories", "Architecture"],
    status: "Completed",
    githubHref: "https://github.com/bellblex/Software-Engineering",
  },
  {
    title: "Freelancer Platform",
    eyebrow: "Web Languages and Technologies",
    icon: <Globe2 className="h-5 w-5" />,
    description:
      "A PHP and SQLite marketplace where freelancers list services, clients browse and hire, admins manage categories, and users message in real time.",
    categories: ["Course projects", "Web apps"],
    tools: ["PHP", "SQLite", "Security", "Messaging", "Admin tools"],
    status: "Completed",
    githubHref: "https://github.com/bellblex/Web-Languages-and-Technologies",
  },
  {
    title: "Leadership Interview Report",
    eyebrow: "Leadership and Team Management",
    icon: <Users className="h-5 w-5" />,
    description:
      "An interview-based report analyzing real leadership practices through communication, motivation, team management, and conflict models.",
    categories: ["Leadership", "Research"],
    tools: ["Interview", "Leadership theory", "Team management"],
    status: "Completed",
  },
  {
    title: "SEED Labs Security Reports",
    eyebrow: "Computer Security Foundations",
    icon: <ShieldCheck className="h-5 w-5" />,
    description:
      "A collection of weekly computer security lab reports documenting practical SEED Labs exercises and solutions.",
    categories: ["Course projects", "Systems"],
    tools: ["Security", "SEED Labs", "Linux"],
    status: "Completed",
  },
  {
    title: "PiggyPal - Finance UI Concept",
    eyebrow: "Human-Computer Interaction",
    icon: <MonitorSmartphone className="h-5 w-5" />,
    description:
      "A human-computer interaction project exploring a novel finance interface for mobile, web, or another approved medium.",
    categories: ["Course projects"],
    tools: ["HCI", "Finance", "UI research", "Prototyping"],
    status: "In progress",
  },
  {
    title: "Atlas - Project Management System",
    eyebrow: "Database and Web Applications Laboratory",
    icon: <Database className="h-5 w-5" />,
    description:
      "A collaborative project-management web app with projects, tasks, roles, forums, notifications, search, and administration.",
    categories: ["Course projects", "Web apps", "AI and data"],
    tools: ["Web app", "Database", "RBAC", "Search", "Notifications"],
    status: "Completed",
  },
  {
    title: "Serial Port File Transfer Protocol",
    eyebrow: "Computer Networks",
    icon: <Network className="h-5 w-5" />,
    description:
      "A link-layer and application protocol for reliable file transfer over a virtual serial port with disconnections and noise.",
    categories: ["Course projects", "Systems"],
    tools: ["C", "Serial protocol", "Link layer", "Makefile"],
    status: "Completed",
  },
  {
    title: "JVM Compiler",
    eyebrow: "Compilers",
    icon: <Cpu className="h-5 w-5" />,
    description:
      "A compiler project extending a Java-like language frontend and generating JVM instructions through Jasmin.",
    categories: ["Course projects", "Systems"],
    tools: ["Compiler design", "JVM", "Jasmin", "Testing"],
    status: "In progress",
  },
  {
    title: "Prairie Schooner Survival Game",
    eyebrow: "Computer Graphics",
    icon: <Gamepad2 className="h-5 w-5" />,
    description:
      "A WebCGF 3D survival game with a prairie scene, wagon controls, terrain, lighting, textures, animations, shaders, and collectables.",
    categories: ["Course projects", "Games and graphics"],
    tools: ["WebCGF", "3D modeling", "Shaders", "Animation", "Game mechanics"],
    status: "In progress",
  },
  {
    title: "Matrix Multiplication Performance Study",
    eyebrow: "Parallel and Distributed Computing",
    icon: <Cpu className="h-5 w-5" />,
    description:
      "A performance evaluation of matrix multiplication across languages, cache-aware versions, blocking, OpenMP, perf counters, and speedup analysis.",
    categories: ["Course projects", "Systems", "AI and data"],
    tools: ["C++", "OpenMP", "perf", "Benchmarking", "GFlop/s"],
    status: "Completed",
  },
  {
    title: "TCP Chat System with AI Rooms",
    eyebrow: "Parallel and Distributed Computing",
    icon: <Bot className="h-5 w-5" />,
    description:
      "A Java client-server chat system with authentication, rooms, live timelines, and special rooms connected to a local LLM.",
    categories: ["Course projects", "Systems", "AI and data"],
    tools: ["Java", "TCP", "Concurrency", "Ollama", "Client-server"],
    status: "In progress",
  },
  {
    title: "Ricochet Robots Search Solver",
    eyebrow: "Artificial Intelligence",
    icon: <Bot className="h-5 w-5" />,
    description:
      "A solitaire-style puzzle solver comparing uninformed and heuristic search methods with performance metrics and an interactive UI.",
    categories: ["Course projects", "AI and data", "Games and graphics"],
    tools: ["Search algorithms", "A*", "Greedy search", "Heuristics", "UI"],
    status: "Completed",
  },
  {
    title: "Machine Learning POC Web App",
    eyebrow: "Artificial Intelligence",
    icon: <GraduationCap className="h-5 w-5" />,
    description:
      "A startup-style machine learning proof of concept using artificial data, a model, and a small web app to demonstrate business value.",
    categories: ["Course projects", "AI and data"],
    tools: ["Machine learning", "POC", "Web app", "Presentation"],
    status: "In progress",
  },
];

const principles = [
  "Course work, research, leadership, and practical software projects in one place",
  "Short summaries first, details later",
  "Filters that let different kinds of work stand out",
];

export default function ProjectsPage(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

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
          <div className="grid gap-6 lg:items-end">
            <PageIntro eyebrow="Selected work" title="Projects">
              A collection of projects I’ve worked on throughout my Informatics Engineering journey, from coursework to personal and extracurricular work.
            </PageIntro>
          </div>
        </motion.section>

        <SectionDivider title="Library" />

        <section className="w-full">
          <div className="glass-card flex flex-wrap gap-2 p-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-pill ${isActive ? "filter-pill-active" : ""}`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-secondary">
            Showing {filteredProjects.length} of {projects.length} projects.
          </p>
        </section>

        <section className="grid w-full gap-4">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.18) }}
              className="glass-card group grid gap-5 p-5 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[auto_1fr_auto]"
            >
              <div className="icon-badge h-12 w-12">
                {project.icon}
              </div>

              <div>
                <p className="card-eyebrow">
                  {project.eyebrow}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-primary font-display">
                  {project.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="tag-chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 md:flex-col md:items-end">
                <span className="status-pill">
                  {project.status}
                </span>
                {project.githubHref && (
                  <Link
                    href={project.githubHref}
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
