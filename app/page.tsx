"use client";

import React, { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { SiBluesky } from '@icons-pack/react-simple-icons';
import { Montserrat } from "next/font/google";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const socialIcons = [
  {
    icon: Github,
    href: "https://github.com/machage9603",
    label: "GitHub",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/sermachage",
    label: "Twitter",
  },
  {
    icon: SiBluesky,
    href: "https://bsky.app/profile/sermachage.bsky.social",
    label: "Bluesky",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mikemachage/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:machage@example.com",
    label: "Email",
  },
];

const skills = ["Golang",  "Rust", "TypeScript", ];

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // eslint-disable-next-line no-undef
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    // eslint-disable-next-line no-undef
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-950 text-gray-100 ${montserrat.className} font-mono flex flex-col`}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content - Now takes full available height */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12 xl:px-16">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-24 items-center min-h-[70vh]">
            
            {/* Left Column: Main Content - Takes more space */}
            <div className={`lg:col-span-3 space-y-8 lg:space-y-12 xl:space-y-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              
              {/* Status */}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Available for work</span>
              </div>

              {/* Main Heading - Larger text for full page */}
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
                  <span className="text-gray-100">Hi, I&apos;m</span>
                  <br />
                  <span className="text-green-400 font-medium">Mike Machage</span>
                </h1>
                
                {/* Dynamic Role */}
                <div className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light h-12 lg:h-16 flex items-center">
                  <span className="mr-2">I build with</span>
                  <span className="text-green-400 font-medium min-w-[120px] lg:min-w-[150px] transition-opacity duration-300">
                    {skills[currentSkill]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed font-light">
                full-stack developer passionate about creating clean, efficient web applications. 
                I focus on modern javascript technologies and user-centered design.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <button className="group bg-green-400 text-gray-950 px-10 py-4 lg:px-12 lg:py-5 font-medium hover:bg-green-300 transition-all duration-200 flex items-center justify-center text-base lg:text-lg">
                  view work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-gray-700 text-gray-300 px-10 py-4 lg:px-12 lg:py-5 font-medium hover:border-gray-600 hover:text-gray-100 transition-all duration-200 flex items-center justify-center text-base lg:text-lg">
                  <Download className="mr-2 w-5 h-5" />
                  resume
                </button>
              </div>
            </div>

            {/* Right Column: Profile - Larger and more prominent */}
            <div className={`lg:col-span-2 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              
              {/* Profile Image */}
              <div className="space-y-8 lg:space-y-12">
                <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 border border-gray-800 overflow-hidden">
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 border border-green-400 flex items-center justify-center text-green-400 text-2xl lg:text-3xl font-medium">
                      MM
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h3 className="text-base text-gray-500 uppercase tracking-wider">Tech stack</h3>
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`text-base lg:text-lg transition-colors duration-300 ${
                          currentSkill === index ? 'text-green-400' : 'text-gray-400'
                        }`}
                      >
                        → {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-base text-gray-500 uppercase tracking-wider">connect</h3>
                  <div className="space-y-3">
                    {socialIcons.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200 text-base"
                      >
                        <social.icon size={18} />
                        <span>{social.label.toLowerCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Minimal cursor dot */}
      <div className="fixed top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
    </div>
  );
}