'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon, Github, Twitter, Linkedin } from 'lucide-react'
import { Inter } from 'next/font/google'
import '@/app/ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
    <html lang="en" className={theme}>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-[#2D3748] text-black dark:text-white transition-colors duration-300`}>
        <div className="flex flex-col min-h-screen">
          <header className="p-4">
            <nav className="max-w-4xl mx-auto">
              <ul className="flex justify-center space-x-4">
                <li>
                  <Link href="/" className="px-4 py-2 rounded-full border border-black dark:border-white text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105">HOME</Link>
                </li>
                <li>
                  <Link href="/about" className="px-4 py-2 rounded-full border border-black dark:border-white text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105">ABOUT</Link>
                </li>
                <li>
                  <Link href="/projects" className="px-4 py-2 rounded-full border border-black dark:border-white text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105">PROJECTS</Link>
                </li>
                <li>
                  <Link href="/contact" className="px-4 py-2 rounded-full border border-black dark:border-white text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="flex-grow flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md flex flex-col items-center">
              <div className="w-full h-px bg-black dark:bg-white mb-8"></div>
              {children}
              <div className="w-full h-px bg-black dark:bg-white mt-8 mb-8"></div>
              <div className="flex space-x-6">
                <a href="#" aria-label="GitHub" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Twitter" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </main>

          <footer className="p-4 text-center">
            <p>&copy; 2023 Katherine Oelsner. All Rights Reserved.</p>
          </footer>

          <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </body>
    </html>
  )
}