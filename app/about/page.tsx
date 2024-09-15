'use client'

import { Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        ></motion.div>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          Hi, I am Mike Machage, a Software Engineer with a passion for building scalable and efficient web applications.
        </p>
        <p className="mb-4">
          I will help you think through your business idea and make it a reality in less than 90 days.My expertise lies in full-stack development, with a focus on JavaScript technologies like Next.js, React, Node.js, and TypeScript. I am always eager to learn and adapt to new technologies and methodologies.
        </p>
        <motion.a
          href="/mikemachageresume.pdf"
          download
          className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5 mr-2" />
          Download My Resume
        </motion.a>
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mt-8"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  )
}