'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sun, Moon, Github, Twitter, Linkedin } from 'lucide-react'

export default function Home() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EDE4] dark:bg-[#2D3748] text-[#2B2B2B] dark:text-white transition-colors duration-300">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md flex flex-col items-center">
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
          <div className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"></div>
          <Image
            src="/katherine-oelsner.jpg"
            alt="Katherine Oelsner"
            width={150}
            height={150}
            className="rounded-full mb-6"
          />
          <h1 className="text-3xl font-bold mb-2">KATHERINE OELSNER</h1>
          <div className="w-16 h-px bg-[#2B2B2B] dark:bg-white my-4"></div>
          <h2 className="text-lg mb-8">SENIOR SOFTWARE ENGINEER</h2>
          <div className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"></div>
          <div className="flex space-x-6">
            <a href="https://github.com/katherineoelsner" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/katherineoelsner" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/katherineoelsner" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}