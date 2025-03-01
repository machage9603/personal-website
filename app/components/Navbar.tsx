"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  if (!mounted) return null;

  // Animation variants for mobile menu
  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <nav className="w-full max-w-2xl mb-12 px-4">
      <div className="flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-full text-gray-700 dark:text-gray-200 transition-all duration-200 ${
                  pathname === href
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 focus:ring-2 focus:ring-blue-500"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "dark" ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden flex flex-col items-center gap-4 mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg`}
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`w-full text-center px-6 py-2 rounded-full text-gray-700 dark:text-gray-200 transition-all duration-200 ${
                pathname === href
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-500 focus:ring-2 focus:ring-blue-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
}