"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";


export default function MaintenancePage() {
  return (
    <div className="min-h-screen text-base-content flex flex-col items-center justify-center">
      {/* Include Navigation */}
      <Navigation />

      {/* Title */}
      <h1 className="text-5xl font-bold text-primary text-center mb-8 animate-fade-in-up px-4">
        Undergoing Maintenance...
      </h1>

      {/* Description */}
      <p className="text-sm text-base-content/70 mb-12 text-center px-4 animate-fade-in-up">
        This page is currently undergoing scheduled maintenance. Thank you for
        your patience.
      </p>
    </div>
  );
}
