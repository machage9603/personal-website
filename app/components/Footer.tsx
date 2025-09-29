"use client";

import { Github, Twitter, Linkedin, Mail, Heart, Coffee, LucideIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import { JSX } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/machage9603",
    label: "github",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/sermachage",
    label: "twitter",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mikemachage/",
    label: "linkedin",
  },
  {
    icon: Mail,
    href: "mailto:mikemachage@gmail.com",
    label: "email",
  },
];

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={`bg-gray-950 border-t border-gray-900 font-mono ${montserrat.className}`}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left: Brand */}
          <div className="space-y-4">
            <div className="text-lg font-medium text-gray-100">
              mike<span className="text-green-400">@</span>portfolio
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              full-stack developer crafting digital experiences with clean code and modern technologies.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm text-gray-300 font-medium">quick links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-gray-400 hover:text-gray-100 transition-colors duration-200">
                about
              </a>
              <a href="/projects" className="block text-sm text-gray-400 hover:text-gray-100 transition-colors duration-200">
                work
              </a>
              <a href="/blog" className="block text-sm text-gray-400 hover:text-gray-100 transition-colors duration-200">
                blog
              </a>
              <a href="/contact" className="block text-sm text-gray-400 hover:text-gray-100 transition-colors duration-200">
                contact
              </a>
            </div>
          </div>

          {/* Right: Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-sm text-gray-300 font-medium">connect</h3>
            <div className="space-y-2">
              {socialLinks.map((social: SocialLink) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm text-gray-400 hover:text-green-400 transition-colors duration-200"
                >
                  <social.icon size={16} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            © {currentYear} mike machage. all rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>made with</span>
            <Heart size={14} className="text-green-400" />
            <span>&</span>
            <Coffee size={14} className="text-green-400" />
            <span>in nairobi</span>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-500">server status: online</span>
        </div>
      </div>
    </footer>
  );
}