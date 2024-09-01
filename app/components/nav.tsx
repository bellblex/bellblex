"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navigation: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-200 ${
          showNav ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="container flex items-center justify-between p-4 md:p-6 mx-auto">
          <Link href="/" className="duration-200 text-zinc-300 hover:text-zinc-100">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex gap-4 md:gap-8">
            <Link
              href="/maintenance"
              className="text-sm duration-200 text-zinc-400 hover:text-zinc-100"
            >
              About me
            </Link>

            <Link
              href="/maintenance"
              className="text-sm duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-sm duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
