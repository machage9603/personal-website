"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { PhoneCall, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <Navbar />
      <div className="w-full max-w-md flex flex-col items-center">
        <motion.div
          className="w-full h-px bg-[#2B2B2B] dark:bg-white mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Contact Me
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          <a
            href="tel:+254707800048"
            className="flex items-center justify-center space-x-2 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full sm:w-auto"
          >
            <PhoneCall className="w-6 h-6" />
            <span className="text-lg">+254707800048</span>
          </a>
          <a
            href="mailto:mikemachage@gmail.com"
            className="flex items-center justify-center space-x-2 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 w-full sm:w-auto"
          >
            <Mail className="w-6 h-6" />
            <span className="text-lg">mikemachage@gmail</span>
          </a>
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
