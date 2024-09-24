"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { Github, Coffee, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "READMEaker",
    description:
      "A README editor/generator. This is an open-source project that helps developers create README files with assistance of ready made section templates and AI.",
    demo: "https://readme.works/",
    github: "https://github.com/machage9603/readmeaker",
    image: "/readmeaker.png?height=400&width=600",
  },
  {
    id: 2,
    title: "Connect 4",
    description:
      "Connect 4 game with two players. This classic game implementation allows two players to compete against each other in a strategic battle to connect four of their pieces in a row.",
    demo: "https://react-project-rouge-kappa.vercel.app/",
    github: "https://github.com/machage9603/connect-four",
    image: "/connectfour.png?height=400&width=600",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio website. Built with Next.js, TypeScript, and Framer Motion.",
    demo: "https://mikemachage.tech",
    github: "https://github.com/machage9603/personal-website",
    image: "/portfolio.png?height=400&width=600",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <Navbar />
      <div className="w-full max-w-6xl flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          My Recent Projects
        </h1>
        <div ref={carouselRef} className="relative overflow-hidden w-full mb-8">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <motion.div
                  className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[350px] group"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }} // Zoom on load
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  {/* Overlay with text (always visible, with smooth transition on load) */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center text-center p-4">
                    <h2 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h2>
                    <p className="mb-3 text-sm text-gray-200 max-h-[100px]">
                      {project.description}
                    </p>
                    <div className="flex justify-center space-x-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-sm transition-colors duration-300"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r-md"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l-md"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-24 mb-8">
          <a
            href="https://github.com/sponsors/machage9603"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition-colors duration-300 text-sm md:text-base"
          >
            <Github className="w-5 h-5 mr-2" />
            Sponsor on GitHub
          </a>
          <a
            href="https://www.buymeacoffee.com/machage"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full transition-colors duration-300 text-sm md:text-base"
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
