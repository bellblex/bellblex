"use client";

import React from "react";
import { Navigation } from "../components/nav";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Navigation />
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        <h1 className="page-title mb-6">Undergoing Maintenance</h1>
        <p className="body-text max-w-md mx-auto">
          This page is currently being built. Check back soon.
        </p>
      </div>
    </div>
  );
}
