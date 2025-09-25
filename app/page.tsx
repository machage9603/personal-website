"use client";

import React, { useState, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
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

const skills = ["Next.js", "React", "TypeScript", "Node.js"];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono flex flex-col">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 px-6 py-16 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            
            {/* Left Column: Main Content */}
            <div className={`lg:col-span-2 space-y-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              
              {/* Status */}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">available for work</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                  <span className="text-gray-100">hi, i'm</span>
                  <br />
                  <span className="text-green-400 font-medium">mike machage</span>
                </h1>
                
                {/* Dynamic Role */}
                <div className="text-xl md:text-2xl text-gray-400 font-light h-8 flex items-center">
                  <span className="mr-2">i build with</span>
                  <span className="text-green-400 font-medium min-w-[100px] transition-opacity duration-300">
                    {skills[currentSkill]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
                full-stack developer passionate about creating clean, efficient web applications. 
                i focus on modern javascript technologies and user-centered design.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-green-400 text-gray-950 px-8 py-3 font-medium hover:bg-green-300 transition-all duration-200 flex items-center justify-center">
                  view work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-gray-700 text-gray-300 px-8 py-3 font-medium hover:border-gray-600 hover:text-gray-100 transition-all duration-200 flex items-center justify-center">
                  <Download className="mr-2 w-4 h-4" />
                  resume
                </button>
              </div>
            </div>

            {/* Right Column: Minimal Profile */}
            <div className={`lg:col-span-1 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              
              {/* Profile Image */}
              <div className="space-y-8">
                <div className="w-48 h-48 mx-auto lg:mx-0 border border-gray-800 overflow-hidden">
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <div className="w-20 h-20 border border-green-400 flex items-center justify-center text-green-400 text-xl font-medium">
                      MM
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">tech stack</h3>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`text-sm transition-colors duration-300 ${
                          currentSkill === index ? 'text-green-400' : 'text-gray-400'
                        }`}
                      >
                        → {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">connect</h3>
                  <div className="space-y-2">
                    {socialIcons.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                      >
                        <social.icon size={16} />
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