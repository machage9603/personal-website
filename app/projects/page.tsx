
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

// Added category property to each project
const projects = [
  {
    id: 1,
    title: "File Manager",
    description: "A robust backend API for a file management system. This project implements user authentication, file upload/download functionality, permissions management, and image thumbnail generation.",
    demo: "null",
    github: "https://github.com/machage9603/files_manager",
    image: "/files.png",
    category: "Backend"
  },
  {
    id: 2,
    title: "KaziPro",
    description: "A project management application. This platform allows teams to collaborate, manage projects, and track tasks efficiently.",
    demo: "null",
    github: null,
    image: "/kazipro.png",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "OmariShot",
    description: "A photographer's portfolio landing page.",
    demo: "https://omarishot.vercel.app/",
    github: null,
    image: "/tresses.png",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Tresses",
    description: "A full fledged eyewear E-commerce store with payment intergration.",
    demo: "null",
    github: null,
    image: "/adornment.png",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "READMEaker",
    description:
      "A README editor/generator. This project helps developers create README files with assistance of ready made section templates and AI.",
    demo: "https://readme.works/",
    github: null,
    image: "/readmeaker.png",
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Connect 4",
    description:
      "My version of the connect 4 game with two players. This classic game implementation allows two players to compete against each other in a strategic battle to connect four of their pieces in a row.",
    demo: "https://react-project-rouge-kappa.vercel.app/",
    github: null,
    image: "/connectfour.png",
    category: "Frontend"
  },
];

const techStack = [
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "CSS3",
    url: "https://www.w3schools.com/css/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "HTML5",
    url: "https://www.w3.org/html/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    url: "https://www.python.org",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "Linux",
    url: "https://www.linux.org",
    icon: "https://seeklogo.com/images/K/kali-linux-logo-93027C57BD-seeklogo.com.png",
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    icon: "https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp",
  },
  {
    name: "Flutter",
    url: "https://flutter.dev/",
    icon: "https://cdn5.vectorstock.com/i/1000x1000/19/34/flutter-framework-logo-emblem-vector-44491934.jpg",
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevProject();
    } else if (e.key === 'ArrowRight') {
      nextProject();
    }
  };

  // Category badge color mapping
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Frontend":
        return "bg-blue-500";
      case "Backend":
        return "bg-green-500";
      case "Full Stack":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
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
          Recent Projects
        </h1>
        <div
          className="relative overflow-hidden w-full mb-8"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-roledescription="carousel"
          aria-label="Projects showcase"
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <motion.div
                  className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[350px] md:h-[450px] group ${index === currentProject ? 'ring-2 ring-blue-500' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === currentProject}
                    />
                  </div>
                  {/* Reduced opacity from 70% to 50% to make images more visible */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center text-center p-4">
                    {/* Category badge */}
                    <span className={`absolute top-4 right-4 px-2 py-1 rounded text-xs text-white font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>

                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                      {project.title}
                    </h2>

                    {/* Improved mobile text visibility with better height constraints */}
                    <div className="mb-4 text-sm md:text-base text-white overflow-hidden relative w-full">
                      {/* Mobile view - shorter description */}
                      <p className="md:hidden line-clamp-3">
                        {project.description}
                      </p>

                      {/* Desktop view - taller description with fade */}
                      <p className="hidden md:block h-24">
                        {project.description}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent md:block hidden"></div>
                    </div>

                    <div className="flex justify-center space-x-2 mt-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors duration-300"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        Live Demo
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors duration-300"
                          aria-label={`View source code of ${project.title} on GitHub`}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination indicators */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  index === currentProject ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
                aria-current={index === currentProject ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mt-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {techStack.map((tech, index) => (
              <motion.a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
                aria-label={`Learn more about ${tech.name}`}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image
                    src={tech.icon}
                    alt=""
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="48px"
                  />
                </div>
                {/* Always show tech name on mobile for better visibility */}
                <span className="mt-1 text-xs md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-200">
                  {tech.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}