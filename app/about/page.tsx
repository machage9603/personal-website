"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <Navbar />
      <div className="w-full max-w-2xl flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          Hi, I am Mike Machage, a Software Engineer with a strong passion for
          creating scalable, efficient, and user-centric web applications.
        </p>
        <p className="mb-4">
          I specialize in full-stack development, particularly in JavaScript
          technologies such as Next.js, React, Node.js, and TypeScript. Whether
          you are a startup looking to bring your business idea to life or an
          established company aiming to enhance your digital presence, I am here
          to help turn your vision into a reality.
        </p>
        <p className="mb-4">
          Beyond my professional work, I am an active contributor to the
          open-source community, always eager to collaborate on meaningful
          projects. I am also deeply involved in both local and international
          tech communities, where I share knowledge, learn from others, and stay
          connected with the latest developments in the industry.
        </p>
        <p className="mb-4">
          With a focus on delivering high-quality, maintainable code, I am
          committed to staying up-to-date with the latest industry trends,
          continuously learning, and adapting to new technologies. Let us
          collaborate to build solutions that not only meet your needs today but
          scale for tomorrow.
        </p>
        <motion.a
          href="/machageCV.pdf"
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
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
}
