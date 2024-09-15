'use client'

import Image from 'next/image'
import { Github, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <div className="w-full max-w-md flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        ></motion.div>
        <Image
          src="/dp.jpeg"
          alt="Mike Machage"
          width={150}
          height={150}
          className="rounded-full mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">MIKE MACHAGE</h1>
        <div className="w-16 h-px bg-[#2B2B2B] dark:bg-white my-4"></div>
        <h2 className="text-lg mb-8">SOFTWARE ENGINEER</h2>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="flex space-x-6">
          <a href="https://github.com/machage9603" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/sermachage" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mike-machage/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}