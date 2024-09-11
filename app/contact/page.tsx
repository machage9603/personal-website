'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [theme, setTheme] = useState('dark')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or a service like Formspree
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
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
          <motion.div
            className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          ></motion.div>
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
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