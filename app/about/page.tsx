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
          Hi, I'm Katherine Oelsner, a Senior Software Engineer with a passion for building scalable and efficient web applications. With over 8 years of experience in the tech industry, I've had the opportunity to work on a wide range of projects, from early-stage startups to large enterprise systems.
        </p>
        <p className="mb-4">
          My expertise lies in full-stack development, with a focus on JavaScript technologies like React, Node.js, and TypeScript. I'm also well-versed in cloud technologies, particularly AWS, and I'm always eager to learn and adapt to new technologies and methodologies.
        </p>
        <p className="mb-8">
          When I'm not coding, you can find me exploring hiking trails, reading sci-fi novels, or experimenting with new recipes in the kitchen. I'm always open to new opportunities and collaborations, so feel free to reach out!
        </p>
        <motion.a
          href="/katherine-oelsner-resume.pdf"
          download
          className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
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