"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Montserrat } from "next/font/google";
import Link from 'next/link';

const skills = ["Next.js", "React", "TypeScript", "Node.js"];
const montserrat = Montserrat({ subsets: ["latin"] });

// Updated Navbar component to match your actual code with full width
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  if (!mounted) return null;

  return (
    <nav className={`w-full bg-gray-950 border-b border-gray-900 font-mono ${montserrat.className} fixed top-0 left-0 z-30`}>
      <div className="px-6 lg:px-12 xl:px-16 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/" 
            className="text-lg font-medium text-gray-100 hover:text-green-400 transition-colors duration-200"
          >
            mike<span className="text-green-400">@</span>portfolio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm transition-colors duration-200 relative group text-gray-400 hover:text-gray-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
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
                  <a
                    href={href}
                    className="block text-sm transition-colors duration-200 text-gray-400 hover:text-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
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