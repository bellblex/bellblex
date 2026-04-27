"use client";

import React from "react";
import { Navigation } from "../components/nav";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Navigation />
      <div className="text-center px-6">
        <h1 className="page-title mb-6">Undergoing Maintenance</h1>
        <p className="body-text max-w-md mx-auto">
          This page is currently being built. Check back soon.
        </p>
      </div>
    </div>
  );
}
