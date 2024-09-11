'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Project 1', description: 'Description for Project 1', demo: 'https://demo1.com', github: 'https://github.com/project1' },
  { id: 2, title: 'Project 2', description: 'Description for Project 2', demo: 'https://demo2.com', github: 'https://github.com/project2' },
  { id: 3, title: 'Project 3', description: 'Description for Project 3', demo: 'https://demo3.com', github: 'https://github.com/project3' },
]

export default function Projects() {
  const [theme, setTheme] = useState('dark')
  const [currentProject, setCurrentProject] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  useEffect(() => {
    startCarousel()
    return () => stopCarousel()
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const startCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 1000)
  }

  const stopCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EDE4] dark:bg-[#2D3748] text-[#2B2B2B] dark:text-white transition-colors duration-300">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl flex flex-col items-center">
          <nav className="mb-8 w-full">
            <ul className="flex justify-between items-center">
              <li>
                <Link href="/" className="hover:underline">HOME</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">ABOUT</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">PROJECTS</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">CONTACT</Link>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
              </li>
            </ul>
          </nav>
          <motion.div
            className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          ></motion.div>
          <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
          <div
            ref={carouselRef}
            className="relative overflow-hidden w-full"
            onMouseEnter={stopCarousel}
            onMouseLeave={startCarousel}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex justify-between">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                      >
                        Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            className="w-full h-px bg-[#2B2B2B] dark:bg-white mt-8"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </main>
    </div>
  )
}