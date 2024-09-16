"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Github, Coffee } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1",
    demo: "https://demo1.com",
    github: "https://github.com/project1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
    demo: "https://demo2.com",
    github: "https://github.com/project2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for Project 3",
    demo: "https://demo3.com",
    github: "https://github.com/project3",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, []);

  const startCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
  };

  const stopCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <Navbar />
      <div className="w-full max-w-2xl flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          My Projects
        </h1>
        <div
          ref={carouselRef}
          className="relative overflow-hidden w-full mb-8"
          onMouseEnter={stopCarousel}
          onMouseLeave={startCarousel}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-sm md:text-base"
                    >
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 text-sm md:text-base"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://github.com/sponsors/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition-colors duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            Sponsor on GitHub
          </a>
          <a
            href="https://www.buymeacoffee.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full transition-colors duration-300"
          >
            <Coffee className="w-5 h-5 mr-2" />
            Buy Me a Coffee
          </a>
        </div>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mt-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
}
