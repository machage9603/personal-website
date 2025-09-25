"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/blog", label: "blog" },
    { href: "/projects", label: "work" },
    { href: "/contact", label: "contact" },
  ];

  if (!mounted) return null;

  return (
    <nav className="w-full bg-gray-950 border-b border-gray-900 font-mono">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
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
                  className={`text-sm transition-colors duration-200 relative group
                    ${pathname === href 
                      ? "text-green-400" 
                      : "text-gray-400 hover:text-gray-100"
                    }`}
                >
                  {pathname === href && (
                    <span className="absolute -left-2 text-green-400">→</span>
                  )}
                  {label}
                </Link>
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
                  <Link
                    href={href}
                    className={`block text-sm transition-colors duration-200
                      ${pathname === href 
                        ? "text-green-400" 
                        : "text-gray-400 hover:text-gray-100"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {pathname === href && "→ "}{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}