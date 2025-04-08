"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "BLOG"},
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  if (!mounted) return null;

  const menuVariants = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    closed: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <nav className="w-full max-w-2xl mb-12 px-4 relative">
      <div className="flex justify-between items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`group relative px-4 py-2 text-gray-700 dark:text-gray-200 transition-all duration-200
                  ${pathname === href ? "text-blue-500 dark:text-blue-400" : ""}`}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 dark:bg-blue-500 transition-transform duration-300 origin-left
                    ${pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 hover:scale-110 transition-transform duration-200 focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <motion.div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden fixed inset-0 m-4 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-lg shadow-lg z-50`}
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 hover:scale-110 transition-transform duration-200 focus:ring-2 focus:ring-blue-500"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-4">
          {navItems.map(({ href, label }) => (
            <li key={href} className="w-full">
              <Link
                href={href}
                className={`group relative block text-center px-6 py-2 text-gray-700 dark:text-gray-200 transition-all duration-200
                  ${pathname === href ? "text-blue-500 dark:text-blue-400" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className={`absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-blue-400 dark:bg-blue-500 transition-transform duration-300 origin-center
                    ${pathname === href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}