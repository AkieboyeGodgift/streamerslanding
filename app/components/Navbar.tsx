"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  logo: string;
  title: string;
}

export default function Navbar({ logo, title }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const navLinks = ["About", "Live", "Sponsors", "Streams", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`bg-gray-900 text-white rounded-4xl m-2 p-3 shadow-lg fixed left-2 right-2 transition-transform duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-28"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold">{title}</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="relative flex-shrink-0 w-6 h-6 p-0 m-0 flex items-center justify-center overflow-hidden"
          >
            {/* top line */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 w-4 h-[2px] rounded bg-white transition-transform duration-200 transform origin-center ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              } ${isOpen ? "bg-cyan-400" : ""}`}
            />
            {/* middle line */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 w-4 h-[2px] rounded bg-white transition-opacity duration-150 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* bottom line */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 w-4 h-[2px] rounded bg-white transition-transform duration-200 transform origin-center ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              } ${isOpen ? "bg-cyan-400" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
