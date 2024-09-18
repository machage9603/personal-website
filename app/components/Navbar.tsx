"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="w-full max-w-2xl mb-8">
      <div className="flex justify-end items-center lg:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-gray-200 dark:bg-secondary hover:bg-gray-300 dark:hover:bg-secondary-hover focus:bg-gray-300 dark:focus:bg-secondary-hover transition-colors duration-300 hover:outline hover:outline-2 hover:outline-blue-500 focus:outline focus:outline-2 focus:outline-blue-500"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row justify-between items-center mt-4 lg:mt-0 space-y-2 lg:space-y-0`}
      >
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`px-4 py-2 rounded-full transition-colors duration-300 block ${
                pathname === href
                  ? "bg-primary text-primary-foreground"
                  : "hover:outline hover:outline-2 hover:outline-blue-500 focus:outline focus:outline-2 focus:outline-blue-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
