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
          creating scalable, efficient, and user-centric web applications. I
          specialize in full-stack development, particularly in JavaScript
          technologies such as Next.js, React, Node.js, and TypeScript.
        </p>
        <p className="mb-4">
          Whether you are a startup looking to bring your business idea to life
          or an established company aiming to enhance your digital presence, I
          am here to help turn your vision into a reality. Let us collaborate to
          build solutions that not only meet your needs today but scale for
          tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <motion.a
            href="/machageCV.pdf"
            download
            className="flex items-center justify-center px-6 py-3 text-current border border-current rounded-full transition-all duration-300 hover:outline hover:outline-2 hover:outline-blue-300 focus:outline focus:outline-2 focus:outline-blue-600 active:outline active:outline-2 active:outline-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            My CV
          </motion.a>
          <motion.a
            href="/certificates.pdf"
            download
            className="flex items-center justify-center px-6 py-3 text-current border border-current rounded-full transition-all duration-300 hover:outline hover:outline-2 hover:outline-blue-300 focus:outline focus:outline-2 focus:outline-blue-600 active:outline active:outline-2 active:outline-blue-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Certifications
          </motion.a>
        </div>
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
