"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

// Move navItems outside component since it's static
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []); // Now the dependency array is correct

  return (
    <nav
      className={`w-full bg-gray-950 border-b border-gray-900 font-mono ${montserrat.className} fixed top-0 left-0 z-30`}
    >
      <div className="px-6 lg:px-12 xl:px-16 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="#home"
            scroll={true}
            className="text-lg font-medium text-gray-100 hover:text-green-400 transition-colors duration-200"
          >
            mike<span className="text-green-400">@</span>portfolio
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  scroll={true}
                  className={`text-sm transition-colors duration-200 relative group ${
                    activeSection === href.replace("#", "")
                      ? "text-green-400"
                      : "text-gray-400 hover:text-gray-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-900">
            <ul className="space-y-4">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    scroll={true}
                    className={`block text-sm transition-colors duration-200 ${
                      activeSection === href.replace("#", "")
                        ? "text-green-400"
                        : "text-gray-400 hover:text-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;