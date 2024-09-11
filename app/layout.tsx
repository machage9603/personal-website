'use client'

import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'
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
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#F4EDE4] dark:bg-[#2D3748] text-[#2B2B2B] dark:text-white transition-colors duration-300`}>
        <header className="w-full p-4">
          <nav className="max-w-2xl mx-auto">
            <ul className="flex justify-between items-center">
              <li><Link href="/" className="hover:underline">HOME</Link></li>
              <li><Link href="/about" className="hover:underline">ABOUT</Link></li>
              <li><Link href="/projects" className="hover:underline">PROJECTS</Link></li>
              <li><Link href="/contact" className="hover:underline">CONTACT</Link></li>
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
        </header>
        <main className="flex-grow flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}