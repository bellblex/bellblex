"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#000033] via-[#301934] to-[#0e3d31] flex flex-col items-center justify-center">
      <Navigation />

      <h1 className="text-5xl font-bold text-white mb-8 animate-fade-in ">
        Undergoing Maintenance...
      </h1>

      <p className="text-sm text-zinc-400 mb-12 text-center px-4 animate-fade-in ">
        This page is currently undergoing scheduled maintenance. Thank you for
        your patience. Feel free to take a look at my{" "}
        <Link
          href="/Resume.pdf"
          download
          className="underline hover:text-zinc-300"
        >
          resume
        </Link>{" "}
        as you wait.
      </p>
    </div>
  );
}
