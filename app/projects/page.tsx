"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OmariShot",
    description: "An photographer's portfolio.",
    demo: "https://#/",
    github: "https://github.com/machage9603/tresses",
    image: "/tresses.png?height=400&width=600",
  },
  {
    id: 1,
    title: "IN DEVELOPMENT",
    description: "An eyewear E-commerce store.",
    demo: "https://adornment-ke.vercel.app/",
    github: "https://github.com/machage9603/adornment-ke",
    image: "/adornment.png?height=400&width=600",
  },
  {
    id: 2,
    title: "READMEaker",
    description:
      "A README editor/generator. This is an open-source project that helps developers create README files with assistance of ready made section templates and AI.",
    demo: "https://readme.works/",
    github: "https://github.com/machage9603/readmeaker",
    image: "/readmeaker.png?height=400&width=600",
  },
  {
    id: 3,
    title: "Connect 4",
    description:
      "Connect 4 game with two players. This classic game implementation allows two players to compete against each other in a strategic battle to connect four of their pieces in a row.",
    demo: "https://react-project-rouge-kappa.vercel.app/",
    github: "https://github.com/machage9603/connect-four",
    image: "/connectfour.png?height=400&width=600",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "My personal portfolio website. Built with Next.js, TypeScript, and Framer Motion.",
    demo: "https://mikemachage.tech",
    github: "https://github.com/machage9603/personal-website",
    image: "/portfolio.png?height=400&width=600",
  },
];

const techStack = [
  {
    name: "Android",
    url: "https://developer.android.com",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
  },
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
    name: "Django",
    url: "https://www.djangoproject.com/",
    icon: "https://cdn.worldvectorlogo.com/logos/django.svg",
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
    name: "Dart",
    url: "https://dart.dev/",
    icon: "https://assets.stickpng.com/images/5847f289cef1014c0b5e486b.png",
  },
  {
    name: "Flutter",
    url: "https://flutter.dev/",
    icon: "https://cdn5.vectorstock.com/i/1000x1000/19/34/flutter-framework-logo-emblem-vector-44491934.jpg",
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
          Recent Projects
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
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
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
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mt-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
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
                <img src={tech.icon} alt={tech.name} width="40" height="40" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
