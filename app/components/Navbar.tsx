"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="w-full max-w-2xl mb-8">
      <ul className="flex justify-between items-center">
        {[
          { href: "/", label: "HOME" },
          { href: "/about", label: "ABOUT" },
          { href: "/projects", label: "PROJECTS" },
          { href: "/contact", label: "CONTACT" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                pathname === href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary focus:bg-secondary"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-secondary-hover focus:bg-secondary-hover transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}
