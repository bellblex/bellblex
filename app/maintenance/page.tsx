"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";


export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col items-center justify-center">
      {/* Include Navigation */}
      <Navigation />

      {/* Title */}
      <h1 className="text-5xl font-bold text-primary text-center mb-8 animate-fade-in-up px-4">
        Undergoing Maintenance...
      </h1>

      {/* Description */}
      <p className="text-sm text-base-content/70 mb-12 text-center px-4 animate-fade-in-up">
        This page is currently undergoing scheduled maintenance. Thank you for
        your patience. Feel free to take a look at my{" "}
        <Link
          href="/Resume.pdf"
          download
          className="underline hover:text-primary"
        >
          resume
        </Link>{" "}
        as you wait.
      </p>
    </div>
  );
}
